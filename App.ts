const affiche = document.getElementById("affiche");
const btn = document.getElementById("btn");

let count: number = 0;

btn?.addEventListener("click", () => {
    if (count < 10 && affiche) { // Vérifie aussi que affiche existe
        count++;
        affiche.innerHTML = count.toString();
    }
});