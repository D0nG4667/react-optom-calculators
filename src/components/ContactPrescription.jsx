import React, { useContext, useState, useEffect, useRef } from 'react';
import { Grid, styled, Paper, Typography } from '@mui/material';
import { SpectacleContext } from '../context/SpectacleContext';
import { ContactContext } from '../context/ContactContext';

const ContactPrescription = () => {
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));

    // Get Rx from Spectacle Context
    const {
        sphere,
        cylinder,
        axis,
        bvd,
        currentEye,
    } = useContext(SpectacleContext);

    // Get Contact Rx from ContactContext
    const {
        clSphere,
        setClSphere,
        clCylinder,
        setClCylinder,
        clAxis,
        setClAxis,
    } = useContext(ContactContext);

    // Calculation Contact Lens Power from Spectacle Rx

    const contactLensPower = (D, v) => {
        const CLPower = D/(1 - (D * v/1000));  
        return (Math.round(CLPower * 4) / 4).toFixed(2);
    }

    // console.log(contactLensPower(sphere[eye], bvd[eye]));    
    let cls = {};
    let clc = {};
    // Spectacle sphere + cyl
    let spc = Number(cylinder[currentEye]) + Number(sphere[currentEye]);           

    useEffect(() => {        
        // Calculate Sphere Power
        
        cls[currentEye] = contactLensPower(sphere[currentEye], bvd[currentEye]);
        // Adding Plus + sign to positive powers
        if (cls[currentEye] > 0) 
        {
            cls[currentEye] = '+' + cls[currentEye];
        }
        setClSphere((clSphere) => ({...clSphere, ...cls}));  
        // console.log(clSphere[currentEye]);                

        // Calculate Cylinder Power
        if (cylinder[currentEye])
        {   
            // Substract contacts sphere power from contact lens spc             
            clc[currentEye] = contactLensPower(spc , bvd[currentEye]) - contactLensPower(sphere[currentEye], bvd[currentEye]);             
            // Adding Plus + sign to positive powers
            if (clc[currentEye] > 0) 
            {
                clc[currentEye] = '+' + clc[currentEye];
            }
            setClCylinder((clCylinder) => ({...clCylinder, ...clc}));  
            // console.log(clCylinder[currentEye]);
        }        

        //set axis
        setClAxis((clAxis) => ({...clAxis, ...axis})); 

      return () => {
        
      }
    }, [sphere, cylinder, axis, bvd])

    // console.log(clSphere["OD"] + 'OD'); 
    // console.log(clCylinder["OD"] + 'OD');
    // console.log(clSphere["OS"] + 'OS'); 
    // console.log(clCylinder["OS"] + 'OS');
  return (
    <>   
    {
        (clSphere["OD"]  || clSphere["OS"]) ? (
            <>
                <Grid item xs={12}>
                    <Item>
                        <Typography variant='h6' sx={{ martinBottom: "2rem"}}>
                            {` OD: ${clSphere["OD"]} DS  /  ${clCylinder["OD"]} DC  X  ${clAxis["OD"]}`}
                        </Typography>                    
                    </Item>                
                </Grid>
                <Grid item xs={12}>
                    <Item>
                        <Typography variant='h6' sx={{ martinBottom: "2rem"}}>
                            {` OS: ${clSphere["OS"]} DS  /  ${clCylinder["OS"]} DC  X  ${clAxis["OS"]}`}    
                        </Typography>                    
                    </Item>
                </Grid>
            </>
        ) : (
            <>
                <Grid item xs={12}>
                    <Item>{` 0.00 DS  /  0.00 DC  X  0, Select Spectacle Rx above`}</Item>                
                </Grid>
                <Grid item xs={12}>                
                    <Item>{` 0.00 DS  /  0.00 DC  X  0, Select Spectacle Rx above`}</Item>
                </Grid>
            </>  
        )
    }     
    </>    
  )
}

export default ContactPrescription