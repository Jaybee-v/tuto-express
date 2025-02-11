import UsersService from "../services/users.service.js";

const usersService = new UsersService();

export default class UsersController {
  index(req, res) {
    const users = usersService.findAll();
    res.status(200).json(users);
  }

  show(req, res) {
    const { id } = req.params;
    const user = usersService.findById(parseInt(id));
    if (!user) {
      res.status(404).json({
        message: "User not found",
      });
    }
    res.status(200).json(user);
  }

  create(req, res) {
    const { name, age } = req.body;
    const result = usersService.create({ name, age });
    res.status(201).json(result);
  }

  update(req, res) {
    const { id } = req.params;
    const { name, age } = req.body;
    const result = usersService.update(parseInt(id), { name, age });
    res.status(200).json(result);
  }

  delete(req, res) {
    const { id } = req.params;
    const result = usersService.delete(parseInt(id));
    res.status(200).json(result);
  }
}
