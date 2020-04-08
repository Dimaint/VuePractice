<template>
  <v-dialog v-model="dialog" width="600px">
    <template v-slot:activator="{ on }">
      <v-btn color="primary" dark v-on="on">Buy</v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="headline">Buy it?</span>
      </v-card-title>
      <v-card-text>
        <v-text-field
          name="name"
          label="Name"
          type="text"
          v-model="name"
        ></v-text-field>
        <v-text-field
          name="phone"
          label="Your phone"
          type="text"
          v-model="phone"
        ></v-text-field>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn :disabled="localLoading" flat @click="onCancel">Cancel</v-btn>
        <v-btn
          :disabled="localLoading"
          :loading="localLoading"
          flat
          color="success"
          @click="onSave"
          >Buy</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ['ad'],
  data() {
    return {
      dialog: false,
      name: '',
      phone: '',
      localLoading: false
    };
  },
  methods: {
      onCancel () {
      this.name = ''
      this.phone = ''
      this.dialog = false
    },
      onSave () {
      if (this.name !== '' && this.phone !== '') {
        this.localLoading = true
        this.$store.dispatch('createOrder', {
          name: this.name,
          phone: this.phone,
          adId: this.ad.id,
          ownerId: this.ad.ownerId
        })
  .finally(() =>{
    this.name = ''
    this.phone = ''
    this.localLoading = false
    this.dialog = false
  })

      }
    }
  }
};
</script>
