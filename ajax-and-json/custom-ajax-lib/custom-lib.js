function ajaxLib() {
  this.http = new XMLHttpRequest();
}

// Make HTTP GET Request
ajaxLib.prototype.get = function(url, callback) {
  this.http.open("GET", url, true);

  let self = this;
  this.http.onload = function() {
    if (self.http.status === 200) {
      callback(null, self.http.responseText);
    } else {
      callback("Error: " + self.http.status);
    }
  };
  this.http.send();
};

// Make HTTP POST Request
ajaxLib.prototype.post = function(url, data, callback) {
  this.http.open("POST", url, true);

  this.http.setRequestHeader("Content-type", "application/json");

  let self = this;
  this.http.onload = function() {
    if (self.http.status === 200 || self.http.status === 201) {
      callback(null, self.http.responseText);
    } else {
      callback("Error: " + self.http.status);
    }
  };

  this.http.send(JSON.stringify(data));
};

// Make HTTP PUT Request
ajaxLib.prototype.put = function(url, data, callback) {
  this.http.open("PUT", url, true);

  this.http.setRequestHeader("Content-type", "application/json");

  let self = this;
  this.http.onload = function() {
    if (self.http.status === 200 || self.http.status === 201) {
      callback(null, self.http.responseText);
    } else {
      callback("Error: " + self.http.status);
    }
  };

  this.http.send(JSON.stringify(data));
};

// Make HTTP DELETE Request
ajaxLib.prototype.delete = function(url, callback) {
  this.http.open("DELETE", url, true);

  let self = this;
  this.http.onload = function() {
    if (self.http.status === 200) {
      callback(null, "Post deleted.");
    } else {
      callback("Error: " + self.http.status);
    }
  };
  this.http.send();
};
