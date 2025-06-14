import React from 'react';
import { Container, Typography, Box, Card, CardContent, CardActionArea } from '@mui/material';
import Link from 'next/link';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import PeopleIcon from '@mui/icons-material/People';
import PaymentIcon from '@mui/icons-material/Payment';

const Admin: React.FC = () => {
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
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' }, gap: 3 }}>
        {dashboardItems.map((item) => (
          <Card key={item.title} sx={{ height: '100%' }}>
            <Link href={item.path} passHref style={{ textDecoration: 'none' }}>
              <CardActionArea sx={{ height: '100%' }}>
                <CardContent>
                  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
                    {item.icon}
                    <Typography variant="h6" component="h2" align="center">
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" align="center">
                      {item.description}
                    </Typography>
                  </Box>
                </CardContent>
              </CardActionArea>
            </Link>
          </Card>
        ))}
      </Box>
    </Container>
  );
};

export default Admin; 