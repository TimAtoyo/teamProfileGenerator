// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

const Employee = require('./Employee')
class Engineer extends Employee {

    constructor(_name, _id, _email, gitHubUser ){
        super(_name, _id, _email);
        this.github = gitHubUser;
    }

    getName(){
        return this.name
    }

    getGithub(){
        return this.github
    }

    getRole(){
        return "Engineer"
    }
}

module.exports = Engineer