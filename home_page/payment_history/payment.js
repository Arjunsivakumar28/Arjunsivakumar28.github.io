console.log("Check works!");

function sidebar_open_close(ele) {
    let mainbar = document.getElementById("main-bar");
    let sidebar = document.getElementById("main-sidebar");
    let open = ele.children[0].children[0];
    let close = ele.children[0].children[1];

    open.classList.remove("d-none");
    if (sidebar.style.display == "flex") {

        sidebar.classList.remove("d-flex");
        sidebar.style.display = "none";

        mainbar.classList.remove("col-10");
        mainbar.classList.add("col");

        close.style.display = "none";

        open.style.display = "flex";

        console.log("element check : ", close.style.display);
    } else {

        sidebar.classList.remove("d-none");
        sidebar.style.display = "flex";

        mainbar.classList.remove("col");
        mainbar.classList.add("col-10");

        close.style.display = "flex";

        open.style.display = "none";

        console.log("element check : ", close.style.display);
    }
    console.log("element check : ", sidebar);


}

function detailForm() {
    console.log("detailForm function works!");
    let main_body = document.getElementById("main_bar");
    console.log("main_body : ", main_body);

    let side_body = document.getElementById("side_body");
    console.log("side_body : ", side_body);

    side_body.classList.remove("d-none");

    if (side_body.style.display === "none") {
        side_body.style.display = "flex";
        main_body.style.width = "50%";
    } else {
        side_body.style.display = "none";
        main_body.style.width = "100%";
    }
}