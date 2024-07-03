<template>
  <div id="app">
    <div v-if="showMenu">
      <button @click="routeToNPC(1)">Show me the route to the first NPC</button>
      <button @click="routeToNPC(2)">Show me the route to the second NPC</button>
    </div>
    <div v-if="showInteraction">
      <p>{{ question }}</p>
      <button v-for="(answer, index) in answers" :key="index" @click="handleAnswer(index)">
        {{ answer.text }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showMenu: false,
      showInteraction: false,
      question: '',
      answers: []
    };
  },
  methods: {
    routeToNPC(_npcId) {  // eslint-disable-line no-unused-vars
      this.showMenu = false;
      // Additional logic here, if needed
    },
    handleAnswer(index) {
      const action = this.answers[index].action;
      if (action === 'spawnCar') {
        console.log('Spawning car...'); // Replace with actual spawn logic
      } else if (action === 'showAnimation') {
        console.log('Showing animation...'); // Replace with actual animation logic
      }
    },
    checkKeyPress(event) {
      if (event.key === 'M') {
        this.showMenu = true;
      }
    }
  },
  mounted() {
    window.addEventListener('keydown', this.checkKeyPress);
  },
  beforeUnmount() {
    window.removeEventListener('keydown', this.checkKeyPress);
  }
};
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
