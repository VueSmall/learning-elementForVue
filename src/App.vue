<script setup>

</script>
<template>
  <div id="main">
      <router-link to="/">README</router-link>
      <router-link to="/Button">Button按钮</router-link>
      <router-link to="/Border">Border边框</router-link>
      <router-link to="/Color">Color色彩</router-link>
      <router-link to="/Container">Container 布局容器</router-link>
      <router-view></router-view>
  </div>
</template>
<style>
a{
    margin-left: 1vh;
    margin-right: 1vh;
    padding-top: 0.3vh;
    padding-bottom: 0.3vh;
    text-decoration: none;
}
</style>