## Features

1. **Empty String Support**  
   Returns `0` for an empty string.

2. **Sum of Numbers**  
   Handles single and multiple numbers separated by commas (`,`) or newlines (`\n`).

3. **Custom Delimiters**  
   Allows specifying a custom delimiter at the beginning of the string in the format:  
   `//[delimiter]\n[numbers]`  
   Example:  
   Input: `//;\n1;2` → Output: `3`.

4. **Negative Number Validation**  
   Throws an exception if negative numbers are present in the input. The exception message includes all negative numbers.  
   Example:  
   Input: `"1,-2,-3"` → Exception: `negative numbers not allowed -2,-3`.

---

## Installation

1. Clone this repository:
```bash
git clone https://github.com/maheshnnaik/string-calculator-tdd.git
```

2. Move to project folder
```bash
cd string-calculator-tdd
```

3. Install NodeJS from [here](https://nodejs.org/en/download/package-manager)

4. Install dependencies
```bash
npm install
```

5. Run the testcase
```bash
npm test
```