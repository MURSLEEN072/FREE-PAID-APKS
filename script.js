document.addEventListener("DOMContentLoaded", function() {
    let apkList = [
        { name: "PUBG Mobile Mod", link: "https://yourlink.com/pubg.apk" },
        { name: "Free Fire Mod", link: "https://yourlink.com/freefire.apk" },
        { name: "Spotify Premium Mod", link: "https://yourlink.com/spotify.apk" }
    ];

    let apkContainer = document.getElementById("apk-list");

    apkList.forEach(apk => {
        let apkDiv = document.createElement("div");
        apkDiv.classList.add("apk");
        apkDiv.innerHTML = `<h3>${apk.name}</h3><a href="${apk.link}" download>Download Now</a>`;
        apkContainer.appendChild(apkDiv);
    });
});