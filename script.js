function searchGames() {
    const searchInput = document.getElementById("searchInput").value.toLowerCase();
    const gameCards = document.querySelectorAll(".game-card");

    gameCards.forEach((card) => {
        const title = card.getAttribute("data-title").toLowerCase();

        if (title.includes(searchInput)) {
            card.style.display = "block"; // Show matching games
        } else {
            card.style.display = "none"; // Hide non-matching games
        }
    });
}
