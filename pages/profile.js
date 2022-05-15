import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../Components/Navbar";
import Notification from "../Components/Notification";

function profile() {

  const { user } = useSelector((store) => store?.user);

  const dispatch = useDispatch();

  console.log(user);

  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  // const [password, setPassword] = useState('');
  // const [rePassword, setRePassword] = useState('');

  const [image, setImage] = useState(null);
  const [createObjectURL, setCreateObjectURL] = useState(null);

  const [fnameError, setFNameError] = useState("");
  const [lnameError, setLNameError] = useState("");
  const [ageError, setAgeError] = useState("");
  const [addressError, setAddressError] = useState("");
  const [emailError, setEmailError] = useState("");

  const validateData = (value, place) => {
    value.preventDefault();

    if (place === "FirstName") {
      if (value === "") {
        setFNameError("Field cannot be empty");
      } else {
        setFName(value);
      }
    }

    if (place === "LastName") {
      if (value === "") {
        setLNameError("Field cannot be empty");
      } else {
        setLName(value);
      }
    }

    if (place === "Address") {
      if (value === "") {
        setAddressError("Field cannot be empty");
      } else {
        setAddress(value);
      }
    }

    if (place === "Age") {
      if (value === "") {
        setAgeError("Field cannot be empty");
      } else {
        setAge(value);
      }
    }

    if (place === "email") {
      if (value === "") {
        setEmailError("Field cannot be empty");
      } else {
        setEmail(value);
      }
    }
  };

  const submitdata = () => {
    if (
      (fnameError === "" && lnameError === "" && ageError === "") ||
      addressError === "" ||
      emailError === ""
    ) {
    }
  };

  const uploadToServer = async (event) => {
    const body = new FormData();
    body.append("file", image);
    const response = await fetch("/api/file", {
      method: "POST",
      body
    });

    console.log(response);
  };
  const uploadToClient =() =>{

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
                onChange={uploadToClient} />
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
            value={fname}
            type="text"
            placeholder="First Name"
            onChange={(e) => validateData(e.target.value, "FirstName")}
          />
          <input
            className="m-2 rounded-md border-2 border-blue-400 p-2"
            value={lname}
            type="text"
            placeholder="Last Name"
            onChange={(e) => validateData(e.target.value, "LastName")}
          />
          <input
            className="m-2 rounded-md border-2 border-blue-400 p-2"
            value={age}
            type="text"
            placeholder="Age"
            onChange={(e) => validateData(e.target.value, "Age")}
          />
          <input
            className="m-2 rounded-md border-2 border-blue-400 p-2"
            value={address}
            type="text"
            placeholder="Address"
            onChange={(e) => validateData(e.target.value, "Address")}
          />
          <input
            className="m-2 rounded-md border-2 border-blue-400 p-2"
            value={email}
            type="text"
            placeholder="email"
            onChange={(e) => validateData(e.target.value, "email")}
          />

          {/* <input className='m-2 rounded-md border-2 border-fuchsia-500 p-2' value={password} type='password' placeholder='password'/>
    <input className='m-2 rounded-md border-2 border-fuchsia-500 p-2' value={rePassword} type='password' placeholder='password'/> */}
          <button
            className=" text-white mx-16 my-2 p-2 border-2 bg-blue-600 rounded-lg border-blue-500"
            type="submit"
            onClick={() => submitdata()}
          >
            Update
          </button>
        </div>
      </div>
    </>
  );
}

export default profile;
