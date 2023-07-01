import "./App.css";
import Todo from "./components/Todo";
import { getalltodo, addtodo, updatetodo,deletetodo } from "./utils/handleapi";
import { useEffect, useState } from "react";
function App() {
  const [todo, settodo] = useState([]);
  const [text, settext] = useState("");
  const [todoid, settodoid] = useState("");
  const [isupdating, setisupdating] = useState(false);
  useEffect(() => {
    getalltodo(settodo);
  }, []);

  const updatemode = (_id, text) => {
    setisupdating(true);
    settext(text);
    settodoid(_id);
  };
  return (
    <>
      <div className="container">
        <h1>TO-DO-APP</h1>
        <div className="top">
          <input
            type="text"
            placeholder="add item"
            value={text}
            onChange={(e) => settext(e.target.value)}
          />
          <div
            className="add"
            onClick={
              isupdating
                ? () =>
                    updatetodo(todoid, text, settodo, settext, setisupdating)
                : () => addtodo(text, settext, settodo)
            }
          >
            {isupdating ? "update" : "Add"}
          </div>
        </div>
        <div className="list">
          {todo.map((item) => (
            <Todo
              key={item._id}
              text={item.text}
              updatemode={() => updatemode(item._id, item.text)}
              deletetodo={() =>deletetodo(item._id,settodo)}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
