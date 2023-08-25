<template>
    <button aria-controls="main-navigation" type="button" class="hamburger sm-only" @click="changeOpen()" :data-open="open">
        <span class="sr-only">navigation control</span>
        <span class="top"></span>
        <span class="bottom"></span>
    </button>
</template>

<script setup>
const open = ref(false)
const { navControl } = defineProps({
    navControl: Function
})
const changeOpen = () => {
    open.value = !open.value
    navControl()
}
</script>

<style lang="scss" scoped>
.hamburger {
    // border: 1px solid black;
    border-radius: 0.25rem;
    // height: auto;
    aspect-ratio: 1;
    position: relative;

    &:focus-visible {
        outline: 1px solid hsl(var(--text));
    }


}



.top,
.bottom {
    position: absolute;
    width: 60%;
    top: 50%;
    left: 50%;
    height: max(2px, 1%);
    transform: translate(-50%, -50%);
    background-color: hsl(var(--text));
    transform-origin: center center;
    transition: top 125ms 200ms ease, transform 200ms ease, max-width 0s 200ms ease, translate 0s 200ms ease;

}

.top {
    top: 40%;
}

.bottom {
    top: 60%;
    max-width: 30%;
    // left: 0;
    translate: -50% 0;
}

.hamburger[data-open="true"] {

    .top,
    .bottom {
        top: 50%;
        transition: top 125ms ease, transform 200ms 125ms ease, max-width 0s 125ms, translate 0ms 125ms ease;
    }

    .top {
        transform: translate(-50%, -50%) rotate(45deg);

    }

    .bottom {
        transform: translate(-50%, -50%) rotate(-45deg);
        max-width: 60%;
        translate: 0 0;
    }
}</style>