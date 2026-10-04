import { projects } from "./data/projects.js";
import { createProjectCard } from "./components/projectCard.js";

const projectGrid = document.querySelector("#project-grid");

function renderProjects() {
  if (projectGrid) {
    projectGrid.innerHTML = projects.map(createProjectCard).join("");
  }
}

function updateYear() {
  const yearElement = document.querySelector("#year");
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}

renderProjects();
updateYear();
