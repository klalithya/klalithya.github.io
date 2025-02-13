document.addEventListener("DOMContentLoaded", function () {
    fetch("https://api.github.com/users/klalithya/repos")
        .then(response => response.json())
        .then(data => {
            let projectSection = document.getElementById("projects");
            projectSection.innerHTML = ""; // Clear existing content

            data.forEach(repo => {
                let projectDiv = document.createElement("div");
                projectDiv.classList.add("project");

                // Generate image file path based on repository name
                let imageUrl = `images/${repo.name}.jpg`;

                projectDiv.innerHTML = `
                    <img src="${imageUrl}" alt="${repo.name}" onerror="this.onerror=null; this.src='images/default.jpg';">
                    <h3>${repo.name}</h3>
                    <p>${repo.description ? repo.description : "No description available."}</p>
                    <a href="${repo.html_url}" target="_blank">View on GitHub</a>
                `;

                projectSection.appendChild(projectDiv);
            });
        })
        .catch(error => console.error("Error fetching repositories:", error));
});
