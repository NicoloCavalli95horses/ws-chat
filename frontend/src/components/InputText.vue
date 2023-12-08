<template>
  <input type="text" :placeholder="placeholder" v-model="text" />
</template>

<script setup>
//=============================
// import
//=============================
import {
  ref,
  watch,
} from 'vue';

//=============================
// props, emit
//=============================
const props = defineProps({
  text: String,
  placeholder: String,
})
const emit = defineEmits([
  'update:text'
]);

//=============================
// consts
//=============================
const text = ref('');

//=============================
// watch
//=============================
watch( text, () => {
  emit('update:text', text.value);
});


</script>

<style lang="scss" scoped>
input {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
  transition: border-color 0.3s;
  &:focus {
    border-color: #4a90e2;
   }
}
</style>
