import fs from "fs";

const USERS = JSON.parse(fs.readFileSync("./data/users.json", "utf-8"));

export default class UsersService {
  findAll() {
    return USERS;
  }

  findById(id) {
    const user = USERS.find((user) => user.id === id);
    if (!user) {
      return null;
    }
    return user;
  }

  create({ name, age }) {
    const newUser = { id: USERS.length + 1, name, age };
    USERS.push(newUser);
    fs.writeFileSync("./data/users.json", JSON.stringify(USERS, null, 2));
    return {
      message: "User created successfully",
      data: newUser,
    };
  }

  update(id, { name, age }) {
    const user = this.findById(id);
    if (!user) {
      throw new Error("User cannot be updated");
    }
    user.name = name;
    user.age = age;
    fs.writeFileSync("./data/users.json", JSON.stringify(USERS, null, 2));
    return {
      message: "User updated successfully",
    };
  }

  delete(id) {
    const user = this.findById(id);
    if (!user) {
      throw new Error("User doesnt exists");
    }
    const _USERS = USERS.filter((user) => user.id !== id);
    fs.writeFileSync("./data/users.json", JSON.stringify(_USERS, null, 2));
    return { message: "User deleted successfully" };
  }
}
