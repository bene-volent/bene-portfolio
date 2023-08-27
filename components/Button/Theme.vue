<template>
    <button ref="themePicker" type="button" class="theme-picker" :data-theme="lightTheme ? 'light' : 'dark'"
        @click="changeColor">
        <span class="sr-only">Change Theme <span class="sr-only">to {{ lightTheme ? 'dark' : 'light' }} mode</span></span>
        <span class="icon-container">
            <Icon v-if="!lightTheme" class="icon" name="material-symbols:light-mode" />
            <Icon v-else class="icon" name="material-symbols:dark-mode" />
        </span>
    </button>
</template>

<script setup>
import { useLocalStorage } from '@vueuse/core';

let lightTheme = ref(true)
let themePicker = ref(null)

let isLightTheme = useLocalStorage("bene-portfolio-theme",true)

const changeColor = () => {
    lightTheme.value = !lightTheme.value
    document.body.dataset.theme = lightTheme.value ? 'light' : 'dark'
    document.querySelector("html").setAttribute("class", lightTheme.value ? 'light' : 'dark')
    // useLocalStorage()
    isLightTheme.value = lightTheme.value
};

onMounted(() => {
    if (!isLightTheme.value)
    {
        changeColor()
    }
})


</script>
