$(function readyNow() {

$("#submitForm").on('click', sumbitClick)
    // submit button
    // $('#favoriteFoods').on('click', '.deleteMe', deleteFunc);
    //delete button
})


// append to DOM
let employeeList = [
];
let totalAnnual = 0;
let totalMonthly = 0;


function setEmployee(){
    let empFirst = $("#employeeFirst").val();
    //     first name,
    let empLast = $("#employeeLast").val();
    //         last name,
    let empNumber = $("#employeeNumber").val();
    //             ID number,
    let empTitle = $("#employeeTitle").val();
    //                 job title,
    let empSalary = $("#employeeSalary").val();
    //                     annual salary_.}


    let employee = {
            firstKey: empFirst,
            lastKey: empLast,
            idKey: empNumber,
            titleKey: empTitle,
            salaryKey: empSalary,
    // declare employee as object
    };// end setEmployee 

    totalAnnual += +empSalary;
    totalMonthly = totalAnnual / 12;


    employeeList.push(employee)
    // add employee to list

    console.log(employee);
}

function sumbitClick(){
    setEmployee()

}

// delete button
//  need to sum salaries and divide by 12
// clear inputs

