<template> <!-- html -->
    <header>
        <h1>
            <img src="../assets/logo.png" alt="Alura Tracker">
        </h1>
        <div class="has-text-centered">
            <button class="button" @click="alterarTema">
                {{textoBotao}}
            </button>
        </div>
        <nav class="panel mt-5">
            <ul>
                <li>
                    <router-link to="/tarefas" class="link">
                        <i class="fas fa-tasks"></i>
                        tarefas
                    </router-link>
                </li>
                <li>
                    <router-link to="/projetos" class="link">
                        <i class="fas fa-project-diagram"></i>
                        projetos
                    </router-link>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script lang="ts"> /* javascript no caso typescript*/
    import { defineComponent } from 'vue'

    export default defineComponent({
        name: 'BarraLateral',
        emits: ['aoTemaAlterado'],
        data() {
            return {
                modoEscuroAtivo: false
            }
        },
        computed: {
            textoBotao() {
                if (this.modoEscuroAtivo) {
                    return 'Desativar modo escuro'
                }
                return 'Ativar modo escuro'
            }
        },
        methods: {
            alterarTema() {
                this.modoEscuroAtivo = !this.modoEscuroAtivo
                this.$emit('aoTemaAlterado', this.modoEscuroAtivo) /* componente filho se conectar com o pai*/
            }
        }
    })
</script>

<style scoped> /* estilo do componente CSS */
    header {
        padding: 1rem;
        background-color: #0d3b66; /* cor do fundo */
        width: 100%; /* largura */
        height: 100vh; /* altura */
        text-align: center;
    }

    @media only screen and (max-width: 768px) {
        header {
            padding: 2.5rem; /* preenchimento */
            height: auto; /* altura */
        }
    }

    .panel li {
        margin: 8px 0;
    }
    .link {
        color: #fff;
    }
    .link.hover {
        color: #FAF0CA;
    }
    .link.router-link-active {
        color: #FAF0CA;
    }
</style>