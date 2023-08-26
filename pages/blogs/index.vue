<template>
    <PageSectionContainer class="blogs" aria-label="blogs">
        "BLOGS"
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

});
useSeoMeta({
    ogTitle: "Bene's Blogs",
    ogDescription: 'This is Bene\'s \\ Raghav\'s personal blog. Here you can find all my latest tech information, new tools and my experiences with such tools. Currently this page is a work in progress!',
    ogImage: '/meta-img.png',
    ogUrl: 'https://bene-portfolio.vercel.app/blogs/',
    twitterTitle: 'Bene\'s Blogs',
    twitterDescription: 'This is Bene\'s \\ Raghav\'s personal blog. Here you can find all my latest tech information, new tools and my experiences with such tools. Currently this page is a work in progress!',
    twitterImage: '/logo-circle.png',
    twitterCard: 'This is Bene\'s \\ Raghav\'s personal blog. Here you can find all my latest tech information, new tools and my experiences with such tools. Currently this page is a work in progress!'
})
</script>

<style lang="scss">

</style>