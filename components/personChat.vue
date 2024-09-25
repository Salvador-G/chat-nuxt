<template>
    <v-card>
        <v-card-title>{{ name }}</v-card-title>
        <v-card-text>
            <v-textarea v-model="message" placeholder="Escribe un mensaje..." />
        </v-card-text>
        <v-card-actions>
            <v-btn @click="sendMessage" dark color="blue">Enviar</v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            message: ''
        };
    },
    methods: {
        sendMessage() {
            if (this.message.trim() !== '') {
                this.$store.dispatch('addMessage', {
                    name: this.name,
                    text: this.message
                });
                this.message = '';  // Limpiar el campo después de enviar
            }
        }
    }
};
</script>
<style></style>