<template>
    <main data-no-js="true" ref="mainRef">
        <PageHomeHero id="" />
        <PageHomeAbout id="about" class="[ load-on-scroll ]" />
        <PageHomeSkills id="skills" />
        <PageHomeProjects id="projects" />
        <PageHomeCTA id="contact" />
    </main>
</template>


<script setup>
useHead({

    title: "Bene's Portfolio | Home",
    meta: [
        {
            name: "description",
            content: 'Welcome to my portfolio. Here you can learn about me and my projects.'
        }
    ],

});

let mainRef = ref(null)


onMounted(() => {

    mainRef.value.dataset.noJs = false

    const callback = (entries, observer) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting)
                return

            if (!entry.target.classList.contains("is-visible"))
                entry.target.classList.add("is-visible")

        }
        )
    }

    const intersectionObserverOptions = {
        root: null,
        threshold: 0.1
    }
    const intersectionObserver = new IntersectionObserver(callback, intersectionObserverOptions)
    mainRef.value.querySelectorAll(".load-on-scroll").forEach((el) => {
        intersectionObserver.observe(el)
    })

})


</script>


<style lang="scss">
@use "~/assets/sass/home.scss";
</style>