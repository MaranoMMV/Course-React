const Challenge = () => {
  const somar = (numero1, numero2) => {

    return (
        console.log(numero1 + " + " +  numero2 + " = " + (numero1 + numero2)),
        numero1 + numero2

    )

  };

  return (
    <div>
        <button  onClick={somar}>somar</button>
        <br />
        {somar(3,5)}
        <br />
        {somar(10,5)}
        
    </div>
  );
};
export default Challenge;
