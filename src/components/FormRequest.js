import React, { useState } from "react";
import Error from "./Error";
import PropTypes from "prop-types";
const FormRequest = ({
  guardarPresupuesto,
  guardarRestante,
  updateFormRequest,
}) => {
  const [quantity, saveQuantity] = useState(0);
  const [error, saveError] = useState(false);

  const defineRequest = (e) => {
    saveQuantity(+e.target.value);
  };
  const addRequest = (e) => {
    e.preventDefault();
    if (quantity < 1) {
      saveError(true);
      return;
    }
    saveError(false);
    guardarPresupuesto(quantity);
    guardarRestante(quantity);
    updateFormRequest(false);
  };
  return (
    <>
      <h2>Coloca tu presupuesto</h2>
      {error ? <Error message="El presupuesto es incorrecto" /> : null}
      <form onSubmit={addRequest}>
        <input
          type="number"
          className="u-full-width"
          placeholder="Coloca tu presupuesto"
          onChange={defineRequest}
        />

        <button type="submit" className="button-primary u-full-width">
          Definir presupuesto
        </button>
      </form>
    </>
  );
};
FormRequest.propTypes = {
  guardarPresupuesto: PropTypes.func.isRequired,
  guardarRestante: PropTypes.func.isRequired,
  updateFormRequest: PropTypes.func.isRequired,
};
export default FormRequest;
