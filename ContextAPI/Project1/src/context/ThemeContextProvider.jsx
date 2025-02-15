
import { useState } from 'react';
import ThemeContext from './ThemeContext';

// eslint-disable-next-line react/prop-types
const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
