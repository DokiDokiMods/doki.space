<template>
    <div>
        <div class="tab-buttons">
            <div :class="{'tab-button': true, 'active': tab === tb.id}" @click="tab = tb.id" v-for="tb in tabs">
                <i :class="tb.icon"></i> {{tb.text}}
            </div>
        </div>

        <div class="tab-content">
            <p v-if="error">The downloads couldn't be loaded for some reason. <a href="https://github.com/dokiDokiModManager/Mod-Manager/releases/tag/v3.2.8" target="_blank">Click here</a> to download manually.</p>
            <div class="tab" v-if="tab === 'windows'">
                <h3>Downloads for Windows</h3>

                <p>Download and run the installer. If you are prompted by Windows Defender, choose <strong>More
                    info</strong> then <strong>Run anyway</strong>.</p>

                <a class="button primary" :href="downloads.windows.url" :key="'64bit'">
                    <i class="fas fa-download fa-fw"></i> Download
                </a>
            </div>
            <div class="tab" v-else-if="tab === 'mac'">
                <h3>Downloads for macOS</h3>

                <p>Download Doki Doki Mod Manager and open it, then drag the icon to your Applications folder.</p>

                <p>If macOS blocks you from opening the application, open <strong>System Preferences</strong>, then go
                    to <strong>Security and Privacy</strong> then <strong>General</strong>. Click <strong>Open
                        Anyway</strong> to start Doki Doki Mod Manager.</p>

                <a class="button primary" :href="downloads.mac.url" :key="'64bit'">
                    <i class="fas fa-download fa-fw"></i> Download
                </a>
            </div>
            <div class="tab" v-else>
                <h3>Downloads for Linux</h3>

                <!--                <p>If your distribution supports it, Doki Doki Mod Manager is available as a Snap.</p>-->

                <!--                <pre>$ snap install doki-doki-mod-manager</pre>-->

                <!--                <a class="button primary" href="snap://doki-doki-mod-manager">-->
                <!--                    <i class="fas fa-shopping-bag fa-fw"></i> View in Snap Store-->
                <!--                </a>-->

                <!--                <p>It is also available as an AppImage.</p>-->

                <p>Doki Doki Mod Manager is available as an AppImage.</p>

                <pre>{{linux_install_commands}}</pre>

                <a class="button primary" :href="downloads.linux.url" :key="'64bit'">
                    <i class="fas fa-download fa-fw"></i> Download
                </a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Downloads",
        props: ["os"],
        data() {
            return {
                tab: this.os,
                error: false,
                downloads: {
                    linux: {
                        url: ""
                    },
                    mac: {
                        url: ""
                    },
                    windows: {
                        url: ""
                    }
                },
                tabs: [
                    {
                        icon: "fab fa-windows fa-fw",
                        id: "windows",
                        text: "Windows"
                    },
                    {
                        icon: "fab fa-apple fa-fw",
                        id: "mac",
                        text: "macOS"
                    },
                    {
                        icon: "fab fa-linux fa-fw",
                        id: "linux",
                        text: "Linux"
                    }
                ]
            }
        },
        computed: {
            linux_install_commands() {
                const fn = this.downloads.linux.url.split("/").pop();

                return `$ wget ${this.downloads.linux.url}\n` +
                    `$ chmod +x ${fn}\n` +
                    `$ ./${fn}`;
            }
        },
        mounted() {
            fetch("https://api.github.com/repos/DokiDokiModManager/Mod-Manager/releases/latest").then(res => res.json()).then(data => {
                const files = data.assets;
                this.downloads.linux.url = files.find(file => file.name.match(/\.AppImage$/)).browser_download_url;
                this.downloads.windows.url = files.find(file => file.name.match(/win\.exe$/)).browser_download_url;
                this.downloads.mac.url = files.find(file => file.name.match(/mac\.dmg$/)).browser_download_url;
            }).catch(() => {
                this.error = true;
            });
        }
    }
</script>

<style scoped>
    .tab-content, .tab-button {
        border: 1px solid #eee;
        padding: 1em;
    }

    .tab-buttons {
        display: flex;
    }

    .tab-button {
        border-bottom: none;
        cursor: pointer;
    }

    .tab-button:not(:first-child) {
        border-left: none;
    }

    .tab-button:first-child {
        border-top-left-radius: 5px;
    }

    .tab-button:last-child {
        border-top-right-radius: 5px;
    }

    .tab-button.active {
        background-color: #eee;
        color: #000;
    }
</style>
