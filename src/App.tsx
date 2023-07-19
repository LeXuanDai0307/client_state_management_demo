/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { shallow } from "zustand/shallow";
import "./App.css";
import { useBookStore } from "./store/bookStore";

function App() {
  //primitives value pick, re-renders the component when either state.amount change
  const amount = useBookStore((state) => state.amount);

  // object pick, re-renders the component when either state.author or state.title change
  // zustand detects changes with strict equality (old === new)
  // so the default strict equality would not be useful in this case to evaluate objects and always triggering a re-render even if the object does not change.
  // so "shallow" will upload the object/array and compare its keys, if any is different it will recreate again and trigger a new render.
  const { author, title } = useBookStore(
    (state) => ({ title: state.title, author: state.author }),
    shallow
  );

  const updateAmount = useBookStore((state) => state.updateAmount);
  const setAmount = useBookStore((state) => state.setAmount);
  const deleteEverything = useBookStore((state) => state.deleteEverything);

  return (
    <div>
      <h1>Books: {amount} </h1>
      <h4>Title: {title} </h4>
      <h4>Author: {author} </h4>

      <button onClick={() => updateAmount(10)}> Update Amount </button>
      <button onClick={() => setAmount(10)}> Set Amount </button>
      <button onClick={deleteEverything}> Clear </button>
    </div>
  );
}

export default App;
