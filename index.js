import express from "express";
import morgan from "morgan";
import usersRoute from "./routes/users.routes.js";

const app = express();

app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send("Hello world, installation de nodemon !");
});

app.use("/users", usersRoute);

const PORT = process.env.PORT || 8787;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}	`);
});
