import { useState } from 'react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { NavLink ,BrowserRouter , Router, Routes ,Route , useNavigate , Link} from "react-router-dom";
// import Createaccount from "./Createaccount";

// material ui
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import { Grid  } from '@mui/material';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
// import Link from '@mui/material/Link';

import FilledInput from '@mui/material/FilledInput';
import InputLabel from '@mui/material/InputLabel';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';

import Profile from './Profile';


// login form creation
function Login(){

    const [showComponent, setShowComponent] = useState(false);

    const [sname,set_sname] = useState('');

    // inputs handling
    const HandleInputchange = (e)=>{
        set_sname(e.target.value.trim());
    }

    const [login_error,setError] = useState('');

    const submit_stud_data = (e)=>{
        if(sname==="" && sname===null){
            alert('empty');
            setShowComponent(false);
        }else{
            setShowComponent(true);
        }
    }
  
    return (
        <>
        {!showComponent ?(
            <>
             {login_error!='' && (
                <div className='flex flex-row w-full  h-full justify-center items-center '>
                    <div className='flex flex-row justify-center items-center bg-red-400 py-2 mt-[20px]  md:w-[50%] sm:w-[50%]  lg:w-[30%] xl:w-[30%] 2xl:w-[40%]  w-full  mx-4 rounded-md  shadow-lg hover:shadow-xl' >
                        <span className='text-red-100 font-bold'>{login_error}</span>
                    </div>
                </div>
                )}
               
            <Grid  container  direction="row"  justifyContent="center"  alignItems="center" height={'100vh'}>
                <Box sx={{color:'white',border:'1px solid #C0C0C0',padding:4,borderRadius:2,boxShadow:'1px 2px 2px 3px 	#DCDCDC',width:{xs:'100%',sm:'50%',md:'40%',lg:'30%',xl:'38%'}}}   direction="column" alignItems="center" justifyContent="center">
                <Typography variant="h5" gutterBottom color={'#616161'} marginBottom={'1rem'} textAlign={'center'}>Student Profile ShowingApp </Typography>
                <Typography variant="body2" gutterBottom color={'#616161'} direction="row" sx={{width:'100%'}} justifyContent={'center'} alignItems={'center'} marginBottom={'1.5rem'} textAlign={'center'}>Fill the Student Name </Typography>
                <Box sx={{display:'flex',flexDirection:'column',width:'100%',height:'100%',justifyContent:'center',alignItems:'center'}}>
                    <TextField id="outlined-basic " label="Name" name="sname" onChange={HandleInputchange} variant="outlined" width={'100%'}   fullWidth style={{marginBottom:'1rem'}}/>
                    <Button variant="outlined" color="primary" sx={{width:{xs:'100%',sm:'50%',lg:'50%'},margin:'1rem',padding:'0.6rem',fontWeight:'800'}} onClick={submit_stud_data}>Login</Button>
                </Box>
                
                </Box>
            </Grid>
            </>
        ) : (
            <Profile inputData={sname}></Profile>
        )}
        
       </>
        
       
    );
}

export default Login;