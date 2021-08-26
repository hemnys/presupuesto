import React from "react";
import PropTypes from "prop-types";
import { revisarPresupuesto } from "../helpers";
const ControlPresupuesto = ({ presupuesto, restante }) => (
  <>
    <div className="alert alert-primary">
      <p>Presupuesto:$ {presupuesto}</p>
    </div>
    <div className={revisarPresupuesto(presupuesto, restante)}>
      <p>Restante:$ {restante}</p>
    </div>
  </>
);
ControlPresupuesto.propTypes = {
  presupuesto: PropTypes.number.isRequired,
  restante: PropTypes.number.isRequired,
};
export default ControlPresupuesto;
