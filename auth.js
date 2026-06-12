
function loginUser(email, password) {
    const validEmail = "kyle@gmail.com";
    const validPassword = "123456";

    if (email === validEmail && password === validPassword) {
        return "Login successful! Welcome to class.";
    } else {
        return "Login failed. Incorrect email or password.";
    }
}

module.exports = { loginUser };