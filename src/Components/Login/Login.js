import React, { useContext, useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../App';
import { googleSignIn, handleLoginSystem, initializeFirebaseFramework } from '../../Firebase/FirebaseManager';
import { Alert } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://i.ibb.co/fdbtMVC/Group-140.png)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: '100% 100%',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  helperText: {
    color: "red"
  }



}));





const Login = () => {

  const classes = useStyles();
  initializeFirebaseFramework();

  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = data => {

      handleLoginSystem(data)
      .then(response => {

          if(response.success && response.email){
              
              const loginUser = {...loggedInUser, ...response}

              setLoggedInUser(loginUser);
              history.replace(from);

          }
          else{

              const loginUserError = {...loggedInUser}
              loginUserError.success = false;
              loginUserError.error = response.error;

              setLoggedInUser(loginUserError);

          }

      })

  }




  const handleGoogleSignIn = () => {
        
    googleSignIn()
    .then(response => {

        if(response.success && response.email){

            const googleSignInUser = {...loggedInUser, ...response};
            setLoggedInUser(googleSignInUser);
            history.replace(from);
            
          }
          else{
    
            const googleSignInError = {...loggedInUser, ...response};
            setLoggedInUser(googleSignInError);  
        }

    })

}










  

  console.log(loggedInUser);


  const [show, setShow] = useState(true);

    return (

          <Grid container component="main" className={classes.root}>
            <CssBaseline />

            <Grid item xs={12} sm={12} md={12}>
              {
                  (loggedInUser.error && show) && 
                      <Alert variant="danger" onClick={() => setShow(false)} dismissible>
                              <Alert.Heading>Oh bro! You got an error!</Alert.Heading>
                              <p>{loggedInUser.error}</p>
                      </Alert>
                    
              }
            </Grid>



            <Grid item xs={12} sm={6} md={5} component={Paper} elevation={6} square>
              <Box className={classes.paper}>

                <Avatar className={classes.avatar}>
                  <LockOutlinedIcon />
                </Avatar>

                <Typography component="h1" variant="h5">Sign in</Typography>

                <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>

                  <TextField
                    inputRef={register({ 
                      required: "Email is required",
                      pattern: {
                          value: /\S+@\S+\.\S+/,
                          message: "Please provide a valid email address"
                        }
                    })}
                    variant="outlined"
                    margin="normal"
                    
                    fullWidth
                    id="email"
                    type="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    FormHelperTextProps={{
                      className: classes.helperText
                    }}

                    helperText={errors.email && errors.email.message}
                  />
                  {/* {
                      errors.email && <span className="error">{errors.email.message}</span>
                  } */}

                  <TextField
                  
                  inputRef={register({
                      required: "Password is required",
                      minLength: {
                          value: 6,
                          message: "Password containing at least 8 characters"
                      },
                      pattern: {
                          value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
                          message: "Password containing characters, number, upper and lowercase"
                        }
                    })}
                    variant="outlined"
                    margin="normal"
                    FormHelperTextProps={{
                      className: classes.helperText
                    }}
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    helperText={errors.password &&  errors.password.message}
                  />

                  <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                  />

                  <Button
                    
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                  >
                    Sign In
                  </Button>

                  {/* <Grid container>
                    <Grid item xs>
                      <Link href="#" variant="body2">
                        Forgot password?
                      </Link>
                    </Grid>
                    <Grid item>
                      <Link href="#" variant="body2">
                        {"Don't have an account? Sign Up"}
                      </Link>
                    </Grid>
                  </Grid> */}
                </form>
              </Box>
              <button onClick={handleGoogleSignIn} className="btn btn-secondary">Google Sign In</button>
            </Grid>

            <Grid item xs={false} sm={6} md={7} className={classes.image} />

          </Grid>
    );
};

export default Login;
