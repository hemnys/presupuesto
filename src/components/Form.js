import React, { useState } from "react";
import PropTypes from "prop-types";
import Error from "./Error";
import { nanoid } from "nanoid";
const Form = ({ guardarGasto, guardarCrearGasto }) => {
  const [name, saveName] = useState("");
  const [quantity, saveQuantity] = useState(0);
  const [error, setError] = useState(false);
  const agregarGasto = (e) => {
    e.preventDefault();
    if (quantity < 1 || isNaN(quantity) || name === "") {
      setError(true);
      return;
    }
    setError(false);
    const gasto = {
      name,
      quantity,
      id: nanoid(10),
    };
    guardarGasto(gasto);
    saveName("");
    saveQuantity(0);
    guardarCrearGasto(true);
  };
  return (
    <form onSubmit={agregarGasto}>
      <h2>Agrega tus gastos aqui</h2>
      {error ? <Error message="hay algo mal" /> : null}
      <div className="campo">
        <label>Nombre Gasto</label>
        <input
          type="text"
          className="u-full-width"
          placeholder="Ej. Transporte"
          value={name}
          onChange={(e) => saveName(e.target.value)}
        />
      </div>
      <div className="campo">
        <label>Monto</label>
        <input
          type="number"
          className="u-full-width"
          placeholder="Ej. 300"
          value={quantity}
          onChange={(e) => saveQuantity(e.target.value)}
        />
      </div>
      <button type="submit" className="u-full-width button-primary">
        Agregar gasto
      </button>
    </form>
  );
};
Form.propTypes = {
  guardarGasto: PropTypes.func.isRequired,
  guardarCrearGasto: PropTypes.func.isRequired,
};
export default Form;
