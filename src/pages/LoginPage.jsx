import { Button, Container, Grid, Paper, TextField, Typography } from '@mui/material'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function LoginPage() {
   const [username, setusername] = useState('')
   const [password, setpassword] = useState('')
   const navigate = useNavigate()

   const isLogging = Boolean(localStorage.getItem('access_token'))

   const handleSubmit = (e) => {
      e.preventDefault()

      navigate('/')
   }

   return (
      <Container
         component="main"
         sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
            flexFlow: 'nowrap',
         }}
         maxWidth="xs"
      >
         <Paper sx={{ p: 2 }}>
            {isLogging ? (
               <>
                  <Typography variant="h3" component="h1">
                     Login successful
                  </Typography>
                  <Button onClick={() => navigate('/admin')} fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                     Admin page
                  </Button>
               </>
            ) : (
               <>
                  <Typography variant="h5" textAlign="center" component="h1">
                     Login
                  </Typography>
                  <form onSubmit={handleSubmit}>
                     <TextField
                        margin="normal"
                        required
                        fullWidth
                        value={username}
                        name="username"
                        id="username"
                        label="Username"
                        onChange={(e) => setusername(e.target.value)}
                        autoFocus
                     />
                     <TextField
                        margin="normal"
                        required
                        id="password"
                        fullWidth
                        value={password}
                        onChange={(e) => setpassword(e.target.value)}
                        name="password"
                        label="Password"
                        autoComplete="current-password"
                     />
                  </form>
                  <Button type="submit" onClick={handleSubmit} fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                     loggin
                  </Button>
                  <Grid container>
                     <Grid item>
                        <Link to="/register">Dont have an account? Sign Up</Link>
                     </Grid>
                  </Grid>
               </>
            )}
         </Paper>
      </Container>
   )
}

export default LoginPage
