import React from "react";
import { Link } from "react-router-dom";
import "../Register/Register.css"

function Register() {
  return (  
    <div className="SquareBoxRegister container">
      <div className="SquareRegister container">
        <h2 className="text-center">REGISTRO</h2>
        <div className="ContentsLogin">
          <form method="post">
          <input type="text"className="Input container"placeholder="Nome" name="name"></input>
          <input type="text"className="Input container"placeholder="Email"name="email"></input>
          <input type="password"className="Input container"placeholder="Password" name="password"></input>
          <button id=""className="container btn btn-primary d-block btn-sm p-2">REGISTRE-SE</button>
          <div id="OrRegister" className="">Já possue uma conta?</div>
          <Link id="LinkLogin"to="/"><button id="BtnSendRegister"className="container btn btn-primary d-block btn-sm p-2">LOGIN</button></Link>
          </form>
        </div>
      </div>
    </div>
    
    );
}
export default Register;