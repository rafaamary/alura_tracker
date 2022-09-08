<template>
    <div class="box has-text-weight-bold" :style="estilos">
        <slot></slot>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Box-Nome',
    data() {
        return {
            estilos: {
                background: '#FAF0CA'
            }
        }
    }
})
</script>

<!-- 
    faz a mesma coisa que o 'estilos' 
<style scoped>
.box {
    background: #FAF0CA;
}
</style>
-->