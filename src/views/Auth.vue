<template>
    <div class="container d-flex my-5">
        <Login />
        <SignUp />        
    </div>
</template>

<script>
import Login from './Login'
import SignUp from './SignUp'
export default {
    name: 'Auth',
    components: {
        Login,
        SignUp
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