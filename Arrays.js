//Second Min Max
{
    let arr = new Array();
    for (let index = 0; index < 10; index++) {
        arr.push(Math.floor(Math.random() * 100) + 1);
    }
    let min = Number.MAX_SAFE_INTEGER;
    let secondMin = Number.MAX_SAFE_INTEGER;
    let max = Number.MIN_SAFE_INTEGER;
    let maxSecond = Number.MIN_SAFE_INTEGER;
    for (arrIndex of arr) {
        console.log(arrIndex);
        if (arrIndex < min) {
            secondMin = min;
            min = arrIndex;
        }
        else if (arrIndex < secondMin && arrIndex != min)
            secondMin = arrIndex;
        if (arrIndex > max) {
            secondMax = max;
            max = arrIndex;
        }
        else if (arrIndex > secondMax && arrIndex != max)
            secondMax = arrIndex;

    }

    console.log("Second Minimum: " + secondMin+" Second Maximum: " + secondMax);

}