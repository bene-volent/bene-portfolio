<template>
    <NuxtLayout>
        <NuxtLoadingIndicator :height="3"/>
        <NuxtPage class="main">
        </NuxtPage>
    </NuxtLayout>
</template>




<style lang="scss">
@mixin dark() {
    body[data-theme="dark"] & {
        @content;
    }
}
.nuxt-loading-indicator{
    background: hsl(var(--accent)) !important;
    top: var(--header-height) !important;
    
    @include dark(){
        background: hsl(var(--text)) !important;
    }
}

.page-enter-active,
.page-leave-active {
    transition-property: translate, scale, opacity;
    transition-duration: 500ms;
    transition-timing-function: cubic-bezier(0.785, 0.135, 0.15, 0.86);
    transform-origin: left;
}

.page-enter-from,
.page-leave-to {
    opacity: 0;
    translate: 0 5px;
}

#__nuxt {
    display: grid;
    grid-template-rows: auto 1fr auto;

    min-height: 100vh;
}
</style>

<script setup>
useHead({
    htmlAttrs: [
        { lang: "en" }
    ],
    meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    link: [
        { rel: "icon", href: '/favicon.ico' }
    ]
});



</script>
