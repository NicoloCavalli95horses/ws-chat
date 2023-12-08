<template>
  <div class="main">
    <div class="chat">
      <div v-for="(msg, i) in messages" :key="i" class="cloud-text">
        <p> {{ msg }} </p>
      </div>
    </div>


    <div class="input-wrapper">
      <InputText class="input" placeholder="your message..." v-model:text="text" />
      <Btn class="l-12" @click="onClick">Send</Btn>
    </div>
  </div>
</template>

<script setup>
//=============================
// import
//=============================
import {
  onMounted,
  ref,
} from 'vue';

import Btn       from '@/components/Btn.vue';
import InputText from '@/components/InputText.vue';

//=============================
// consts
//=============================
const url = 'wss://ws-chat-ntws.onrender.com'; //to be used in production
// const url = 'ws://localhost:3000';

//=============================
// consts
//=============================
const text = ref( '' );
const messages = ref( [] );

let socket;


//=============================
// functions
//=============================
function onClick() {
  messages.value.push( text.value );
  socket.send( text.value );
  text.value = '';
}

function initWebSocket() {
  socket = new WebSocket( url );

  // connection open
  socket.addEventListener('open', (event) => {
    console.log('Connected to WebSocket server');
  });

  // incoming messages
  socket.addEventListener('message', async (event) => {
    const textMsg = await blobToText(event.data);
    messages.value.push( textMsg );
  });
}

function blobToText(blob) {
  return new Promise( (resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => resolve(e.target.result);
    reader.onerror = (e) => reject(e.target.error);
    reader.readAsText(blob);
  });
}

//=============================
// life cycle
//=============================
onMounted(() => {
  initWebSocket();
});

</script>

<style lang="scss" scoped>
.main {
  .cloud-text {
    width: calc( 100% - 24px );
    border-radius: 12px;
    margin: 12px;
    background-color: #fff;
    border: 1px solid #999;
    p {
      color: var(--dark-text);
      padding: 12px;
    }
  }
  .input-wrapper {
    position: absolute;
    bottom: 12px;
    width: calc( 100% - 24px );
    margin: 0 12px;
    display: flex;
  }
}
</style>