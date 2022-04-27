import { useContext } from "react";
import { PerfTestToolsContext } from "../context";

export const useTimer = () => {
  const { Timers, setTimers } = useContext(PerfTestToolsContext);
  const Timer = {
    startLog: (name) => {
      const startTime = Date.now();
      setTimers((prev) => ({ ...prev, [name]: { startTime } }));
    },
    endLog: (name) => {
      const endTime = Date.now();
      console.log(`${name} took ${endTime - Timers[name].startTime}ms`);
    },
  };
  return Timer;
};
