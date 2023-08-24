<template>
    <PageSectionContainer class="cta">
        <div class="cta-content">
            <h2 class="section-heading">{{ heading ?  heading : "Get in Touch"  }}</h2>
            <p class="cta-text">I am currently looking for <span class="bold">internship opportunities</span> as <span
                    class="italic">Web Developer</span> or <span class="italic">Frontend Developer</span>
                which can help me grow further. You can contact me through my LinkedIn or email.</p>
            <a href="https://linkedin.com/in/raghv-r" class="cta-connect" target="_blank" role="button">
                <span>Connect with Me</span>
                <span class="sr-only">On LinkedIn</span>
                <IconLinkedIn />
            </a>
        </div>
        <div class="cta-separator"><span class="cta-separator-text">OR</span></div>
        <HomeContactForm class="cta-form" />
    </PageSectionContainer>
</template>

<script setup>
const { heading } = defineProps(
    {
        heading: String
    }
)
</script>

