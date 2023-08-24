<template>
    <PageSectionContainer class="hero">
        <div class="hero-content">
            <h1 class="section-heading">Works</h1>
            <p class="hero-text">These some of the projects which I wanted to share with everyone.
                <br>These projects show my growth as a Frontend Developer from beginner to my current level.</p>
        </div>
        <a role="button" href="#projects" class="hero-button">Jump to Project</a>
    </PageSectionContainer>
</template>

<style lang="scss" scoped>
$screenSize: (
    lg: 1120px,
    md: 768px,
    sm: 500px
);

@mixin mq($breakpoint: md) {
    @media (width > map-get($screenSize, $breakpoint)) {
        @content;
    }
}

@mixin dark() {
    body[data-theme="dark"] &{
        @content;
    }
}

.hero {
    background-color: hsl(var(--secondary));
    text-align: center;

    

    &-text {
        max-width: 60ch;
        margin-inline: auto;

        @include mq() {
            font-size: var(--size-5);
        }


    }
    &-button{
        
        display: inline-block;

        margin-top: var(--size-12);
        padding: 1em;
        border-radius: var(--size-2);

        width: 100%;

        background-color: hsl(var(--accent));
        color:hsl(var(--back));

        font-weight: 600;


        @include dark(){
            background-color: transparent;
            border: 1px solid hsl(var(--text));
            color: hsl(var(--text));
        }

        @include mq(sm){
            width: 300px;
        }
    }
}


</style>