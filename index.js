const bcrypt = require('bcrypt');

const hashpassword = async () => {
  const salt = await bcrypt.genSalt(10);
  console.log(salt);

  // Example of how you can hash a password
  const hashedPassword = await bcrypt.hash("your_password_here", salt);
  console.log("Hashed Password:", hashedPassword);
};

hashpassword();  // Calling the function
