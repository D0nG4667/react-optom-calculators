import { useContext, useEffect } from 'react';
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
        sameBothEyes,
    } = useContext(SpectacleContext);

    // Get Contact Rx from ContactContext
    const {
        clSphere,
        setClSphere,
        clCylinder,
        setClCylinder,
        clAxis,
        setClAxis,
        sphericalEquivalent,
    } = useContext(ContactContext);

    // Calculation Contact Lens Power from Spectacle Rx

    const contactLensPower = (D, v) => {
        D = Number(D);
        v = Number(v)
        const CLPower = D/(1 - (D * v/1000));  
        return nearestPointTwoFiveDioptre(CLPower);
    }

    const sphericalEquivalentPower = (DS, DC) => {
        const SE = Number(DS) + Number(DC)/2;
        return nearestPointTwoFiveDioptre(SE);
    }

    const nearestPointTwoFiveDioptre = (D) => {
        D = (Math.round(D * 4) / 4).toFixed(2);
        return addPlusSign(D);
    }

    // Add + to positive powers if no plus sign
    const addPlusSign = (D) => {
        if(Number(D) > 0 && D.charAt(0) !=="+") 
        {
           return ('+' + D);
        }
        return D;
    }

    // console.log(contactLensPower(sphere[eye], bvd[eye]));    
    let cls = {};
    let clc = {};
    // Spectacle sphere + cyl
    let spc = Number(cylinder[currentEye]) + Number(sphere[currentEye]);           

    useEffect(() => {        
        // Calculate Sphere Power
        
        cls[currentEye] = contactLensPower(sphere[currentEye], bvd[currentEye]);

        // Adding Plus + sign to positive powers when necessary
        cls[currentEye] = addPlusSign(cls[currentEye]);

        // If Both eyes switch is on then OS = OD values
        if (sameBothEyes) 
        {
            cls["OS"] = cls[currentEye];
        }

        setClSphere((clSphere) => ({...clSphere, ...cls}));  
        // console.log(clSphere[currentEye]);                

        // Calculate Cylinder Power
        if (cylinder[currentEye])
        {   
            // Substract contacts sphere power from contact lens spc             
            clc[currentEye] = contactLensPower(spc , bvd[currentEye]) - contactLensPower(sphere[currentEye], bvd[currentEye]);
            clc[currentEye] = clc[currentEye].toFixed(2);

            // Adding Plus + sign to positive powers when necessary           
            clc[currentEye] = addPlusSign(clc[currentEye]); 
            
            // If Both eyes switch is on then OS = OD values
            if (sameBothEyes) 
            {
                clc["OS"] = clc[currentEye];
            }

            setClCylinder((clCylinder) => ({...clCylinder, ...clc}));  
            // console.log(clCylinder[currentEye]);
        }        

        //set axis
        // If Both eyes switch is on then OS = OD values
        if (sameBothEyes) 
        {
            axis["OS"] = axis["OD"];
        }
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
            (sphericalEquivalent) ? (
                // Display Spherical Equivalent
                <>
                    <Grid item xs={12}>
                        <Item>
                            <Typography variant='h6' sx={{ marginBottom: "0.5rem"}}>
                                {` OD: ${sphericalEquivalentPower(clSphere["OD"], clCylinder["OD"])} DS `}
                            </Typography>                    
                        </Item>                
                    </Grid>
                    <Grid item xs={12}>
                        <Item>
                            <Typography variant='h6' sx={{ marginBottom: "0.5rem"}}>
                                {` OS: ${sphericalEquivalentPower(clSphere["OS"], clCylinder["OS"])} DS `}
                            </Typography>                    
                        </Item>
                    </Grid>
                </>

            ) : (
                // Display Full Toric Rx 
                <>
                <Grid item xs={12}>
                    <Item>
                        <Typography variant='h6' sx={{ marginBottom: "0.5rem"}}>
                            {` OD: ${clSphere["OD"]} DS  /  ${clCylinder["OD"]} DC  X  ${clAxis["OD"]}`}
                        </Typography>                    
                    </Item>                
                </Grid>
                <Grid item xs={12}>
                    <Item>
                        <Typography variant='h6' sx={{ marginBottom: "0.5rem"}}>
                            {` OS: ${clSphere["OS"]} DS  /  ${clCylinder["OS"]} DC  X  ${clAxis["OS"]}`}    
                        </Typography>                    
                    </Item>
                </Grid>
            </>
            )
        ) : (
            // Display zero values
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