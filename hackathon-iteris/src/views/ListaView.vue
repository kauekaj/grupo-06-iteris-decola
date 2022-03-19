<template>
    <v-container>
        <h2 class="text-h5 text-center mb-3 mt-5">
            EasterEgg Lover
        </h2>
        <ListaOvos :item="listaView"/>
    </v-container>
</template>

<script>
import ListaOvos from '../components/ListaOvos.vue'

export default {
    name: 'ListaOvos',
    components: {
        ListaOvos
    },
    data() {
        return {
            listaView: []
        }
    },

    created() {
        fetch('https://it3-hbn-default-rtdb.firebaseio.com/ovosPascoa.json')
        .then(resposta => resposta.json())
        .then(json => {
            this.listaView = json;
        });
    }
}
</script> 

<style scoped>

</style>