import logo from './logo.svg';
import './App.css';
import { Chart } from "react-google-charts";

function App() {
  const data = [
  ['Character', 'Popularity'],
  ['Iron Man', 50],
  ['Spider-Man', 80],
  ['Thor', 40],
  ['Black Widow', 60],
  ['Captain America', 70],
  ['Hulk', 15],
  ['Black Panther', 55],
  ['Captain Marvel', 65],
];
const options = {
  title: "Popularity of Marvel Characters by ME",
  colors: [
    "#ff0000",
    "#ff9900",
    "#ffff00", 
    "#009900", 
    "#0000ff", 
    "#6600cc", 
    "#ff33cc", 
    "#ff9900",
  ],
  is3D: true,
};

  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width="100%"
      height="400px"
      legendToggle
    />
  );
}

export default App ;


