<template>
    <div>
        <PageHeader></PageHeader>

        <div class="container mid">
            <div class="content">
                <Description></Description>
            </div>
        </div>

        <div class="container">
            <div class="content">
                <Screenshots
                        :urls="screenshots"
                        :alt="'Doki Doki Mod Manager screenshot'"
                ></Screenshots>
            </div>
        </div>

        <div class="container mid" id="before-downloads">
            <div class="content">
                <PatreonBanner></PatreonBanner>
            </div>
        </div>

        <div class="container">
            <div class="content">
                <Downloads :os="os"></Downloads>
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
    import s1 from "../img/screenshots/s1.png";
    import s2 from "../img/screenshots/s2.png";
    import s3 from "../img/screenshots/s3.png";
    import s4 from "../img/screenshots/s4.png";

    import platform from "platform-detect";

    import PageHeader from "./PageHeader";
    import Downloads from "./Downloads";
    import Footer from "./Footer";
    import Screenshots from "./Screenshots";
    import Description from "./Description";
    import PatreonBanner from "./PatreonBanner";

    export default {
        name: "Homepage",
        components: {PatreonBanner, Description, Footer, Screenshots, PageHeader, Downloads},
        data() {
            return {
                screenshots: [s1, s2, s3, s4],
                os: platform.linux ? "linux" : (platform.macos ? "mac" : "windows")
            }
        }
    }
</script>

<style scoped>

</style>
