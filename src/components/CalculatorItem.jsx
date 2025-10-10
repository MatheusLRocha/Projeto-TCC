const CalculatorItem = ({ label, step, element, idS, value, onChange }) => {
  return (
    <>
      <div className="calc-item">
        <p>{ label }</p>
        {element === "input" ? (
          <input type="number" step={step} value={value} onChange={onChange}/>
        ) : (
          <select id={idS} value={value} onChange={onChange}>
            {idS === "slSexo" ? (
              <>
                <option value="" disabled></option>
                <option value="Masculino">Masculino</option>
                <option value="Feminino">Feminino</option>
              </>
            ) : (
              <>
                <option value=""></option>
                <option value="1.3">Sedentário</option>
                <option value="1.5">Moderado</option>
                <option value="1.7">Intenso</option>
              </>
            )}
          </select>
        )}
      </div>
    </>
  );
};

export default CalculatorItem;
