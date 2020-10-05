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
// if (totalMonthly > 20000){
    //change class of DOM element
}

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

function displayEmployee() {
    $("#empTable").text('')
    for (let i = 0; i < employeeList.length; i++) {
        console.log(employeeList[i]);
        
        $("#empTable").append(`<tr>`)
        $("#empTable").append(`<td>employeeList[i].firstKey</td>`)
        $("#empTable").append(`<td>employeeList[i].lastKey</td>`)
        $("#empTable").append(`<td>employeeList[i].idKey</td>`)
        $("#empTable").append(`<td>employeeList[i].titleKey</td>`)
        $("#empTable").append(`<td>employeeList[i].salaryKey</td>`)
        $("#empTable").append(`<tr>`)
    }
}

function sumbitClick(){
    setEmployee()
    displayEmployee()

}

// delete button
//  need to sum salaries and divide by 12
// clear inputs

