<template>
  <div id="nav">
    <router-link to="/" class="nav_class">홈</router-link> |
    <router-link to="/about" class="nav_class">설명</router-link> |
    <router-link to="/start_easy" class="nav_class">시작(Easy)</router-link> |
    <router-link to="/start" class="nav_class">시작(Normal)</router-link> |
    <router-link to="/start_hard" class="nav_class">시작(Hard)</router-link>
  </div>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-size : 30px;
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.nav_class {
  padding : 30px;
  text-align: center;
  text-decoration: none;
}
</style>
