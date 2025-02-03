console.log("this is lab 316.3.1");
// Cache elements
const subMenuEl = document.getElementById("sub-menu");
const topMenuEl = document.getElementById("top-menu");
const topMenuLinks = topMenuEl.querySelectorAll("a");
const mainEl = document.querySelector("main");

// Style the submenu
subMenuEl.style.height = "100%";
subMenuEl.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue("--sub-menu-bg");
subMenuEl.classList.add("flex-around");
subMenuEl.style.position = "absolute";
subMenuEl.style.top = "0";

// Menu links array
const menuLinks = [
  { text: "about", href: "#" },
  { text: "catalog", href: "#", subLinks: [
      { text: "all", href: "#" },
      { text: "top selling", href: "#" },
      { text: "discounted", href: "#" }
    ]},
  { text: "orders", href: "#", subLinks: [
      { text: "new", href: "#" },
      { text: "pending", href: "#" },
      { text: "completed", href: "#" }
    ]},
  { text: "account", href: "#", subLinks: [
      { text: "profile", href: "#" },
      { text: "settings", href: "#" },
      { text: "logout", href: "#" }
    ]}
];

// Event listener for top menu
