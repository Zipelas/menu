function toggleMenu() {
    const header = document.querySelector("header");
    const menu = document.getElementById("menu");

    if (header.style.height === "100vh") {
        header.style.height = "60px";
        menu.classList.add("hidden");
    } else {
        header.style.height = "100vh";
        menu.classList.remove("hidden");
    }
}

document.getElementById("menu-icon").onclick = toggleMenu;