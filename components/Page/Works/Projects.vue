<template>
    <PageSectionContainer class="works-projects" aria-label="works-projects">
        <button type="button" class="works-projects-sort" :data-latest="newFirst" @click="projectSortClickHandler">
            {{ newFirst ? "Latest" : "Oldest" }} First
        </button>

        <div class="works-projects-wrapper" :data-latest="newFirst">
            <PageWorksProjectCard v-for="project = { title, description, img, path } in projects" :project="project" />

        </div>

    </PageSectionContainer>
</template>

<script setup>

let newFirst = ref(true)

const projectSortClickHandler = () => {
    newFirst.value = !newFirst.value
}



const { data } = await useAsyncData("content-works", () => queryContent('/works').find())
const projects = data.value
projects.sort((a, b) => a.index - b.index)
</script>
