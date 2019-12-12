const API_ENDPOINT = "https://api.github.com";
const REPO_OWNER = "DokiDokiModManager";
const REPO_NAME = "Mod-Manager";

const SUPPORT_URL = "http://ouo.io/qs/bZSC7Vlh?s=";

function getRepoData() {
    return new Promise((ff, rj) => {
        fetch(API_ENDPOINT + "/repos/" + REPO_OWNER + "/" + REPO_NAME + "/releases").then(r => r.json()).then(releases => {
            // download count
            const download_count = releases.reduce((count, release) => {
                return count + release.assets.reduce((count, asset) => {
                    return count + (asset.name.match(/\.(AppImage|exe)$/) ? asset.download_count : 0);
                }, 0);
            }, 0);

            // get latest version
            const latest = releases.filter(d => !d.tag_name.endsWith("-beta"))[0];

            // get version number
            const version = latest.name;

            const downloads = {
                "windows": latest.assets.find(dl => dl.name.match(/\.exe$/)).browser_download_url,
                "linux": latest.assets.find(dl => dl.name.match(/x86_64\.AppImage$/)).browser_download_url,
                "mac": latest.assets.find(dl => dl.name.match(/\.dmg$/)).browser_download_url,
            };

            ff({
                downloads,
                download_count,
                version
            });
        }).catch(e => {
            rj(e);
        });
    });
}

getRepoData().then(data => {
    document.querySelector("#latest-version").innerText = data.version;

    // document.querySelector("#download-count").innerText = data.download_count;

    document.querySelector("#download-windows").setAttribute("href", SUPPORT_URL + encodeURIComponent(data.downloads.windows));
    document.querySelector("#download-linux").setAttribute("href", SUPPORT_URL + encodeURIComponent(data.downloads.linux));
    document.querySelector("#download-mac").setAttribute("href", SUPPORT_URL + encodeURIComponent(data.downloads.mac));

    document.querySelector("#direct-windows").setAttribute("href", data.downloads.windows);
    document.querySelector("#direct-linux").setAttribute("href", data.downloads.linux);
    document.querySelector("#direct-mac").setAttribute("href", data.downloads.mac);
});


if (navigator.appVersion.indexOf("Win") !== -1) {
    document.querySelector(".downloads").classList.add("windows");
} else if (navigator.appVersion.indexOf("Mac") !== -1) {
    document.querySelector(".downloads").classList.add("mac");
} else if (navigator.appVersion.indexOf("Linux") !== -1) {
    document.querySelector(".downloads").classList.add("linux");
}
