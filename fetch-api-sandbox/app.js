const textButton = document.getElementById("button1");
const jsonButton = document.getElementById("button2");
const apiButton = document.getElementById("button3");
const output = document.getElementById("output");

textButton.addEventListener("click", getText);
jsonButton.addEventListener("click", getJSON);
apiButton.addEventListener("click", getUsersFromAPI);

// fetch local text file data
function getText() {
  fetch("test.txt")
    .then(response => response.text())
    .then(data => {
      output.textContent = data;
    })
    .catch(err => console.log(err));
}

// fetch local JSON file data
function getJSON() {
  fetch("posts.json")
    .then(response => response.json())
    .then(data => {
      let posts = "";
      data.forEach(function(post) {
        posts += `
          <ul>
            <li><strong>${post.title}</strong></li>
              <ul>
                <li>${post.body}</li>
              </ul>
          </ul>
        `;
      });
      output.innerHTML = posts;
    })
    .catch(err => console.log(err));
}

// fetch users list from Github API
// fetch local JSON file data
function getUsersFromAPI() {
  fetch("https://api.github.com/users")
    .then(response => response.json())
    .then(data => {
      let users = "";
      data.forEach(function(user) {
        users += `
          <ul>
            <li><strong>Username:</strong> ${user.login}</li>
              <ul>
                <li><strong>ID:</strong> ${user.id}</li>
                <li><strong>Account Type:</strong> ${user.type}</li>
                <li><strong>URL</strong> <a href="${user.html_url}">${user.html_url}</a></li>
              </ul>
          </ul>
        `;
      });
      output.innerHTML = users;
    })
    .catch(err => console.log(err));
}
