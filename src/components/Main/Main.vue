<template>
  <main class="main">
    <Folder />
    <Helper />
  </main>
</template>

<script>
import Folder from "../Folder/Folder.vue";
import Helper from "../Helper/Helper.vue";

export default {
  name: "Main",
  components: {Helper, Folder}
}
</script>

<style scoped>
    @import "Main.scss";
</style>