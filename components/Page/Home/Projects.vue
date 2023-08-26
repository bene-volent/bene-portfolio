<template>
    <PageSectionContainer class="home-projects" aria-label="projects">
        <div class="home-projects-headContent">
            <h2 class="section-heading">Featured Works</h2>
            <p class="home-projects-subtitle">These are some of my favourite <span class="[ italic bold ]">Frontend Projects</span> that give an
                idea about my attention to detail, my
                current skills and tools I use to create such projects.
                You can read about why and how these projects are made in details by click the explain button on each
                project.</p>
        </div>
        <ul class="home-projects-list">
            <li v-for="(project,index) in projects" class="[ home-projects-item ] [ load-on-scroll ]">
                <PageHomeProjectCard :project="project" :order="index"/>
            </li>
        </ul>
    </PageSectionContainer>
</template>

<script setup>
const { data } = await useAsyncData('home', () => queryContent('/').findOne())
const projects = data.value.projects

</script>
