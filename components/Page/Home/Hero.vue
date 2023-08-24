<template>
    <PageSectionContainer class="home-hero">
        <h1 class="[ home-hero-title ]">
            <span class="small">Hello</span>
            <br>
            I am&nbsp;<span class="home-hero-title-name">
                <span class="home-hero-name"><span class="home-name-effect">Raghav</span></span>
                <span class="home-hero-alias"><span class="home-name-effect">Bene</span></span>
            </span>
        </h1>
        <p class="home-hero-dev">Frontend Developer</p>

        <div class="home-hero-content">
            <div class="home-hero-subtitle flow">
                <p class="home-hero-skills">I specialize in creating responsive and accessible <span
                        class="[ italic bold accent large ]">Web</span> and <span class="[ italic bold accent large ]">Mobile</span>
                    applications</p>
            </div>
            <ul class="home-hero-socials" >
                <li class="home-hero-social" style="--_index-val:0">
                    <SocialsLinkedIn class="hero-social-link" />
                </li>
                <li class="home-hero-social" style="--_index-val:1">
                    <SocialsGithub class="hero-social-link" />
                </li>
                <li class="home-hero-social" style="--_index-val:2">
                    <SocialsTwitter class="hero-social-link" />
                </li>
                <li class="home-hero-social" style="--_index-val:3">
                    <SocialsMail class="hero-social-link" />
                </li>
            </ul>
            <a href="#about" class="home-hero-down">
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
