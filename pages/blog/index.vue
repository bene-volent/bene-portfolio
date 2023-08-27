<template>
    <main>
        <PageSectionContainer class="blog-hero" aria-label="blog">
            <h1 class="section-heading">Articles</h1>
            <p class="blog-hero-text">
                Up-to date news and articles regarding the latest tech and frontend news and information.
                <br>
                Nah, I am lazy.
                Sometimes articles about random Frontend things, Discoveries and Code snippets to share with the world.
            </p>
        </PageSectionContainer>
        <PageSectionContainer class="blog-blogs" aria-label="blogs list">
            <ul class="blog-card-container" v-if="articles.length > 0">
                <li  v-for="article in articles" >
                    <PageBlogCard :article="article" />

                </li>
            </ul>
            <h2 v-else style="text-align: center;" class="section-heading">No article yets</h2>
        </PageSectionContainer>
    </main>
</template>

<script setup>
useHead({

    title: "Bene's Blogs",
    meta: [
        {
            name: "description",
            content: 'This is Bene\'s \\ Raghav\'s personal blog. Here you can find all my imaginations and my experiences with frontend and coding tools. Currently this page is a work in progress!'
        }
    ],

    link: [
        {
            rel: 'canonical',
            href: `https://beneisadev.vercel.app/blog`
        }]

});
useServerSeoMeta({
    ogTitle: "Bene's Blogs",
    ogDescription: 'This is Bene\'s \\ Raghav\'s personal blog. Here you can find all my imaginations and my experiences with frontend and coding tools. Currently this page is a work in progress!',
    ogImage: 'https://beneisadev.vercel.app/meta-img.png',
    ogUrl: 'https://beneisadev.vercel.app/blog/',
    twitterTitle: 'Bene\'s Blogs',
    twitterDescription: 'This is Bene\'s \\ Raghav\'s personal blog. Here you can find all my imaginations and my experiences with frontend and coding tools. Currently this page is a work in progress!',
    twitterImage: 'https://beneisadev.vercel.app/logo-circle.png',
    twitterCard: 'This is Bene\'s \\ Raghav\'s personal blog. Here you can find all my imaginations and my experiences with frontend and coding tools. Currently this page is a work in progress!',
    twitterCreator: "@bene_volent_"

})


const { data } = await useAsyncData("content-works", () => queryContent('/blog').find())
const articles = data.value
articles.forEach((article) => { article.createdOn = new Date(article.createdOn) })
articles.sort((a, b) => {console.log(a.createdOn,b.createdOn);return b.createdOn - a.createdOn})
</script>

<style lang="scss">
@use "~/assets/sass/blog.scss"
</style>