import './App.css'

import 'bootstrap/dist/css/bootstrap.min.css'
// import Alert1 from './components/Alert'
import MenuNavBar from './components/MenuNavbar/MenuNavbar'
import AccordionPoints from './components/AccordionPoints/AccordionPoints'

import { Container } from 'react-bootstrap'

function App() {
	return (
		<div className='App'>
			<MenuNavBar />
			<Container>
				<br />
				<AccordionPoints />
			</Container>
		</div>
	)
}

export default App
