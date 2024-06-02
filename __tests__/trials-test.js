const fs = require('fs');
const path = require('path');
const { makeVM } = require('./utils');
const { performance } = require('perf_hooks');
const csvWriter = require('csv-writer');

// Function to get all directories in a given source path
function getDirectories(srcPath) {
    return fs.readdirSync(srcPath).map(file => {
        return path.join(srcPath, file);
    }).filter(file => {
        return fs.statSync(file).isDirectory();
    });
}

// Paths setup
const caseDirs = getDirectories(path.join(__dirname, 'cases'));
const outputDir = path.join(__dirname, 'testing');
const resultsFile = path.join(__dirname, 'results.csv');

// Number of experiments to run for each case
const NUM_EXPERIMENTS = 1000;

// Create CSV writer
const csv = csvWriter.createObjectCsvWriter({
    path: resultsFile,
    header: [
        { id: 'case', title: 'Case' },
        { id: 'experiment', title: 'Experiment' },
        { id: 'originalTime', title: 'Original Time (ms)' },
        { id: 'vmTime', title: 'VM Time (ms)' }
    ]
});

// Setup before all tests
beforeAll(() => {
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir);
    }
    if (fs.existsSync(resultsFile)) {
        fs.unlinkSync(resultsFile);
    }
});

// Cleanup after all tests
afterAll(() => {
    fs.rmSync(outputDir, { recursive: true });
});

let results = [];

caseDirs.forEach(caseDir => {
    if (caseDir.includes('--ignore--')) {
        return;
    }
    const codePath = path.join(caseDir, 'code.js');
    const casesPath = path.join(caseDir, 'cases.js');
    const expectPath = path.join(caseDir, 'expect.js');
    const outputPath = path.join(outputDir, path.basename(caseDir) + '.js');

    if (fs.existsSync(codePath) && fs.existsSync(expectPath)) {
        const cases = require(casesPath);
        const expected = require(expectPath);
        let fn;
        let originalCode;

        test(`Test case: ${path.basename(caseDir)}`, () => {
            // Compile VM code once
            originalCode = require(codePath);
            fn = makeVM(codePath, outputPath);

            for (let i = 0; i < NUM_EXPERIMENTS; i++) {
                // Measure original code execution time
                const originalStart = performance.now();
                const originalResults = cases.map(v => originalCode(...v));
                const originalEnd = performance.now();
                const originalTime = originalEnd - originalStart;

                // Measure VM code execution time
                const vmStart = performance.now();
                const vmResults = cases.map(v => fn(...v));
                const vmEnd = performance.now();
                const vmTime = vmEnd - vmStart;

                // Record results
                results.push({
                    case: path.basename(caseDir),
                    experiment: i + 1,
                    originalTime,
                    vmTime
                });

                // // Validate results
                // if (expected !== null && expected !== undefined && expected.length > 0) {
                //     expect(originalResults).toEqual(expected);
                //     expect(vmResults).toEqual(expected);
                // }
            }
        });
    }
});

// Write results to CSV after all tests
afterAll(async () => {
    await csv.writeRecords(results);
    console.log('Results written to CSV file');
});
