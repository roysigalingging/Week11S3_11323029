import React, { useState } from "react";

function App() {
  const [headingText, setHeadingText] = useState("Hello");
  const [isMouseOver, setMouseOver] = useState(false);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [data, setData] = useState([]);

  function handleClick() {
    setHeadingText("Submitted");
    const newData = [...data, { name: name, age: age }];
    setData(newData);
    setName("");
    setAge("");
  }

  function handleMouseOver() {
    setMouseOver(true);
  }

  function handleMouseOut() {
    setMouseOver(false);
  }

  function handleChange(event) {
    if (event.target.name === "name") {
      setName(event.target.value);
    } else if (event.target.name === "age") {
      setAge(event.target.value);
    }
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input
        type="text"
        placeholder="What's your name?"
        name="name"
        value={name}
        onChange={handleChange}
      />
      <input
        type="number"
        placeholder="What's your age?"
        name="age"
        value={age}
        onChange={handleChange}
      />
      <button
        style={{ background: isMouseOver ? "black" : "white" }}
        onClick={handleClick}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        Submit
      </button>
      <div>
        <h2>Submitted Data:</h2>
        <ul>
          {data.map((item, index) => (
            <li key={index}>
              Nama: {item.name}, Age: {item.age}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
