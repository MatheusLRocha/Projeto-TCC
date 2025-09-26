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
                <option value="1.3">1.3</option>
                <option value="1.5">1.5</option>
                <option value="1.7">1.7</option>
              </>
            )}
          </select>
        )}
      </div>
    </>
  );
};

export default CalculatorItem;
