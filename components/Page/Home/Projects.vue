<template>
    <PageSectionContainer class="projects">
        <div class="projects-headContent">
            <h2 class="section-heading">Projects</h2>
            <p class="projects-subtitle">These are some <span class="[ italic bold ]">Frontend Projects</span> that give an
                idea about my attention to detail, my
                current skills and tools I use to create such projects.
                You can read about why and how these projects are made in details by click the explain button on each
                project.</p>
        </div>
        <ul class="projects-list">
            <li v-for="(project,index) in projects" class="[ projects-item ] [ load-on-scroll ]">
                <HomeProjectCard :project="project" :order="index"/>
            </li>
        </ul>
    </PageSectionContainer>
</template>

<script setup>
const { data } = await useAsyncData('home', () => queryContent('/').findOne())
const projects = data.value.projects

</script>
