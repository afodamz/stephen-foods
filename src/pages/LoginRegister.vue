<template>
  <div>
    <!-- Start breadcrumb section -->
    <!-- <section class="breadcrumb__section breadcrumb__bg">
      <div class="container">
        <div class="row row-cols-1">
          <div class="col">
            <div class="breadcrumb__content text-center">
              <h1 class="breadcrumb__content--title text-white mb-25">
                Account Page
              </h1>
              <ul
                class="breadcrumb__content--menu d-flex justify-content-center"
              >
                <li class="breadcrumb__content--menu__items">
                  <a class="text-white" href="index-2.html">Home</a>
                </li>
                <li class="breadcrumb__content--menu__items">
                  <span class="text-white">Account Page</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section> -->
    <!-- End breadcrumb section -->

    <!-- Start login section  -->
    <div class="login__section section--padding mb-80">
      <div class="container">
        <form action="#">
          <div class="login__section--inner">
            <div class="row row-cols-md-2 row-cols-1">
              <div class="col">
                <div class="account__login">
                  <div class="account__login--header mb-25">
                    <h2 class="account__login--header__title h3 mb-10">
                      Login
                    </h2>
                    <p class="account__login--header__desc">
                      Login if you area a returning customer.
                    </p>
                  </div>
                  <div class="account__login--inner">
                    <label>
                      <!-- <input class="account__login--input" placeholder="Email Addres" type="email" v-model="email" /> -->
                      <input class="account__login--input" placeholder="Email Addres" type="email" :value="email" @input="event => {
                          email = event.target.value;
                          emailError = '';
                        }" />
                      <!-- <input class="account__login--input" placeholder="Email Addres" type="email" :value="email" @input="updateValueState(this.email, $event.target.value)" /> -->
                    </label>
                    <div style="color: red" v-if="emailError">*{{ emailError }}</div>
                    <label>
                      <!-- <input class="account__login--input" placeholder="Password" type="password" v-model="password" /> -->
                      <input class="account__login--input" placeholder="Password" type="password" :value="password"
                        @input="event => { password = event.target.value; }" />
                    </label>
                    <div style="color: red" v-if="passwordError">*{{ passwordError }}</div>
                    <div class="account__login--remember__forgot mb-15 d-flex justify-content-between align-items-center">
                      <div class="account__login--remember position__relative">
                        <input class="checkout__checkbox--input" id="check1" type="checkbox" />
                        <span class="checkout__checkbox--checkmark"></span>
                        <label class="checkout__checkbox--label login__remember--label" for="check1">
                          Remember me</label>
                      </div>
                      <button class="account__login--forgot" type="submit">
                        Forgot Your Password?
                      </button>
                    </div>
                    <button class="account__login--btn btn" type="submit" @click.prevent="submitLoginForm"
                      :disabled="isLoading">
                      <i v-if="isLoading" class="fa fa-spinner fa-spin"></i>
                      Login
                    </button>
                    <div class="account__login--divide">
                      <span class="account__login--divide__text">OR</span>
                    </div>
                    <!-- <div class="account__social d-flex justify-content-center mb-15">
                                            <a class="account__social--link facebook" target="_blank" href="https://www.facebook.com/">Facebook</a>
                                            <a class="account__social--link google" target="_blank" href="https://www.google.com/">Google</a>
                                            <a class="account__social--link twitter" target="_blank" href="https://twitter.com/">Twitter</a>
                                        </div> -->
                    <p class="account__login--signup__text">
                      Don,t Have an Account?
                      <button type="submit">Sign up now</button>
                    </p>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="account__login register">
                  <div class="account__login--header mb-25">
                    <h2 class="account__login--header__title h3 mb-10">
                      Create an Account
                    </h2>
                    <p class="account__login--header__desc">
                      Register here if you are a new customer
                    </p>
                  </div>
                  <div class="account__login--inner">
                    <label>
                      <input class="account__login--input" placeholder="Email Address" v-model="regmail" type="email" />
                    </label>
                    <label>
                      <input class="account__login--input" placeholder="Phone" v-model="phone" type="text" />
                    </label>
                    <label>
                      <input class="account__login--input" placeholder="First Name" v-model="firstName" type="email" />
                    </label>
                    <label>
                      <input class="account__login--input" placeholder="Last Name" v-model="lastName" type="email" />
                    </label>
                    <label>
                      <input class="account__login--input" placeholder="Username" v-model="username" type="email" />
                    </label>
                    <label>
                      <input class="account__login--input" placeholder="Password" type="password" v-model="newpassword" />
                    </label>
                    <label>
                      <input class="account__login--input" placeholder="Confirm Password" type="password"
                        v-model="confirmpassword" />
                    </label>
                    <div class="account__login--remember position__relative">
                      <input class="checkout__checkbox--input" id="check2" type="checkbox" />
                      <span class="checkout__checkbox--checkmark"></span>
                      <label class="checkout__checkbox--label login__remember--label" for="check2">
                        I have read and agree to the terms & conditions</label>
                    </div>
                    <button type="submit" class="account__login--btn btn mb-10" @click.prevent="submitRegisterForm"
                      :disabled="isLoading">
                      Submit & Register
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
    <!-- End login section  -->
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "LoginRegister",
  computed: {
    ...mapGetters(["isLoggedIn"]),
    clearForm() {
      return this.$store.getters["isRegistered"];
    },
  },
  data() {
    return {
      email: "",
      emailError: "",
      password: "",
      passwordError: "",
      isLoading: false,
      regmail: "",
      regmailError: "",
      phone: "",
      phoneError: "",
      firstName: "",
      firstNameError: "",
      lastName: "",
      lastNameError: "",
      username: "",
      usernameError: "",
      newpassword: "",
      newpasswordError: "",
      confirmpassword: "",
      confirmpasswordError: "",
    };
  },
  methods: {
    ...mapActions(["login", "clearMessage", "register"]),
    validateEmail(email) {
      var re = /\S+@\S+\.\S+/;
      return re.test(email);
    },
    submitLoginForm() {
      if (!this.email || !this.validateEmail(this.email)) {
        this.emailError = "email is required";
        return;
      }
      if (!this.password) {
        this.passwordError = "Password is required";
        return;
      }
      this.isLoading = true;
      let credentials = {
        email: this.email,
        password: this.password,
      };
      this.login(credentials)
      this.isLoading = false;
    },
    submitRegisterForm() {
      if (!this.regmail) {
        this.regmailError = "email is required";
        return;
      }
      if (!this.phone) {
        this.phoneError = "email is required";
        return;
      }
      if (!this.email) {
        this.emailError = "email is required";
        return;
      }
      if (!this.email) {
        this.emailError = "email is required";
        return;
      }
      if (!this.email) {
        this.emailError = "email is required";
        return;
      }
      if (!this.email) {
        this.emailError = "email is required";
        return;
      }
      if (!this.email) {
        this.emailError = "email is required";
        return;
      }
      this.isLoading = true;
      let credentials = {
        email: this.regmail,
        phone: this.phone,
        firstName: this.firstName,
        lastName: this.lastName,
        userName: this.username,
        password: this.newpassword,
        password1: this.confirmpassword,
      };
      this.register(credentials)
      this.isLoading = false;
    },
  },
  watch: {
    // WARNING: if you plan using this keyword, the functions should not be implemented with () =>{} but as below:
    clearForm: function () {
      if (this.$store.state.isRegistered) {
        this.regmail = "";
        this.phone = "";
        this.firstName = "";
        this.lastName = "";
        this.username = "";
        this.newpassword = "";
        this.confirmpassword = "";
      }
    },
  },
};
</script>
