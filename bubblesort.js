let num = 2;

function bubbleSort(input) {
    // if (num === input.length - 1) {
    //     return input;
    // }

    while (num < input.length) {
        for (let i = 0; i < input.length - num; i++) {
            swap(i, input);
        }
    }
    return input;
}

function swap(currentIdx, input) {

    if (input[currentIdx] > input[currentIdx + 1]) {
        let temp = input[currentIdx + 1];
        input[currentIdx + 1] = input[currentIdx];
        input[currentIdx] = temp;
    } else {
        if (currentIdx === input.length - num) {
            num++;
        }
    }
}