
<template>
    <PageSection>
        <div class="container">
            <div :class="`${wrapper?wrapper:''} wrapper`">
                <slot />
            </div>
        </div>
    </PageSection>
</template>

<script setup>
let {wrapper} = defineProps(
    {
        wrapper:String,
    }
)

</script>
