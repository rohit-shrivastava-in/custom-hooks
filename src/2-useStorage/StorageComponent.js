import { useSessionStorage, useLocalStorage } from "./useStorage"

export default function StorageComponent() {
  const [name, setName, removeName] = useSessionStorage("name", "Rohit")
  const [age, setAge, removeAge] = useLocalStorage("age", 30)

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
  )
}