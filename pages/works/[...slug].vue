
<script setup>
import { useTimeout } from '@vueuse/core';


const { path } = useRoute()
const projectRef = ref(null)
let project = ref(null)

try {

    const { data } = await useAsyncData(`content-${path}`, () => queryContent().where({ _path: path }).findOne())
    project = data

    useHead({

        title: `Bene's Work | ${project.value.title}`,
        meta: [
            {
                name: "description",
                content: `${project.value.description}`
            }
        ],
        link: [
            {
                rel: 'canonical',
                href: `https://bene-portfolio.vercel.app${path}`
            }
        ]
    });

    useSeoMeta({

        ogTitle: `Bene's Work | ${project.value.title}`,
        ogDescription: `${project.value.description}`,
        ogImage: `https://bene-portfolio.vercel.app/${project.value.img}`,
        ogUrl: `https://bene-portfolio.vercel.app${path}`,
        twitterTitle: `Bene's Work | ${project.value.title}`,
        twitterDescription: `${project.value.description}`,
        twitterImage: 'https://bene-portfolio.vercel.app/logo-circle.png',
        twitterCard: `${project.value.description}`,
        twitterCreator: "@bene_volent_"

    })


} catch (error) {
    // navigateTo()
    useTimeout(2000, { callback: () => { navigateTo("/works") } })
    useHead({

        title: `Bene's Work | 404`,
        meta: [
            {
                name: "description",
                content: `There is project with this name. All projects are given in the root works page.`
            }
        ],

    });

}

onMounted(() => {
    // console.log(project,projectRef)
    if (projectRef.value) {
        projectRef.value.querySelectorAll(".project-content .content a[rel='nofollow']").forEach((anchor) => {
            // console.log(anchor)
            anchor.setAttribute("target", "_blank")
        })
    }

})


</script>

<template>
    <main v-if="project" ref="projectRef">
        <PageSectionContainer class="project-hero" aria-label="Project Hero">

            <NuxtImg :src="project.img" format="webp" :alt="project.title" class="project-banner" />
            <div class="project-details flow">
                <h1 class="section-heading">{{ project.title }}</h1>

                <p class="project-desc">
                    {{ project.description }}
                </p>
                <div class="project-points">
                    <p><span class="bold">Year : </span>{{ project.year }}</p>
                    <p><span class="bold">Category :</span> {{ project.category }}</p>
                    <p><span class="bold">Framework :</span> {{ project.framework }}</p>
                </div>
                <div class="project-links">
                    <NuxtLink :to="project.preview" class="[ project-preview ] [ project-link ]" target="_blank">Visit
                        Website</NuxtLink>
                    <NuxtLink :to="project.repo" class="[ project-detail ] [ project-link ]" target="_blank">Github Repo
                        <Icon class="project-link-arrow" name="mingcute:right-line" />
                    </NuxtLink>
                </div>
            </div>
        </PageSectionContainer>
        <PageSectionContainer class="project-content" aria-label="Project Content">
            <ContentRenderer :value="project" class="content flow" />
            <aside class="content-toc lg-only">
                <div class="content-toc-container">
                    <h3 class="content-toc-heading">Page Content</h3>
                    <nav class="content-toc-nav" aria-label="Page Content">
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
        <PageSection aria-label="404 page"
            style="min-height: calc(100vh - 250px);display: grid;place-content: center;text-align: center;background-color: hsl(var(--secondary));">
            <h1 class="section-heading" style="">404</h1>
            <p>You are being taken back to works page.</p>
        </PageSection>
    </main>
</template>



<style lang="scss" >
@use "~/assets/sass/content.scss";

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

    &-hero {
        background-color: hsl(var(--secondary));
    }

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



    &-banner {
        border-radius: var(--size-1);
        -o-object-fit: cover;
        object-fit: cover;
        // height: 100%;
        aspect-ratio: 16 / 9;
        box-shadow:
            0px 5px 0px 5px #b2b2b1,
            0px -5px 5px 0px hsl(0 0% 62% / 0.1);

        @include dark() {
            box-shadow:
                0px 5px 0px 5px #171718,
                0px -5px 5px 0px hsl(0 0% 62% / 0.1);
        }
    }


    &-links {
        display: flex;
        flex-wrap: wrap;
        gap: var(--size-4);
        font-size: var(--size-4);
        justify-content: flex-start;
    }

    &-link {
        padding: var(--size-3);
        border-radius: var(--size-1);
        font-weight: 500;

        box-shadow: var(--shadow-lg);
        width: 100%;
        text-align: center;

        min-width: 150px;

        @include mq(sm) {
            width: fit-content;
            padding: var(--size-4);
        }

        &:active {
            translate: 0 2px;
        }
    }

    &-preview {
        background-color: hsl(var(--accent));
        color: hsl(var(--back));

        @include dark() {
            background-color: hsl(var(--text));


        }

        &:active {
            box-shadow: inset 0 5px 3px hsl(0 0% 0% / 0.5);
        }
    }

    &-detail {
        border: 1px solid hsl(var(--text));
    }

    &-content {
        .wrapper {

            display: grid;
            max-width: 55ch;
            margin-inline: auto;

            @include mq() {
                // max-width: 100%;
                max-width: fit-content;
                grid-template-columns: clamp(45ch, 60vw, 65ch) 156px;
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
                border-left: 2px solid hsl(var(--accent));
                display: flex;
                flex-direction: column;
            }

            &-link {
                display: inline-block;
                padding-block: var(--size-1);

                &:hover {
                    text-decoration: underline;
                    text-underline-offset: var(--size-1);
                }
            }
        }
    }
}
</style>