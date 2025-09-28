<template>
    <v-card color="white" elevation="1" height="600" width="650">
        <v-container>
            <v-row>
                <v-col>
                    <h1>Chat recorder</h1> 
                </v-col>
                <v-divider vertical></v-divider>
                <v-col><v-btn  color="warning" @click="goToHome">Regresar al Inicio</v-btn>
                </v-col>
            </v-row>

            <br>
            <v-divider></v-divider>
            <br>
            <v-row>
                <v-col>
                    <PersonChat :name="name1" />
                </v-col>
                <v-col>
                    <PersonChat :name="name2" />
                </v-col>
            </v-row>
            <v-row>
                <ChatLog :messages="messages" />
            </v-row>
        </v-container>
    </v-card>
</template>
<script>
import PersonChat from '@/components/personChat.vue';
import ChatLog from '@/components/chatLog.vue';

export default {
    props: {
        person1: {
            type: String,
            required: true,
        },
        person2: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            name1: this.$route.query.person1 || this.person1, // Usar el nombre de la query o la prop
            name2: this.$route.query.person2 || this.person2, // Usar el nombre de la query o la prop
        };
    },
    components: {
        PersonChat,
        ChatLog
    },

    computed: {
        messages() {
            return this.$store.getters.getMessages; // Obtiene los mensajes del store
        },
    },

    mounted() {
        // Establecer los nombres de las personas cuando el componente se monta
        /* const { person1, person2 } = this.$route.query;
        this.person1 = person1;
        this.person2 = person2; */
    },
    methods: {
        goToHome() {
            this.$router.push('/'); // Redirige a la ruta del inicio
        },
    },
};
</script>
<style></style>
