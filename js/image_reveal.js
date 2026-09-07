document.addEventListener("DOMContentLoaded", () => {
  const articles = document.querySelectorAll(".article");

  articles.forEach(article => {
    const img = article.querySelector(".article-image");
    
    if (!img) return;

    // Function to reveal the article
    const showArticle = () => {
      article.classList.add("loaded");
    };

    // If the image is already cached and loaded
    if (img.complete) {
      showArticle();
    } else {
      // Otherwise, wait for it to load
      img.addEventListener("load", showArticle);
      img.addEventListener("error", showArticle); // Fallback so text doesn't stay hidden if an image fails
    }
  });
});