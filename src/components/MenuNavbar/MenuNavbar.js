import { Navbar, Container } from 'react-bootstrap'

function MenuNavbar() {
	return (
		<Navbar bg='light' className='inconsolata'>
			<Container>
				<Navbar.Brand href='#home'>
					{/* <img
						alt=''
						src='../../img/logo/monogram.svg'
						width='30'
						height='30'
						className='d-inline-block align-top'
					/>{' '} */}
					Javascript The Advanced Concepts
				</Navbar.Brand>
			</Container>
		</Navbar>
	)
}

export default MenuNavbar
