function minDeletionSize(strs: string[]): number {
    let countDelete = 0;

    strs.forEach((str, index) => {
        let isBigger = false;
        let isSmaller = false;

        for (let i = 0; i < str.length; i++) {
            if (!isSmaller && str[i] < str[i + 1]) {
                isBigger = true;
            } else if (!isBigger && str[i] > str[i + 1]) {
                isSmaller = true;
            } else {
                console.log(str);
                countDelete++;
                break;
            }
        }
    });

    return countDelete;
}
