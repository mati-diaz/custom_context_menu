class ContextMenu {
    constructor(items) {
        this.menu = document.createElement("div");
        this.menu.classList.add("c-menu");

        items.forEach(item => {
            this.menu.appendChild(this.createMenuItem(item.icon, item.text));
        });
    }

    createMenuItem(item) {
        const menuItem = document.createElement("div");
        menuItem.classList.add("c-menu-item");

        const icon = document.createElement("div");
        icon.classList.add("c-menu-item-icon");

        const iconImg = document.createElement("img");
        iconImg.src = `./assets/img/${item.icon}.svg`;
        iconImg.alt = "icon test";

        icon.appendChild(iconImg);

        const text = document.createElement("div");
        text.classList.add("c-menu-item-text");
        text.innerText = `${item.text}`;

        menuItem.appendChild(icon);
        menuItem.appendChild(text);

        return menuItem;
    }
}

const contextMenu = new ContextMenu([
    {
        icon: "github",
        text: "Change Background Color"
    },
    {
        icon: "github",
        text: "Change Background Color 2"
    }
]);

console.log(contextMenu.menu);

// document.appendChild(contextMenu.menu);

// const contextMenu = `
//     <div class="c-menu">
//         <div class="c-menu-item">
//             <div class="c-menu-item-icon">
//                 <img src="./assets/img/github.svg" alt="icon test">
//             </div>
//             <div class="c-menu-item-text">Change Background Color</div>
//         </div>
//     </div>
// `;

const menuWidth = contextMenu.offsetWidth;
const menuHeight = contextMenu.offsetHeight;

document.addEventListener("contextmenu", function(event) {
    event.preventDefault();

    contextMenu.style.top = "inherit";
    contextMenu.style.bottom = "inherit";
    contextMenu.style.left = "inherit";
    contextMenu.style.right = "inherit";

    const cursorX = event.clientX;
    const cursorY = event.clientY;
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    if (cursorX + menuWidth > windowWidth) {
        contextMenu.style.right = (windowWidth - cursorX) + "px";
    } else {
        contextMenu.style.left = cursorX + "px";
    }
    if (cursorY + menuHeight > windowHeight) {
        contextMenu.style.bottom = (windowHeight - cursorY) + "px";
    } else {
        contextMenu.style.top = cursorY + "px";
    }
});

document.addEventListener("click", () => {
    contextMenu.style.display = "none";
});
