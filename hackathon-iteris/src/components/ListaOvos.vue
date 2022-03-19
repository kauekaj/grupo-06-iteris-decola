<template>
  
    <div class="card">
        <v-list v-for="ovo of listaOvos" :key="ovo.id">
            <v-card
                class="mx-auto"
                max-width="344">
                
                    <img :src="ovo.imagem" :alt="ovo.id">
                
                <v-card-title>
                    {{ovo.nome}}
                </v-card-title>

                <v-card-subtitle>
                    {{local.nome}}
                </v-card-subtitle>

                <v-card-actions>
                <v-btn
                    color="orange lighten-2"
                    text
                >
                    Saiba Mais
                </v-btn>

                <v-spacer></v-spacer>

                <v-btn
                    icon
                    @click="show = !show"
                >
                    <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                </v-btn>

                </v-card-actions>

                <v-expand-transition>
                <div v-show="show">
                
                    <v-divider></v-divider>

                    <v-card-text>
                    {{local.cep}}
                    {{ovo.preco}}
                    {{ovo.sabor}}
                
                    </v-card-text>
                </div>

                <button v-on=click> Comprar </button>
                </v-expand-transition>
            </v-card>
        </v-list> 
    </div>
  
</template>

<script>
  export default {
    name:'ListaOvos',
    props: {
        ordemOvos: {
            type:Array,
            required: true
        }
    },
    data: () => ({
      show: false,
    }),
  }
</script>

<style scoped>

</style>