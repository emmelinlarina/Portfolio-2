export function createProjectCard(project) {
  return `
        <article class="card">
            <a class="card-link" href="${project.article}">
                <img
                    src="${project.imageUrl}"
                    alt="${project.title}"
                />

                <div class="card-body">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <span class="readmore">Read more</span>
                </div>
            </a>
        </article>
    `;
}
