import { r as a, A as t, j as i, L as s } from "./index-081c85c1.js";

const n = [
  {
    title: "Furniture E-Mart Website",
    id: 1,
    url: "https://georgestcloud.github.io/Cloud-market-store/#",
    img: "furn.jpg",
    git_link: "https://georgestcloud.github.io/Cloud-market-store/#",
    description: "Shop the best luxury furnitures and interior decorations",
    aos: "fade-right"
  },

  {
    title: "Task App",
    id: 2,
    url: "https://georgestcloud.github.io/task-list/",
    img: "task.jfif",
    git_link: "https://georgestcloud.github.io/task-list/",
    description: "Add task and mark as read or delete when done.",
    aos: "fade-up"
  },
];

const l = () => (
  a.useEffect(() => {
    t.init({ duration: 2000 });
  }, []),
  i.jsx(i.Fragment, {
    children: i.jsx("section", {
      className: "projects-section",
      children: i.jsxs("div", {
        className: "main-text",
        id: "projects",
        children: [
          i.jsxs("h2", {
            children: ["Latest ", i.jsx("span", { children: "Projects" })]
          }),
          i.jsx("div", {
            className: "projects-content",
            children: n.map(e => i.jsxs("div", {
              className: "row",
              "data-aos": e ? e.aos : undefined,
              children: [
                i.jsx("img", { src: e.img, alt: e.title }),
                i.jsxs("div", {
                  className: "layer",
                  children: [
                    i.jsx("h5", { children: e.title }),
                    i.jsx("p", { children: e ? e.description : undefined }),
                    e && e.url ? i.jsx(s, { to: e.url, target: "_blank", children: i.jsx("i", { className: "bx bx-link-external" }) }) : "Coming Soon"
                  ]
                })
              ]
            }, e.id))
          })
        ]
      })
    })
  })
);

export { l as default };
