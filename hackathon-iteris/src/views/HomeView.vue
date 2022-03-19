<template>
  <div class="HomeView">
    <v-container>
    <br>
      <h2 class="text-h5 text-center mb-3 mt-5">EASTER EGG LOVER 🐰</h2>
      <br>
        <p>Difícil encontrar alguém que não se renda ao sabor incomparável e insubstituível do chocolate.</p> 
        <br>
        <p>E pode ser uma boa opção para presentear amigos e familiares.</p>
        <br>
        <p>Encontre aqui uma opção que caiba dentro do seu bolso e que seja irresistível, todos vão gostar.</p>
      <br>
    </v-container>
        <div> 
      <v-btn color="dark" elevation="2" large x-large v-on:click="telaCadastro">  CADASTRA-SE  </v-btn>
    </div>

    <br>
    <div>
      <v-btn color="dark" elevation="2" large x-large v-on:click="telaLogin">     LOGIN     </v-btn>
    </div>
    <br>
     <v-img
      class="inicio-imagem mb-4"
      src="https://claudia.abril.com.br/wp-content/uploads/2020/01/coelho-1.jpg">
    </v-img>
    <br>
  </div>
</template>

<script>
import router from '@/router';
import LoginViewVue from './LoginView.vue';
export default {
  name: "HomeView",
    data() {
        return {

        }
    },
    methods: {
        telaCadastro() {
            
        },
        telaLogin() {
        //    <router-link to ="/LoginView"/>
        }
    }
};
</script>

<style scoped>
.inicio-imagem {
  border-radius: 300px;
}
.HomeView {
    background-color: khaki;
}
</style>