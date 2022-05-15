import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../Components/Navbar";
import Notification from "../Components/Notification";
import { USER_TYPES } from "../store/types";
import { updateUser, uploadImage } from "./api/hello";
import privateRoute from '../hoc/Authenticate'

function profile() {
  const { user } = useSelector((store) => store?.user);

  const dispatch = useDispatch();

  console.log(user);

  const [name, setName] = useState(user?.name);
  const [age, setAge] = useState(user?.age);
  const [address, setAddress] = useState(user?.address);
  const [email, setEmail] = useState(user?.email);
  // const [password, setPassword] = useState('');
  // const [rePassword, setRePassword] = useState('');

  const [image, setImage] = useState(null);
  const [createObjectURL, setCreateObjectURL] = useState(user?.imageUrl);

  const [nameError, setNameError] = useState("");

  const [ageError, setAgeError] = useState("");
  const [addressError, setAddressError] = useState("");
  const [emailError, setEmailError] = useState("");

  const validateData = () => {
    if (name === "") {
      setNameError("Field cannot be empty");
    } else {
      setNameError("");
    }

    if (address === "") {
      setAddressError("Field cannot be empty");
    } else {
      setAddressError("");
    }

    if (age === "") {
      setAgeError("Field cannot be empty");
    } else {
      setAgeError("");
    }

    if (email === "") {
      setEmailError("Field cannot be empty");
    } else {
      setEmailError('');
    }

    submitdata();
  };

  const submitdata = async () => {
    if (
      nameError === "" &&
      ageError === "" &&
      addressError === "" &&
      emailError === ""
    ) {
      let userdata = {
        address: address,
        age: age,
        email: email,
        name: name,
        username: email,
      };
      const res = await updateUser(user?.user?.id, userdata);
      console.log(res);
      if(res){
        dispatch({
            type: USER_TYPES.SET_USER,
            payload: {
              isAuthenticated: true,
              user: res?.data,
            },
          });
        //   window.location.href = '/profile';
    }
    }
  };

  const uploadToServer = async () => {
    const body = new FormData();
    body.append("file", image);
    const value = await uploadImage(body);
    console.log(value);

    setCreateObjectURL(value?.data?.file_url)


  };

  const deleteAccount = async ( ) =>{
    const res = await deleteUser(user?.user?.id);
  }
  const userLogout = ( ) =>{
    dispatch({
      type: USER_TYPES.SET_USER,
      payload: {
        isAuthenticated: false,
      },
    });
  }

  return (
    <>
      <Navbar />
      <Notification
        Header={"Hello"}
        Message={"This is a message"}
        type={"hello"}
        Show={true}
      />

      <div className="m-auto justfy-center w-10/12  md:w-1/2">
        <div className="m-2 text-2xl">
          <div className="mb-4">Profile</div>
          <div>
            <div className="text-sm">
              <img src={createObjectURL} />
              <h4>Select Image</h4>
              <input
                className=" text-white my-2 p-2 border-2 bg-blue-600 rounded-lg border-blue-500"
                type="file"
                name="myImage"
                onChange={(e) => setImage(e.target.files[0])}
              />
              <button
                className=" text-white mx-16 my-2 p-2 border-2 bg-blue-600 rounded-lg border-blue-500"
                type="submit"
                onClick={uploadToServer}
              >
                Upload Image
              </button>
            </div>
          </div>
        </div>
        <div className=" flex flex-col">
          <input
            className="m-2 rounded-md border-2 border-blue-400 p-2"
            value={name}
            type="text"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="m-2 rounded-md border-2 border-blue-400 p-2"
            value={age}
            type="text"
            placeholder="Age"
            onChange={(e) => setAge(e.target.value)}
          />
          <input
            className="m-2 rounded-md border-2 border-blue-400 p-2"
            value={address}
            type="text"
            placeholder="Address"
            onChange={(e) => setAddress(e.target.value)}
          />
          <input
            className="m-2 rounded-md border-2 border-blue-400 p-2"
            value={email}
            type="text"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <button
            className=" text-white mx-16 my-2 p-2 border-2 bg-blue-600 rounded-lg border-blue-500"
            type="submit"
            onClick={() => validateData()}
          >
            Update
          </button>

          <button
            className=" text-white mx-16 my-2 p-2 border-2 bg-red-400 rounded-lg border-red-500"
            type="submit"
            onClick={() => deleteAccount()}
          >
            Delete
          </button>
          <button
            className=" text-white mx-16 my-2 p-2 border-2 bg-green-700 rounded-lg border-green-900"
            type="submit"
            onClick={() => userLogout()}
          >
            Logout
          </button>
        </div>
      </div>
    </>
  );
}

export default privateRoute(profile);
