<template>
    <div>
        <img src="../img/logo.png" width="200" alt="Doki Doki Mod Manager Logo">
        <h1><strong>Doki Doki Mod Manager</strong> 4</h1>
        <p>A beautiful mod manager and installer for Doki Doki Literature Club.</p>
        <br>
        <p><a class="button transparent" href="#before-downloads"><i class="fas fa-download fa-fw"></i> Download</a></p>
    </div>
</template>

<script>
    export default {
        name: "PageHeader"
    }
</script>

<style scoped>
    div {
        text-align: center;
        background-image: radial-gradient(rgba(0,0,0,.5),rgba(0,0,0,.99) 90%),url(../img/backgrounds/bg-s.png);
        color: #eee;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        padding: 5em;
    }
</style>
