import React , { useContext } from 'react';

import { ThemeContext } from '../themeContext/themeContext'


const Form = () => {
	
	const { toggleTheme } = useContext(ThemeContext)
	
	return(
		<>
			
			<form>
				<input type="text" />
				<input type="password"/>
				<button type="submit">Sign in</button>
				
			</form>
			<button type="button" onClick={toggleTheme}>Change Color</button>
			
		</>
	);
}

export default Form;

