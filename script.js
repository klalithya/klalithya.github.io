document.addEventListener("DOMContentLoaded", function() {
    fetch("https://api.github.com/users/klalithya/repos")  // Replace with the correct GitHub username
    .then(response => response.json())
    .then(data => {
        let projectSection = document.getElementById("project-list");
        projectSection.innerHTML = "";  // Clear existing content

        data.forEach(repo => {
            let div = document.createElement("div");
            div.classList.add("project");

            div.innerHTML = `
                <h3>${repo.name}</h3>
                <p>${repo.description || "No description available."}</p>
                <a href="${repo.html_url}" target="_blank">View on GitHub</a>
            `;

            projectSection.appendChild(div);
        });
    })
    .catch(error => console.error("Error fetching repositories:", error));
});
