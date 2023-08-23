<template>
    <nav class="nav" id="main-navigation" ref="targetNav">
        <ul class="nav-list">
            <li class="nav-item">
                <NuxtLink class="nav-link" to="/" @click="() => { clickMenuButton() }"
                    :data-active="!($route.path.includes('blogs') || $route.path.includes('works'))">Home</NuxtLink>
            </li>

            <li class="nav-item">
                <NuxtLink class="nav-link" @click="() => { clickMenuButton() }" to="/#contact">Contact</NuxtLink>
            </li>
            <li class="nav-item">
                <NuxtLink class="nav-link " @click="() => { clickMenuButton() }" to="/works"
                    :data-active="$route.path.includes('works')">Works</NuxtLink>
            </li>
            <li class="nav-item">
                <NuxtLink class="nav-link " @click="() => { clickMenuButton() }" to="/blogs"
                    :data-active="$route.path.includes('blogs')">Blogs</NuxtLink>
            </li>
        </ul>
    </nav>
</template>

<script setup>
import { useWindowSize } from '@vueuse/core';


const targetNav = ref(null)
let { navControl } = defineProps({
    navControl: Function
})
const clickMenuButton = () => {
    if (targetNav.value.dataset.open === "true") {
        document.querySelector(".hamburger").click()
    }
}


onMounted(() => {
    targetNav.value.querySelectorAll(".nav-item").forEach((navItem, index) => { navItem.style.setProperty("--_nav-index", index); })
})

// onClickOutside(targetNav, (event) => {
//     console.log("Outside",useWindowSize().width,(targetNav.value.dataset.open) === "true",event.target.closest(".hamburger"))
//     if (event.target.closest(".hamburger")) return
//     if (useWindowSize().width.value > 768) {
//         return;
//     }

//     if (targetNav.value.dataset.open == "true")
//         navControl()
// })

</script>
