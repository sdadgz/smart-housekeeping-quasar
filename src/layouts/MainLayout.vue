<template>
  <q-layout view="lHh Lpr lFf">

    <!--  头  -->
    <q-header elevated>
      <q-toolbar class="justify-center">
        <!--    菜单按钮    -->
        <q-btn-toggle
            class="justify-center"
            flat
            v-model="currentMenu"
            :options="menu"
            toggle-color="positive"
        >
          <!--     to do nothing     -->
        </q-btn-toggle>
      </q-toolbar>
    </q-header>

    <!--  内容  -->
    <q-page-container>
      <router-view/>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">

import {ref, watch} from "vue";
import {menu} from "components/MainLayout";
import {useRoute, useRouter} from "vue-router";

const $route = useRoute();
const $router = useRouter();

// 当前主菜单
const currentMenu = ref('/home');

// 主菜单传送
watch(currentMenu, () => {
  $router.push(currentMenu.value);
}, {immediate: true})
</script>
