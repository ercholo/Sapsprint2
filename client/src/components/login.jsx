
import { Link, Box, Checkbox, FormControlLabel, Avatar, Button, CssBaseline, TextField, Typography, Container } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://www.hefame.es">
                HEFAME
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const defaultTheme = createTheme();

const verificarToken = async () => {

    //Pues eso, verifica si el token es correcto
    try {

        const token = localStorage.getItem('token')
        const headers = { 'Authorization': `Bearer ${token}` };
        const response = await fetch('http://172.30.5.181:4444/login/verificarToken', { headers })

        const responseVerify = await response.json();
        console.log(responseVerify);

    } catch (error) {

        console.log('Error a la hora de verificar el token', error)

    }
}

//hace el login y recibe si está logueado de App.jsx
export const SignIn = ({ setIsLogged }) => {

    const navigate = useNavigate();

    //recibe los datos de la pantalla del login y hace el post al backend, ahí responde con el token y la primera verificación si la autenticación es correcta.    
    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        // console.log({
        //     email: data.get('email'),
        //     password: data.get('password'),
        // });
        try {
            const response = await fetch('http://172.30.5.181:4444/login/', {
                method: 'POST',
                body: JSON.stringify({
                    email: data.get('email'),
                    password: data.get('password'),
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    // 'Authorization': 'Basic ' + btoa(data.get('email') + ':' + data.get('password'))
                },
            })
            const responseLogin = await response.json();

            console.log(responseLogin);


            if (responseLogin.ok === true) {
                await new Promise((resolve) => {
                    localStorage.setItem('token', responseLogin.token);
                    resolve();
                });
                console.log('getitem', localStorage.getItem('token'));
                setIsLogged(true);
                navigate('/impresoras');
                verificarToken();

            } else {

                navigate('/login');
                setIsLogged(false);
                localStorage.removeItem('token');

            }

        } catch (err) {
            console.error(err.message);
        }

    };

    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'rgba(250, 205, 1, 255)' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        IMPRESORAS SAPSPRINT2
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="User"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" />}
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2, bgcolor: 'rgba(250, 205, 1, 255)' }}

                        >
                            ENTRAR
                        </Button>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
        </ThemeProvider>
    );
}

SignIn.propTypes = {
    setIsLogged: PropTypes.func
}