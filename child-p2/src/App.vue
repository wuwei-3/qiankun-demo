<template>
  <div id="app">
    <h1 style="color: blue">我是子应用2</h1>
    <router-link to="/page1">去 page1</router-link> |
    <router-link to="/">子应用2首页</router-link> |
    <router-link to="/page2">去 page2</router-link>
    <router-view></router-view>
  </div>
</template>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
