const fs = require('fs');
const path = require('path');
const {makeVM} = require('./utils');

function getDirectories(srcPath) {
    return fs.readdirSync(srcPath).map(file => {
        return path.join(srcPath, file);
    }).filter(file => {
        return fs.statSync(file).isDirectory();
    });
}

const caseDirs = getDirectories(path.join(__dirname, 'cases'));
const outputDir = path.join(__dirname, 'testing');

beforeAll(() => {
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir);
    }
});

afterAll(() => {
    fs.rmSync(outputDir, {recursive: true});
});

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

        test(`Test case: ${path.basename(caseDir)}`, () => {
            // original code run time
            console.time('Original Code Execution Time');
            const originalCode = require(codePath);
            const originalResults = cases.map(v => originalCode(...v));
            console.timeEnd('Original Code Execution Time');

            // vm code run time
            const fn = makeVM(codePath, outputPath);
            console.time('VM Code Execution Time');
            const vmResults = cases.map(v => fn(...v));
            console.timeEnd('VM Code Execution Time');

            if (expected !== null && expected !== undefined && expected.length > 0) {
                expect(originalResults).toEqual(expected);
                expect(vmResults).toEqual(expected);
            }
        });
    }
});
