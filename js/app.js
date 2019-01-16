const API_ENDPOINT = "https://api.github.com";
const REPO_OWNER = "DokiDokiModManager";
const REPO_NAME = "Mod-Manager";

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
                "linux_32": latest.assets.find(dl => dl.name.match(/i386\.AppImage$/)).browser_download_url,
                "linux_64": latest.assets.find(dl => dl.name.match(/x86_64\.AppImage$/)).browser_download_url
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
    console.log(data);
    document.querySelector("#latest-version").innerText = data.version;
    document.querySelector("#download-count").innerText = data.download_count;
    document.querySelector("#download-windows").setAttribute("href",data.downloads.windows);
    document.querySelector("#download-linux").setAttribute("href",data.downloads.linux_64);
});

document.querySelector("#open-download").addEventListener("click", () => {
   document.querySelector("#download-modal").classList.add("active");
});

document.querySelector("#close-download").addEventListener("click", () => {
    document.querySelector("#download-modal").classList.remove("active");
});
