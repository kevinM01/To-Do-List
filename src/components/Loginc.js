import React, { Component } from 'react'
import { Grid,Paper, Avatar, TextField, Button, Typography} from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Link } from 'react-router-dom';

export default class Loginc extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            password:"",
        }
        this.paperStyle={padding :20,width:280, margin:"20px auto"}
        this.avatarStyle={backgroundColor:'#1bbd7e'}
        this.btnstyle = { margin: '8px 0' }
    }

    onSubmit = (e) => {
        e.preventDefault();

        if (this.state.name === "" || this.state.password === "") {
            alert("All fields are mandatory");
        }
        else {
            this.props.setKeys(this.state);
            this.props.history.push("/home");
        }
    }
   

    render() {
        return (
            <Grid>
            <Paper elevation={10} style={this.paperStyle}>
                <Grid align='center'>
                    <Avatar style={this.avatarStyle}><LockOutlinedIcon/></Avatar>
                    <h2>Sign In</h2>
                </Grid>
                <TextField label='Username' placeholder='Enter username'  onChange={(e)=>this.setState({name:e.target.value})}  fullWidth required  />
                <TextField label='Password' placeholder='Enter password' type='password' onChange={(e)=>this.setState({password:e.target.value})}  fullWidth required/>
                <FormControlLabel
                    control={
                    <Checkbox
                        name="checkedB"
                        color="primary"
                    />
                    }
                    label="Remember me"
                />

            <Button type='submit' color='primary' variant="contained" style={this.btnstyle} fullWidth onClick={this.onSubmit}>Sign in</Button>
          
                
            <Typography style={{ textAlign: "center", fontStyle: "italic" }} >Or</Typography>
                
            <Link to="/signup" style={{ textDecoration:"none"}}>
                    <Button type='submit' color='primary' variant="contained" style={this.btnstyle} fullWidth >Sign Up</Button>
            </Link>
            
            </Paper>
        </Grid>
        )
    }
}
