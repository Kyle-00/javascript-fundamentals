// concatenation means joining of strings

  function generateReport(){
    const moduleName="Authentication";
    const status="stable";
    const testCoverage= 94;

    const report="Module:" + moduleName +" | Status: " + status +" | Coverage:" + testCoverage +"&"
    return report;
  }
console.log(generateReport())


function interpolation(){
    return`System notification:user: ${user.firstName}${user.lastName}
    Access Status:${user.isActive}`

}
const user={
    firstName:"Kyle",
    lastName:"Murimi",
    isActive: true
}
console.log(interpolation(user))

function welcomeBackUser(user) {
    return `Welcome back, ${user.firstName} ${user.lastName}
    Your account is ${user.isActive ? "active" : "inactive"}. 
    We're happy to see you again.`;
}

const currentUser = {
    firstName: "Kyle",
    lastName: "Murimi",
    isActive: true
};

console.log(welcomeBackUser(currentUser));