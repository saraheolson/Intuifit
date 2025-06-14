import React, { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Box,
  Collapse,
} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useAuthenticatedApi } from '../../../services/api';

interface Client {
  id: string;
  user: {
    name: string;
    email: string;
  };
}

interface Coach {
  id: string;
  user: {
    name: string;
    email: string;
  };
  clients: Client[];
}

const Coach: React.FC = () => {
  const api = useAuthenticatedApi();
  const [coaches, setCoaches] = useState<Coach[]>([]);
  const [expandedCoach, setExpandedCoach] = useState<string | null>(null);

  useEffect(() => {
    fetchCoaches();
  }, []);

  const fetchCoaches = async () => {
    try {
      const response = await api.get('/admin/coaches');
      setCoaches(response.data);
    } catch (error) {
      console.error('Error fetching coaches:', error);
    }
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Manage Coaches & Clients
      </Typography>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Coach Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Number of Clients</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {coaches.map((coach) => (
              <React.Fragment key={coach.id}>
                <TableRow>
                  <TableCell>
                    <IconButton
                      size="small"
                      onClick={() => setExpandedCoach(expandedCoach === coach.id ? null : coach.id)}
                    >
                      {expandedCoach === coach.id ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                  </TableCell>
                  <TableCell>{coach.user.name}</TableCell>
                  <TableCell>{coach.user.email}</TableCell>
                  <TableCell>{coach.clients.length}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={4}>
                    <Collapse in={expandedCoach === coach.id} timeout="auto" unmountOnExit>
                      <Box sx={{ margin: 1 }}>
                        <Typography variant="h6" gutterBottom component="div">
                          Clients
                        </Typography>
                        <Table size="small">
                          <TableHead>
                            <TableRow>
                              <TableCell>Name</TableCell>
                              <TableCell>Email</TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {coach.clients.map((client) => (
                              <TableRow key={client.id}>
                                <TableCell>{client.user.name}</TableCell>
                                <TableCell>{client.user.email}</TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </Box>
                    </Collapse>
                  </TableCell>
                </TableRow>
              </React.Fragment>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default Coach; 