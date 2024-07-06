import React from "react"
import MainButtons from "./components/MainButtons"
import MainCards from "./components/MainCards"
import MainText from "./components/MainText"
import MainTitle from "./components/MainTitle"

function App() {
  return (
    <div className="flex flex-col items-center bg-purple p-10 gap-[3rem] h-screen">
      <MainTitle text="Rosadev Solutions" />
      <MainText />
      <MainCards />
      <MainButtons />
    </div>
  )
}

export default App
