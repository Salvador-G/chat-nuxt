import axios from 'axios';

export const state = () => ({
  messages: []  // Almacena los mensajes del chat
});

export const getters = {
  // Obtiene todos los mensajes del chat
  getMessages(state) {
    return state.messages;
  }
};

export const mutations = {
  ADD_MESSAGE(state, message) {
    // Asegúrate de que el mensaje siempre tenga la estructura correcta
    if (!message.timestamp) {
      message.timestamp = new Date().toLocaleString(); // Asignar la marca de tiempo si no está definida
    }
    state.messages.push(message);  // Añadir el mensaje al estado
  }
};

export const actions = {
  // Acción que se llama desde los componentes para agregar un mensaje
  addMessage({ commit }, message) {
    // Podrías enviar el mensaje a un backend si lo necesitas con axios
    // axios.post('/api/messages', message).then(() => {
        console.log("mensaje enviado", message);
      commit('ADD_MESSAGE', message);  // Agrega el mensaje localmente
    // });
  }
};