<template lang="pug">
label.login__label(:for="id") {{ title }}
  input.login__input(:id="id" :type="type" v-model="inputValue")
</template>
<script setup>
/* eslint-disable */
import { defineProps, defineEmits, computed } from 'vue'
const props = defineProps(['title', 'placeholder', 'id', 'type', 'modelValue'])
const emit = defineEmits(['update:modelValue'])
const inputValue = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
    return value
  }
})
</script>
<style lang=""></style>
