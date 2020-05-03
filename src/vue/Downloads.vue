<template>
    <div>
        <div class="tab-buttons">
            <div :class="{'tab-button': true, 'active': tab === tb.id}" @click="tab = tb.id" v-for="tb in tabs">
                <i :class="tb.icon"></i> {{tb.text}}
            </div>
        </div>

        <div class="tab-content">
            <div class="tab" v-if="tab === 'windows'">
                <h3>Downloads for Windows</h3>

                <p>Download and run the installer. If you are prompted by Windows Defender, choose <strong>More
                    info</strong> then <strong>Run anyway</strong>.</p>

                <a class="button primary">
                    <i class="fas fa-download fa-fw"></i> Download
                </a>
            </div>
            <div class="tab" v-else-if="tab === 'mac'">
                <h3>Downloads for macOS</h3>

                <p>Download Doki Doki Mod Manager and open it, then drag the icon to your Applications folder.</p>

                <p>If macOS blocks you from opening the application, open <strong>System Preferences</strong>, then go
                    to <strong>Security and Privacy</strong> then <strong>General</strong>. Click <strong>Open
                        Anyway</strong> to start Doki Doki Mod Manager.</p>

                <a class="button primary">
                    <i class="fas fa-download fa-fw"></i> Download
                </a>
            </div>
            <div class="tab" v-else>
                <h3>Downloads for Linux</h3>

                <p>If your distribution supports it, Doki Doki Mod Manager is available as a Snap.</p>

                <pre>$ snap install doki-doki-mod-manager</pre>

                <a class="button primary" href="snap://doki-doki-mod-manager">
                    <i class="fas fa-shopping-bag fa-fw"></i> View in Snap Store
                </a>

                <p>It is also available as an AppImage.</p>

                <pre>{{linux_install_commands}}</pre>

                <a class="button primary">
                    <i class="fas fa-download fa-fw"></i> Download (64-bit)
                </a>

                <a class="button secondary">
                    <i class="fas fa-download fa-fw"></i> Download (32-bit)
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
                downloads: {
                    linux: {
                        url_64: "https://github.com/DokiDokiModManager/Mod-Manager/releases/download/untagged-a03ab3c5889bc894365e/ddmm-4.0.0-linux-x86_64.AppImage",
                        url_32: "https://github.com/DokiDokiModManager/Mod-Manager/releases/download/untagged-a03ab3c5889bc894365e/ddmm-4.0.0-linux-i386.AppImage"
                    },
                    mac: {
                        url: "https://github.com/DokiDokiModManager/Mod-Manager/releases/download/untagged-a03ab3c5889bc894365e/ddmm-4.0.0-mac.dmg"
                    },
                    windows: {
                        url: "https://github.com/DokiDokiModManager/Mod-Manager/releases/download/untagged-a03ab3c5889bc894365e/ddmm-4.0.0-win.exe"
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
                const fn = this.downloads.linux.url_64.split("/").pop();

                return `$ wget ${this.downloads.linux.url_64}\n` +
                    `$ chmod +x ${fn}\n` +
                    `$ ./${fn}`;
            }
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
