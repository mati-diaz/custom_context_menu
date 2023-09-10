class ContextMenu {
    constructor(items) {
        this.menu = document.createElement("div");
        this.menu.classList.add("c-menu");

        items.forEach(item => {
            this.menu.appendChild(this.createMenuItem(item));
        });
    }

    createMenuItem(item) {
        const menuItem = document.createElement("div");
        menuItem.classList.add("c-menu-item");

        const icon = document.createElement("div");
        icon.classList.add("c-menu-item-icon");

        const iconImg = document.createElement("img");
        iconImg.src = `../assets/img/${item.icon}`;
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

const { menu } = new ContextMenu([
    {
        icon: "github.svg",
        text: "Test Item 1"
    },
    {
        icon: "github.svg",
        text: "Test Item 2"
    },
    {
        icon: "github.svg",
        text: "Test Item 3"
    },
    {
        icon: "github.svg",
        text: "Test Item 4"
    },
    {
        icon: "github.svg",
        text: "Test Item 5"
    },
    {
        icon: "github.svg",
        text: "Test Item 6"
    }
]);

document.body.appendChild(menu);

const menuWidth = menu.offsetWidth;
const menuHeight = menu.offsetHeight;

menu.style.display = "none";

document.addEventListener("contextmenu", function(event) {
    event.preventDefault();

    menu.style.display = "block";

    menu.style.top = "inherit";
    menu.style.bottom = "inherit";
    menu.style.left = "inherit";
    menu.style.right = "inherit";

    const cursorX = event.clientX;
    const cursorY = event.clientY;
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    if (cursorX + menuWidth > windowWidth) {
        menu.style.right = (windowWidth - cursorX) + "px";
    } else {
        menu.style.left = cursorX + "px";
    }
    if (cursorY + menuHeight > windowHeight) {
        menu.style.bottom = (windowHeight - cursorY) + "px";
    } else {
        menu.style.top = cursorY + "px";
    }
});

document.addEventListener("click", () => {
    menu.style.display = "none";
});
