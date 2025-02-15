
import { useContext } from "react";
import ThemeContextProvider from "./context/ThemeContextProvider";
import ThemeContext from "./context/ThemeContext";

function App() {
  return (
    <>
      <ThemeContextProvider>
        <ThemedButton />
      </ThemeContextProvider>
    </>
  );
}

export default App;

const ThemedButton = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  
  return (
    <button 
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      style={{
        backgroundColor: theme === "light" ? "white" : "black",
        color: theme === "light" ? "black" : "white",
        padding: "10px 20px",
        border: "1px solid black",
        borderRadius: "4px"
      }}
    >
      Toggle Theme
    </button>
  );
};
