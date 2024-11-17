class StringCalculator {

    static add(numbers) {
        if (numbers === "") {
            return 0;
        }
        let delimiters = /,|\n/;
        if(numbers.startsWith('//')) {
            const numberParts = numbers.split('\n');
            delimiters = new RegExp(numberParts[0].slice(2));
            numbers = numberParts[1];
        }
        const nums = numbers.split(delimiters).map(Number);
        const negatives = nums.filter(num => num < 0);
        if (negatives.length > 0) {
            throw new Error(`negative numbers not allowed ${negatives.join(",")}`);
        }
        return nums.reduce((sum, num) => sum + num, 0);
    }
}

module.exports = StringCalculator;
