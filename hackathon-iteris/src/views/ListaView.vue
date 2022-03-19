<template>
    <v-container>
        <h2 class="text-h5 text-center mb-3 mt-5">
            EasterEgg Lover
        </h2>

        <v-simple-table>
            <template v-slot:default>
            <thead>
                <tr>
                    <th colspan="2" class="text-left">
                        Produtos
                    </th>
                    <th class="text-right">
                        Dados
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item of ListaView" :key="item.id">    
                    <td>
                        <v-avatar size="24">
                            <img
                                :src="item.imagem"
                                :alt="item.nome"
                            >
                        </v-avatar>
                        <span class="pl-2">{{ item.nome }}</span>
                        
                    </td>       
                    <td class="text-right">{{ item.local }}</td>
                </tr>
            </tbody>
            </template>
        </v-simple-table>


    </v-container>
</template>

<script>
export default {
    name: 'ListaView',
    data() {
        return {
            listaOvos: []
        }
    },

    created() {
        fetch('https://it3-hbn-default-rtdb.firebaseio.com/ovosPascoa.json?print=pretty')
        .then(resposta => resposta.json())
        .then(json => {
            this.listaOvos = json;
        });
    }
}
</script> 

<style scoped>

</style>