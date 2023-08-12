import React, { useState } from 'react';
import { Grid, TextField, Tooltip, IconButton } from '@mui/material';
import FeedbackIcon from '@mui/icons-material/Feedback';

import powers from "../powers.json";


const SpectaclePrescription = () => {
    const [sphereRange] = useState(powers.spheres);
    const [cylinderRange] = useState(powers.cylinders);
    const [axisRange] = useState(powers.axes);
    const [vertexRange] = useState(powers.vertices);

    return (  
        <>
            <Grid item>
                <TextField 
                    select
                    label="Sphere (DS)"
                    fullWidth                
                    defaultValue=""                                
                    SelectProps={{
                        native: true,                    
                    }}
                    helperText="Select Sphere Power"
                >
                    {sphereRange.map((option) => (
                        <option key={option.power} value={option.power}>
                            {option.power}
                        </option>
                    ))}                   
                </TextField>                       
            </Grid>
            <Grid item>
                <TextField 
                    select
                    label="Cylinder (DC)"
                    fullWidth                
                    defaultValue=""                                
                    SelectProps={{
                        native: true,                    
                    }}
                    helperText="Select Cylinder Power"
                >
                    {cylinderRange.map((option) => (
                        <option key={option.power} value={option.power}>
                            {option.power}
                        </option>
                    ))}                   
                </TextField>
            </Grid>
            <Grid item>
                <TextField 
                    select
                    label="Axis"
                    fullWidth                
                    defaultValue=""                                
                    SelectProps={{
                        native: true,                    
                    }}
                    helperText="Select Cylinder Axis"
                >
                    {axisRange.map((option) => (
                        <option key={option.axis} value={option.axis}>
                            {option.axis}
                        </option>
                    ))}                   
                </TextField>
            </Grid>
            <Grid item>
                <TextField 
                    select
                    label="BVD (mm)"
                    fullWidth                
                    defaultValue="12"                                
                    SelectProps={{
                        native: true,                    
                    }}
                    helperText="Back Vertex Distance"
                >
                    {vertexRange.map((option) => (
                        <option key={option.vertex} value={option.vertex}>
                            {option.vertex}
                        </option>
                    ))}                   
                </TextField>
                <Tooltip title="Back vertex distance is the distance in millimetres from the back surface of your trial frame/phoropter head to the front surface of the cornea">
                    <IconButton>
                        <FeedbackIcon />
                    </IconButton>
                </Tooltip>
            </Grid>
        </>

  )
}

export default SpectaclePrescription
