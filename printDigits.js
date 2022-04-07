const printDigits = num => {
    while (num >= 1) {
        console.log(num % 10);
        num = Math.floor(num / 10);
    }
}

//printDigits(1761);
printDigits(10258);