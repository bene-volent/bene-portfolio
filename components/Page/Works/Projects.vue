<template>
    <PageSectionContainer class="projects" aria-label="projects">
        <button type="button" class="projects-sort" :data-latest="newFirst" @click="projectSortClickHandler">
            {{ newFirst ? "Latest" : "Oldest" }} First
        </button>

        <div class="projects-wrapper" :data-latest="newFirst">
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

<style lang="scss" scoped>
$screenSize: (
    lg: 1120px,
    md: 768px,
    sm: 500px
);

@mixin mq($breakpoint: md) {
    @media (width > map-get($screenSize, $breakpoint)) {
        @content;
    }
}

@mixin dark() {
    body[data-theme="dark"] & {
        @content;
    }
}

.projects {
    &-sort {

        display: block;

        padding: var(--size-4);
        border-radius: var(--size-2);

        width: 100%;

        font-size: var(--size-5);

        background-color: hsl(var(--secondary));
        color: hsl(var(--text));
        box-shadow: var(--shadow);



        @include dark() {
            background-color: transparent;
            border: 1px solid hsl(var(--text));
            color: hsl(var(--text));
        }

        @include mq(sm) {
            width: 200px;
            padding: var(--size-4);
            margin-inline-start: auto;
        }



        &:active {
            translate: 0 2px;
        }


    }

    &-wrapper {
        display: flex;
        flex-direction: column;
        gap: var(--size-16);

        margin-top: var(--size-16);

        position: relative;

        &[data-latest="false"] {
            flex-direction: column-reverse;
        }
    }



}
</style>