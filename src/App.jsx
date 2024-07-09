import React from "react"
import MainTitle from "./components/MainTitle"
import MyList from "./components/MyList"

function App() {
  return (
    <div className="flex flex-col items-center bg-purple p-10 gap-[3rem] h-screen">
      <MainTitle text="Listas em React" />

      <ul>
        <MyList />
      </ul>
    </div>
  )
}

export default App
