import React, { useContext, useState, useEffect } from 'react';
import { SpectacleContext } from '../context/SpectacleContext';
import { ContactContext } from '../context/ContactContext';

const ContactPrescription = () => {
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
    useEffect(() => {
        let clp = {};
        clp[currentEye] = contactLensPower(sphere[currentEye], bvd[currentEye]);
        setClSphere((clSphere) => ({...clSphere, ...clp}));  
        console.log(clp[currentEye]);  
      return () => {
        setClSphere({OD: "", OS:""});
      }
    }, [sphere, currentEye, bvd, setClSphere])
        
  return (
    <>{sphere[currentEye]}</>
  )
}

export default ContactPrescription