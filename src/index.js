class StringCalculator {

    static add(numbers) {
        if (numbers === "") {
            return 0;
        }
        let delimiters = /,|\n/;
        const nums = numbers.split(delimiters).map(Number);
        return nums.reduce((sum, num) => sum + num, 0);
    }
}

module.exports = StringCalculator;
