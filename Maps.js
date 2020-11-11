//Dice Roll Map
{
    let diceMap = new Map([[1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0]]);
    for (let index = 0; index < 10; index++) {
        //Dice Roll
        let dice = Math.floor(Math.random() * 6) + 1;
        let newVal = diceMap.get(dice);
        newVal++;
        //Updating
        diceMap.set(dice, newVal);
    }
    //Traversing
    for (let [key, val] of diceMap) {
        console.log("Dice Index " + key + " and it's value " + val);
    }
    //Finding Min Max
    min_key = 7;
    min_val = 7;
    max_key = 0;
    max_val = 0;
    for (let [key, val] of diceMap) {
        if (val <= min_val) {
            min_key = key;
            min_val = val;
        }
        if (val >= max_val) {
            max_key = key;
            max_val = val;
        }
    }
    console.log("Minimum Key Value Pair " + min_key + " " + min_val);
    console.log("Maximum Key Value Pair " + max_key + " " + max_val);
}

//Birth Month Map
{
    let birthMonthMap = new Map([[1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0], [7, 0], [8, 0], [9, 0], [10, 0], [11, 0], [12, 0]]);
    for (let index = 0; index < 50; index++) {
        let personBirthMonth = Math.floor(Math.random() * 12) + 1;
        let newVal = birthMonthMap.get(personBirthMonth);
        newVal++;
        //Updating
        birthMonthMap.set(personBirthMonth, newVal);
    }
    //Traversing
    for (let [key, val] of birthMonthMap) {
        console.log("On " + key + " month " + val + " people have their b'day!!");
    }
}