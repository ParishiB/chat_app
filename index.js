import { Register_Login } from "./SchemaValidate";

const express = express();
const app = express();

app.use(express.json());

app.post("/register", (req, res) => {
  const name = Register_Login.parse(req.body.name);
  const email = Register_Login.parse(req.body.email);
  const password = Register_Login.parse(req.body.password);

  if (name && email && password) {
    res.status(200).json("Registered succesfully");
  } else {
    res.status(400).json("not registered successfully");
  }
});

app.post("/login", (req, res) => {
  const email = Register_Login.parse(req.body.name);
  const password = Register_Login.parse(req.body.password);
  const db = {
    email: "abc@example.com",
    password: "abc@123",
  };

  if (email === db.email && password === db.password) {
    res.status(200).json("Login succesfull");
  } else {
    res.status(400).json("Login not successfull");
  }
});

app.listen(3003, () => {
  console.log("App port running");
});
