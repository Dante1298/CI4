import ButtonComponent from "../../components/button.js";
import InputComponents from "../../components/input.js";
import {checkEmail, checkPassword} from "../../common/validation.js"

class LoginScreen {
    $email;
    $password;
    $container;

    $imageCover;
    $formLogin;
    $btnSubmit;
    $titleScreen;
    $suggest;

    $linkRegister;

    constructor() {
        this.$container = document.createElement("div");
        this.$container.classList.add("login-form", "d-none");

        this.$imageCover = document.createElement("div");
        this.$imageCover.classList.add("img-cover");

        this.$formLogin = document.createElement ("form");
        this.$formLogin.classList.add("form-container-1" );
        this.$formLogin.addEventListener("submit", this.handleSubmit);

        this.$titleScreen = document.createElement("div");
        this.$titleScreen.classList.add("big-title");
        this.$titleScreen.innerText = "Login";

        this.$suggest = document.createElement("span")
        this.$suggest.classList.add("suggest");
        this.$suggest.innerText = "Don't have an account?";

        this.$linkRegister = document.createElement("a")
        this.$linkRegister.classList.add("link-register");
        this.$linkRegister.innerText = "Create account"

        this.$suggest.appendChild(this.$linkRegister);

        this.$email = new InputComponents (
            "Email address",
            "email",
            "login-email",
            "email"
        );

        this.$password = new InputComponents (
            "Password",
            "password",
            "login-password",
            "password"
        );
        this.$btnSubmit = new ButtonComponent(
            "Sign in",
            ["btn", "btn-primary", "d-block", "mt-3"],
            "submit"
        );
    }
        handleSubmit = (e) => {
            e.preventDefault();
            const {email, password} = e.target;
            let isError = false;
            let errorFlag = [0,0];
            if (checkEmail(email.value) !== null) {
                errorFlag[0] = 1;
                this.$email.setError(checkEmail(email.value));
                isError = true;
            }

            if (checkPassword(password.value) !== null) {
                errorFlag[1] = 1;
                this.$password.setError(checkPassword(password.value));
                isError = true;
            }
            if (errorFlag[0] === 0) {
                this.$email.$error.classList.remove("d-block");
                this.$email.$error.classList.add("d-none");
            }
            if (errorFlag[1] === 0) {
                this.$password.$error.classList.remove("d-block");
                this.$password.$error.classList.add("d-none");
            }
            if (!isError) {
                alert("Dang nhap thanh cong");
            }
        };
    render() { 
        this.$formLogin.append(
            this.$titleScreen,
            this.$email.render(),
            this.$password.render(),
            this.$btnSubmit.render(),
            this.$suggest,
        );



        this.$container.append(this.$imageCover, this.$formLogin)
        return this.$container
    }
}

 export default LoginScreen;