<template>
    <PageSectionContainer class="hero">
        <h1 class="[ hero-title ]">
            <span class="small">Hello</span>
            <br>
            I am&nbsp;<span class="hero-title-name">
                <span class="hero-name"><span class="name-effect">Raghav</span></span>
                <span class="hero-alias"><span class="name-effect">Bene</span></span>
            </span>
        </h1>
        <p class="hero-dev">Frontend Developer</p>

        <div class="hero-content">
            <div class="hero-subtitle flow">
                <p class="hero-skills">I specialize in creating responsive and accessible <span
                        class="[ italic bold accent large ]">Web</span> and <span class="[ italic bold accent large ]">Mobile</span>
                    applications</p>
            </div>
            <ul class="hero-socials" >
                <li class="hero-social" style="--_index-val:0">
                    <SocialsLinkedIn class="hero-social-link" />
                </li>
                <li class="hero-social" style="--_index-val:1">
                    <SocialsGithub class="hero-social-link" />
                </li>
                <li class="hero-social" style="--_index-val:2">
                    <SocialsTwitter class="hero-social-link" />
                </li>
                <li class="hero-social" style="--_index-val:3">
                    <SocialsMail class="hero-social-link" />
                </li>
            </ul>
            <a href="#about" class="hero-down">
                <span class="sr-only">Skip to content!</span>
                <Icon name="mingcute:down-line" />
            </a>
        </div>
    </PageSectionContainer>
</template>
<script>
export default {

}
</script>
