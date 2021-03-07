<template>
    <div class="container d-flex my-5">
        <Login />
       
    </div>
</template>

<script>
import Login from './Login'

export default {
    name: 'Auth',
    components: {
        Login,
       
    }
}
</script>

<style lang="scss" scoped>
.container{
    min-height: 80vh;
}

.login{
    background-color: mediumseagreen;
}
</style>