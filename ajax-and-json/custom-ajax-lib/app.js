const http = new ajaxLib();

// Get All Posts
// http.get("https://jsonplaceholder.typicode.com/posts", function(err, posts) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(posts);
//   }
// });

// Get a Single Post
// http.get("https://jsonplaceholder.typicode.com/post/1", function(err, post) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(post);
//   }
// });

// Create Sample Data
const data = {
  title: "Custom Post",
  body: "This is sample text"
};

// Create New Post
// http.post("https://jsonplaceholder.typicode.com/posts", data, function(err, post) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(post);
//   }
// });

// Update Existing Post
// http.put("https://jsonplaceholder.typicode.com/posts/1", data, function(err, post) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(post);
//   }
// });

// Delete a Post
http.delete("https://jsonplaceholder.typicode.com/posts/1", function(err, response) {
  if (err) {
    console.log(err);
  } else {
    console.log(response);
  }
});
