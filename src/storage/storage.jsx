export const saveUser = (userData) => {
  const users = getUsers();
  const existingUser = users.find((user) => user.email === userData.email);
  if (existingUser) {
    return false;
  } else {
    users.push(userData);
    localStorage.setItem("Form", JSON.stringify(users));
    return true;
  }
};

export const getUsers = () => {
  const users = localStorage.getItem("Form");
  return users ? JSON.parse(users) : [];
};

export const checkLogin = (email, password) => {
  const users = getUsers();
  return users.find(
    (user) => user.email === email && user.password === password,
  );
};
