class EasyHTTP {
  // Make HTTP GET Request
  async get(url) {
    const response = await fetch("url");
    const data = await response.json();
    return data;
  }

  // Make HTTP POST Request
  async post(url, data) {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(data)
    });

    const resData = await response.json();
    return resData;
  }

  async put(url, data) {
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(data)
    });

    const resData = await response.json();
    return resData;
  }

  async delete(url) {
    const response = await fetch(url, {
      method: "DELETE"
    });
    const resData = await "User deleted.";
    return resData;
  }
}
