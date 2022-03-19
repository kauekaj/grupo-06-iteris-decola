<template>
  <v-app>
    <ApptopbarView/>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import ApptopbarView from '../components/shared/ApptopbarView.vue'

export default {
  name: 'App',
  components: {
    ApptopbarView
  }
};
</script>

<style>
.link-home {
  color: white !important;
  text-decoration: none;
}
</style>

