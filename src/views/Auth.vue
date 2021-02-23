<template>
    <div class="container d-flex my-5">
        <Login />        
        <Signup />
    </div>
</template>

<script>
import Login from './Login'
import Signup from './Signup'
export default {
    name: 'Auth',
    components: {
        Login,
        Signup
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