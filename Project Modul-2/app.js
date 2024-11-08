function myFunction() {
    let divCards = document.getElementsByClassName("div_card");
    for (let divCard of divCards) {
        divCard.addEventListener("mouseover", () => {
            divCard.style.cursor = "pointer";
            divCard.style.webkitAnimation = "mymove 3s infinite";
        });
        divCard.addEventListener("mouseout", () => {
            divCard.style.webkitAnimation = "";
        });
    }
}
