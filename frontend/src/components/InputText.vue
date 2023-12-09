<template>
  <div class="main-input">
    <input
      type="text"
      :value="text"
      @input="(ev) => emit('update:text', ev.target.value)"
    />
    <p class="label" :class="{ 'animate' : text.length }">{{ placeholder }}</p>
  </div>
</template>

<script setup>
//=============================
// import
//=============================

//=============================
// props, emit
//=============================
const props = defineProps({
  text: String,
  placeholder: String,
});

const emit = defineEmits([
  "update:text",
]);

</script>

<style lang="scss" scoped>
$primary: var(--primary);
$secondary: var(--secondary);
$white: #fff;
$gray: #9b9b9b;

.main-input {
  padding: 15px 0;
  width: 100%;
  min-width: 150px;
  position: relative;
  input[type="text"] {
    width: 100%;
    border: 0;
    border-bottom: 2px solid $gray;
    outline: 0;
    padding: 7px 0;
    background: transparent;
    transition: border-color 0.2s;
    color: $gray;
    &:focus {
     padding-bottom: 6px;
     border-width: 3px;
     border-image: linear-gradient(to right, $primary, $secondary);
     border-image-slice: 1;
    }
    &::placeholder {
      color: transparent;
    }
  }
  p.label {
    position: absolute;
    top: 50%;
    color: $gray;
    transform: translate(0, -50%);
    color: $gray;
    touch-action: none;
    z-index: -1;
    &.animate {
      position: absolute;
      top: 0;
      display: block;
      transition: 0.2s;
      color: $primary;
      font-weight: 700;
    }
  }
}

</style>
