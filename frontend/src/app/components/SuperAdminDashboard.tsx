import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Container, Typography, Grid, Card, CardContent, CardActionArea } from '@mui/material';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import PeopleIcon from '@mui/icons-material/People';
import PaymentIcon from '@mui/icons-material/Payment';

const AdminDashboard: React.FC = () => {
  const dashboardItems = [
    {
      title: 'Manage Global Exercises',
      description: 'Add, edit, or remove exercises from the global exercise library',
      icon: <FitnessCenterIcon sx={{ fontSize: 40 }} />,
      path: '/admin/exercises',
    },
    {
      title: 'Manage Coaches & Clients',
      description: 'View and manage coaches and their client relationships',
      icon: <PeopleIcon sx={{ fontSize: 40 }} />,
      path: '/admin/coaches',
    },
    {
      title: 'Subscriptions & Payments',
      description: 'Monitor and manage coach subscriptions and payment processing',
      icon: <PaymentIcon sx={{ fontSize: 40 }} />,
      path: '/admin/payments',
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Super Admin Dashboard
      </Typography>
      <Grid container spacing={3}>
        {dashboardItems.map((item) => (
          <Grid item xs={12} sm={6} md={4} key={item.title}>
            <Card sx={{ height: '100%' }}>
              <CardActionArea component={Link} to={item.path} sx={{ height: '100%' }}>
                <CardContent>
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', p: 2 }}>
                    {item.icon}
                    <Typography variant="h6" component="h2" sx={{ mt: 2, textAlign: 'center' }}>
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mt: 1, textAlign: 'center' }}>
                      {item.description}
                    </Typography>
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default AdminDashboard; 