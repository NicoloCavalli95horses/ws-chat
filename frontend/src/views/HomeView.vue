<template>
  <div class="wrapper">
    <h1>Ws chat</h1>
    <input type="text" id="messageInput" placeholder="Type your message">
    <button @click="sendMessage">Send</button>
    <ul id="messages"></ul>
  </div>
</template>

<script setup>
  // WebSocket connection
  // const url = 'wss://test-ws-t98j.onrender.com';
  const url = 'ws://localhost:3000';
  const socket = new WebSocket(url);

  // Event listener for connection open
  socket.addEventListener('open', (event) => {
    console.log('Connected to WebSocket server');
  });

  // Event listener for incoming messages
  socket.addEventListener('message', async (event) => {
    const messagesList = document.getElementById('messages');
    const newMessage = document.createElement('li');
    newMessage.textContent = await blobToText(event.data);
    messagesList.appendChild(newMessage);
  });

  function blobToText(blob) {
    return new Promise((resolve, reject) => {
      var reader = new FileReader();

      reader.onload = function (event) {
        resolve(event.target.result);
      };

      reader.onerror = function (event) {
        reject(event.target.error);
      };

      reader.readAsText(blob);
    });
  }

  // Function to send a message
  function sendMessage() {
    const messagesList = document.getElementById('messages');
    const messageInput = document.getElementById('messageInput');
    const newMessage = document.createElement('li');
    const message = messageInput.value;
    newMessage.textContent = message;
    messagesList.appendChild(newMessage);

    // Send the message to the server
    socket.send(message);

    // Clear the input field
    messageInput.value = '';
  }
</script>

<style scoped>
  .wrapper {
    color: white;
  }
</style>