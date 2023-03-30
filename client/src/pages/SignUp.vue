<template>
  <div class="login">
    <router-link to="/" class="logoImg">
      <img
        src="../assets/amazon_logo.png"
        width="160"
        height="150"
        alt="amazon logo"
      />
    </router-link>
    <h2>Sing<span style="color: #fbc000">Up</span></h2>
    <form action="login" method="post" @submit.prevent="handleSubmit">
      <div class="input-control">
        <label>Name *</label>
        <input
          type="text"
          v-model="name"
          placeholder="Enter Your Name"
          :class="{ invalidField: errors.name, validField: valid.name }"
          required
        />
        <small v-show="errors.name === true" class="errMsg">
          name is requigreen!
        </small>
      </div>
      <div class="input-control">
        <label>Email address *</label>
        <input
          type="email"
          v-model="email"
          placeholder="Enter Your Email"
          :class="{ invalidField: errors.email, validField: valid.email }"
          required
        />
        <small>We'll never share your email with anyone else.</small>
        <small v-show="errors.email === true" class="errMsg">
          Enter valid Email
        </small>
      </div>
      <div class="input-control">
        <label>Password *</label>
        <input
          type="password"
          v-model="password"
          placeholder="Enter Your Password"
          :class="{ invalidField: errors.password, validField: valid.password }"
          required
        />
        <small v-show="errors.password === true" class="errMsg">
          password imust content at least 6 chars
        </small>
      </div>
      <div class="input-control">
        <label>Confirm Password *</label>
        <input
          type="password"
          v-model="confirmPassword"
          placeholder="Confirm Your Password"
          :class="{
            invalidField: errors.confirmPassword,
            validField: valid.confirmPassword,
          }"
          required
        />
        <small v-show="errors.confirmPassword === true" class="errMsg">
          Password and confirm Password must be matched!
        </small>
      </div>
      <div class="input-control">
        <label>Country</label>
        <input
          list="country"
          name="country"
          v-model="country"
          placeholder="Choose your country"
          required
          :class="{ invalidField: errors.country, validField: valid.country }"
        />
        <small v-show="errors.country === true" class="errMsg">
          country is requigreen!
        </small>
        <datalist id="country">
          <option value="Afghanistan" />
          <option value="Albania" />
          <option value="Algeria" />
          <option value="American Samoa" />
          <option value="Andorra" />
          <option value="Angola" />
          <option value="Anguilla" />
          <option value="Antarctica" />
          <option value="Antigua and Barbuda" />
          <option value="Argentina" />
          <option value="Armenia" />
          <option value="Aruba" />
          <option value="Australia" />
          <option value="Austria" />
          <option value="Azerbaijan" />
          <option value="Bahamas" />
          <option value="Bahrain" />
          <option value="Bangladesh" />
          <option value="Barbados" />
          <option value="Belarus" />
          <option value="Belgium" />
          <option value="Belize" />
          <option value="Benin" />
          <option value="Bermuda" />
          <option value="Bhutan" />
          <option value="Bolivia" />
          <option value="Bosnia and Herzegovina" />
          <option value="Botswana" />
          <option value="Bouvet Island" />
          <option value="Brazil" />
          <option value="British Indian Ocean Territory" />
          <option value="Brunei Darussalam" />
          <option value="Bulgaria" />
          <option value="Burkina Faso" />
          <option value="Burundi" />
          <option value="Cambodia" />
          <option value="Cameroon" />
          <option value="Canada" />
          <option value="Cape Verde" />
          <option value="Cayman Islands" />
          <option value="Central African Republic" />
          <option value="Chad" />
          <option value="Chile" />
          <option value="China" />
          <option value="Christmas Island" />
          <option value="Cocos (Keeling) Islands" />
          <option value="Colombia" />
          <option value="Comoros" />
          <option value="Congo" />
          <option value="Congo, The Democratic Republic of The" />
          <option value="Cook Islands" />
          <option value="Costa Rica" />
          <option value="Cote D'ivoire" />
          <option value="Croatia" />
          <option value="Cuba" />
          <option value="Cyprus" />
          <option value="Czech Republic" />
          <option value="Denmark" />
          <option value="Djibouti" />
          <option value="Dominica" />
          <option value="Dominican Republic" />
          <option value="Ecuador" />
          <option value="Egypt" />
          <option value="El Salvador" />
          <option value="Equatorial Guinea" />
          <option value="Eritrea" />
          <option value="Estonia" />
          <option value="Ethiopia" />
          <option value="Falkland Islands (Malvinas)" />
          <option value="Faroe Islands" />
          <option value="Fiji" />
          <option value="Finland" />
          <option value="France" />
          <option value="French Guiana" />
          <option value="French Polynesia" />
          <option value="French Southern Territories" />
          <option value="Gabon" />
          <option value="Gambia" />
          <option value="Georgia" />
          <option value="Germany" />
          <option value="Ghana" />
          <option value="Gibraltar" />
          <option value="Greece" />
          <option value="Greenland" />
          <option value="Grenada" />
          <option value="Guadeloupe" />
          <option value="Guam" />
          <option value="Guatemala" />
          <option value="Guinea" />
          <option value="Guinea-bissau" />
          <option value="Guyana" />
          <option value="Haiti" />
          <option value="Heard Island and Mcdonald Islands" />
          <option value="Holy See (Vatican City State)" />
          <option value="Honduras" />
          <option value="Hong Kong" />
          <option value="Hungary" />
          <option value="Iceland" />
          <option value="India" />
          <option value="Indonesia" />
          <option value="Iran, Islamic Republic of" />
          <option value="Iraq" />
          <option value="Ireland" />
          <option value="Israel" />
          <option value="Italy" />
          <option value="Jamaica" />
          <option value="Japan" />
          <option value="Jordan" />
          <option value="Kazakhstan" />
          <option value="Kenya" />
          <option value="Kiribati" />
          <option value="Korea, Democratic People's Republic of" />
          <option value="Korea, Republic of" />
          <option value="Kuwait" />
          <option value="Kyrgyzstan" />
          <option value="Lao People's Democratic Republic" />
          <option value="Latvia" />
          <option value="Lebanon" />
          <option value="Lesotho" />
          <option value="Liberia" />
          <option value="Libyan Arab Jamahiriya" />
          <option value="Liechtenstein" />
          <option value="Lithuania" />
          <option value="Luxembourg" />
          <option value="Macao" />
          <option value="Macedonia, The Former Yugoslav Republic of" />
          <option value="Madagascar" />
          <option value="Malawi" />
          <option value="Malaysia" />
          <option value="Maldives" />
          <option value="Mali" />
          <option value="Malta" />
          <option value="Marshall Islands" />
          <option value="Martinique" />
          <option value="Mauritania" />
          <option value="Mauritius" />
          <option value="Mayotte" />
          <option value="Mexico" />
          <option value="Micronesia, Federated States of" />
          <option value="Moldova, Republic of" />
          <option value="Monaco" />
          <option value="Mongolia" />
          <option value="Montserrat" />
          <option value="Morocco" />
          <option value="Mozambique" />
          <option value="Myanmar" />
          <option value="Namibia" />
          <option value="Nauru" />
          <option value="Nepal" />
          <option value="Netherlands" />
          <option value="Netherlands Antilles" />
          <option value="New Caledonia" />
          <option value="New Zealand" />
          <option value="Nicaragua" />
          <option value="Niger" />
          <option value="Nigeria" />
          <option value="Niue" />
          <option value="Norfolk Island" />
          <option value="Northern Mariana Islands" />
          <option value="Norway" />
          <option value="Oman" />
          <option value="Pakistan" />
          <option value="Palau" />
          <option value="Palestinian Territory, Occupied" />
          <option value="Panama" />
          <option value="Papua New Guinea" />
          <option value="Paraguay" />
          <option value="Peru" />
          <option value="Philippines" />
          <option value="Pitcairn" />
          <option value="Poland" />
          <option value="Portugal" />
          <option value="Puerto Rico" />
          <option value="Qatar" />
          <option value="Reunion" />
          <option value="Romania" />
          <option value="Russian Federation" />
          <option value="Rwanda" />
          <option value="Saint Helena" />
          <option value="Saint Kitts and Nevis" />
          <option value="Saint Lucia" />
          <option value="Saint Pierre and Miquelon" />
          <option value="Saint Vincent and The Grenadines" />
          <option value="Samoa" />
          <option value="San Marino" />
          <option value="Sao Tome and Principe" />
          <option value="Saudi Arabia" />
          <option value="Senegal" />
          <option value="Serbia and Montenegro" />
          <option value="Seychelles" />
          <option value="Sierra Leone" />
          <option value="Singapore" />
          <option value="Slovakia" />
          <option value="Slovenia" />
          <option value="Solomon Islands" />
          <option value="Somalia" />
          <option value="South Africa" />
          <option value="South Georgia and The South Sandwich Islands" />
          <option value="Spain" />
          <option value="Sri Lanka" />
          <option value="Sudan" />
          <option value="Suriname" />
          <option value="Svalbard and Jan Mayen" />
          <option value="Swaziland" />
          <option value="Sweden" />
          <option value="Switzerland" />
          <option value="Syrian Arab Republic" />
          <option value="Taiwan, Province of China" />
          <option value="Tajikistan" />
          <option value="Tanzania, United Republic of" />
          <option value="Thailand" />
          <option value="Timor-leste" />
          <option value="Togo" />
          <option value="Tokelau" />
          <option value="Tonga" />
          <option value="Trinidad and Tobago" />
          <option value="Tunisia" />
          <option value="Turkey" />
          <option value="Turkmenistan" />
          <option value="Turks and Caicos Islands" />
          <option value="Tuvalu" />
          <option value="Uganda" />
          <option value="Ukraine" />
          <option value="United Arab Emirates" />
          <option value="United Kingdom" />
          <option value="United States" />
          <option value="United States Minor Outlying Islands" />
          <option value="Uruguay" />
          <option value="Uzbekistan" />
          <option value="Vanuatu" />
          <option value="Venezuela" />
          <option value="Viet Nam" />
          <option value="Virgin Islands, British" />
          <option value="Virgin Islands, U.S" />
          <option value="Wallis and Futuna" />
          <option value="Western Sahara" />
          <option value="Yemen" />
          <option value="Zambia" />
          <option value="Zimbabwe" />
        </datalist>
      </div>
      <div class="cityState">
        <div class="input-control">
          <label>State *</label>
          <input
            type="text"
            v-model="state"
            required
            placeholder="Enter your State"
            :class="{ invalidField: errors.state, validField: valid.state }"
          />
          <small v-show="errors.state === true" class="errMsg">
            state is requigreen!
          </small>
        </div>
        <div class="input-control">
          <label>City *</label>
          <input
            type="text"
            v-model="city"
            required
            placeholder="Enter your City"
            :class="{ invalidField: errors.city, validField: valid.city }"
          />
          <small v-show="errors.city === true" class="errMsg">
            city is required!
          </small>
        </div>
      </div>
      <div class="cityState">
        <div class="input-control">
          <label>Postal Code *</label>
          <input
            type="text"
            v-model="postalCode"
            required
            placeholder="Enter your Postal Code"
            :class="{
              invalidField: errors.postalCode,
              validField: valid.postalCode,
            }"
          />
          <small v-show="errors.postalCode === true" class="errMsg">
            postalCode is required!
          </small>
        </div>
        <div class="input-control">
          <label>Street *</label>
          <input
            type="text"
            v-model="street"
            required
            placeholder="Enter your street"
            :class="{ invalidField: errors.street, validField: valid.street }"
          />
          <small v-show="errors.street === true" class="errMsg">
            street is required!
          </small>
        </div>
      </div>
      <div>
        <input type="checkbox" />
        <label>Remember me for a month</label>
      </div>
      <div class="actions">
        <button type="submit">Sign Up</button>
        <router-link to="/signin">I already have account.</router-link>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data: () => ({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    country: "",
    state: "",
    city: "",
    postalCode: "",
    street: "",
    errors: {
      name: false,
      email: false,
      confirmPassword: false,
      country: false,
      city: false,
      state: false,
      postalCode: false,
      street: false,
    },
    valid: {
      name: false,
      email: false,
      confirmPassword: false,
      country: false,
      city: false,
      state: false,
      postalCode: false,
      street: false,
    },
  }),
  watch: {
    name: function (newVal) {
      if (newVal.length == 0) {
        this.valid.name = false;
        this.errors.name = true;
      } else {
        this.valid.name = true;
        this.errors.name = false;
      }
    },
    password: function (newVal) {
      if (newVal.length < 6) {
        this.valid.password = false;
        this.errors.password = true;
      } else {
        this.valid.password = true;
        this.errors.password = false;
      }
    },
    confirmPassword: function (newVal) {
      if (newVal !== this.password) {
        this.valid.confirmPassword = false;
        this.errors.confirmPassword = true;
      } else {
        this.valid.confirmPassword = true;
        this.errors.confirmPassword = false;
      }
    },
    country: function (newVal) {
      if (newVal.length == 0) {
        this.valid.country = false;
        this.errors.country = true;
      } else {
        this.valid.country = true;
        this.errors.country = false;
      }
    },
    state: function (newVal) {
      if (newVal.length == 0) {
        this.valid.state = false;
        this.errors.state = true;
      } else {
        this.valid.state = true;
        this.errors.state = false;
      }
    },
    city: function (newVal) {
      if (newVal.length == 0) {
        this.valid.city = false;
        this.errors.city = true;
      } else {
        this.valid.city = true;
        this.errors.city = false;
      }
    },
    street: function (newVal) {
      if (newVal.length == 0) {
        this.valid.street = false;
        this.errors.street = true;
      } else {
        this.valid.street = true;
        this.errors.street = false;
      }
    },
    postalCode: function (newVal) {
      if (newVal.length == 0) {
        this.valid.postalCode = false;
        this.errors.postalCode = true;
      } else {
        this.valid.postalCode = true;
        this.errors.postalCode = false;
      }
    },
  },
  methods: {
    // ...mapActions({ signup: 'signup' }),
    handleSubmit() {
      //validate input
      this.$store
        .dispatch("signup", {
          name: this.name,
          email: this.email,
          password: this.password,
          confirmPassword: this.confirmPassword,
          country: this.country,
          state: this.state,
          city: this.city,
          postalCode: this.postalCode,
          street: this.street,
        });

      //send request
    },
  },
};
</script>
<style>
.login {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;
}

