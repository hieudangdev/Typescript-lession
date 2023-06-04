import { Button, Container, Grid, Paper, TextField, Typography } from '@mui/material'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { authActions } from '../redux/reducer/auth'

function RegisterPage() {
   const dispatch = useDispatch()
   const [username, setusername] = useState('')
   const [password, setpassword] = useState('')

   const handleRegister = () => {
      dispatch(
         authActions.register({
            username: 'hieulaanh',
            password: 'ngoctrinh',
         })
      )
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
            <Typography variant="h5" component="h1">
               Register
            </Typography>
            <form>
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
            <Button type="submit" onClick={handleRegister} fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
               Register
            </Button>
            <Grid container>
               <Grid item>
                  <Link to="/login">you have an account? Sign in</Link>
               </Grid>
            </Grid>
         </Paper>
      </Container>
   )
}

export default RegisterPage
