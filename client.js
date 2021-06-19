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

const employees = [];

$(document).ready(function() {
    console.log('booting up salary calculator');
    // listener for submit button
    $('#submitButton').on('click', addEmployee);
});

function addEmployee() {
    console.log('in addEmployee');
    // capture input from inputFields
    // create new employee object
    // add new employee object to employees array
    // update table on DOM with info from employees array
    // update total monthly on the DOM
    // clear input fields
}