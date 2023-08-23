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
    vue: "akar-icons:vue-fill"
}

let { name } = defineProps({
    name: String
})


</script>

<style lang="scss" scoped >
$screenSize: (
    lg: 1120px,
    md: 768px,
    sm: 500px
);

@mixin mq($breakpoint: "md") {
    @media (width > map-get($screenSize, $breakpoint)) {
        @content;
    }
}


.skill {
    padding: var(--size-4);
    display: inline-flex;
    flex-direction: column;
    gap: var(--size-4);
    align-items: center;

    background-color: hsl(var(--secondary));
    color: hsl(var(--accent));
    border-radius: var(--size-2);


    flex-shrink: 0;
    // box-shadow: var(--shadow-md);    
    &-icon {
        font-size: var(--size-12);
        @include mq(){
            font-size: var(--size-14    );
        }
    }

    &-name {
        font-size: var(--size-4);
        
        font-weight: 700;
    }

    @include mq() {
        flex-direction: row;
    }
}

body[data-theme="dark"] .skill{
    color: hsl(var(--text));
}
</style>