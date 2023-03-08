import { createContext, useState } from "react";

const Context = createContext(null);

function Provider({ children }) {
    const [users, setUsers] = useState([]);
    const [session, setSession] = useState(null);

    const [course, setCourse] = useState([
        {
          title: "titulo",
          description: "descripcion",
          PDF: "https://fluxi.cl/wp-content/uploads/2020/03/taza-11-oz-premium.jpg"
        }
      ]);

      const state = {
        users,
        setUsers,
        session,
        setSession,
        course,
        setCourse
      };
      return <Context.Provider value={state}>{children}</Context.Provider>;
    }
    
    export default { Provider, Context };