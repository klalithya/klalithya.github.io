document.addEventListener("DOMContentLoaded", function() {
    let projectSection = document.getElementById("project-list");

    // Check if the project section exists before running the script
    if (!projectSection) {
        console.error("Error: Element with ID 'project-list' not found.");
        return;
    }

    fetch("https://api.github.com/users/klalithya/repos")  // Make sure your GitHub username is correct
    .then(response => response.json())
    .then(data => {
        projectSection.innerHTML = "";  // Clear previous content

        data.forEach(repo => {
            let div = document.createElement("div");
            div.classList.add("project");

            // Make sure the link goes to GitHub, NOT GitHub Pages
            div.innerHTML = `
                <h3>${repo.name}</h3>
                <p>${repo.description || "No description available."}</p>
                <a href="https://github.com/klalithya/${repo.name}" target="_blank">View on GitHub</a>
            `;

            projectSection.appendChild(div);
        });
    })
    .catch(error => console.error("Error fetching repositories:", error));
});
