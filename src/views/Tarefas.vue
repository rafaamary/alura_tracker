<template>
    <Formulario @aoSalvarTarefa="salvarTarefa" />
    <!-- Lista de Tarefas -->
    <div class="lista">
        <Box v-if="listaEstaVazia">
        Você não esta muito produtivo hj! :(
        </Box>
        <Tarefa v-for="(tarefa, index) in tarefas" :key="index" :tarefa="tarefa" />
    </div>
</template>

  <script lang="ts">
  import { defineComponent } from 'vue';
  import Formulario from '../components/Formulario.vue';
  import Tarefa from '../components/Tarefa.vue';
  import ITarefa from '../interfaces/ITarefa';
  import Box from '../components/Box.vue';

  export default defineComponent({
    name: 'App',
    components: {
      Formulario,
      Tarefa,
      Box
    },
    data() {
      return {
        tarefas: [] as ITarefa[],
      }
    },
    computed: {
      listaEstaVazia() : boolean{
        return this.tarefas.length === 0
      }
    },
    methods: {
      salvarTarefa(tarefa: ITarefa) {
        this.tarefas.push(tarefa)
      },
    }
  });
  </script>

  <style>
  /* estilo do componente */
  .lista {
    padding: 1.25rem;
  }
  main {
    --bg-primario: #fff;
    --texto-primario: #000;
  }
  main.modo-escuro {
    --bg-primario: #2b2d42;
    --texto-primario: #ddd;
  }
  .conteudo {
    background-color: var(--bg-primario);
  }
  </style>
