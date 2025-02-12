document.addEventListener("DOMContentLoaded", function () {
    fetch("https://api.github.com/users/klalithya/repos")
        .then(response => response.json())
        .then(data => {
            let projectSection = document.querySelector(".projects-grid");
            projectSection.innerHTML = ""; // Clear existing content

            data.forEach(repo => {
                let projectDiv = document.createElement("div");
                projectDiv.classList.add("project");

                projectDiv.innerHTML = `
                    <h3>${repo.name}</h3>
                    <p>${repo.description || "No description available"}</p>
                    <a href="${repo.html_url}" target="_blank">GitHub Link</a>
                `;

                projectSection.appendChild(projectDiv);
            });
        })
        .catch(error => console.error("Error fetching repositories:", error));
});
