export function renderFooter() {
  const footer = document.querySelector("#footer");

  if (!footer) return;

  const currentYear = new Date().getFullYear();

  footer.innerHTML = `
        <div class="foot container">
            <p>&copy; ${currentYear} Emmelin Larina</p>
        </div>
    `;
}
