<template>
    <article class="home-projectCard" :data-even="order % 2 === 1">
        <h3 class="home-projectCard-title">{{ project.name }}</h3>
        <NuxtImg :src="project.img" format="webp" loading="lazy" class="home-projectCard-image" :alt="project.name" />
        <div class="home-projectCard-content">
            <p class="home-projectCard-desc">{{ project.desc }}</p>
            <div class="home-projectCard-links">
                <NuxtLink :to="project.preview" class="[ home-projectCard-preview ] [ home-projectCard-link ]" target="_blank">Live Preview
                </NuxtLink>
                <NuxtLink :to="project.detailPath" class="[ home-projectCard-detail ] [ home-projectCard-link ]">Learn More
                    <Icon class="home-projectCard-link-arrow" name="mingcute:right-line" />
                </NuxtLink>
            </div>
        </div>
    </article>
</template>

<script setup>

let { project,order } = defineProps({
    project: Object,
    order : Number
})
</script>