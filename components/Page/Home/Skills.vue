<template>
    <PageSectionContainer class="skills" aria-label="skills">
        <h2 class="section-heading">Skills</h2>
        <ol class="skills-list">
            <li class="[ skills-group ] [ load-on-scroll ]">
                <h3 class="skills-group-heading">Technologies</h3>
                <div class="skills-grid">
                    <PageHomeSkill name="html" />
                    <PageHomeSkill name="css" />
                    <PageHomeSkill name="js" />
                    <PageHomeSkill name="p5js" />           
                    <PageHomeSkill name="sass/scss" />
                    <PageHomeSkill name="react" />
                    <PageHomeSkill name="vue" />
                    <PageHomeSkill name="nuxt" />
                    <PageHomeSkill name="c" />
                    <PageHomeSkill name="cpp" />
                    <PageHomeSkill name="python" />
                </div>
            </li>
            <li class="[ skills-group ] [ load-on-scroll ]">
                <h3 class="skills-group-heading">Tools</h3>
                <div class="skills-grid">
                    <PageHomeSkill name="figma" />
                    <PageHomeSkill name="vscode" />
                    <PageHomeSkill name="vercel" />
                    <PageHomeSkill name="github" />
                </div>
            </li>
            <li class="[ skills-group ] [ load-on-scroll ]">
                <h3 class="skills-group-heading">To Learn</h3>
                <div class="skills-grid">
                    <PageHomeSkill name="next" />
<PageHomeSkill name="tailwind" />
                    <PageHomeSkill name="django" />
                    <PageHomeSkill name="flutter" />
                    <PageHomeSkill name="kotlin" />

                    <p class="skills-more">and much more...</p>
                </div>
            </li>
        </ol>

    </PageSectionContainer>
</template>

<script setup>

</script>
