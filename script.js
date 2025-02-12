document.addEventListener("DOMContentLoaded", function() {
    fetch("https://api.github.com/users/klalithya/repos")
    .then(response => response.json())
    .then(data => {
        data.forEach(repo => {
            let div = document.createElement("div");
            div.classList.add("project");
            div.innerHTML = `<h3>${repo.name}</h3><p></p>;
            projectSection.appendChild(div);
        });
    });
});
