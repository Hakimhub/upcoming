<template>
<div>
    <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="#">UPCOMING POETS</b-navbar-brand>

    <nav>
        <div class="menu-item"><router-link to='/'>Home</router-link></div>
        <div class="menu-item"><router-link to='/auth'>LogIn</router-link></div>
        <div class="menu-item"><router-link to='/adhesion'>Adhésion</router-link></div>
        <div class="menu-item"><router-link to='/PoemesEtBlogs'>Poèmes et blogs</router-link></div>
        <div class="menu-item"><router-link to='/AProposDeNous'>A propos de nous</router-link></div>        
    </nav>
    
     <b-navbar-nav class="ml-auto">
       

        <b-nav-item-dropdown text="Lang" right>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">FR</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <em>User</em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
        </b-navbar-nav>
        <!-- </b-collapse> -->
        </b-navbar>
        </div>
</template>
<script>
// @ is an alias to /src


export default {
  name: 'Nav',
  
}
</script>

<style>
nav{
    display: flex;
    align-items: center;
    justify-content: center;
}
nav .menu-item{
    color: ghostwhite;
    padding: 10px 20px;
    position: relative;
    text-align: center;
    border-bottom: 3px solid transparent;
    display: flex;
    font-weight: bold;
}
nav .menu-item.active,
nav .menu-item:hover{
    background-color: rgb(32, 32, 156);
    border-bottom-color: red;
}

nav .menu-item a {
    color: inherit;
    text-decoration: none;
}
.bg-info {
    background-color: dodgerblue!important;
}
.navbar-brand {
    color: ghostwhite;
    font-size: 35px;
    line-height: 80px;
    padding: 0 50px;
    font-weight: bold;

}
</style>
