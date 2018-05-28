function formattedGuildCount(shortened) {
    const guildCount = document.querySelectorAll(".guild > div[draggable=true]").length;
    return `${guildCount} Guilds`;
}

function setupServerCount() {
    if (document.querySelector("#server-count")) return;

    let gc = document.createElement("div");
    gc.className = "friends-online";
    gc.id = "server-count"

    let glist = document.querySelector(".friends-online");
    if (!glist) return;

    glist.parentNode.insertBefore(gc, glist.nextSibling);
  }

function updateServerCount() {
    if (document.querySelector("#server-count") && document.querySelector("#server-count").innerHTML == formattedGuildCount()) return;
    document.querySelector("#server-count").innerHTML = formattedGuildCount();
}

exports.manifest = {
    author: "Cynosphere",
    name: "Guild Count",
    description: "Shows guild count under online count."
}
exports.start = () => {

    let observer = new MutationObserver(() => {
        setupServerCount();
        updateServerCount();
    });
    observer.observe(document.querySelector("div[class*=\"app-\"]"), {
        childList: true,
        subtree: true
    });
}
