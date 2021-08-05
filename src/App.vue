<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>|
    <router-link to="/board">board</router-link>|
    <router-link to="/post">Post</router-link>
  </div>
  <router-view />
</template>

<style>


#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #000000;

    &.router-link-exact-active {
      color: #000000;
    }
  }
}
</style>
