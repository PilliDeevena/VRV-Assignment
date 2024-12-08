let roles = [
  { name: 'Admin', department: 'Operations', description: 'Manage operations', createdBy: 'John Lane', status: 'Active' },
  { name: 'Staff', department: 'HR', description: 'HR management', createdBy: 'Rohith Pilli', status: 'Inactive' },
];

let editIndex = null;

// Open Modal
function openCreateRoleModal() {
  document.getElementById('role-modal').style.display = 'flex';
  document.getElementById('role-form').reset();
  document.getElementById('modal-title').innerText = 'Create Role';
  editIndex = null;
}

// Close Modal
function closeModal() {
  document.getElementById('role-modal').style.display = 'none';
}

// Render Roles
function renderRoles() {
  const tableBody = document.getElementById('roles-table-body');
  tableBody.innerHTML = roles.map((role, index) => `
    <tr>
      <td>${role.name}</td>
      <td>${role.department}</td>
      <td>${role.description}</td>
      <td>${role.createdBy}</td>
      <td>${role.status}</td>
      <td>
        <button class="btn btn-primary" onclick="editRole(${index})">Edit</button>
        <button class="btn btn-danger" onclick="deleteRole(${index})">Delete</button>
      </td>
    </tr>
  `).join('');
}

// Save Role
function saveRole(event) {
  event.preventDefault();
  const name = document.getElementById('role-name').value;
  const department = document.getElementById('belongs-to').value;
  const description = document.getElementById('description').value;

  if (editIndex !== null) {
    roles[editIndex] = { ...roles[editIndex], name, department, description };
  } else {
    roles.push({ name, department, description, createdBy: 'Pilli Deevena', status: 'Active' });
  }

  closeModal();
  renderRoles();
}

// Edit Role
function editRole(index) {
  editIndex = index;
  const role = roles[index];
  document.getElementById('role-name').value = role.name;
  document.getElementById('belongs-to').value = role.department;
  document.getElementById('description').value = role.description;
  document.getElementById('modal-title').innerText = 'Edit Role';
  openCreateRoleModal();
}

// Delete Role
function deleteRole(index) {
  roles.splice(index, 1);
  renderRoles();
}

// Initialize
renderRoles();
