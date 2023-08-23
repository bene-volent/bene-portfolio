<template>
    <button ref="themePicker" type="button" class="theme-picker" :data-theme="lightTheme ? 'light' : 'dark'"
        @click="changeColor">
        <span class="sr-only">Change Theme <span class="sr-only">to {{ lightTheme ?'dark':'light' }} mode</span></span>
        <span class="icon-container">
            <Icon v-if="!lightTheme" class="icon" name="material-symbols:light-mode" />
            <Icon v-else class="icon" name="material-symbols:dark-mode" />
        </span>
    </button>
</template>

<script setup>
import { useMediaQuery } from '@vueuse/core';

let lightTheme = ref(true)
const changeColor = () => {
    lightTheme.value = !lightTheme.value
    document.body.dataset.theme = lightTheme.value ? 'light' : 'dark'
};

onMounted(() => { if (useMediaQuery("prefers-color-scheme:dark").value) changeColor() })


</script>



<style lang="scss" scoped>
$screenSize: (
    lg: 1120px,
    md: 768px,
    sm: 375px
);

@mixin mq($breakpoint: "md") {
    @media (width > map-get($screenSize, $breakpoint)) {
        @content;
    }
}

</style>