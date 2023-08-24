
<script setup>
const { path } = useRoute()

const { data } = await useAsyncData(`content-${path}`, () => queryContent().where({ _path: path }).findOne())

const project = data

</script>

<template>
    <main v-if="project" data-no-js="true" ref="mainRef">
        <PageSectionContainer class="project-hero">

            <NuxtImg :src="project.img" format="webp" :alt="project.title" class="project-banner" />
            <div class="project-details ">
                <h1 class="section-heading">{{ project.title }}</h1>

                <p class="project-desc">
                    {{ project.description }}
                </p>
                <div class="project-points">
                    <p><span class="bold">Year : </span>{{ project.year }}</p>
                    <p><span class="bold">Category :</span> {{ project.category }}</p>
                    <p><span class="bold">Framework :</span> {{ project.framework }}</p>
                </div>
            </div>
        </PageSectionContainer>
        <PageSectionContainer class="project-content">
            <div class="content">
                <ContentRenderer :value="data" />
            </div>
            <aside class="content-toc lg-only">
                <div class="content-toc-container">
                    <h3 class="content-toc-heading">Page Content</h3>
                    <nav class="content-toc-nav">
                        <ul class="content-toc-list">
                            <li v-for="heading in project.tabs">
                                <a :href="'#' + heading.toLowerCase().replaceAll(' ', '-')" class="content-toc-link"
                                    :data-heading="heading.toLowerCase().replaceAll(' ', '-')">{{ heading
                                    }}</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </aside>
        </PageSectionContainer>
        <PageCTA heading="Found it interesting?" id="connect-with-me" />
    </main>
    <main v-else>
        404
    </main>
</template>



<style lang="scss" >
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

.project {

    &-hero .wrapper {
        display: grid;
        gap: var(--size-8);
        align-items: center;

        @include mq(lg) {
            grid-template-columns: 1fr 1fr;
        }
    }

    &-desc {
        max-width: 50ch;
    }

    &-details {

        @include mq() {
            order: -1;
            font-size: var(--size-5);
        }

        // @include mq(lg){
        //     font-size: var(--size-6);
        // }
    }

    &-points {
        margin-top: var(--size-4);
    }

    &-banner {
        border-radius: var(--size-1);
        -o-object-fit: cover;
        object-fit: cover;
        height: 100%;
        // aspect-ratio:  16 / 9;
        box-shadow:
            0px 5px 0px 5px #b2b2b1,
            0px -5px 5px 0px hsl(0 0% 62% / 0.1);

        @include dark() {
            box-shadow:
                0px 5px 0px 5px #171718,
                0px -5px 5px 0px hsl(0 0% 62% / 0.1);
        }
    }

    &-content {
        .wrapper {
            display: flex;

            @include mq() {
                gap: var(--size-12);
            }
        }

        .content-toc {

            flex: 0 0 auto;

            &-container {
                position: sticky;
                top: 120px;
            }

            &-list {
                list-style: none;
                padding-left: var(--size-2);
                border-left: 2px solid hsl(var(--text));
                display: flex;
                flex-direction: column;
            }

            &-link {
                display: inline-block;
                padding-block: var(--size-1);

                &:hover{
                    text-decoration: underline;
                    text-underline-offset: var(--size-1);
                }
            }
        }
    }
}
</style>