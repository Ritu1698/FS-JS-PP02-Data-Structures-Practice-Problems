class EmployeePayrollData {

    constructor(...params) {
        this.id = params[0];
        this.name = params[1];
        this.salary = params[2];
        this.gender = params[3];
        this.startDate = params[4];
    }
    get name() { return this._name; }
    set name(name) {
        console.log("Setter getting called");
        let regName = RegExp('^[A-Z]{1}[a-z]{3,}$');
        if (regName.test(name)) {
            this._name = name;
        }
        else throw 'Incorrect name';
    }
    get id() { return this._id; }
    set id(id) {
        if (id > 0) {
            this._id = id;
        }
        else throw 'Incorrect id';
    }
    get salary() { return this._salary; }
    set salary(salary) {
        console.log("Setter getting called")
        if (salary > 0) {
            this._salary = salary;
        }
        else throw 'Incorrect salary';
    }
    get gender() { return this._gender; }
    set gender(gender) {
        if (gender == 'F' || gender == 'M') 
            this._gender = gender;
        else throw 'Incorrect gender';
    }
    get startDate() { return this._startDate; }
    set startDate(startDate) {
        if (startDate <= new Date)
            this._startDate = startDate;
        else throw "Incorrect Start Date! "

    }

    toString() {
        const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
        const empDate = this.startDate === undefined ? "undefined" : this.startDate.toLocaleDateString("en-US", options);
        return '\nID: ' + this.id + ' name: ' + this.name + ' salary: ' + this.salary + ' gender: ' + this.gender + ' startDate: ' + empDate;
    }

}
let employeePayrollData = new EmployeePayrollData(1, "Ritu", 30000, 'F', new Date());
console.log(employeePayrollData.toString());
try {
    employeePayrollData.name = "Ommm";
    employeePayrollData.id = 1;
    employeePayrollData.salary = 900000;
    employeePayrollData.startDate = '12/12/2020';
    employeePayrollData.gender = 'G';
    console.log(employeePayrollData.toString());
}
catch (e) {
    console.error(e);

}