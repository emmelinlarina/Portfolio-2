import { renderHeader } from "./components/header.js";
import { renderFooter } from "./components/footer.js";

renderHeader();
renderFooter();

const copyLinkButton = document.querySelector(".copy-link");

async function copyPageLink() {
  if (!copyLinkButton) return;

  try {
    await navigator.clipboard.writeText(window.location.href);

    copyLinkButton.textContent = "Link Copied!";

    setTimeout(() => {
      copyLinkButton.textContent = "Copy Link";
    }, 2000);
  } catch (error) {
    console.error("Failed to copy page link:", error);
  }
}

copyLinkButton?.addEventListener("click", copyPageLink);
