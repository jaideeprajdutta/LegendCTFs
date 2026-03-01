const bcrypt = require('bcrypt');
const users = []; // Mock DB

async function register(username, password) {
    const hashed = await bcrypt.hash(password, 10);
    users.push({ username, password: hashed });
}
