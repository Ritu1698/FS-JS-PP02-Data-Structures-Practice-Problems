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
    //Without Sort
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

    console.log("Second Minimum: " + secondMin + " Second Maximum: " + secondMax);
    //With Sort
    arr.sort();
    console.log("Second Minimum: " + arr[1] + " Second Maximum: " + arr[arr.length - 2]);
}

//Prime factorization Of Number
{
    let number = Math.floor(Math.random() * 100) + 1;
    let arrOfPrimeFactors = new Array();
    console.log("Number: " + number);
    while (number % 2 == 0) {
        arrOfPrimeFactors.push(2);
        number /= 2;
    }
    for (let indexValue = 3; indexValue * indexValue <= number; indexValue += 2) {
        while (number % indexValue == 0) {
            arrOfPrimeFactors.push(indexValue)
            number = number / indexValue;
        }
    }
    if (number > 2) {
        arrOfPrimeFactors.push(number);
    }
    console.log("Dispaying Prime Factor Array Contents")
    for (arrOfPrimeFactor of arrOfPrimeFactors) {
        console.log(arrOfPrimeFactor);
    }
}

//Sum of three Integer adds to ZERO
{
    function findTriplets(arr, n) {
        let found = true;
        let countTriplets = 0;
        for (let index1 = 0; index1 < n - 2; index1++) {
            for (let index2 = index1 + 1; index2 < n - 1; index2++) {
                for (let index3 = index2 + 1; index3 < n; index3++) {
                    if (arr[index1] + arr[index2] + arr[index3] == 0) {
                        countTriplets++;
                        console.log("Triplet " + countTriplets + ": " + arr[index1] + " " + arr[index2] + " " + arr[index3]);
                        found = true;
                    }
                }
            }
        }

        if (found == false)
            console.log("Triplets Don't Exist!!!")

    }
    let arrtriplets = [0, -1, 2, -3, 1];
    findTriplets(arrtriplets, arrtriplets.length);
}

//Find Twice Repeated Digits & Sort Them
{
    let arr = new Array();
    for (let index=100; index >= 0; index--) {
        if(index>0 & index%11==0){
            arr.push(index);
        }
    }
    arr.sort();
    console.log("Sorted Values: ")
    for(arrVal of arr){
        console.log(arrVal);
    }
}