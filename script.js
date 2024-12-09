// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects
let keepLooping = true;
const employees = [];

while (keepLooping) {
    const firstName = prompt("First Name?");
    const lastName = prompt("Last Name?");
    let salary = prompt("Salary?");

    if (isNaN(salary)) {
        salary = 0;
    } else {
      salary = Number(salary);
    }
  

    const employee = {
      firstName: firstName,
      lastName: lastName,
      salary: salary
    }; 
    
    employees.push(employee); // why do we do this? 
    console.log(employee); //should I be console loging this?

    keepLooping = confirm("Do you want to add another employee? (yes/no)");
    // if(answer === "keep looping") {
      // keepLooping = false
    // }

  }

  return employees; // why would we do this? 
}
// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary

  function calculateAverage(salaries) {
    if (salaries.length === 0) return 0; 

    const total = salaries.reduce((acc, salary) => acc + salary, 0); 
    return total / salaries.length; 
  }
  }

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
  // function getRandomEmployee(employee) {
  //   if (employee.length === 0) {
  //     console.log("No employee available");
  //     return;
  //   }
  

  const randomIndex = Math.floor(Math.random() * employeesArray.length);
  const selectedEmployee = employeesArray[randomIndex];

  console.log(`employee ${selectedEmployee.firstName} ${selectedEmployee.lastName}`)
}


/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);



























// while - indefinite number of loop

// for - definite
// while - indefinite number of loop





// let keepLooping = true;


// while(keepLooping) {
//   console.log("Hello")

//   const answer = prompt("Do you want to loop again?")

//   console.log(answer);

//   if(answer == "no") {
//     keepLooping = false;
//   }


// }



  // function CalculateAverage(array) {
  //   let sum = 0;
  //   for (let i = 0; i < array.length; i++) {
  //     return sum / array.length;
  //   }

  //   let numbers = [salary]
  //   const average = CalculateAverage(numbers);
  //   console.log(average); // 3
