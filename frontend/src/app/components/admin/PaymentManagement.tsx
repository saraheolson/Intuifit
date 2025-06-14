import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Tabs,
  Tab,
} from '@mui/material';
import { api } from '../../services/api';

interface Payment {
  id: string;
  amount: number;
  status: string;
  createdAt: string;
  client: {
    user: {
      name: string;
      email: string;
    };
  };
  coach: {
    user: {
      name: string;
      email: string;
    };
  };
}

interface Subscription {
  id: string;
  subscriptionPlan: string;
  subscriptionId: string;
  user: {
    name: string;
    email: string;
  };
}

const PaymentManagement: React.FC = () => {
  const [payments, setPayments] = useState<Payment[]>([]);
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    fetchPayments();
    fetchSubscriptions();
  }, []);

  const fetchPayments = async () => {
    try {
      const response = await api.get('/admin/payments');
      setPayments(response.data);
    } catch (error) {
      console.error('Error fetching payments:', error);
    }
  };

  const fetchSubscriptions = async () => {
    try {
      const response = await api.get('/admin/payments/subscriptions');
      setSubscriptions(response.data);
    } catch (error) {
      console.error('Error fetching subscriptions:', error);
    }
  };

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Payment Management
      </Typography>

      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
        <Tabs value={activeTab} onChange={handleTabChange}>
          <Tab label="Payments" />
          <Tab label="Subscriptions" />
        </Tabs>
      </Box>

      {activeTab === 0 && (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Date</TableCell>
                <TableCell>Amount</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Client</TableCell>
                <TableCell>Coach</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {payments.map((payment) => (
                <TableRow key={payment.id}>
                  <TableCell>
                    {new Date(payment.createdAt).toLocaleDateString()}
                  </TableCell>
                  <TableCell>${payment.amount.toFixed(2)}</TableCell>
                  <TableCell>{payment.status}</TableCell>
                  <TableCell>
                    {payment.client.user.name}
                    <br />
                    <Typography variant="caption" color="textSecondary">
                      {payment.client.user.email}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    {payment.coach.user.name}
                    <br />
                    <Typography variant="caption" color="textSecondary">
                      {payment.coach.user.email}
                    </Typography>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}

      {activeTab === 1 && (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Coach</TableCell>
                <TableCell>Plan</TableCell>
                <TableCell>Subscription ID</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {subscriptions.map((subscription) => (
                <TableRow key={subscription.id}>
                  <TableCell>
                    {subscription.user.name}
                    <br />
                    <Typography variant="caption" color="textSecondary">
                      {subscription.user.email}
                    </Typography>
                  </TableCell>
                  <TableCell>{subscription.subscriptionPlan}</TableCell>
                  <TableCell>{subscription.subscriptionId}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Container>
  );
};

export default PaymentManagement; 