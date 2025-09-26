const DietTypeRespCard = ({ alimentos }) => {
  return (
    <>
      {/* <div className="alimento">
        <h4>Alimento - a cada xg</h4>
        <h5>xKcal</h5>
        <h5>xg de Proteína</h5>
        <h5>xg de Carboidratos</h5>
        <h5>xg de Gorduras</h5>
      </div> */}

      {
        alimentos.map((alimento, index) => (
            <div className="alimento" key={index}>
                <h4>{alimento.nome} - a cada 50g</h4>
                <h5>{alimento.calorias}Kcal</h5>
                <h5>{alimento.proteinas}g de Proteína</h5>
                <h5>{alimento.carboidratos}g de Carboidrato</h5>
                <h5>{alimento.gorduras}g de Gordura</h5>
            </div>
        ))
      }
    </>
  );
};

export default DietTypeRespCard;
