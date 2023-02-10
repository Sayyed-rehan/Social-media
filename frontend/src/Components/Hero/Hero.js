import React from 'react'
import { Box, Typography } from '@mui/material'
import HeroImg from "../../images/HeroImg.webp" 
import "./Hero.css" 

const Hero = () => {
  return (
    <div>
        <Typography variant='h3' align='center' sx={{fontWeight:900}}>
        Fashions<b style={{color:"red"}}>Blog</b>
        </Typography>

        <Typography align='center' variant='body2' sx={{fontWeight:100}}>
        We make look better 
        </Typography>

        <Box sx={{backgroundImage:`url(${HeroImg})`, height:600, widht:"100%",
        backgroundRepeat:"no-repeat", backgroundPosition:"center",
        backgroundSize:"cover", backgroundColor:"black", display:"flex",
        justifyContent:"center"}}> 

        <Box sx={{width:"40%", p:20}}>
        <Box sx={{backgroundColor:"white", opacity:"0.8"}} >
        <Typography variant='h6' align='center' color='tomato'>Trending styles</Typography>
        <Typography variant='h4' align='center'>Life is so boring</Typography>
        <Typography variant='body1' align='center'>Love to change</Typography>
        </Box>
        </Box>
        </Box>
    </div>
  )
}

export default Hero