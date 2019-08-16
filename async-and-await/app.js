// async function myFunc() {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("Hello"), 1000);
//   });

//   let error = true;

//   if (!error) {
//     const response = await promise;
//     return response;
//   } else {
//     await Promise.reject(new Error("Something went wrong..."));
//   }
// }

// myFunc()
//   .then(response => console.log(response))
//   .catch(err => console.log(err));

async function getUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");

  const data = await response.json();
  return data;
}

getUsers().then(users => console.log(users));
