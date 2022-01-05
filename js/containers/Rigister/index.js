import ButtonComponent from "../../components/button.js";
import InputComponents from "../../components/input.js";
import {checkEmail, checkPassword, checkUserName, checkConfirmPassword} from "../../common/validation.js"

class RegisterScreen {
    $userName;
    $email;
    $password;
    $confirmPassword;
    $container;
    $areaRegister;

    $imageCover;
    $formRegister;
    $btnSubmit;
    $titleScreen;

    $suggest;
    $linkLogin;

    $successFlag;

    constructor() {
        this.$container = document.createElement("div");
        this.$container.classList.add("container-login", "d-flex");

        this.$imageCover = document.createElement("div");
        this.$imageCover.classList.add("img-cover");

        this.$areaRegister = document.createElement("div");
        this.$areaRegister.classList.add("area-register","d-flex");

        this.$formRegister = document.createElement ("form");
        this.$formRegister.classList.add("form-register");
        this.$formRegister.addEventListener("submit", this.handleSubmit);


        this.$titleScreen = document.createElement("div");
        this.$titleScreen.classList.add("big-title");
        this.$titleScreen.innerText = "Sign up now bro";

        this.$suggest = document.createElement("div")
        this.$suggest.classList.add("suggest");
        this.$suggest.innerText = "Do you already have an account?";

        this.$linkLogin = document.createElement("a")
        this.$linkLogin.classList.add("link-login");
        this.$linkLogin.innerText = "Login now"

        this.$suggest.appendChild(this.$linkLogin);


        this.$userName = new InputComponents(
            "User name",
            "userName",
            "register-name",
            "text"
        );

        this.$email = new InputComponents (
            "Email address",
            "email",
            "register-email",
            "email"
        );

        this.$password = new InputComponents (
            "Password",
            "password",
            "register-password",
            "password"
        );
        this.$confirmPassword = new InputComponents (
            "Confirm password",
            "confirmPassword",
            "confirm-register-password",
            "password"
        );
        this.$btnSubmit = new ButtonComponent(
            "Register",
            ["btn", "btn-primary", "d-block", "mt-3"],
            "submit"
        );
    }

        handleSubmit = (e) => {
            e.preventDefault();
            const {email, password, userName, confirmPassword} = e.target;
            let isError = false;
            let errorFlag = [0, 0, 0, 0];
            if (checkEmail(email.value) !== null) {
                isError = true;
                errorFlag[0] = 1;
                this.$email.setError(checkEmail(email.value));
            }
            if (checkUserName(userName.value) !== null) {
                isError = true;
                errorFlag[1] = 1;
                this.$userName.setError(checkUserName(userName.value));
            }
            if (checkPassword(password.value) !== null) {
                isError = true;
                errorFlag[2] = 1;
                this.$password.setError(checkPassword(password.value));
            }
            if (checkConfirmPassword(password.value, confirmPassword.value) !== null) {
                isError = true;
                errorFlag[3] = 1;
                this.$confirmPassword.setError(checkConfirmPassword(password.value, confirmPassword.value));
            }
            if (errorFlag[0] === 0) {
                this.$email.$error.classList.remove("d-block");
                this.$email.$error.classList.add("d-none");
            }
            if (errorFlag[1] === 0) {
                this.$userName.$error.classList.remove("d-block");
                this.$userName.$error.classList.add("d-none");
            }
            if (errorFlag[2] === 0) {
                this.$password.$error.classList.remove("d-block");
                this.$password.$error.classList.add("d-none");
            }
            if (errorFlag[3] === 0) {
                this.$confirmPassword.$error.classList.remove("d-block");
                this.$confirmPassword.$error.classList.add("d-none");
            }
            if (!isError) {
                alert("Account successfully created! Please confirm the account");
                location.assign("annou.html");
            }
        };

    render() { 
        this.$formRegister.append(
            this.$titleScreen,
            this.$userName.render(),
            this.$email.render(),
            this.$password.render(),
            this.$confirmPassword.render(),
            this.$btnSubmit.render(),
            this.$suggest,
        );
        this.$areaRegister.appendChild(this.$formRegister)
        this.$container.append(this.$imageCover,this.$areaRegister);
        return this.$container
    }
}

 export default RegisterScreen;
