import { useCallback, useState, useEffect } from "react";

type SetValue<T> = React.Dispatch<React.SetStateAction<T>>;

export function useLocalStorage<T>(key: string, defaultValue: T | (() => T)): [T, SetValue<T>, () => void] {
  return useStorage(key, defaultValue, window.localStorage);
}

export function useSessionStorage<T>(key: string, defaultValue: T | (() => T)): [T, SetValue<T>, () => void] {
  return useStorage(key, defaultValue, window.sessionStorage);
}

function useStorage<T>(key: string, defaultValue: T | (() => T), storageObject: Storage): [T, SetValue<T>, () => void] {
  const [value, setValue] = useState<T>(() => {
    const jsonValue = storageObject.getItem(key);
    if (jsonValue != null) {
      try {
        return JSON.parse(jsonValue) as T;
      } catch (error) {
        console.error(`Error parsing JSON from ${storageObject} for key "${key}":`, error);
      }
    }

    if (typeof defaultValue === "function") {
      return (defaultValue as () => T)();
    } else {
      return defaultValue;
    }
  });

  useEffect(() => {
    if (value === undefined) {
      storageObject.removeItem(key);
    } else {
      try {
        storageObject.setItem(key, JSON.stringify(value));
      } catch (error) {
        console.error(`Error saving JSON to ${storageObject} for key "${key}":`, error);
      }
    }
  }, [key, value, storageObject]);

  const remove = useCallback(() => {
    setValue(undefined as unknown as T);
  }, []);

  return [value, setValue, remove];
}
