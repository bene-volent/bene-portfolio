<template>
    <article class="blog-card">
        <NuxtLink class="blog-card-title" :to="article._path">{{ article.title }}
        </NuxtLink>
        <small class="blog-card-date">Created on {{ article.createdOn.toLocaleDateString('en-us', {
            year: "numeric", month: "short",
            day: "numeric"
        }) }}</small>
    </article>
</template>

<script setup>
const { article } = defineProps(
    {
        article: Object
    }
)
</script>

