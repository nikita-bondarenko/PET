<template lang="pug">
.container
  nav.navigation
    ul.navigation__list
      li.navigation__item(v-for="(link, index) in navigationData"  :key="index")

        router-link.navigation__link( :to="{name: link.page}") {{ link.title }}

</template>
<script setup>
import { reactive } from 'vue'
// eslint-disable-next-line
const navigationData = reactive([
  { page: 'login', title: 'Авторизация' },
  { page: 'today', title: 'Сегодня' },
  { page: 'animals', title: 'Животные' }
])
</script>
<style lang=""></style>
