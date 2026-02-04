const users = require("../data/users");

// GET all users
exports.getUsers = (req, res) => {
  res.send(users); // ❌ should use status code
};

// GET user by id fixed code 
exports.getUserById = (req, res) => {
  const id = Number(req.params.id);
  const user = users.find(u => u.id === id);

  if (!user) {
    return res.status(404).json({
      success: false,
      message: "User not found"
    });
  }

  res.status(200).json(user);
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
