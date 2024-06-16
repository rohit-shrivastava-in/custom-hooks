import useCookie from "./useCookie"

export default function CookieComponent() {
  const [value, update, remove] = useCookie("name", "Rohit")

  return (
    <>
      <div>{value}</div>
      <button onClick={() => update("Kiyansh")}>Change Name To Kiyansh</button>
      <button onClick={remove}>Delete Name</button>
    </>
  )
}