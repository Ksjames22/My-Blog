document.getElementById("blogForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const username = document.getElementById("username").value;
    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;
  
    if (username && title && content) {
      const post = {
        username: username,
        title: title,
        content: content
      };
  
      let posts = JSON.parse(localStorage.getItem("posts")) || [];
      posts.push(post);
      localStorage.setItem("posts", JSON.stringify(posts));
  
      window.location.href = "blog.html";
    } else {
      document.getElementById("errorMsg").style.display = "block";
    }
  });

  document.addEventListener("DOMContentLoaded", function() {
    const posts = JSON.parse(localStorage.getItem("posts")) || [];
    const blogPostsContainer = document.getElementById("blogPosts");
  
    posts.forEach(function(post) {
      const postElement = document.createElement("div");
      postElement.classList.add("blog-post");
      postElement.innerHTML = `
        <h2>${post.title}</h2>
        <p>${post.content}</p>
        <p>By ${post.username}</p>
      `;
      blogPostsContainer.appendChild(postElement);
    });
  });

  document.addEventListener("DOMContentLoaded", function() {
    const toggleModeBtn = document.getElementById("toggleMode");
    const backBtn = document.getElementById("backBtn");
  
    toggleModeBtn.addEventListener("click", function() {
      document.body.classList.toggle("dark-mode");
    });
  
    backBtn.addEventListener("click", function() {
      window.location.href = "index.html";
    });
  });