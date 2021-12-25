import React, { useState } from "react";
import Counter from "./counter";

function Counters() {
  const [counters, setCounters] = useState([
    { id: 1, value: 1 },
    { id: 2, value: 2 },
    { id: 3, value: 0 },
    { id: 4, value: 4 },
  ]);

  return (
    // way 1 of adding element in the component
    <div>
      {counters.map((counter) => (
        <Counter key={counter.id} value={counter.value} />
      ))}
    </div>
  );
}

export default Counters;
