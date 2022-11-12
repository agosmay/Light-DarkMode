import React , { useState } from 'react';
import { ThemeContext } from './themeContext';

export const ThemeProvider = ( { children } ) => {
	
	const [theme, setTheme]=useState('light')
	
	const toggleTheme= () => {
		setTheme((curr) => curr === "light" ? "dark" : "light")
		
	}
	
	return (
		<>
			<ThemeContext.Provider value={{
				theme,
				setTheme,
				toggleTheme
			}}>
			{children}
			</ThemeContext.Provider>
		</>
	
	);
}

