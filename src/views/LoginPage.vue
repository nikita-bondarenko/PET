/* eslint-disable no-unused-vars */
<template lang="pug">
.container
  form.login(action="#" @submit.prevent="login({username: formData.text, passsword: formData.password})")
    FormField(v-for="(item, index) in fieldsData" :key="index" :title="item.title" :id="index" :type="item.type" :placeholder="item.placeholder" v-model="formData[item.type]")
    button.login__button(type="submit") Войти
</template>
<script setup>
/* eslint-disable no-unused-vars, space-before-function-paren */
import FormField from '@/components/FormField.vue'
import { reactive, ref, watch, computed } from 'vue'
import useApi from '@/composible/useApi'
const { login } = useApi()
const formData = reactive({})
const fieldsData = reactive([
  { title: 'Логин', placeholder: 'Введите ваш логин', type: 'text' },
  { title: 'Пароль', placeholder: 'Введите пароль', type: 'password' }
])
</script>
<style lang=""></style>