.login a.logoImg {
  position: absolute;
  top: 0%;
  left: 0%;
}

.login h2 {
  font-size: 1.7rem;
  text-shadow: 0.6px 0.6px 1px;
}
.login .input-control {
  display: flex;
  flex-direction: column;
}

.login .input-control small.errMsg {
  color: red;
}
.login form > div {
  margin-top: 0.5rem;
}

.login .input-control * {
  margin-top: 0.2rem;
}

.login .input-control label {
  font-size: 1.1rem;
  font-weight: 500;
}
.login .input-control input {
  height: 2rem;
  font-size: 1rem;
  outline: none;
}

.login form .actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.login form .actions button {
  background-color: #fbc130;
  border: none;
  font-size: 1rem;
  font-weight: 600;
  padding: 0.8rem;
  border-radius: 0.5rem;
  cursor: pointer;
  color: #fff;
  transition: transform 450ms;
}

div.cityState {
  display: flex;
}
div.cityState > div {
  margin: 0 0.3rem;
}

.login form .actions button:hover {
  box-shadow: 1px 1px 2px;
}

.login form .actions a {
  color: #5971fb;
  font-size: 1.01rem;
  font-weight: 530;
}
.invalidField {
  color: red;
  outline-color: #ef0d0d;
  border-color: #fc1301;
}
.validField {
  color: green;
  outline-color: #20ef0d;
  border-color: #05fc01;
}
</style>
