 <template>
  <div class="d-flex flex-column justify-content-center border p-4 w-50 h-100">
    <h2>Hello, Friends!</h2>
    <p>please enter your personal details</p>
    <form @submit.prevent="signUp">
      <!-- Default form subscription -->

      <p class="h4 text-center mb-4">Subscribe</p>
      <div v-show="msg" class="alert alert-danger" role="alert">
        {{msg}}
      </div>
      <div v-show="this.$store.state.err.id == 'signup'" class="alert alert-danger" role="alert">
        {{this.$store.state.err.msg}}
      </div>
      <!-- Default input name -->
      <label for="defaultFormSubscriptionNameEx" class="grey-text">First Name</label>
      <input type="text" v-model="fname" id="defaultFormSubscriptionNameEx" class="form-control" required/>

      <br />

      <!-- Default input second name -->
      <label for="defaultFormSubscriptionNameEx" class="grey-text">Second name</label>
      <input type="text" v-model="lname" id="defaultFormSubscriptionNameEx" class="form-control" required/>

      <!-- Default form subscription -->
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input
          type="email"
          v-model="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          required
        />
        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input type="password" v-model="pass" class="form-control" id="password" required/>
      </div>

      <div class="mb-3">
        <label for="comfirmpass" class="form-label">Comfirm Password</label>
        <input type="password" v-model="comfirmPass" class="form-control" id="comfirmpass" required/>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    <!-- <button>SignUp</button> -->
  </div>
</template>

<script>
export default {
  name: "Signup",
  data() {
    return {
      fname: "",
      lname: "",
      email: "",
      pass: "",
      comfirmPass: "",
      msg: "",
    }
  },
  methods: {
    signUp: function() {
      console.log(this.msg);
      if (this.pass !== this.comfirmPass) {
        this.msg = "The passwords don't match 🙅🏻‍♂️";
      } else {
        this.$store.dispatch('signup', {
          firstName: this.fname,
          lastName: this.lname,
          email: this.email,
          pass: this.pass
        })
        this.fname = ''
        this.lname = ''
        this.email = ''
        this.pass = ''
        this.comfirmPass = ''
      }
    },
  },
};
</script>
  
