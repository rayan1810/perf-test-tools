import { createContext } from "react";

export const PerfTestToolsContext = ({ children }) => {
  const Context = createContext({ Timers: {}, setTimers: () => {} });
  const [timers, setTimers] = useState({});
  return (
    <Context.Provider value={{ Timers: timers, setTimers }}>
      {children}
    </Context.Provider>
  );
};
