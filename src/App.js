import { useState } from "react";
import axios from "axios";

function App() {

  const [datos, setDatos] = useState({
   correo: "",
   contrasena: ""
  });

  const handleInputChange = (e) =>{
    let { name, value } = e.target;
    let newDatos = {...datos, [name]: value};
    setDatos(newDatos);
  }

  const handleSubmit = async(e)=>{
    e.preventDefault();
    if(!e.target.checkValidity()){
      console.log("no enviar");
    }else{
      let res = await axios.post("http://localhost:3030/api/signin",datos);
      console.log(res.data);
    }
  };

  return (
    <section className="h-100">
      <div className="container h-100">
          <div className="row justify-content-sm-center h-100">
              <div className="col-xxl-4 col-xl-5 col-lg-5 col-md-7 col-sm-9">
                  <div className="card shadow-lg">
                      <div className="card-body p-5">
                          <h1 className="fs-4 card-title fw-bold mb-4">Login</h1>
                          <form onSubmit={handleSubmit} className="needs-validation" noValidate={true} autoComplete="off">
                              <div className="mb-3">
                                  <label className="mb-2 text-muted" htmlFor="email">Usuario</label>
                                  <input id="correo" type="text" onChange={handleInputChange} value={datos.correo} className="form-control" name="correo" required autoFocus />
                                  <div className="invalid-feedback">
                                      Usuario inválido
                                  </div>
                              </div>
                              <div className="mb-3">
                                  <div className="mb-2 w-100">
                                      <label className="text-muted" htmlFor="contrasena">Contraseña</label>
                                      <a href="/" className="float-end">
                                          ¿Olvidaste tu contraseña?
                                      </a>
                                  </div>
                                  <input id="contrasena" type="contrasena" onChange={handleInputChange} value={datos.contrasena} className="form-control" name="contrasena" required />
                                  <div className="invalid-feedback">
                                      Contraseña es requirida
                                  </div>
                              </div>
                              <div className="d-flex align-items-center">
                                  <div className="form-check">
                                      <input type="checkbox" name="remember" id="remember" className="form-check-input" />
                                      <label htmlFor="remember" className="form-check-label">Recordarme</label>
                                  </div>
                                  <button type="submit" className="btn btn-primary ms-auto">
                                      <i className="bi bi-box-arrow-in-right"></i> Ingresar
                                  </button>
                              </div>
                          </form>
                      </div>
                      <div className="card-footer py-3 border-0">
                          <div className="text-center">
                              Todos los derechos reservados &copy; 2021
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </section>
  );
}

export default App;