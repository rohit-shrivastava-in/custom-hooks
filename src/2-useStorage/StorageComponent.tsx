import React from "react";
import { useSessionStorage, useLocalStorage } from "./useStorage";

const StorageComponent: React.FC = () => {
  const [name, setName, removeName] = useSessionStorage<string>("name", "Rohit");
  const [age, setAge, removeAge] = useLocalStorage<number>("age", 30);

  return (
    <div>
      <div>
        {name} - {age}
      </div>
      <button onClick={() => setName("Kiyansh")}>Set Name</button>
      <button onClick={() => setAge(2)}>Set Age</button>
      <button onClick={removeName}>Remove Name</button>
      <button onClick={removeAge}>Remove Age</button>
    </div>
  );
};

export default StorageComponent;
