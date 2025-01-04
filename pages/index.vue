<template>
  <v-container class="d-flex justify-center align-center full-height">
    <v-btn color="primary" @click="openDialog">Comenzar</v-btn>
    <v-overlay :value="dialogVisible" @click:outside="dialogVisible = false">
      <StartDialog :showDialog="dialogVisible" @close-dialog="dialogVisible = false" />
    </v-overlay>
  </v-container>
</template>

<script>
import StartDialog from '@/components/StartDialog.vue';

export default {
  data() {
    return {
      dialogVisible: false
    };
  },
  components: {
    StartDialog
  },
  methods: {
    openDialog() {
      this.dialogVisible = true;
    }
  }
};
</script>

<style lang="scss" scoped>
.full-height {
  height: 100%;
}
</style>