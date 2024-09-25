<template>
    <v-container class="d-flex justify-center align-center full-height">
        <v-row justify="center">
            <v-dialog v-model="dialog" persistent max-width="600px" @click:outside="closeDialog">

                <v-card>
                    <v-card-title>
                        <span class="text-h5">Nuevo Chat</span>
                    </v-card-title>
                    <v-card-text>
                        <v-form ref="form" v-model="valid" lazy-validation>
                            <v-container>
                                <v-row>
                                    <v-col cols="12">
                                        <v-text-field label="Nombre Persona 1" v-model="person1"
                                            :rules="[rules.required]" required></v-text-field>
                                    </v-col>
                                    <v-col cols="12">
                                        <v-text-field label="Nombre Persona 2" v-model="person2"
                                            :rules="[rules.required]" required></v-text-field>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </v-form>

                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue darken-1" text @click="closeDialog">
                            Cancelar
                        </v-btn>
                        <v-btn color="primary" dark @click="validate">
                            Iniciar Chat
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-row>
    </v-container>
</template>
<script>
export default {
    props: {
        showDialog: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            valid: true,
            rules: {
                required: value => !!value || 'Este campo es obligatorio',
            },
            dialog: this.showDialog,
            person1: '',
            person2: ''
        };
    },
    watch: {
        showDialog(val) {
            this.dialog = val;
        }
    },
    methods: {
        validate() {
            const form = this.$refs.form;
            form.validate(); // Ejecuta la validación
            
            if (this.valid) {
                this.startChat(); // Si es válido, inicia el chat
            }
        },
        startChat() {
            if (this.person1 && this.person2) {
                // Redirigir a la página del chat con los nombres de las personas
                this.$router.push({
                    name: 'chat',
                    query: { person1: this.person1, person2: this.person2 }
                });
            }
        },
        closeDialog() {
            this.dialog = false;
            this.$emit('close-dialog'); // Emitimos el evento de cierre
        }
    }
}
</script>
<style></style>