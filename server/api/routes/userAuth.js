const express = require('express');
const router = express.Router();
// const cors = require('cors');
// const bodyParser = require('body-parser');
 const { users } = require('../data/data');  

// router.use(bodyParser.json());
// router.use(cors());

router.get('/', (req, res) => {
  res.json(users);
});

router.post('/signup', (req, res) => {
  const { username, password } = req.body;
  const existingUser = users.find(u => u.username === username);

  if (existingUser) {
    res.status(400).json({ message: 'Username already exists' });
  } else {
    const newUser = {
      userid: users.length + 1,
      username,
      password,
      flag: true
    };
    users.push(newUser);
    res.json({ message: 'Signup successful', user: newUser });
  }
});

router.get('/login', (req, res) => {
  const { username, password } = req.query;
  console.log(`got req body: {username: ${username}, password: ${password}}`);
  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    user.flag = true;
    res.json({ message: 'Login successful', user });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

router.post('/logout', (req, res) => {
  const { username } = req.body;
  console.log('Logout request for user:', username); 
  const user = users.find(u => u.username === username);
  if (user) {
    console.log('User found:', user); 
    user.flag = false;  
    console.log('User flag updated:', user); 
    res.status(200).json({ message: 'Logout successful' });
  } else {
    res.status(400).json({ message: 'User not found' });
  }
});

module.exports = router;
