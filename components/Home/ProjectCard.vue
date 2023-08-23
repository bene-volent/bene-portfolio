<template>
    <article class="projectCard">
        <h3 class="projectCard-title">{{ project.name }}</h3>
        <NuxtImg :src="project.img" format="webp" loading="lazy" class="projectCard-image" :alt="project.name" />
        <div class="projectCard-content">
            <p class="projectCard-desc">{{ project.desc }}</p>
            <div class="projectCard-links">
                <NuxtLink :to="project.preview" class="[ projectCard-preview ] [ projectCard-link ]" target="_blank">Live Preview
                </NuxtLink>
                <NuxtLink :to="project.detailPath" class="[ projectCard-detail ] [ projectCard-link ]">Learn More
                    <Icon class="projectCard-link-arrow" name="mingcute:right-line" />
                </NuxtLink>
            </div>
        </div>
    </article>
</template>

<script setup>

let { project } = defineProps({
    project: Object
})
</script>