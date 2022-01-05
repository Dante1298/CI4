import LoginScreen from "./containers/Login/index.js";
import RegisterScreen from "./containers/Rigister/index.js";

const app1 = document.getElementById("app");
const loginScreen = new LoginScreen();

app1.appendChild(loginScreen.render());

const app2 = document.getElementById("app");
const registerScreen = new RegisterScreen();

app2.appendChild(registerScreen.render());


let change = document.querySelector(".link-login");
console.log("change");