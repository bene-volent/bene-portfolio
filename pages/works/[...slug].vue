
<script setup>

const { path } = useRoute()
const projectRef = ref(null)

const { data } = await useAsyncData(`content-${path}`, () => queryContent().where({ _path: path }).findOne())

const project = data


onMounted(()=>{
    if (projectRef){
        projectRef.value.querySelectorAll(".project-content .content a[rel='nofollow']").forEach((anchor)=>{
            // console.log(anchor)
            anchor.setAttribute("target","_blank")
        })
    }
})


</script>

<template>
    <main v-if="project" ref="projectRef" >
        <PageSectionContainer class="project-hero">

            <NuxtImg :src="project.img" format="webp" :alt="project.title" class="project-banner" />
            <div class="project-details flow">
                <h1 class="section-heading">{{ project.title }}</h1>

                <p class="project-desc">
                    {{ project.description }}
                </p>
                <div class="project-points">
                    <p><span class="bold">Year : </span>{{ project.year }}</p>
                    <p><span class="bold">Category :</span> {{ project.category }}</p>
                    <p><span class="bold">Framework :</span> {{ project.framework }}</p>
                </div>
                <div class="project-links">
                    <NuxtLink :to="project.preview" class="[ project-preview ] [ project-link ]" target="_blank">Visit
                        Website</NuxtLink>
                    <NuxtLink :to="project.repo" class="[ project-detail ] [ project-link ]" target="_blank">Github Repo
                        <Icon class="project-link-arrow" name="mingcute:right-line" />
                    </NuxtLink>
                </div>
            </div>
        </PageSectionContainer>
        <PageSectionContainer class="project-content">
            <div class="content">
                <ContentRenderer :value="data" />
            </div>
            <aside class="content-toc lg-only">
                <div class="content-toc-container">
                    <h3 class="content-toc-heading">Page Content</h3>
                    <nav class="content-toc-nav">
                        <ul class="content-toc-list">
                            <li v-for="heading in project.tabs">
                                <a :href="'#' + heading.toLowerCase().replaceAll(' ', '-')" class="content-toc-link"
                                    :data-heading="heading.toLowerCase().replaceAll(' ', '-')">{{ heading
                                    }}</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </aside>
        </PageSectionContainer>
        <PageCTA heading="Found it interesting?" id="connect-with-me" />
    </main>
    <main v-else>
        404
    </main>
</template>



<style lang="scss" >
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
    body[data-theme="dark"] & {
        @content;
    }
}

.project {

    &-hero {
        background-color: hsl(var(--secondary));
    }

    &-hero .wrapper {
        display: grid;
        gap: var(--size-8);
        align-items: center;

        @include mq(lg) {
            grid-template-columns: 1fr 1fr;
        }
    }

    &-desc {
        max-width: 50ch;
    }

    &-details {

        @include mq() {
            order: -1;
            font-size: var(--size-5);
        }

        // @include mq(lg){
        //     font-size: var(--size-6);
        // }
    }



    &-banner {
        border-radius: var(--size-1);
        -o-object-fit: cover;
        object-fit: cover;
        // height: 100%;
        aspect-ratio: 16 / 9;
        box-shadow:
            0px 5px 0px 5px #b2b2b1,
            0px -5px 5px 0px hsl(0 0% 62% / 0.1);

        @include dark() {
            box-shadow:
                0px 5px 0px 5px #171718,
                0px -5px 5px 0px hsl(0 0% 62% / 0.1);
        }
    }


    &-links {
        display: flex;
        flex-wrap: wrap;
        gap: var(--size-4);
        font-size: var(--size-4);
        justify-content: flex-start;
    }

    &-link {
        padding: var(--size-3);
        border-radius: var(--size-1);
        font-weight: 500;

        box-shadow: var(--shadow-lg);
        width: 100%;
        text-align: center;

        min-width: 150px;

        @include mq(sm) {
            width: fit-content;
            padding: var(--size-4);
        }

        &:active {
            translate: 0 2px;
        }
    }

    &-preview {
        background-color: hsl(var(--accent));
        color: hsl(var(--back));

        @include dark() {
            background-color: hsl(var(--text));


        }

        &:active {
            box-shadow: inset 0 5px 3px hsl(0 0% 0% / 0.5);
        }
    }

    &-detail {
        border: 1px solid hsl(var(--text));
    }

    &-content {
        .wrapper {
            display: flex;

            @include mq() {
                gap: var(--size-12);
            }
        }

        .content-toc {

            flex: 0 0 auto;

            &-container {
                position: sticky;
                top: 120px;
            }

            &-list {
                list-style: none;
                padding-left: var(--size-2);
                border-left: 2px solid hsl(var(--text));
                display: flex;
                flex-direction: column;
            }

            &-link {
                display: inline-block;
                padding-block: var(--size-1);

                &:hover {
                    text-decoration: underline;
                    text-underline-offset: var(--size-1);
                }
            }
        }
    }
}

.content{
    h2{
        margin-top: 1.25em ;

        @include mq(){
            font-size: var(--size-7);
        }
    }

    p{
        font-size: 16px;
        @include mq(){
            font-size: calc(var(--size-4) + (var(--size-1) / 2) );
        }
        @include mq(lg){
            font-size: calc(var(--size-5));
        }
    }
    h2 + p{
        margin-top: 1em;
    }
    p + p{
        margin-top: 0.75em;
    }
    img,video,svg{
        margin-block: var(--size-4);
        border-radius: var(--size-1);
    }

    ol,ul,dl{
        margin-top: var(--size-3);
    }
    ul li{
        &::marker{
            color: hsl(var(--accent));

            @include dark(){
                color: hsl(var(--text));
            }
        }
    }

    ol li{
        &::marker{
            font-size: 1.25em;
            font-weight:600;
            color: hsl(var(--accent));

            @include dark(){
                color: hsl(var(--text));
            }
        }
    }

    hr{
        margin-block: var(--size-2);
    }

    pre{
        padding: var(--size-6);
        border: 1px solid hsl(var(--primary));
        // font-size: var(--size-4);
        margin-bottom: var(--size-4);
        background-color: hsl(var(--secondary));

        border-radius: var(--size-2);
        font-size: var(--size-3);

        @include mq(sm){
            font-size:var(--size-4)
        }
       

        


    }
    * + pre {
        margin-top: var(--size-4);
    }

    p code {
        background-color: hsl(var(--secondary));
        padding: var(--size-1); 
        font-weight: 400;
        font-size: var(--size-3);

@include mq(sm){
    font-size:var(--size-4)
}

}

    a:not([href^="#"]){
        text-decoration: underline;

        color:rgb(79, 93, 255);

        
    
        &:hover{
            text-underline-offset: 0.25em;
        }
        
    }

    .contains-task-list{
        list-style: none;
        padding-left: 0;

       
    }
}

</style>