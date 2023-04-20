const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const postId = params.get("id");
const blogContent = document.getElementById("blog-content");

fetch(`https://wordpress.flywheelsites.com//wp-json/wp/v2/posts/${postId}`)
  .then((response) => response.json())
  .then((data) => {
    const postTitle = data.title.rendered;
    const postContent = data.content.rendered;
    const postDate = data.date;

    const postContainer = document.getElementById("blog-content");
    postContainer.innerHTML = `
      <h1>${postTitle}</h1>
      <p>${postContent}</p>
      <small>Published on ${new Date(postDate).toLocaleDateString()}</small>
    `;
    blogContent.appendChild(postContainer);
  })
  .catch((error) => console.error(error));
