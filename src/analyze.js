function analyzeArray(array) {
    let total = 0;
    let lengthi = 0;
    let mini;
    let maxi;
    array.forEach((element) => {
        total += element;
        if (lengthi == 0) {
            mini = element;
            maxi = element;
        }
        if (element < mini) {
            mini = element;
        }
        if (element > maxi) { maxi = element; }
        lengthi += 1;
    });
    const ave = total / lengthi;
    return {
        average: ave,
        min: mini,
        max: maxi,
        length: lengthi,
    };
}

export { analyzeArray };
