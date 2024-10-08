// Exercise #1: For Each Function

function forEach(array, operation) {
  // Start coding here
}

const employeeSalaries = [20005, 40000, 32000, 14500, 344000];
const newEmployeeSalaries = [];

//-----------------------------------------------------------------------------------------------------------------------

//function increase salary by 5,000
// Agrement is Salary as Number
function salaryUp5000(number){
  return number+5000;
}

//function HOF for promote Salary
// 1st Agrement is Salary Promote. (how many salary will increase
// 2nd Agrement is base salary list as Array 
// 3rd Agrement is New salary list that we would like to reassign in Array
function promoteEmployees(callback,employeeSalaryList,newSalaryList){
  for(let i=0;i<employeeSalaryList.length;i++){
    
    
    //console.log(i);   //check i
    //console.log(employeeSalaryList[i])   //check employeeSalaryList
    //console.log(salaryUp5000(employeeSalaryList[i]));   // check new salary each index
    
    newSalaryList[i]=(salaryUp5000(employeeSalaryList[i]));
  }

  //console.log(newSalaryList);   //check result
  return newSalaryList;
}

//-----------------------------------------------------------------------------------------------------------------------


// Using `forEach` function here

promoteEmployees(salaryUp5000,employeeSalaries,newEmployeeSalaries); // execute the function
console.log(newEmployeeSalaries); // [25005, 45000, 37000, 19500, 349000]



