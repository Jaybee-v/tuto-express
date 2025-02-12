// findAll()
// findById()
import { readUsers, writeUsers } from "../utils/fileHelper.js";

class UserService {
  // CREATE
  createUser({ name, age }) {
    // id number
    // name string
    // age number
    if (name === "" || !age) {
      return null;
    }
    const users = this.findAll();
    const newUser = {
      id: users.length + 1,
      name: name,
      age: age,
    };
    users.push(newUser);
    writeUsers(users);
    return newUser;
  }

  // READ
  findAll() {
    const users = readUsers();
    return users;
  }

  findById(id) {
    const users = this.findAll();
    const user = users.find((u) => u.id === id);
    if (!user) return null;
    return user;
  }

  // UPDATE
  updateUser(id, { name, age }) {
    const users = this.findAll();
    const user = users.find((u) => u.id == id);
    if (!user) return null;
    user.name = name;
    user.age = age;
    writeUsers(users);
    return user;
  }

  // DELETE
  deleteUser(id) {
    const users = this.findAll();
    const user = users.find((u) => u.id == id);
    if (!user) return false;
    const _users = users.filter((u) => u.id !== id);
    writeUsers(_users);
    return true;
  }
}

export default UserService;
