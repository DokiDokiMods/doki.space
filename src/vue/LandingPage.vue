<template>
    <div>
        <PageHeader :short="true"></PageHeader>

        <div class="container mid">
            <div class="content">
                <p class="lead">{{mod.modName}}</p>
                <p>{{mod.modShortDescription}}</p>
                <p><a class="button primary"><i class="fas fa-download fa-fw"></i> Download with Doki Doki Mod Manager</a></p>
            </div>
        </div>

        <div class="container">
            <div class="content">
                <p class="lead">About {{mod.modName}}</p>
                <div style="white-space: pre-wrap;">{{mod.modDescription}}</div>
            </div>
        </div>

        <div class="container mid">
            <div class="content">
                <Description></Description>
            </div>
        </div>

        <div class="container footer">
            <div class="content">
                <Footer></Footer>
            </div>
        </div>
    </div>
</template>

<script>
    import PageHeader from "./PageHeader";
    import Footer from "./Footer";
    import Description from "./Description";

    export default {
        name: "LandingPage",
        components: {Description, Footer, PageHeader},
        data() {
            return {
                mod: {}
            }
        },
        mounted() {
            const modID = window.location.host.endsWith("doki.space") ? window.location.pathname.split("/").pop() : 30;
            fetch("https://ddmm-mods.shinomiya.group/mod?id=" + modID).then(res => res.json()).then(data => {
                this.mod = data.mod;
            });
        }
    }
</script>

<style scoped>

</style>
