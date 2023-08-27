<template>
    <button aria-controls="main-navigation" type="button" class="hamburger sm-only" @click="changeOpen()" :data-open="open">
        <span class="sr-only">navigation control</span>
        <span class="top"></span>
        <span class="bottom"></span>
    </button>
</template>

<script setup>
const open = ref(false)
const { navControl } = defineProps({
    navControl: Function
})
const changeOpen = () => {
    open.value = !open.value
    navControl()
}
</script>

