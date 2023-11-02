

let items = document.querySelectorAll(".item")

let abs1 = document.querySelector(".abs1");
let abs2 = document.querySelector(".abs2");
let abs3 = document.querySelector(".abs3");
let abs4 = document.querySelector(".abs4");

for (let item of items) {
    item.addEventListener("dragstart", function (e) {
        let selected = e.target;  

        abs1.addEventListener("dragover", function (e) {
            e.preventDefault();
        });

        abs1.addEventListener("drop", function (e) {
            e.preventDefault();
            abs1.appendChild(selected);
            selected = null;
        });

        abs2.addEventListener("dragover", function (e) {
            e.preventDefault();
        });

        abs2.addEventListener("drop", function (e) {
            e.preventDefault();
            abs2.appendChild(selected);
            selected = null;
        });

        abs3.addEventListener("dragover", function (e) {
            e.preventDefault();
        });

        abs3.addEventListener("drop", function (e) {
            e.preventDefault();
            abs3.appendChild(selected);
            selected = null;
        });

        abs4.addEventListener("dragover", function (e) {
            e.preventDefault();
        });

        abs4.addEventListener("drop", function (e) {
            e.preventDefault();
            abs4.appendChild(selected);
            selected = null;
        });
    });
}
