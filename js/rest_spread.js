function sum (...data) {
    /*let ans = 0;
    let i;
    for (i in data) {
        ans += data[i];
        console.log(typeof i);
    }
    return ans;*/

    // reduce() function =>
    return data.reduce((accum, item) => accum + item);
}

let sum1 = sum(3);
let sum2 = sum(3, 6);
let sum3 = sum(3, 2, 6);

console.log(sum1, sum2, sum3);