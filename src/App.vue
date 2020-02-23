<template>
 <v-app>
   <v-navigation-drawer app temporary v-model="drawer">
     <v-list>
      <v-list-item
      v-for="link of links"
      :key="link.title"
      :to="link.url" 
      >
        <v-list-item-icon>
          <v-icon >{{link.icon}}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title v-text="link.title"></v-list-item-title>
        </v-list-item-content>

      </v-list-item>
    </v-list>
   </v-navigation-drawer>
   <v-card
    flat
    
    tile
  >
   <v-toolbar dark color="primary" >
      <v-app-bar-nav-icon class="hidden-md-and-up"
        @click="drawer=!drawer">
      </v-app-bar-nav-icon>

      <v-toolbar-title>Title</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn text small v-for="link of links"
        :key="link.title"
        :to="link.url"
        >
          <v-icon left>{{link.icon}}</v-icon>
          {{link.title}}</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    </v-card>
   <v-content>
     <router-view></router-view>
   </v-content>
 </v-app>
</template>

<script>
export default {
  data () {
    return {
      drawer: false,
      links: [
        {title: 'Login', icon: 'mdi-lock', url: '/login'},
        {title: 'Registration', icon: 'mdi-face', url: '/registration'},
        {title: 'Orders', icon: 'mdi-bookmark-outline', url: '/orders'},
        {title: 'New ad', icon: 'mdi-playlist-plus', url: '/new'},
        {title: 'My ad', icon: 'mdi-format-list-bulleted', url: '/list'},
        
      ]
    }
  }
}
</script>