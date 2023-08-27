<template>
    <PageSectionContainer class="blog" aria-label="blog">
        "BLOG"
    </PageSectionContainer>
</template>

<script setup>
useHead({

    title: "Bene's Blogs",
    meta: [
        {
            name: "description",
            content: 'This is Bene\'s \\ Raghav\'s personal blog. Here you can find all my latest tech information, new tools and my experiences with such tools. Currently this page is a work in progress!'
        }
    ],

    link: [
        {
            rel: 'canonical',
            href: `https://bene-portfolio.vercel.app/blog`
        }]

});
useSeoMeta({
    ogTitle: "Bene's Blogs",
    ogDescription: 'This is Bene\'s \\ Raghav\'s personal blog. Here you can find all my latest tech information, new tools and my experiences with such tools. Currently this page is a work in progress!',
    ogImage: '/meta-img.png',
    ogUrl: 'https://bene-portfolio.vercel.app/blog/',
    twitterTitle: 'Bene\'s Blogs',
    twitterDescription: 'This is Bene\'s \\ Raghav\'s personal blog. Here you can find all my latest tech information, new tools and my experiences with such tools. Currently this page is a work in progress!',
    twitterImage: '/logo-circle.png',
    twitterCard: 'This is Bene\'s \\ Raghav\'s personal blog. Here you can find all my latest tech information, new tools and my experiences with such tools. Currently this page is a work in progress!',
    twitterCreator:"@bene_volent_"

})
</script>

<style lang="scss"></style>