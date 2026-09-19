const stars = document.querySelectorAll(".star");
const rating = document.getElementById("rating");

stars.forEach((star) => {

    star.addEventListener("click", () => {

        const value = star.dataset.value;

        rating.value = value;

        stars.forEach((item) => {

            if (item.dataset.value <= value) {
                item.classList.add("selected");
            } else {
                item.classList.remove("selected");
            }

        });

    });

});