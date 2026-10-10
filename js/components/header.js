export function renderHeader() {
  const header = document.querySelector("#header");

  if (!header) return;

  header.innerHTML = `
        <div class="topbar container">
            <a class="logo" href="index.html" aria-label="Emmelin Larina - Home">
                EMMELIN
            </a>
            
            <nav aria-label="Main Navigation">
                <a href="index.html#work">Work</a>
                <a href="index.html#about">About</a>
                <a href="index.html#contact">Contact</a>
            </nav>
        </div>
     `;
}
