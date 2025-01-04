<template>
    <v-container class="d-flex justify-center align-center full-height">
        <ChatPage :person1="person1" :person2="person2"/>
    </v-container>
    
</template>
<script>
import ChatPage from '@/components/chatPage.vue';

export default {
    async asyncData({ params }) {
    // Verificar si params.names existe y tiene el formato correcto
    let person1 = 'Persona 1';
    let person2 = 'Persona 2';

    if (params.names) {
      const namesArray = params.names.split(',');

      // Asegurarse de que hay dos nombres en la URL
      if (namesArray.length >= 2) {
        person1 = namesArray[0];
        person2 = namesArray[1];
      }
    }

    return {
      person1,
      person2
    };
  },
  components: {
    ChatPage
  }
};
</script>