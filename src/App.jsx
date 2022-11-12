import React , { useContext } from 'react'
import Form from './components/Form'
import { ThemeContext } from './themeContext/themeContext';
import './App.css'

const App = () => {
	
	const { theme, setTheme, toggleTheme } = useContext(ThemeContext)
	

 
  return (
			<div className={theme}>
			<button type="button" onClick={toggleTheme}>Change Color</button>
					
				
						<Form />
					
				
			</div>

	
  )
}

export default App
