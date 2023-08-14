import React from 'react';
import { Grid, styled, Paper, Link } from '@mui/material';

const Footer = () => {
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));

  return (
    <>
        <Grid item xs={12}>
            <Item>                                                          
                © Copyright 2023 <Link href="https://gabcares.xyz/" underline="none" target="_blank" rel="noreferrer">Gabcares</Link>
            </Item>
        </Grid>
    </>
  )
}

export default Footer;



