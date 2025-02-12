document.addEventListener("DOMContentLoaded", function() {
    fetch("https://api.github.com/users/klalithya/repos") 
    .then(response => response.json())
    .then(data => {
        let projectSection = document.getElementById("project-list");
        projectSection.innerHTML = ""; // Clear existing content

        data.forEach(repo => {
            let div = document.createElement("div");
            div.classList.add("project");

            div.innerHTML = `
                <h3>${repo.Real-time-emotion-detection}</h3>
                <p>${repo.created a CNN-based real-time emotion recognition system on the FER-2013 dataset, deployed it on a Jetson Nano for facial expression analysis in the classroom to improve student engagement and instructional efficacy, and planned its integration with a classroom management system. || "No description available."}</p>
                <a href="${repo.https://github.com/klalithya/Real-time-Emotion-detection.git}" target="_blank">GitHub Link</a>
            `;

            projectSection.appendChild(div);
        });
    })
    .catch(error => console.error("Error fetching repositories:", error));
});
