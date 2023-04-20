fetch("https://wordpress.flywheelsites.com//wp-json/wp/v2/posts")
  .then((response) => response.json())
  .then((data) => {
    const blogList = document.getElementById("blog-list");
    data.forEach((post) => {
      const title = document.createElement("h2");
      title.innerText = post.title.rendered;
      title.addEventListener("click", () => {
        window.location.href = `/publications.html?id=${post.id}`;
      });
      blogList.appendChild(title);
    });
  })
  .catch((error) => console.error(error));
