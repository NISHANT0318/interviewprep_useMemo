import { useMemo, useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [item, setItem] = useState(0);
  const multiCount = useMemo(function multiCount() {
    console.warn('re-rendering');
    return count * 10;
  },[count])
  return (
    <>
      <h1>useMemo hook</h1>
      <h2>Count : {count}</h2> 
      <h2>Item : {item}</h2>
      <h2>multicount : {multiCount}</h2>

      <button onClick={() => setCount(count + 1)}>update count</button>
      <button onClick={() => setItem(item + 1)}>update item</button>
    </>
  );
}

export default App;
