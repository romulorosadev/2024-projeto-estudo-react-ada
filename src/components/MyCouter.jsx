import React, { useState } from "react";

export default function MyCounter(){

  const [counter, setCounter] = useState(0);

  function aumentar(){
    setCounter(counter + 1);
  }

  function diminuir(){
    setCounter(counter - 1);
  }

  if(counter > 5){
    return (
      <div className="flex flex-col gap-4">
        <div>
          {counter > 5 ? <p className="text-[20px] text-center font-bold">Valor Maior que 5</p> : null}
        </div>

        <div className="flex justify-center items-center gap-4">
          <button onClick={diminuir} className="inline-block bg-black text-white font-bold p-4">diminuir</button>

          <h3 className=" text-white font-bold w-[10rem] text-center">CONTADOR: {counter}</h3>

          <button onClick={aumentar} className="inline-block bg-white text-black font-bold p-4">aumentar</button>
        </div>
    </div>
    )
  }

  return(
    <div className="flex flex-col gap-4">
      <div className="flex justify-center items-center gap-4">
        <button onClick={diminuir} className="inline-block bg-black text-white font-bold p-4">diminuir</button>

        <h3 className=" text-white font-bold w-[10rem] text-center">CONTADOR: {counter}</h3>

        <button onClick={aumentar} className="inline-block bg-white text-black font-bold p-4">aumentar</button>
      </div>
    </div>
  )
}
