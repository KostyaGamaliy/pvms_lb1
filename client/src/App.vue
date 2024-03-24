<template>
  <div class="centered-block">
    <input type="text" v-model="inputData" placeholder="Введіть дані">
    <button @click="sendRequest">Надіслати запит</button>
    <div v-if="responseData">{{ responseData }}</div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'App',
  data() {
    return {
      inputData: '',
      responseData: ''
    };
  },
  methods: {
    async sendRequest() {
      try {
        const response = await axios.post('http://192.168.56.101:3333/findDecimalNumbers', { data: this.inputData }, {
          crossDomain: true
        });
        this.responseData = response.data;
      } catch (error) {
        console.error('Помилка при відправленні запиту:', error);
      }
    }
  }
}
</script>

<style>
.centered-block {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.hidden {
  display: none;
}
</style>
