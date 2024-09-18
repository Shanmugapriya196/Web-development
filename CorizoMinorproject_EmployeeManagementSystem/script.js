let employees = [];
let editIndex = -1;

function createEmployee() {
    const empId = document.getElementById('empId').value;
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const designation = document.getElementById('designation').value;
    const salary = document.getElementById('salary').value;

    if (empId === '' || name === '' || email === '' || designation === '' || salary === '') {
        alert('Please fill in all fields');
        return;
    }

    const employee = { empId, name, email, designation, salary };

    if (editIndex === -1) {
        employees.push(employee);
    } else {
        employees[editIndex] = employee;
        editIndex = -1;
    }

    clearForm();
    renderEmployees();
}

function renderEmployees() {
    const tbody = document.querySelector('#employeeTable tbody');
    tbody.innerHTML = '';

    employees.forEach((employee, index) => {
        const row = `
            <tr>
                <td>${employee.empId}</td>
                <td>${employee.name}</td>
                <td>${employee.email}</td>
                <td>${employee.designation}</td>
                <td>${employee.salary}</td>
                <td class="actions">
                    <button onclick="editEmployee(${index})">Edit</button>
                    <button class="delete-btn" onclick="deleteEmployee(${index})">Delete</button>
                </td>
            </tr>
        `;
        tbody.innerHTML += row;
    });
}

function editEmployee(index) {
    const employee = employees[index];
    document.getElementById('empId').value = employee.empId;
    document.getElementById('name').value = employee.name;
    document.getElementById('email').value = employee.email;
    document.getElementById('designation').value = employee.designation;
    document.getElementById('salary').value = employee.salary;
    editIndex = index;
}

function deleteEmployee(index) {
    employees.splice(index, 1);
    renderEmployees();
}

function clearForm() {
    document.getElementById('empId').value = '';
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('designation').value = '';
    document.getElementById('salary').value = '';
}
