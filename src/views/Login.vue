<template>
  <div class="login col-10 col-md-6 col-lg-5 d-flex flex-column justify-content-center p-4 my-4 mx-auto">
    <h2>Welcome Back!</h2>
    <p>please login with your personal info</p>
    <!-- <button>LogIn</button> -->
    <form @submit.prevent="signIn">
      <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Email address</label>
          <input type="email" v-model="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
          <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
      </div>
      <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input type="password" v-model="pass" class="form-control" id="exampleInputPassword1">
      </div>
  
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Signup",
  data() {
    return {
      email: "",
      pass: ""
    }
  },
  methods: {
    signIn: function() {
      this.$store.dispatch('signin',{ 
        email: this.email,
        pass: this.pass
      })
      this.email = ''
      this.pass = ''
      this.$router.push('/adhesion')
    }
  }
};
</script>

<style lang="scss" scoped>
.login{
  background-color: mediumseagreen;
  min-height: 100%;
}
</style>