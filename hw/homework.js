let res = sumDigits(12345)
console.log(`sum digits of 12345 = ${res}`); // should print 15
res = luckyNumber(123871);
console.log(res ? 'lucky' : 'unlucky');
res = luckyNumber(124871);
console.log(res ? 'lucky' : 'unlucky');


function sumDigits(n) {
    let sum = 0
    const str = String(n)
    for (let i = 0; i < str.length; i++) {
        sum += Number(str[i])
    }
    return sum
}

function luckyNumber(num) {
    const str = String(num);
    let even = 0;
    let odd = 0;

    for (let i = 0; i < str.length; i++) {
        if (i % 2 === 0) {
            even += Number(str[i]);
        } else {
            odd += Number(str[i]);
        }
    }

    return even === odd;
}