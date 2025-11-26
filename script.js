const btn = document.getElementById("darkToggle");

btn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    btn.innerText = document.body.classList.contains("dark") ? "☀️" : "🌙";
});
