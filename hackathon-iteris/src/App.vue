<template>
  <v-app>
    <ApptopbarView/>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>

import ApptopbarView from '../components/shared/ApptopbarView.vue'

export default {
  nome: 'App',
  components: {
    ApptopbarView,
  }
};
</script>