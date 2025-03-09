import { login, register } from "../Controller/users.controller.js";

export function userRoutes(app) {
  app.post("/register", register); //routes for registration
  app.post("/login", login); //routes for login
}

