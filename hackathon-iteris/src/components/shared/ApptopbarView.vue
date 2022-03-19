<template>
  <div class="app-top-bar">
    <v-app-bar color="light-blue darken-3" dark>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-toolbar-title>Compre de quem faz</v-toolbar-title>
      <v-spacer />
      <v-btn
        v-on="on"
        v-bind="attrs"
        color="transparent"
        small
        fab
        @click="darkMode"
      >
        <v-icon v-if="!$vuetify.theme.dark" class="mr-1"
          >mdi-moon-waxing-crescent</v-icon
        >
        <v-icon v-else>mdi-white-balance-sunny</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group v-model="group" active-class="light-blue lighten-3">
          <router-link to="/">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Home</v-list-item-title>
            </v-list-item>
          </router-link>

          <router-link to="/Login">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-account</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Login</v-list-item-title>
            </v-list-item>
          </router-link>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    
          <router-link to="/Cadastrar">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-account</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Cadastrar</v-list-item-title>
            </v-list-item>
          </router-link>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  
          <router-link to="/Comprar">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-account</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Comprar</v-list-item-title>
            </v-list-item>
      
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>  
  </div>
</template>


<script>
export default {
  data: () => ({
    drawer: false,
    group: null,
  }),
  methods: {
    darkMode() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    },
  },
};
</script>

<style scoped>
.app-top-bar a {
  text-decoration: none;
}
</style>