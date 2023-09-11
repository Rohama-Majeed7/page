const sublinks = [
  {
    page: "products",
    links: [
      { label: "payment", icon: "fas fa-credit-card", url: "products.html" },
      { label: "terminal", icon: "fas fa-credit-card", url: "products.html" },
      { label: "connect", icon: "fas fa-credit-card", url: "products.html" },
    ],
  },
  {
    page: "developers",
    links: [
      { label: "plugins", icon: "fas fa-book", url: "products.html" },
      { label: "libraries", icon: "fas fa-book", url: "products.html" },
      { label: "plugins", icon: "fas fa-book", url: "products.html" },
      { label: "billing", icon: "fas fa-book", url: "products.html" },
    ],
  },
  {
    page: "company",
    links: [
      { label: "about", icon: "fas fa-briefcase", url: "products.html" },
      { label: "customers", icon: "fas fa-briefcase", url: "products.html" },
    ],
  },
];

const barBtn = document.querySelector(".nav-btn");
const sidebar = document.querySelector(".wrapper");
const closeBtn = document.querySelector(".close-btn");
const sideLinks = document.querySelector(".side-links");
const linkBtns = [...document.querySelectorAll(".link-btn")];
const hero = document.querySelector(".hero");
const nav = document.querySelector(".nav");
const submenu = document.querySelector(".submenu");

barBtn.addEventListener("click", function () {
  sidebar.classList.add("show-sidebar");
  nav.style.background = "rgba(0,0,0,0.6)";
  hero.style.background = "rgba(0,0,0,0.6)";
});
closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
  sidebar.classList.add("remove-sidebar");
  nav.style.background = "transparent";
  hero.style.background = "transparent";
});
// for side links
sideLinks.innerHTML = sublinks
  .map((link) => {
    return `<article class="links">
  <h3>${link.page}</h3>
  <div class="sub-links">
  ${link.links
    .map((link) => {
      return `<a href="${link.url}" >${link.label}</a>`;
    })
    .join(" ")}
  </div>
  </article>`;
  })
  .join(" ");
//  for submenus

linkBtns.forEach((btn) => {
  btn.addEventListener("mouseover", function (e) {
    submenu.classList.add("show-menu");
    const element = e.currentTarget.textContent;
    submenu.innerHTML = sublinks
      .map((link) => {
        if (element === link.page) {
          return `<article class="links">
<h3>${link.page}</h3>
<div class="sub-links">
${link.links
  .map((link) => {
    return `<a href="${link.url}" >${link.label}</a>`;
  })
  .join(" ")}
</div>
</article>`;
        }
        switch (element) {
          case "products":
            submenu.style.left = "25%";
            break;
          case "developers":
            submenu.style.left = "45%";
            break;
          case "company":
            submenu.style.left = "60%";
            break;
        }
      })
      .join(" ");
  });
});

hero.addEventListener("mouseenter",function(){
  submenu.classList.remove('show-menu');
})


const signBtn = document.querySelector('.signup-btn');
const form = document.querySelector('.form');

signBtn.addEventListener('click',function(){
  form.classList.toggle("show-form");
})


const main = document.querySelector(".form_main");

signin.addEventListener('click',function(){
main.classList.add('show-signin');
})