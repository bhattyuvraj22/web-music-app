const player = document.getElementById("player");

document.addEventListener("click", e => {
    if (e.target.classList.contains("playbtn")) {
        const card = e.target.closest(".card2");
        const audioSrc = card.dataset.audio;

        player.src = audioSrc;
        player.play();
    }
});




