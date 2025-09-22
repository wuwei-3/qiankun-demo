<template>
  <div id="app">
    <h1>我是父应用</h1>
    <router-link to="/page1">去 page1</router-link> |
    <router-link to="/child-p1">子应用 1</router-link> |
    <router-link to="/child-p2">子应用 2</router-link> |
    <router-link to="/">主应用</router-link> |
    <router-link to="/page2">去 page2</router-link>
    <router-view></router-view>
    <!-- 挂载位置 -->
    <div id="container"></div>
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
