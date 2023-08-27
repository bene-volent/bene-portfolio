<template>
    <main v-if="article" ref="articleRef">
        <PageSectionContainer class="article-hero" aria-label="Article Hero">

            <div class="article-details content-container">
                <h1 class="section-heading">{{ article.title }}</h1>
                <p class="article-subtitle">{{ article.subtitle }}</p>
                <div class="article-props">
                    <p>
                        <Icon name="mdi:calendar" />
                        Create on
                        {{ article.createdOn.toLocaleDateString('en-us', {
                            year: "numeric", month: "short",
                            day: "numeric"
                        }) }}
                    </p>
                    <p>
                        <Icon name="mdi:timer-outline" /> Takes about <strong>{{ article.minutesToRead }} minutes</strong>
                        to read
                    </p>
                </div>
            </div>
        </PageSectionContainer>
        <PageSectionContainer class="article-content" aria-label="article Content">
            <ContentRenderer :value="article" class="content content-container flow" />
        </PageSectionContainer>
    </main>
    <main v-else>
        <PageSection aria-label="404 page"
            style="min-height: calc(100vh - 250px);display: grid;place-content: center;text-align: center;background-color: hsl(var(--secondary));">
            <h1 class="section-heading" style="">404</h1>
            <p>You are being taken back to works page.</p>
        </PageSection>
    </main>
</template>

<script setup>

const { path } = useRoute()
const articleRef = ref(null)
let article = ref(null)

try {

    const { data } = await useAsyncData(`content-${path}`, () => queryContent().where({ _path: path }).findOne())
    article = data
    article.value.createdOn = new Date(article.value.createdOn)

    useHead({

        title: `Bene's Blog | ${article.value.title}`,
        meta: [
            {
                name: "description",
                content: `${article.value.subtitle}`
            }
        ],
        link: [
            {
                rel: 'canonical',
                href: `https://beneisadev.vercel.app${path}`
            }
        ]
    });

    useServerSeoMeta({

        ogTitle: `Bene's Blog | ${article.value.title}`,
        ogDescription: `${article.value.description}`,
        ogImage: `https://beneisadev.vercel.app/${article.value.img}`,
        ogUrl: `https://beneisadev.vercel.app${path}`,
        twitterTitle: `Bene's Work | ${article.value.title}`,
        twitterDescription: `${article.value.description}`,
        twitterImage: 'https://beneisadev.vercel.app/logo-circle.png',
        twitterCard: `${article.value.description}`,
        twitterCreator: "@bene_volent_"

    })

}
catch (error) {
    // Error has been handled on mount and by a 404 page.
}

onMounted(() => {
    // console.log(project,projectRef)
    if (articleRef.value) {
        articleRef.value.querySelectorAll(".article-content .content a[rel='nofollow']").forEach((anchor) => {
            // console.log(anchor)
            anchor.setAttribute("target", "_blank")
        })
    }

})

</script>

<style lang="scss" >
@use "~/assets/sass/content.scss";

.content-container {
    display: grid;
    margin-inline: auto;
    max-width: 65ch;
}

.article {
    &-subtitle {
        font-size: clamp(1.25rem, calc(0.25rem + 2vw), 2rem);
    }

    &-props {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-top: 1em;


    }

}
</style>