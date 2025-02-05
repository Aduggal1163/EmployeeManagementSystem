import React, { useState } from "react";

const Login = ({handleLogin}) => {
  const [email, setEmail] = useState("");
  const[password, setPassword] = useState('');
  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    // console.log("Form is Submittedo");
    // console.log("email is ", email);
    // console.log("password is "+ password);
    setEmail("");
    setPassword("");
  };
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 border-emerald-600 p-15 rounded-xl">
        <form
          onSubmit={submitHandler}
          className="flex flex-col items-center justify-center"
        >
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
              }}
            required
            className="outline-none bg-transparent border-2 border-emerald-600 text-xl px-5 py-3 rounded-full placeholder:text-gray-400"
            type="email"
            placeholder="Enter your email"
          />
          <input value={password} 
          onChange={(e)=>{
            setPassword(e.target.value)
          }}
            required
            className="mt-4 outline-none bg-transparent border-2 border-emerald-600 text-xl px-5 py-3 rounded-full placeholder:text-gray-400"
            type="password"
            placeholder="enter password"
          />
          <button className="text-white mt-5 outline-none border-none border-2 bg-emerald-600 text-xl px-3 py-2 cursor-pointer rounded-xl">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
