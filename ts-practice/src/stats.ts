interface Stats {
    sum: number;
    average: number;
    max: number;
    min: number;
}

function calculateStats(numbers: number[]): Stats {
    if (numbers.length === 0) {
        return { sum: 0, average: 0, max: 0, min: 0 };
    }

    const sum = numbers.reduce((acc, num) => acc + num, 0);
    const average = sum / numbers.length;
    const max = Math.max(...numbers);
    const min = Math.min(...numbers);

    return { sum, average, max, min };
}

// テスト
const scores: number[] = [85, 90, 78, 92, 88];
const result = calculateStats(scores);

console.log(`合計: ${result.sum}`);
console.log(`平均: ${result.average}`);
console.log(`最大: ${result.max}`);
console.log(`最小: ${result.min}`);
