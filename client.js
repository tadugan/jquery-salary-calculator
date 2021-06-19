// TODO
// *** STRUCTURE ***
// * setup basics
// * Link scripts/css
// * Build html site structure
// * create add employee bar
//     * create input fields
//          * firstName, lastName, ID number, job title, annual salary
//      * create submit button
// * create employee salary chart (<table>??)
//      * create table
//      * create total salary counter
// *** LOGIC ***
// add employee bar input fields
//      * check if any input fields are empty
//          extra: alert user on DOM
//      * alert user if input fields are empty
//      * use submit button and input values to create employee object
//      * add employee object to employee array
// employee salary bar DOM
//      * when new employee is add, update the DOM
//      * also update Total MONTHLY salary
//      * add red background to monthly cost if exceeds $20,000
//          extra: target only the text
//      clear input fields
//      sort out delete button

// array to hold the employee objects created by the submit button
const employees = [];

$(document).ready(function() {
    console.log('booting up salary calculator');
    // listener for submit button
    $('#submitButton').on('click', addEmployee);
});

function addEmployee() {
    // check if any input fields are empty, stop function if true
    if (isInputFieldEmpty()) {
        console.log('input field is empty');
        return;
    }
    // capture input from inputFields
    let firstNameInput = $('#firstNameInput').val();
    let lastNameInput = $('#lastNameInput').val();
    let idInput = $('#idInput').val();
    let titleInput = $('#titleInput').val();
    let annualSalaryInput = Number($('#salaryInput').val());

    console.log(annualSalaryInput);

    // create new employee object
    const newEmployee = new Employee(firstNameInput, lastNameInput, idInput, titleInput, annualSalaryInput);
    // add new employee object to employees array
    employees.push(newEmployee);
    // update table on DOM with info from employees array
    // update total monthly on the DOM
    updateDomTable();
    // clear input fields
    clearInputs();
    // test employees array
}

// constructor to create new Employee objects
function Employee(firstName, lastName, id, title, annualSalary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.id = id;
    this.title = title;
    this.annualSalary = annualSalary;
}

// updates table and total
function updateDomTable() {
    //target table element
    let tableEl = $('#employeeTable');
    // empty table element
    tableEl.empty();
    // append header row info
    tableEl.append(`<tr>
    <th>First Name</th>
    <th>Last Name</th>
    <th>ID</th>
    <th>Title</th>
    <th>Annual Salary</th>
    <th>Delete?</th>
</tr>`);
    // append info to table
    for (let employee of employees) {
        console.log('each employee');
        tableEl.append(`<tr>
        <td>${employee.firstName}</td>
        <td>${employee.lastName}</td>
        <td>${employee.id}</td>
        <td>${employee.title}</td>
        <td>${employee.annualSalary}</td>
        <td><button class="deleteButton">Delete</button></td>
    </tr>`);
    }
    // update total monthly cost
    updateMonthlyCost();
}

// updates the monthly cost on the DOM
function updateMonthlyCost() {
    let totalCost = 0;
    let monthlyCost = 0;
    let monthlyCostDecimal = 0;
    // sums up total salaries of all employees
    for (let employee of employees) {
        totalCost += employee.annualSalary;
    }
    // determines monthly cost from annual cost
    monthlyCost = totalCost / 12;
    // makes readable cost (only to 2nd decimal)
    monthlyCostDecimal = monthlyCost.toFixed(2)
    // target total monthly element
    let costEl = $('#totalMonthlyOutput');
    // empty total cost element
    costEl.empty();
    // append updated total cost
    costEl.append(`<p id="totalMonthlyOutput">Total Monthly Cost: ${monthlyCostDecimal}</p>`);
    // checks if total exceeds $20000 per month, adds red background if so
    if (monthlyCost > 20000) {
        costEl.css('background-color', 'red');
    }
}


// function to check if any input field is empty
function isInputFieldEmpty() {
    switch (true) {
        case $('#firstNameInput').val().length < 1:
            return true;

        case $('#lastNameInput').val().length < 1:
            return true;

        case $('#idInput').val().length < 1:
            return true;

        case $('#titleInput').val().length < 1:
            return true;

        case $('#salaryInput').val().length < 1:
            return true;

        default:
            return false;
    }
}

// clears all input fields
function clearInputs() {
    $('#firstNameInput').val('');
    $('#lastNameInput').val('');
    $('#idInput').val('');
    $('#titleInput').val('');
    $('#salaryInput').val('');
}