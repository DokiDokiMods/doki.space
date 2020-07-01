<template>
    <div :class="{'short': short}">
        <img src="../img/logo.png" :width="short ? 100 : 200" alt="Doki Doki Mod Manager Logo">
        <template v-if="!short">
            <h1><strong>Doki Doki Mod Manager</strong> 4</h1>
            <p>A beautiful mod manager and installer for Doki Doki Literature Club.</p>
            <br>
            <p><a class="button transparent" href="#before-downloads"><i class="fas fa-download fa-fw"></i> Download</a>
            </p>
        </template>
    </div>
</template>

<script>
    export default {
        name: "PageHeader",
        props: ["short"]
    }
</script>

<style scoped>
    div {
        text-align: center;
        background-image: radial-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .99) 90%), url(../img/backgrounds/bg-s.png);
        color: #eee;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        padding: 5em;
    }

    div.short {
        padding: 1em;
    }
</style>
