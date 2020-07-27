import React from "react";
import { Link } from "react-router-dom";

export const forgotPasswordScreen = () => {
  return (
    <div class="card o-hidden border-0 shadow-lg my-5">
      <div class="card-body p-0">
        <div class="row">
          <div class="col-lg-6 d-none d-lg-block bg-password-image"></div>
          <div class="col-lg-6">
            <div class="p-5">
              <div class="text-center">
                <h1 class="h4 text-gray-900 mb-2">Olvidaste tu contraseña?</h1>
                <p class="mb-4">
                  Lo tenemos controlado, Solo ingresa tu email y enviaremos un
                  enlace para resetear tu contraseña
                </p>
              </div>
              <form class="user">
                <div class="form-group">
                  <input
                    type="email"
                    class="form-control form-control-user"
                    id="exampleInputEmail"
                    aria-describedby="emailHelp"
                    placeholder="Tu correo electronico..."
                  />
                </div>
                <a href="login.html" class="btn btn-primary btn-user btn-block">
                  Resetear contraseña
                </a>
              </form>
              <hr></hr>

              <div class="text-center">
                <Link class="small" to="/auth/login">
                  Volver al Inicio de sesion.
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
