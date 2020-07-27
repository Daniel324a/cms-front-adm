import React from "react";
import { Link } from "react-router-dom";

export const LoginScreen = () => {
  return (
    <div className="card o-hidden border-0 shadow-lg my-5">
      <div className="card-body p-0">
        <div className="row">
          <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
          <div className="col-lg-6">
            <div className="p-5">
              <div className="text-center">
                <h1 className="h4 text-gray-900 mb-4">Bienvenido de vuelta</h1>
              </div>
              <form className="user">
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control form-control-user"
                    id="exampleInputEmail"
                    aria-describedby="emailHelp"
                    placeholder="Tu correo electronico..."
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    className="form-control form-control-user"
                    id="exampleInputPassword"
                    placeholder="Contraseña"
                  />
                </div>
                <div className="form-group">
                  <div className="custom-control custom-checkbox small">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="customCheck"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="customCheck"
                    >
                      Recuerdame
                    </label>
                  </div>
                </div>
                <a
                  href="index.html"
                  className="btn btn-primary btn-user btn-block"
                >
                  Iniciar
                </a>
                <a
                  href="index.html"
                  className="btn btn-google btn-user btn-block"
                >
                  <i className="fab fa-google fa-fw"></i> Iniciar con Google
                </a>
                <a
                  href="index.html"
                  className="btn btn-facebook btn-user btn-block"
                >
                  <i className="fab fa-facebook-f fa-fw"></i> Iniciar con
                  facebook
                </a>
              </form>

              <div className="text-center">
                <Link className="small" to="/auth/forgotPassword">
                  Olvide mi contraseña
                </Link>
              </div>
              {/* <div className="text-center">
                <a className="small" href="register.html">
                  Create an Account!
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
