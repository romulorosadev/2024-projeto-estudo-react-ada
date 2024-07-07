import React from "react"
import MainTitle from "./components/MainTitle"
import MyCounter from "./components/MyCouter"

function App() {
  return (
    <div className="flex flex-col items-center bg-purple p-10 gap-[3rem] h-screen">
      <MainTitle text="Estado e Eventos" />
      <MyCounter />
    </div>
  )
}

export default App
