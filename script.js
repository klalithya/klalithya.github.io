document.addEventListener("DOMContentLoaded", function() {
    let projectSection = document.getElementById("project-list");

    // Check if the element exists before modifying it
    if (!projectSection) {
        console.error("Error: Element with ID 'project-list' not found in HTML.");
        return; // Stop execution if element is missing
    }

    fetch("https://api.github.com/users/klalithya/repos")  // Make sure your GitHub username is correct
    .then(response => response.json())
    .then(data => {
        projectSection.innerHTML = "";  // Clear previous content

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
