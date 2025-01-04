<template>
    <v-container>
        <v-card>
            <v-card-title>Bitácora de Mensajes</v-card-title>
            <v-card-text>
                <div v-for="(msg, index) in messages" :key="index">
                    <strong>{{ msg.name }} [<small>{{ msg.timestamp }}</small> <!-- Mostrar timestamp aquí -->]:</strong> {{ msg.text }}
                    
                </div>
                <br>
                
            </v-card-text>
        </v-card>
    </v-container>
</template>
<script>
export default {
    props: {
        messages: {
            type: Array,
            required: true
        }
    },
    mounted() {
        console.log('Mensajes recibidos en ChatLog:', this.messages); // Verifica los mensajes que se reciben
    },
};
</script>