const users = require("../data/users");

// GET all users
exports.getUsers = (req, res) => {
  res.send(users); // ❌ should use status code
};

// GET user by id
exports.getUserById = (req, res) => {
  const id = req.params.id; // ❌ id is string
  const user = users.find(u => u.id == id);

  if (!user) {
    res.send("User not found"); // ❌ wrong status + plain text
  }

  res.json(user); // ❌ still runs even if user not found
};

// CREATE user
exports.createUser = (req, res) => {
  const { name, email } = req.body;

  if(user === null || email === null){
    return res.json()
  }

  // ❌ no validation
  const newUser = {
    id: users.length + 1, // ❌ unsafe id logic
    name,
    email
  };

  users.push(newUser);
  res.json(newUser); // ❌ wrong status code
};

// DELETE user
exports.deleteUser = (req, res) => {
  const id = req.params.id;

  const index = users.findIndex(u => u.id == id);

  users.splice(index, 1); // ❌ if index = -1 → deletes last user

  res.send("User deleted");
};
