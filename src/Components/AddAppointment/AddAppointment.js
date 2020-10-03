import { Box, Button, Card, CardActions, CardContent, Container, Grid, makeStyles, TextField } from '@material-ui/core';
import React, { forwardRef, useContext, useState } from 'react';
import "./AddAppointment.css";
import image from "../../doctors-portal-resources/images/Mask Group 1.png";


import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import { useForm } from 'react-hook-form';



import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../App';



const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});




const useStyles = makeStyles(() => ({
    root: {
        backgroundImage: "url(https://i.ibb.co/HLv5N3z/Mask-Group-2.png)",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        backgroundSize: "100% 100%",
        
    },
    card: {
        maxWidth: "470px",
        textAlign: "center",
        padding: "30px 0",
        margin: "10px"
    },
    button: {
        backgroundColor: "#1DC7C1",
        textTransform: "uppercase",
        padding: "8px 12px",
        border: "none",
        color: "white",
        fontWeight: "bold",
        display: "inline",
        margin: "auto"
    },
    intro: {
        marginBottom: "120px"
    },
    appointment: {
        marginBottom: "25px"
    },
    helperText: {
        color: "red"
    }


  }));

const AddAppointment = () => {



    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {

        const appointData = data;
        appointData.type = "Not Visited"
        fetch("http://localhost:8080/addAppoint", {

            method: 'POST',
            body: JSON.stringify(appointData),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        })
        .then((response) => response.json())
        .then((data) => console.log(data))
        handleClose();
        history.push("/allAppointments");
    }


    const [date, setDate] = useState(new Date());
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };


    const [selectedDate, setSelectedDate] = useState(new Date());
    const handleDateChange = (date) => {
      setSelectedDate(date);
    };




    return (
            <Box className={classes.root}>
                <Container>
                    <Grid container className={classes.intro}>
                        <Grid item  md={5}>
                            <h2 style={{fontSize: "50px"}}>Appointment</h2>
                            <Calendar
                            className="calender"
                            onChange={setDate}
                            value={date}
                            prev2Label={ null }
                            next2Label={ null }
                            />
                        </Grid>
                        <Grid item  md={7}>
                            <img className="image" src={image} alt=""/>
                        </Grid>
                    </Grid>

                    <Grid container className={classes.appointment} spacing={2}>
                        <Grid item md={12}>
                            <h3 style={{marginBottom: "35px", fontSize: "35px", color: "#1DC7C1", textAlign: "center"}}>Available Appointments on {new Date().toDateString("MM/dd/yyyy")}</h3>
                        </Grid>

                        <Grid item md={4}>
                            <Card className={classes.card}>
                                <CardContent>
                                    <h4 style={{color: "#1DC7C1"}}>Teeth Orthodontics</h4>
                                    <h5>8:00 AM - 9:00 AM</h5>
                                    <h6>10 spaces available</h6>
                                </CardContent>
                                <CardActions>
                                    <button onClick={handleClickOpen} className={classes.button}>book appointment</button>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item md={4}>
                            <Card className={classes.card}>
                                <CardContent>
                                    <h4 style={{color: "#1DC7C1"}}>Teeth Orthodontics</h4>
                                    <h5>8:00 AM - 9:00 AM</h5>
                                    <h6>10 spaces available</h6>
                                </CardContent>
                                <CardActions>
                                    <button onClick={handleClickOpen} className={classes.button}>book appointment</button>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item md={4}>
                            <Card className={classes.card}>
                                <CardContent>
                                    <h4 style={{color: "#1DC7C1"}}>Teeth Orthodontics</h4>
                                    <h5>8:00 AM - 9:00 AM</h5>
                                    <h6>10 spaces available</h6>
                                </CardContent>
                                <CardActions>
                                    <button onClick={handleClickOpen} className={classes.button}>book appointment</button>
                                </CardActions>
                            </Card>
                        </Grid>
                    </Grid>

                    <Grid container spacing={2}>
                        <Grid item md={4}>
                            <Card className={classes.card}>
                                <CardContent>
                                    <h4 style={{color: "#1DC7C1"}}>Teeth Orthodontics</h4>
                                    <h5>8:00 AM - 9:00 AM</h5>
                                    <h6>10 spaces available</h6>
                                </CardContent>
                                <CardActions>
                                    <button className={classes.button}>book appointment</button>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item md={4}>
                            <Card className={classes.card}>
                                <CardContent>
                                    <h4 style={{color: "#1DC7C1"}}>Teeth Orthodontics</h4>
                                    <h5>8:00 AM - 9:00 AM</h5>
                                    <h6>10 spaces available</h6>
                                </CardContent>
                                <CardActions>
                                    <button className={classes.button}>book appointment</button>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item md={4}>
                            <Card className={classes.card}>
                                <CardContent>
                                    <h4 style={{color: "#1DC7C1"}}>Teeth Orthodontics</h4>
                                    <h5>8:00 AM - 9:00 AM</h5>
                                    <h6>10 spaces available</h6>
                                </CardContent>
                                <CardActions>
                                    <button className={classes.button}>book appointment</button>
                                </CardActions>
                            </Card>
                        </Grid>
                    </Grid>


    <div>
        <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-labelledby="dialogTitle"
            aria-describedby="slideDescription"
        >

            <DialogTitle style={{color: "#1DC7C1", textAlign: "center"}} id="dialogTitle">
                Teeth Orthodontics
            </DialogTitle>

            <DialogContent>


                <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>

                    <TextField
                        inputRef={register({ 
                            required: "Name is required"
                        })}
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="name"
                        type="text"
                        label="Name"
                        defaultValue={loggedInUser.name}
                        name="name"
                        FormHelperTextProps={{
                            className: classes.helperText
                        }}
                        helperText={errors.name && errors.name.message}
                    />

                    <TextField
                        inputRef={register({ 
                            required: "Phone number is required"
                        })}
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="phone"
                        type="number"
                        label="Phone Number"
                        name="phone"
                        FormHelperTextProps={{
                            className: classes.helperText
                        }}
                        helperText={errors.phone && errors.phone.message}
                    />


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
                        defaultValue={loggedInUser.email}
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        FormHelperTextProps={{
                            className: classes.helperText
                        }}

                        helperText={errors.email && errors.email.message}
                    />

                    <MuiPickersUtilsProvider utils={DateFnsUtils}>

                        <KeyboardTimePicker
                            inputRef={register({ 
                                required: "Time is required"
                            })}
                            margin="normal"
                            id="time"
                            name="time"
                            fullWidth
                            value={selectedDate}
                            onChange={handleDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change time',
                            }}
                            FormHelperTextProps={{
                                className: classes.helperText
                            }}
                            helperText={errors.time && errors.time.message}
                        />


                        <KeyboardDatePicker
                            inputRef={register({ 
                                required: "Date is required"
                            })}
                            margin="normal"
                            id="date"
                            name="date"
                            format="dd-MMM-yyyy"
                            fullWidth
                            value={selectedDate}
                            onChange={handleDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                            FormHelperTextProps={{
                                className: classes.helperText
                            }}
                            helperText={errors.date && errors.date.message}
                        />

                    </MuiPickersUtilsProvider>
                    <DialogActions>
                        <Button type="submit" variant="outlined" color="primary">
                            Send
                        </Button>
                    </DialogActions>
                </form>
            </DialogContent>


        </Dialog>
    </div>                 

                </Container>
            </Box>
    );
};

export default AddAppointment;