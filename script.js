document.addEventListener("DOMContentLoaded", () => {
    const filterButtons = document.querySelectorAll(".btn button");
    const filterableCards = document.querySelectorAll(".Img_cards .card");

    const filterCards = (e) => {
        document.querySelector(".active").classList.remove("active");
        e.target.classList.add("active");

        filterableCards.forEach((card) => {
            if (e.target.dataset.name === "all" || card.dataset.name === e.target.dataset.name) {
                card.classList.remove("hide");
            } else {
                card.classList.add("hide");
            }
        });
    };

    filterButtons.forEach((button) => button.addEventListener("click", filterCards));
});
