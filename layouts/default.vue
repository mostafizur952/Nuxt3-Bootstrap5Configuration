<template>
    <div>
        <navigation />
        <NuxtPage/>
        <slot />
    </div>
</template>

<script setup>
useHead({
    title: ["BajarTime"],
    link: [

        // if <link rel="icon" type="image/x-icon" href="url.com"
        // then we can setup it like this --> 
        //{ rel:"icon", type:"image/x-icon", href="url.com"}

        { href: "assets/css/main.css", rel: "stylesheet" },
        {
            href: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css", rel: "stylesheet", integrity: "sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN", crossorigin: "anonymous",
        },

    ],
    script: [
        {
            src: "assets/js/main.js", rel: "stylesheet"
        },
        {
            src: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js",
            integrity: "sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL",
            crossorigin: "anonymous",
        }
    ],


})


</script>