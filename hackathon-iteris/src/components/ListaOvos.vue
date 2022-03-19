<template>
  
    <div class="card">
        <v-list v-for="ovo of listaOvos" :key="ovo.id">
        
            <v-card
                class="mx-auto"
                max-width="344">
                
                    <img :src="ovo.imagem" :alt="ovo.nome">
                
                <v-card-title>
                    {{ovo.nome}}
                </v-card-title>

                <v-card-subtitle>
                    1,000 miles of wonder
                </v-card-subtitle>

                <v-card-actions>
                <v-btn
                    color="orange lighten-2"
                    text
                >
                    Explore
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
                    
                    {{nome}}
                    </v-card-text>
                </div>
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

<script>
  export default {
    name:'ListaOvos',
    props: {
        ordemOvos: {
            type:Array,
            required: true
        }
    },
  }
</script>

<style scoped>



</style>