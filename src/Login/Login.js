import React from "react";
import { Link } from "react-router-dom";
import '../Login/Login.css';
import APILogin from "./scriptFront/APILogin"

export default function Login() {
  return (
    <div className="SquareBoxLogin container">
      <div className="SquareLogin container">
        <h2 className="text-center">LOGIN</h2>
        <div className="ContentsLogin">
          <form method="post">
          <input id="email"type="text"className="Input container"placeholder="Email" name="email"></input>
          <input id="password"type="password"className="Input container"placeholder="Password" name="password"></input>
          <button onClick={()=> APILogin()} id="BtnSendLogin"className="container btn btn-primary d-block btn-sm p-2">LOGIN</button>
          <div id="OrLogin">Não possue uma conta?</div>
          <Link id="LinkRegister" to="/register"><button id="BtnSendRegister"className="container btn btn-primary d-block btn-sm p-2">REGISTRE-SE</button></Link>
          </form>
        </div>
      </div>
     <script src="./scriptFront/APILogin.js"></script>
    </div> 
);
}
