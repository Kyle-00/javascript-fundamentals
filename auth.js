// login.js

/**
 * Checks if email and password match a predefined pair.
 * @param {string} email
 * @param {string} password
 * @returns {string} A message indicating login result.
 */
function loginUser(email, password) {
    const validEmail = "kyle@gmail.com";
    const validPassword = "123456";

    if (email === validEmail && password === validPassword) {
        return "Login successful! Welcome to class.";
    } else {
        return "Login failed. Incorrect email or password.";
    }
}
// // Quick tests
// console.log(loginUser("kyle@gmail.com", "123456"));   // success
// console.log(loginUser("jay@gmail.com", "12345"));       // fail


// Export so we can use it in another file or Node REPL
module.exports = { loginUser };