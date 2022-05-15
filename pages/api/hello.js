import axios from "axios";

export async function registerUser(userData) {
  const res = await axios
    .post("http://localhost:8082/api/v1/useradd", userData)
    .then(function (response) {
      if (response?.status === 200) {
        console.log("hello");
        return true;
      }
    })
    .catch(function (error) {
      console.log(error);
    });

    return res;
}

export async function loginUser(userData) {
  await axios
    .post("http://localhost:8082/api/v1/validate", userData)
    .then(function (response) {
      if (response?.status === 200) {
        console.log(response);
        return true;
      }
    })
    .catch(function (error) {
      console.log(error);
    });
}
