import "./App.css";
import Header from "./components/Header";
import { useEffect, useState } from "react";

function App() {
  const [state, setState] = useState(5);
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const get = await fetch(
        `https://hub.dummyapis.com/employee?noofRecords=${state}&idStarts=1001`
      );
      const res = await get.json();
      setData(res);
      console.log(res);
    }
    getData();

    document.title = `(${state}) Employee`;
  }, [state]);

  return (
    <div className="App">
      <Header />
      <button className="btn" onClick={() => setState(state + 2)}>
        Click me {state}
      </button>

      <div className="data">
        <h1>First name</h1>
        <h1>Last name</h1>
        <h1>Date of Birth</h1>
      </div>
      {data.map((element, index) => {
        return (
          <div className="data" key={index}>
            <h4>{element.firstName}</h4>
            <h4>{element.lastName}</h4>
            <h4>{element.dob}</h4>
          </div>
        );
      })}
    </div>
  );
}

export default App;
