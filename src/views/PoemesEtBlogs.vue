<template>
  <div class="PoemesEtBlogs">
    <h1>Bienvenue Dans Le Monde de La Littérature</h1>
    <div class="mx-auto d-flex py-3">
        <button class="btn btn-success mx-auto my-4"> <router-link to='/AddPoem'>Add a new Poem</router-link></button>
    </div>

    <div v-for="poem in poems" :key="poem.emial" class="col-11 col-md-9 pb-4 mx-auto">
      <b>{{poem.title}}</b><br />
       <p>{{poem.poem}}</p>   
       <b>{{poem.writer}}</b>  
    </div>
  </div>
</template>

<script>
export default {
  name: "PoemesEtBlogs",
  data() {
    return {
      poems: this.$store.state.poems,
    }
  },
};
</script>

<style scoped>
a{
    text-decoration: none;
    color: black;
}
.PoemesEtBlogs {
  background-color: rgb(231, 240, 236);
  min-height: 70vh;
}
.PoemesEtBlogs h1 {
  background-color: rgb(48, 247, 164);
}
</style>