document.querySelector("#button").addEventListener("click", loadData);

function loadData() {
  // Create an XHR Object
  const xhr = new XMLHttpRequest();

  // OPEN method
  xhr.open("GET", "data.txt", true);

  // Optional - used for spinners/loaders
  xhr.onprogress = function() {
    console.log("READYSTATE", xhr.readyState);
  };

  // ONLOAD
  xhr.onload = function() {
    if (this.status === 200) {
      // console.log(this.responseText);
      document.querySelector("#output").innerHTML = `<h1>${this.responseText}</h1>`;
    }
  };

  // For errors
  xhr.onerror = function() {
    console.log("Request error...");
  };

  xhr.send();

  // readyState Values
  // 0: request not initialized
  // 1: server connection established
  // 2: request received
  // 3: processing request
  // 4: request finished and response is ready

  // HTTP Statuses
  // 200: "OK"
  // 403: "Forbidden"
  // 404: "Not Found"
}
