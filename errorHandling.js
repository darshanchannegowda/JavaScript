// Error = an object that is created to represent that an error has occurred 
// try{} = encloses code that might potentially cause an error
// catch{} = catch and handle any thrown error from try {}
// finally{} = {optionally}, always executes, used mostly for cleanups, e.g., close files, close connections, release resources

try {
    const dividend = parseFloat(window.prompt("Enter the dividend:"));
    const divisor = parseFloat(window.prompt("Enter the divisor:"));

    if (isNaN(dividend) || isNaN(divisor)) {
        throw new Error("Invalid input: Please enter valid numbers.");
    }
    if (divisor === 0) {
        throw new Error("Division by zero is not allowed.");
    }

    const result = dividend / divisor;
    console.log("Result:", result);
} catch (error) {
    console.error("An error occurred:", error.message);
} finally {
    console.log("Division attempt completed.");
}
