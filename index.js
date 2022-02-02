const axios = require("axios");
async function get(url, callback) {
  let res, err, status;
  try {
    const response = await axios.get(url);
    res = response.data;
    status = response.status;
  } catch (error) {
    err = error;
    res = err.response.data;
    status = err.status;
  } finally {
    callback(err, status, res);
  }
}

async function post(url, callback, data) {
  let res, err, status;
  try {
    const response = await axios.post(url, data);
    res = response.data;
    status = response.status;
  } catch (error) {
    err = error;
    res = err.response.data;
    status = err.status;
  } finally {
    callback(err, status, res);
  }
}

async function put(url, callback, data) {
  let res, err, status;
  try {
    const response = await axios.put(url, data);
    res = response.data;
    status = response.status;
  } catch (error) {
    err = error;
    res = err.response.data;
    status = err.status;
  } finally {
    callback(err, status, res);
  }
}

async function patch(url, callback, data) {
  let res, err, status;
  try {
    const response = await axios.patch(url, data);
    res = response.data;
    status = response.status;
  } catch (error) {
    err = error;
    res = err.response.data;
    status = err.status;
  } finally {
    callback(err, status, res);
  }
}

async function Delete(url, callback) {
  let res, err, status;
  try {
    const response = await axios.delete(url);
    res = response.data;
    status = response.status;
  } catch (error) {
    err = error;
    res = err.response.data;
    status = err.status;
  } finally {
    callback(err, status, res);
  }
}
// get("https://reqres.in/api/users?page=2", (err, status, body) => {
//   console.log("err", err);
//   console.log("status", status);
//   console.log("body", body);
// });

put("https://reqres.in/api/users?page=2", (err, status, body) => {
  console.log("err", err);
  console.log("status", status);
  console.log("body", body);
});
