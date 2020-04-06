<template>
  <v-dialog v-model="dialog" width="600px">
    <template v-slot:activator="{ on }">
      <v-btn color="warning" dark v-on="on">Edit</v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="headline">Edit ad</span>
      </v-card-title>
      <v-card-text>
              <v-text-field
                name="title"
                label="Title"
                type="text"
                v-model="editedTitle"
              ></v-text-field>
              <v-textarea
                name="description"
                label="Description"
                type="text"
                multi-line
                v-model="editedDescription"
              ></v-textarea>
            </v-card-text>
      
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn flat @click="onCancel">Cancel</v-btn>
        <v-btn flat color="success" @click="onSave">Save</v-btn>
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
      editedDescription: this.ad.description,
      editedTitle: this.ad.title
    };
  },
  methods: {
      onCancel () {
      this.editedDescription = this.ad.description
      this.editedTitle = this.ad.title
      this.dialog = false
    },
      onSave () {
      if (this.editedDescription !== '' && this.editedTitle !== '') {

        this.$store.dispatch('updateAd', {
          title: this.editedTitle,
          description: this.editedDescription,
          id: this.ad.id
        })

        this.dialog = false
      }
    }
  }
};
</script>
