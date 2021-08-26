import React, { useState, useEffect } from "react";
import FormRequest from "./components/FormRequest";
import Form from "./components/Form";
import Listado from "./components/Listado";
import ControlPresupuesto from "./components/ControlPrespuesto";
function App() {
  let initialState = 0;
  const [presupuesto, guardarPresupuesto] = useState(initialState);
  const [restante, guardarRestante] = useState(initialState);
  const [showFormRequest, updateFormRequest] = useState(true);
  const [gastos, guardarGastos] = useState([]);
  const [gasto, guardarGasto] = useState({});
  const [crearGasto, guardarCrearGasto] = useState(false);
  // use effect que actualiza el restante
  useEffect(() => {
    if (crearGasto) {
      //Agrega el nuevo presupuesto
      guardarGastos([...gastos, gasto]);
      guardarCrearGasto(false);
      // resta del presupuesto actual

      const presupuestoRestante = restante - gasto.quantity;

      guardarRestante(presupuestoRestante);
    }
  }, [gasto, crearGasto, gastos, restante]);

  return (
    <div className="container">
      <header>
        <h1>Gasto Semanal</h1>
      </header>
      <div className="contenido-principal contenido">
        {showFormRequest ? (
          <FormRequest
            guardarPresupuesto={guardarPresupuesto}
            guardarRestante={guardarRestante}
            updateFormRequest={updateFormRequest}
          />
        ) : (
          <div className="row">
            <div className="one-half column">
              <Form
                guardarGasto={guardarGasto}
                guardarCrearGasto={guardarCrearGasto}
              />
            </div>
            <div className="one-half column">
              <Listado gastos={gastos} />
              <ControlPresupuesto
                presupuesto={presupuesto}
                restante={restante}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
