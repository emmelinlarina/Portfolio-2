import { projects } from "./data/projects.js";
import { createProjectCard } from "./components/projectCard.js";
import { renderHeader } from "./components/header.js";
import { renderFooter } from "./components/footer.js";

const projectGrid = document.querySelector("#project-grid");

function renderProjects() {
  if (projectGrid) {
    projectGrid.innerHTML = projects.map(createProjectCard).join("");
  }
}

renderHeader();
renderProjects();
renderFooter();
