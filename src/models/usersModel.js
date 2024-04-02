const connection = require('./connection');

const getUsers = async () => {
  const [users] = await connection.execute('SELECT * FROM users');
  return users;
};

const addUser = async (user) => {
  const { name, email, password, number } = user;

  const queryValues = `'${name}', '${email}', '${password}', '${number}'`;
  const query = `INSERT INTO users(name, email, password, phone_number) VALUES (${queryValues})`;

  const [createdUser] = await connection.execute(query);
  return { insertId: createdUser.insertId };
};

const removeUser = async (id) => {
  const removedUser = await connection.execute(`DELETE FROM users WHERE id = ${id}`);
  return { removedUser };
};

const updateUser = async (id, user) => {
  const { name, email, password, number } = user;

  const query = `UPDATE users SET name = '${name}', email = '${email}', password = '${password}', number = '${number}'   WHERE id = ${id}`;
  const updatedUser = await connection.execute(query);

  return { updatedUser };
};

module.exports = {
  getUsers,
  addUser,
  removeUser,
  updateUser
};