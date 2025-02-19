document.addEventListener("DOMContentLoaded", function () {
    fetch("https://api.github.com/users/klalithya/repos")
        .then(response => response.json())
        .then(data => {
            let projectSection = document.getElementById("projects");
            projectSection.innerHTML = ""; // Clear existing content

            data.forEach(repo => {
                let projectDiv = document.createElement("div");
                projectDiv.classList.add("project");

                // Convert repo name to lowercase and replace spaces with hyphens
                let repoNameFormatted = repo.name.toLowerCase().replace(/\s+/g, "-");
                let imageUrl = `https://klalithya.github.io/images/${repoNameFormatted}.jpg`;

                // Ensure the project is clickable by wrapping it in an <a> tag
                projectDiv.innerHTML = `
                    <div class="project-link">
                        <a href="${repo.html_url}" target="_blank">
                            <img src="${imageUrl}" alt="${repo.name}" 
                                 onerror="this.onerror=null; this.src='https://klalithya.github.io/images/default.jpg';">
                            <h3>${repo.name}</h3>
                            <p>${repo.description ? repo.description : "No description available."}</p>
                        </a>
                    </div>
                `;

                projectSection.appendChild(projectDiv);
            });
        })
        .catch(error => console.error("Error fetching repositories:", error));
});
