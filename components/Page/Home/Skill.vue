<template>
    <div class="skill">
        <Icon class="skill-icon" :name="names[name]" />
        <p class="skill-name">{{ name.toUpperCase() }}</p>
    </div>
</template>

<script setup>

let names = {
    html: "akar-icons:html-fill",
    c: "devicon-plain:c",
    cpp: "mdi:language-cpp",
    css: "akar-icons:css-fill",
    django: "akar-icons:django-fill",
    figma: "akar-icons:figma-fill",
    flutter: "material-symbols:flutter",
    github: "mdi:github",
    js: "akar-icons:javascript-fill",
    kotlin: "mdi:language-kotlin",
    next: "akar-icons:nextjs-fill",
    nuxt: 'simple-icons:nuxtdotjs',
    p5js: "simple-icons:p5dotjs",
    python: 'akar-icons:python-fill',
    react: "akar-icons:react-fill",
    "sass/scss": "akar-icons:sass-fill",
    vercel: 'akar-icons:vercel-fill',
    vscode: 'akar-icons:vscode-fill',
    vue: "akar-icons:vue-fill",
tailwind:"mdi:tailwind"
}

let { name } = defineProps({
    name: String
})


</script>
