<template>
  <div class="app-top-bar">

    <v-app-bar app color="green" dark>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-toolbar-title>
        <router-link class="link-home" to="/">
        Easter egg Lovers 🥕
        </router-link>
      </v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group v-model="group" active-class="green--text text--lighten-2">
    
          <router-link to="/">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
              </v-list-item-icon>
              <v-list-item-title>
              HomeView
              </v-list-item-title>
            </v-list-item>
          </router-link>

        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
<<<<<<< HEAD
=======
    
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
>>>>>>> 3b131be22ef7ab59cbc9b2a30649ae6a4ece6ffe
  </div>
</template>

<script>
export default {
  name: 'ApptopbarView',
  data() {
    return {
      drawer: false,
      group: null,
    }
  }
}
</script>

<style scoped>
.app-top-bar a {
  text-decoration: none;
}
</style>
