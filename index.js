import express from "express";

const app = express();

const USERS = [
  {
    id: 1,
    name: "John",
    age: 34,
  },
  {
    id: 2,
    name: "Jane",
    age: 25,
  },
];

app.get("/", (req, res) => {
  res.send("Hello world, installation de nodemon !");
});

app.get("/users", (req, res) => {
  res.send(JSON.stringify(USERS));
});

app.get("/users/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  const user = USERS.find((user) => user.id === parseInt(id));
  if (!user) {
    res.status(404).send("Utilisateur non trouvé");
  }
  res.send(JSON.stringify(user));
});

const PORT = process.env.PORT || 8787;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}	`);
});
