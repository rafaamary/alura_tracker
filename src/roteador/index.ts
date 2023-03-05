import { RouteRecordRaw, createRouter, createWebHashHistory } from "vue-router";
import Tarefas from '../views/Tarefas.vue'
import Projetos from '../views/Projetos.vue'

const rotas: RouteRecordRaw[] = [
    {
        path: '/tarefas',
        name: 'Tarefas',
        component: Tarefas
    },
    {
        path: '/projetos',
        name: 'ProjetosUser',
        component: Projetos
    }
]


const roteador = createRouter({
    history: createWebHashHistory(),
    routes: rotas
})

export default roteador;