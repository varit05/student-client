<template>
  <section class="container">
    <nav class="row navbar navbar-expand-lg bg-dark navbar-inverse bg-inverse">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" :to="{path: '/'}" exact>Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/student/add">Add Student</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <h1 class="text-center">Students Portal!</h1>
    <hr>
  </section>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #fff;
}
.router-link-active {
  background: #42b983;
}
</style>