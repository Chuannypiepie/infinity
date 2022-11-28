<template>
  <v-card class="d-flex pa-2" outlined tile>
    <div>I'm a flexbox container!</div>
  </v-card>
</template>

<script setup lang="ts">
import { useStore } from "@/stores";
import { onMounted, ref } from "vue";
import axios from "axios";
import router from "@/router";

const store = useStore();
const routers = router.options.routes[0].children;

onMounted(async () => {
  await store.getRoles();
  await store.getSpecial();
  console.log(routers);
});

const menu = () => {
  console.log(1);
};
const items = [
  { title: "Click Me" },
  { title: "Click Me" },
  { title: "Click Me" },
  { title: "Click Me 2" },
];
</script>

<style lang="less">
.v-card {
  opacity: 0.6;
}

.title {
  font-size: 62.5%;
}
@media screen and (min-width: 321px) and (max-width: 375px) {
  .title {
    font-size: 16px;
  }
}
@media screen and (min-width: 376px) and (max-width: 414px) {
  .title {
    font-size: 17px;
  }
}
@media screen and (min-width: 415px) and (max-width: 639px) {
  .title {
    font-size: 20px;
  }
}
@media screen and (min-width: 640px) and (max-width: 719px) {
  .title {
    font-size: 25px;
  }
}
@media screen and (min-width: 720px) and (max-width: 749px) {
  .title {
    font-size: 27.5px;
  }
}
@media screen and (min-width: 750px) and (max-width: 799px) {
  .title {
    font-size: 28.5px;
  }
}
@media screen and (min-width: 800px) {
  .title {
    font-size: 30px;
  }
}
</style>
