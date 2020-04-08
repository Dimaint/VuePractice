<template>
  <v-container>
    <v-layout row>
      <v-flex xs12>
        <v-card v-if="!loading">
          <v-img
            contain
            :src="ad.imageSrc"
            height="350px"
          ></v-img>
          <v-card-text>
              <h1 class="text--primary">{{ad.title}}</h1>
              <p>{{ad.description}}</p>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            
            <adEditAdModal :ad="ad" v-if="isOwner"></adEditAdModal>
            <app-buy-modal :ad="ad"></app-buy-modal>
          </v-card-actions>
        </v-card>
        <div v-else>
    <v-container>
      <v-layout row>
        <v-flex xs12 class="text-center pt-7">
          <v-progress-circular
            :size="100"
            :width="3"
            color="green"
            indeterminate
          ></v-progress-circular>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import EditAdModal from './EditAdModal'

export default {
  props: ['id'],
  computed: {
    ad () {
      // eslint-disable-next-line no-unused-vars
      const id = this.id
      return this.$store.getters.adById(id)
    },
    loading () {
      return this.$store.getters.loading
    },
    isOwner () {
      return this.ad.ownerId === this.$store.getters.user.id
    }
  },
  components: {
    adEditAdModal: EditAdModal
  }
}
</script>
