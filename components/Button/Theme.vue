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

.theme-picker {
    aspect-ratio: 1;
    font-size: var(--size-6);

    border-radius: var(--size-2);

    width: var(--size-12);
    aspect-ratio: 1;

    background-color: hsl(var(--text));
    color: hsl(var(--back));

    box-shadow: var(--shadow-inner);

    font-size: var(--size-8);

    &[data-theme="light"] {
        background-color: hsl(var(--accent));

        color: #f0f0f0;
    }

    &:active {
        translate: 0 3px;
    }

    &:focus{
        scale: 1.05;
    }

}

.icon-container {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>