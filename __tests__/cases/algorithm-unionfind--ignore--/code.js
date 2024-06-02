// 初始化并查集
function makeSet(size) {
    let parent = new Array(size);
    let rank = new Array(size);
    for (let i = 0; i < size; i++) {
        parent[i] = i;
        rank[i] = 0;
    }
    return { parent, rank };
}

// 查找操作，带路径压缩
function find(parent, x) {
    if (parent[x] !== x) {
        parent[x] = find(parent, parent[x]); // 路径压缩
    }
    return parent[x];
}

// 合并操作
function union(parent, rank, x, y) {
    const rootX = find(parent, x);
    const rootY = find(parent, y);
    if (rootX === rootY) {
        return false; // 已经是同一个集合，无需合并
    }

    // 根据排名来合并
    if (rank[rootX] > rank[rootY]) {
        parent[rootY] = rootX;
    } else if (rank[rootX] < rank[rootY]) {
        parent[rootX] = rootY;
    } else {
        parent[rootY] = rootX;
        rank[rootX] += 1;
    }
    return true;
}

function union_find() {
    const res = []
    // 测试用例
    const size = 10;
    let { parent, rank } = makeSet(size); // 初始化并查集

    // 执行一些合并操作
    union(parent, rank, 1, 2);
    union(parent, rank, 1, 3);
    union(parent, rank, 2, 4);
    union(parent, rank, 5, 6);
    union(parent, rank, 6, 7);

    // 测试查找操作
    res.push(find(parent, 1) === find(parent, 2)); // 应该输出 true，因为1和2在同一个集合
    res.push(find(parent, 1) === find(parent, 5)); // 应该输出 false，因为1和5不在同一个集合

    // 计算集合数量
    let count = 0;
    for (let i = 0; i < size; i++) {
        if (parent[i] === i) {
            count++;
        }
    }
    res.push(count);
    return res;
}

module.exports = union_find;

