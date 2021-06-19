// TODO
// *** STRUCTURE ***
// setup basics
// Link scripts/css
// Build html site structure
// create add employee bar
//      create input fields
//          firstName, lastName, ID number, job title, annual salary
//      create submit button
// create employee salary chart (<table>??)
//      create table
//      create total salary counter
// *** LOGIC ***
// add employee bar input fields
//      check if any input fields are empty
//      alert user if input fields are empty
//      use submit button and input values to create employee object
//      add employee object to employee array
// employee salary bar DOM
//      when new employee is add, update the DOM
//      also update Total monthly salary
//      sort out delete button

// array to hold the employee objects created by the submit button
const employees = [];

$(document).ready(function() {
    console.log('booting up salary calculator');
    // listener for submit button
    $('#submitButton').on('click', addEmployee);
});

function addEmployee() {
    console.log('in addEmployee');
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
    updateDom();
    // clear input fields

    // test employees array
    console.log(employees);
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
function updateDom() {
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
</tr>`)
    // append info to table
    for (let employee of employees) {
        console.log('each employee');
        tableEl.append(`<tr>
        <td>${employee.firstName}</td>
        <td>${employee.lastName}</td>
        <td>${employee.id}</td>
        <td>${employee.title}</td>
        <td>${employee.annualSalary}</td>
        <td></td>
    </tr>`);
    }
    // update total monthly cost
}