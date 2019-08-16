let posts = [
  { title: "Post 1", body: "This is post one." },
  { title: "Post 2", body: "This is post two." }
];

function createPost(post, callback) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      posts.push(post);
      const error = false;

      if (!error) {
        resolve();
      } else {
        reject("An error has occured.");
      }
    }, 2000);
  });
}

function getPosts() {
  setTimeout(function() {
    let output = "";
    posts.forEach(function(post) {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

createPost({ title: "Post 3", body: "This is post three." })
  .then(getPosts)
  .catch(function(err) {
    console.log(err);
  });
