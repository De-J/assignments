let slider = document.getElementById("mySlider");
let users = document.getElementById("users");
let cards = document.getElementsByClassName("card");

slider.value = users.innerHTML = 10;

const remove = () => {
    for (item of cards) {
        item.classList.remove("bg-light");
    }
}

slider.addEventListener("input", function() {
    users.innerHTML = this.value;
    remove();
    if (this.value < 41) {
        cards[0].classList.add("bg-light");
    }
    else if (this.value > 40 && this.value < 71) {
        cards[1].classList.add("bg-light");
    }
    else {
        cards[2].classList.add("bg-light");
    }
});

let form = document.getElementById("myForm");