document.addEventListener("DOMContentLoaded", function() {
    fetch("https://api.github.com/users/klalithya/repos")
    .then(response => response.json())
    .then(data => {
        let projectSection = document.getElementById("projects");
        data.forEach(repo => {
            let div = document.createElement("div");
            div.classList.add("project");
            div.innerHTML = `<h3>${repo.name}</h3><p>${repo.description || "No description"}</p>
            <a href="${repo.html_url}" target="_blank">GitHub Link</a>`;
            projectSection.appendChild(div);
        });
    });
});
