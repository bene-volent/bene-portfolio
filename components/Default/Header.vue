<template>
    <header ref="headerRef" class="header" :data-on-top="y < 25" :data-is-home="!($route.path.includes('blogs') || $route.path.includes('works'))">
        <div class="container">
            <div class="wrapper">
                <NuxtLink class="header-logo" to="/">
                    <p class="sr-only">Go to Home   </p>
                    <NuxtImg class="header-logo-img" format="webp" src="/logo.png" alt="Logo" />
                </NuxtLink>
                <DefaultNavigation ref="nav" :data-open="navOpen" :navControl="changeNavState"></DefaultNavigation>

                <div class="header-controls">
                    <ButtonTheme></ButtonTheme>
                    <ButtonHamburger :navControl="changeNavState"></ButtonHamburger>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
import { useResizeObserver, useWindowScroll, useWindowSize } from '@vueuse/core'

export default {
    setup() {
        let navOpen = ref(false)
        let headerRef = ref(null)
        const changeNavState = () => {
            navOpen.value = !navOpen.value

            if (navOpen.value) {
                document.body.style.overflow = "hidden"
            } else {
                document.body.style.overflow = 'visible'
            }
        }

        let { width } = useWindowSize()
        const { y } = useWindowScroll()



        return { navOpen, changeNavState, y, windowWidth: width }
    },
    data() {
        return {

        }
    },



}
</script>

