import React from 'react';
import { Container, Typography, Paper, Box } from '@mui/material';

const Client: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Client Dashboard
      </Typography>
      <Box sx={{ width: '100%' }}>
        <Paper sx={{ p: 2 }}>
          <Typography variant="h6" gutterBottom>
            Welcome to your dashboard
          </Typography>
          <Typography>
            View your assigned workouts and track your progress here.
          </Typography>
        </Paper>
      </Box>
    </Container>
  );
};

export default Client; 