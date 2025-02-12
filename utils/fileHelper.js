import fs from "fs";

const usersFile = "./data/users.json";

export const readUsers = () => {
  const data = fs.readFileSync(usersFile);
  return JSON.parse(data);
};

export const writeUsers = (users) => {
  fs.writeFileSync(usersFile, JSON.stringify(users, null, 2));
};
