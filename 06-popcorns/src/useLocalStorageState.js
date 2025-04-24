import { useState, useEffect } from "react";

export function useLocalStorageState(initialState, key) {
  const [watched, setWatched] = useState(function () {
    const storedData = localStorage.getItem(key);
    return storedData ? JSON.parse(storedData) : initialState;
  });

  useEffect(
    function () {
      localStorage.setItem(key, JSON.stringify(watched));
    },

    [watched, key]
  );
  return { watched, setWatched };
}
