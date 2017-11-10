<template>
  <div class="main">
    <div class="logo">
      <img src="./assest/logo.png">
      <img src="./assest/koa.jpg">
    </div>
    <ul>
      <router-link to="/hello">Go to Hello</router-link>
      <router-link to="/todo">Go to Todo</router-link>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
  .main
    display flex
    flex-direction column
    align-items center
    justify-content row
    .logo
    display flex
    align-items center
    position relative
      img
        width 200px
      img:nth-child(1)
        width 100px

  h1, h2
  font-weight normal
  ul
    list-style-type none
    padding 0
  li
    display inline-block
    margin 0 10px
  a
    color #42b983

</style>
