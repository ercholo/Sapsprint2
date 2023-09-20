import PropTypes from 'prop-types';
import { useEffect, useCallback } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
// import IconButton from '@mui/material/IconButton';
// import LogoutIcon from '@mui/icons-material/Logout';
// import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import { useNavigate } from 'react-router-dom';

export const LogoutNav = ({ isLogged, setIsLogged }) => {

    console.log('islogged', isLogged)
    const navigate = useNavigate();
    // let responseVerify = ""

    const verificarToken = useCallback( async () => {

        //Pues eso, verifica si el token es correcto
        try {

            const token = localStorage.getItem('token')
            if (token) {
                setIsLogged(true)
                const headers = { 'Authorization': `Bearer ${token}` };
                const response = await fetch('http://172.30.5.181:4444/login/verificarToken', { headers })

                const responseVerify = await response.json();
                console.log(responseVerify);
                

                if ( responseVerify.ok === false) {
                    onLogout();
                }

            } else {
                onLogout();
            }

        } catch (error) {

            console.log('Error a la hora de verificar el token', error)

        }
    }, []);

    // verificar el token cada min
    useEffect(() => {
        if (isLogged) {
            const intervalId = setInterval(verificarToken, 60000);

            return () => {
                clearInterval(intervalId);
            };
        }
    }, [isLogged, verificarToken]);


    const onLogout = async () => {

        try {

            localStorage.removeItem('token');
            navigate('/login');
            setIsLogged(false);

        } catch (err) {

            console.log('Error al hacer logout', err)
        }
    }

    return (
        <Navbar className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="ml-auto">
              <Navbar.Text>
                Signed in as: Mark Otto
              </Navbar.Text>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
}


LogoutNav.propTypes = {
    isLogged: PropTypes.bool,
    setIsLogged: PropTypes.func
}
