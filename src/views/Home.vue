<template>
  <div class="home">
    <button @click="login">ログイン</button>
    <button @click="printBoards">掲示板取得</button><br />
    <!--<img alt="Vue logo" src="../assets/logo.png" />-->
    <!--<HelloWorld msg="Welcome to Your Vue.js App" />-->
    {{ boards }}
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
      boards: null,
    };
  },
  methods: {
    login() {
      this.auth.login();
    },
    async printBoards() {
      this.boards = await this.auth.boards();
      //this.boards = this.boards[0].data();
      console.log(await this.auth.boards());
    },
  },
};
</script>
