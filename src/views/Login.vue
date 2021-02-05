<template>
    <div class="d-flex login flex-column justify-content-center p-4 w-50 h-100">
        <h2>Welcome Back!</h2>
        <p>please login with your personal info</p>
        <!-- <button>LogIn</button> -->
        <form>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1">
            </div>
        
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
</template>

<style lang="scss" scoped>
.login{
    background-color: mediumseagreen;
}
</style>