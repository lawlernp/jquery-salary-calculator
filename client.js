$(function readyNow() {
    console.log('hi from jq');

    $("#submitForm").on('click', setEmployee)
    // submit button
})

console.log('hi');

// append to DOM
let employeeList = [
]

function setEmployee(){

let eFirst = $("#employeeFirst").val()
//     first name,
let eLast = $("#employeeLast").val()
//         last name,
let eNumber = $("#employeeNumber").val()
//             ID number,
let eTitle = $("#employeeTitle").val()
//                 job title,
let eSalary = $("#employeeSalary").val()
//                     annual salary_.}

let employee = {
        firstKey: eFirst,
        lastKey: eLast,
        idKey: eNumber,
        titleKey: eTitle,
        salaryKey: eSalary,
}

employeeList.push(employee)
// _employee {

// employee.firstKey.push(eFirst);
// employee.lastKey.push(eLast);
// employee.idKey.push(eNumber);
// employee.titleKey.push(eTitle);
// employee.salaryKey.push(eSalary)

console.log(employee);
}

// delete button
//  need to sum salaries and divide by 12
// clear inputs

