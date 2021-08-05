<template>
  <div class="home">
    <button @click="login">push me</button>
    <button @click="printUsers">for_get</button>
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Auth from "../components/Auth";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  data() {
    return {
      auth: new Auth(),
    };
  },
  methods: {
    login() {
      this.auth.login();
    },
    async printUsers() {
      const boards = await this.auth.boards();
      //console.log(boards.category);
    },
  },
};
</script>
