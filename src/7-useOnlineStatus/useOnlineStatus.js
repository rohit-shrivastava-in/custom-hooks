import { useState } from "react"
import useEventListener from "../6-useEventListener/useEventListener"

export default function useOnlineStatus() {
  const [online, setOnline] = useState(navigator.onLine)

  useEventListener("online", () => setOnline(navigator.onLine))
  useEventListener("offline", () => setOnline(navigator.onLine))

  return online
}