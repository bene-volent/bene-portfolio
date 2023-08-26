<template>
   <main data-no-js="true" ref="mainRef">
      <PageWorksHero id="" />
      <PageWorksProjects id="projects" />
   </main>
</template>

<script setup>
useHead({

   title: "Bene's Projects",
   meta: [
      {
         name: "description",
         content: 'Here you can find all of Bene\'s \\ Raghav\'s projects and in depth details regarding these projects! I use tools such as HTML CSS and JS and few frameworks such as React, Next, Vue and Nuxt to make my web applications.'
      }
   ],

});

useSeoMeta({
    ogTitle: "Bene's Projects",
    ogDescription: 'Here you can find all of Bene\'s \\ Raghav\'s projects and in depth details regarding these projects! I use tools such as HTML CSS and JS and few frameworks such as React, Next, Vue and Nuxt to make my web applications.',
    ogImage: '/meta-img.png',
    ogUrl: 'https://bene-portfolio.vercel.app/works/',
    twitterTitle: 'Bene\'s Projects',
    twitterDescription: 'Here you can find all of Bene\'s \\ Raghav\'s projects and in depth details regarding these projects! I use tools such as HTML CSS and JS and few frameworks such as React, Next, Vue and Nuxt to make my web applications.',
    twitterImage: '/logo-circle.png',
    twitterCard: 'This is my projects page.'
})

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

<style lang="scss"></style>