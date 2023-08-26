<template>
    <article class="[ projectCard ] [ load-on-scroll ]">
        <NuxtImg :src="project.img" format="webp" loading="lazy" class="projectCard-image" :alt="project.title" />
        <div class="projectCard-content">
            <h2 class="projectCard-title">{{ project.title }}</h2>
            <p class="projectCard-desc">{{ project.description }}</p>

            <NuxtLink :to="project.path" class="[ projectCard-detail ]">Learn More
                <span class="sr-only">about {{ project.title }}</span>
                <Icon class="projectCard-link-arrow" name="mingcute:right-line" />
            </NuxtLink>
        </div>
    </article>
</template>

<script setup>
let { project } = defineProps({
    project: Object
}
)
</script>

<style lang='scss' scoped>
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

.projectCard {
    --grid-gap: var(--size-9);
    display: grid;

    gap: var(--grid-gap);

    @include mq() {
        grid-template-columns: minmax(350px, 1fr) 1fr;
        gap: 0 var(--grid-gap);
        align-items: center;
        padding-inline: var(--size-6);
    }

    @include mq(lg) {
        padding-inline: var(--size-8);
    }

    &-title {
        font-size: var(--size-5);
        font-weight: 700;

        @include mq() {
            font-size: var(--size-7);
        }

        @include mq(lg) {
            font-size: var(--size-8);
        }
    }

    &-image {
        border-radius: var(--size-1);
        -o-object-fit: cover;
        object-fit: cover;
        // aspect-ratio:  16 / 9;
        box-shadow:
            5px 5px 0px #b2b2b1,
            -5px -5px 5px 0px hsl(0 0% 62% / 0.1);

        @include dark() {
            box-shadow:
                10px 10px 0px #171718,
                -5px -5px 5px 0px hsl(0 0% 62% / 0.1);
        }
    }

    &-content {
        display: grid;
        gap: var(--size-4);
        align-self: self-start;


    }

    &-desc {
        @include mq(lg) {
            font-size: var(--size-5);
        }
    }

    &-detail {

        max-width: fit-content;
        padding: var(--size-3);
        border-radius: var(--size-1);
        border: 1px solid hsl(var(--text));

        font-weight: 500;

        box-shadow: var(--shadow);

        @include mq(sm) {
            padding: var(--size-4);
        }

        &:active {
            translate: 0 2px;
        }
    }
}
</style>