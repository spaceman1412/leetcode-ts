// 1672. Richest Customer Wealth

function maximumWealth(accounts: number[][]): number {
    // Input: accounts = [[1,2,3],[3,2,1]]
    // Output: 6
    // Explanation:
    // 1st customer has wealth = 1 + 2 + 3 = 6
    // 2nd customer has wealth = 3 + 2 + 1 = 6
    // Both customers are considered the richest with a wealth of 6 each, so return 6.
    //...
    // Seem like find the highest sum with 2d array
    // 2d array we may need O(n2)

    let highest = accounts[0][0];

    accounts.forEach((element) => {
        const sum = element.reduce((previousValue, currentValue, index) => {
            previousValue = currentValue + previousValue;

            return previousValue;
        }, 0);

        if (sum > highest) highest = sum;
    });

    return highest;
}

let accounts = [
    [1, 2, 3],
    [3, 2, 1],
];
console.log(maximumWealth(accounts));
