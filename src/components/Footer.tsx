import React from 'react';
import { Grid, styled, Paper, Link, Typography } from '@mui/material';
import type { Theme } from '@mui/material/styles';

const Footer: React.FC = () => {
  const Item = styled(Paper)(({ theme }: { theme: Theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  const creationYear = 2023; // Year website was created
  const currentYear = new Date().getFullYear(); // Current year

  return (
    <Grid size={12}>
      <Item>
        Made with 💖 by{' '}
        <Link
          href="https://www.linkedin.com/in/dr-gabriel-okundaye"
          underline="none"
          target="_blank"
          rel="noreferrer"
        >
          Gabriel Okundaye
        </Link>
        <Typography variant="body2" color="textSecondary" align="center">
          © {creationYear}
          {currentYear !== creationYear ? ` - ${currentYear}` : ''}.
        </Typography>
      </Item>
    </Grid>
  );
};

export default Footer;
