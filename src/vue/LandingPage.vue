<template>
    <div>
        <PageHeader :short="true"></PageHeader>

        <template v-if="loaded">
            <div class="container mid">
                <div class="content">
                    <p class="lead">{{mod.modName}}</p>
                    <p>{{mod.modShortDescription}}</p>
                    <p v-if="directDownload"><a class="button primary" :href="launchURL"><i class="fas fa-download fa-fw"></i> Download with Doki Doki Mod
                        Manager</a></p>
                </div>
            </div>

            <div class="container">
                <div class="content">
                    <p class="lead">About {{mod.modName}}</p>
                    <div style="white-space: pre-wrap;">{{mod.modDescription}}</div>
                </div>
            </div>

            <div class="container footer">
                <div class="content">
                    <Description></Description>
                    <a class="button secondary" target="_blank" href="/"><i class="fas fa-download fa-fw"></i> Download</a>
                </div>
            </div>
        </template>
        <template v-else>
            <div class="container">
                <br>
                <div class="content" style="text-align: center;">
                    <p><i class="fas fa-spinner fa-spin fa-3x"></i></p>
                </div>
            </div>
        </template>
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
                directDownload: null,
                mod: {},
                loaded: false
            }
        },
        computed: {
            launchURL() {
                const data = {
                    url: this.directDownload,
                    filename: this.mod.modName
                };
                return `ddmm://download-mod/${btoa(JSON.stringify(data))}`;
            }
        },
        mounted() {
            const modID = window.location.host.endsWith("doki.space") ? window.location.pathname.split("/").pop() : 30;
            fetch("https://ddmm-mods.shinomiya.group/mod?id=" + modID).then(res => res.json()).then(data => {
                if (data.error) {
                    window.location.href = "/";
                } else {
                    this.loaded = true;
                    this.mod = data.mod;
                    this.directDownload = data.directDownload;
                }
            }).catch(() => {
                window.location.href = "/";
            });
        }
    }
</script>

<style scoped>

</style>
