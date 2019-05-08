import Axios from "axios";

const baseURL = "https://khaya-api.herokuapp.com";
// process.env.NODE_ENV !== "production"
//   ? "https://khaya-api.herokuapp.com"
//   : "http://localhost:1337";
const axios = Axios.create({ baseURL });

axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.post["Authorization"] = "Bearer {access token}";

export default {
  login({ username, password }) {
    return new Promise((resolve, reject) => {
      axios
        .get(`/parse/login?username=${username}&password=${password}`, {
          headers: {
            "X-Parse-Application-Id": "parse-khaya-app-ID"
          }
        })
        .then(res => {
          console.log(res);
          resolve(res.data);
        })
        .catch(error => {
          console.log(error);
          reject(error);
        });
    });
  },

  loginWithSessionToken({ sessionToken }) {
    return new Promise((resolve, reject) => {
      axios
        .post("/signIn", {
          sessionToken
        })
        .then(resolve)
        .catch(reject);
    });
  },

  registerAccount({ username, password, role, fullname, email }) {
    return new Promise((resolve, reject) => {
      console.log("Creating a new user");
      console.log({ username, password, role, fullname, email });
      axios
        .post("/signUp", { username, password, role, fullname, email })
        .then(resolve)
        .catch(reject);
    });
  }
};
