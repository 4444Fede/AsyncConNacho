const apiEndpoint = "https://643ecf8ec72fda4a0b01bc66.mockapi.io/api/v1/users";
const userList = document.getElementById("userList");
const roleSelector = document.getElementById("roleSelector");
const loadingOverlay = document.getElementById("loadingOverlay");

function showLoader() {
  loadingOverlay.classList.remove("hidden");
}

function hideLoader() {
  loadingOverlay.classList.add("hidden");
}

function getUsers() {
  showLoader();
  fetch(apiEndpoint)
    .then((response) => response.json())
    .then((data) => {
      renderUsers(data);
      populateRoleFilter(data);
    })
    .catch((error) => console.error("Error retrieving users:", error))
    .finally(() => hideLoader());
}

function renderUsers(users) {
  userList.innerHTML = "";
  users.forEach((user) => {
    const userCardElement = document.createElement("div");
    userCardElement.classList.add("user-card");
    userCardElement.innerHTML = `
            <p><strong>ID:</strong> ${user.id}</p>
            <p><strong>Name:</strong> ${user.name}</p>
            <p><strong>Email:</strong> ${user.email}</p>
        `;
    userList.appendChild(userCardElement);
  });
}

function filterUsersByRole(users, role) {
  if (role === "") {
    return users;
  }
  return users.filter((user) => user.roles.includes(role));
}

function populateRoleFilter(users) {
  const roleSet = new Set();
  users.forEach((user) => {
    user.roles.forEach((role) => roleSet.add(role));
  });

  roleSet.forEach((role) => {
    const optionElement = document.createElement("option");
    optionElement.value = role;
    optionElement.textContent = role[0].toUpperCase() + role.slice(1);
    roleSelector.appendChild(optionElement);
  });
}

roleSelector.addEventListener("change", () => {
  showLoader();
  fetch(apiEndpoint)
    .then((response) => response.json())
    .then((users) => {
      const filteredUsers = filterUsersByRole(users, roleSelector.value);
      renderUsers(filteredUsers);
    })
    .finally(() => hideLoader());
});

window.addEventListener("load", function () {
  getUsers();
});
