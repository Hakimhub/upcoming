<template>
  <div class="PoemesEtBlogs">
    <h1>Bienvenue Dans Le Monde de La Littérature</h1>
    <!-- <div class="mx-auto d-flex py-3">
        <button class="btn btn-success mx-auto my-4"> <a href="#addpoem" >Add a new Poem</a></button>
    </div> -->
   
    <div id="addpoem" class="my-2 border h-100 border-3 w-75 p-3 mx-auto">
        <form @submit.prevent="AddPoem">
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Poem Title</label>
            <input v-model="title" type="text" class="form-control" id="exampleInputpoe1" aria-describedby="poeHelp" required> 
          </div>
            <div class="form-floating">
              <textarea  v-model="poem" class="form-control poem" placeholder="Write your poem here..." id="floatingTextarea" required></textarea>
              <label for="floatingTextarea">Comments</label>
            </div>
            <button type="submit" class="btn btn-success">Add a new Poem</button>
        </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Addpoem",
  data() {
    return {
      poem: "",
      title: ""
    }
  },
  methods: {
    AddPoem: function() {
      const poemData = {
        poem: this.poem,
        title: this.title,
        writer: `${this.$store.state.connectedUser.firstName} ${this.$store.state.connectedUser.lastName}`,
        email: this.$store.state.connectedUser.email
      }
        console.log(poemData);
      this.$store.dispatch('addNewPoem', poemData)
      this.poem = ''
      this.title = ''
      this.$router.push('/PoemesEtBlogs')
    }
  }
};
</script>

<style scoped>
.poem{
  min-height: 50vh !important;
}
.PoemesEtBlogs {
  background-color: rgb(231, 240, 236);
  min-height: 70vh;
}
.PoemesEtBlogs h1 {
  background-color: rgb(48, 247, 164);
}
</style>