"use strict";

ol.innerHTML = localStorage.getItem("list");

const span1Dels = document.querySelectorAll(".delete");
const checkDels = document.querySelectorAll(".check")

for (let span1 of span1Dels) {
    span1.onclick = () => del(span1.parentElement)
}

for (let check1 of checkDels) {
    check1.onclick = () => check(check1.children[0])
}

noTache.style.display = (ol.innerHTML == "") ? "block" : "none";

form.onsubmit = () => {
    const li = document.createElement("li");
    const span1 = document.createElement("span")
    const span2 = document.createElement("span")
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    const svg2 = document.createElementNS("http://www.w3.org/2000/svg", "svg");

    li.classList.add("test")
    span1.classList.add("delete");
    span2.classList.add("check");

    svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    svg.setAttribute("width", "2vw");
    svg.setAttribute("height", "2vw");
    svg.setAttribute("fill", "currentColor");
    svg.setAttribute("class", "bi bi-trash");
    svg.setAttribute("viewBox", "0 0 16 16");

    svg2.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    svg2.setAttribute("width", "2vw");
    svg2.setAttribute("height", "2vw");
    svg2.setAttribute("fill", "currentColor");
    svg2.setAttribute("class", "bi bi-check-square");
    svg2.setAttribute("viewBox", "0 0 16 16");

    const path1 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path1.setAttribute("d", "M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z");

    const path2 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path2.setAttribute("d", "M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z");

    const path3 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    const path4 = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path3.setAttribute("d", "M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z")
    path4.setAttribute("d", "M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z")

    svg.appendChild(path1);
    svg.appendChild(path2);

    svg2.appendChild(path3);
    svg2.appendChild(path4);

    span1.appendChild(svg);
    span2.appendChild(svg2)

    span1.onclick = () => del(li);
    span2.onclick = () => check(svg2);

    li.innerHTML = champ.value;

    li.appendChild(span2)

    li.appendChild(span1);

    ol.appendChild(li);

    champ.value = "";
    noTache.style.display = "none";

    localStorage.setItem("list", ol.innerHTML)


    return false;
}

function del(element) {
    element.remove();

    noTache.style.display = (ol.innerHTML == "") ? "block" : "none";

    localStorage.setItem("list", ol.innerHTML)
}

function check(element) {
    if (element.classList == "bi bi-check-square") {
        element.classList = "bi bi-check-square-fill";
        element.innerHTML = '<path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm10.03 4.97a.75.75 0 0 1 .011 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.75.75 0 0 1 1.08-.022z"/>'
    }

    else {
        element.classList = "bi bi-check-square"
        element.innerHTML = '<path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/><path d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z"/>'
    }
}


/*** Empecher le resizing */
const metas = document.getElementsByTagName('meta');
metas[1].content = `width=device-width, height=${window.innerHeight}, initial-scale=1.0, maximum-scale=5.0, user-scalable=0`;

if ('serviceWorker' in navigator) {
    window.addEventListener('load', ()=>{
        navigator.serviceWorker.register('sw.js')
    })
}
