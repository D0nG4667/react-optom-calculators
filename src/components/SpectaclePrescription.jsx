import { useContext } from 'react';
import { Grid, TextField, Tooltip, IconButton } from '@mui/material';
import FeedbackIcon from '@mui/icons-material/Feedback';
import { SpectacleContext } from '../context/SpectacleContext';

const SpectaclePrescription = ({ eye }) => {

    // Get Rx from Spectacle Context
    const {
        sphereRange,
        cylinderRange,
        axisRange,
        vertexRange,
        sphere,
        setSphere,
        cylinder,
        setCylinder,
        axis,
        setAxis,
        bvd,
        setBvd,
        currentEye,
        setCurrentEye,       
    } = useContext(SpectacleContext);
    
    // Handle update of Spectacle Context data as select values changes
    const handleChange = (e, set, oldValue) => {        
        if (set == "sphere") 
        {                
            let targetValue = {};
            targetValue[eye] = e.target.value;
            // console.log(targetValue);
            setSphere((oldValue) => ({...oldValue, ...targetValue}));
            setCurrentEye(eye);
        }
        else if (set == "cylinder") 
        {                
            let targetValue = {};
            targetValue[eye] = e.target.value;
            // console.log(targetValue);
            setCylinder((oldValue) => ({...oldValue, ...targetValue}));
            setCurrentEye(eye);
        }
        else if (set == "axis") 
        {                
            let targetValue = {};
            targetValue[eye] = e.target.value;
            // console.log(targetValue);
            setAxis((oldValue) => ({...oldValue, ...targetValue}));
            setCurrentEye(eye);
        } 
        else if (set == "bvd") 
        {                
            let targetValue = {};
            targetValue[eye] = e.target.value;
            // console.log(targetValue);
            setBvd((oldValue) => ({...oldValue, ...targetValue}));
            setCurrentEye(eye);
        }        
    }    

    // console.log(sphere.OD + 'DS ' + cylinder.OD + 'DC ' + axis.OD + ' ' + bvd.OD + 'mm');
    // console.log(sphere.OS + 'DS ' + cylinder.OS + 'DC ' + axis.OS + ' ' + bvd.OS + 'mm');

    return (  
        <>
            <Grid item xs={12} md>
                <TextField 
                    select
                    label="Sphere (DS)"
                    fullWidth
                    required                
                    // defaultValue=""
                    value={sphere[eye]}
                    onChange={(e) => handleChange(e, "sphere", sphere)}                                
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
            <Grid item xs={12} md>
                <TextField 
                    select
                    label="Cylinder (DC)"
                    fullWidth                
                    // defaultValue=""
                    value={cylinder[eye]}
                    onChange={(e) => handleChange(e, "cylinder", cylinder)}                                
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
            <Grid item xs={12} md>
                <TextField 
                    select
                    label="Axis"
                    fullWidth                
                    // defaultValue="" 
                    value={axis[eye]}
                    onChange={(e) => handleChange(e, "axis", axis)}                                                
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
            <Grid item xs={12} md>
                <TextField 
                    select
                    label="BVD (mm)"
                    fullWidth
                    required                
                    // defaultValue="12"
                    value={bvd[eye]}
                    onChange={(e) => handleChange(e, "bvd", bvd)}                                                 
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
