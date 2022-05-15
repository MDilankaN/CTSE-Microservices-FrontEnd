import axios from "axios";

export async function registerUser(userData) {
  const res = await axios
    .post("http://localhost:8082/api/v1/useradd", userData)
    .then(function (response) {
      if (response?.status === 200) {
        return true;
      }
    })
    .catch(function (error) {
      console.log(error);
    });

  return res;
}

export async function loginUser(userData) {
  const res = await axios
    .post("http://localhost:8082/api/v1/validate", userData)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      console.log(error);
    });

  return res;
}

export async function updateUser(id, userData) {
  const res = await axios
    .put(`http://localhost:8082/api/v1/updateuser/${id}`, userData)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      console.log(error);
    });

  return res;
}

export async function deleteUser(id) {
  const res = await axios
    .post(`http://localhost:8082/api/v1/updateuser/${id}`)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      console.log(error);
    });

  return res;
}

///////////////////////////////////////============================== STORE ITEMS ==============================///////////////////////////////////////
export async function getItems() {
  const res = await axios
    .get("http://localhost:8081/api/v1/getStoreItem")
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      console.log(error);
    });
  return res;
}

///////////////////////////////////////============================== FILE UPLOAD ==============================///////////////////////////////////////

export async function uploadImage(file) {


  const res = await axios
    .post(
      "https://ctse-backend-api-manager.azure-api.net/api/file/upload",
      file
    )
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      console.log(error);
    });
  return res;
}
///////////////////////////////////////============================== FILE UPLOAD ==============================///////////////////////////////////////
