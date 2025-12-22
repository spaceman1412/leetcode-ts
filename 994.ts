function minDeletionSize(strs: string[]): number {
    // O(n^2)
    const strsColumn = [];

    strs.map((str) => {
        for(let i = 0; i < str.length; i++) {
            if (strsColumn[i]) {
                strsColumn[i] = strsColumn[i] + str[i];
            } else {
                strsColumn[i] = str[i];
            }
        }
    })

    let countDelete = 0;

    strsColumn.forEach((str,index) => {
        for(let i = 0; i < str.length - 1; i++) {
            if (str[i] > str[i+1]) {
                countDelete++;
                break;
            } 
        }
    });

    return countDelete;
};