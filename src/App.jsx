// import DaisyNav from "./Components/DaisyNav/DaisyNav"
import LineChart from "./Components/LineChart/LineChart";
import NavBar from "./Components/NavBar/NavBar"
import PriceOptions from "./Components/PriceOptions/PriceOptions"

function App() {

  return (
    <div className="bg-green-400 py-10">
      <NavBar></NavBar>
      {/* <DaisyNav></DaisyNav> */}
      <PriceOptions></PriceOptions>
      <LineChart></LineChart>
    </div>
  )
}

export default App;
