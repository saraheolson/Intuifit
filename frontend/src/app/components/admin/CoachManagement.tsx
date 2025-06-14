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
  IconButton,
  Collapse,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import EditIcon from '@mui/icons-material/Edit';
import { api } from '../../services/api';

interface Client {
  id: string;
  user: {
    id: string;
    name: string;
    email: string;
  };
}

interface Coach {
  id: string;
  user: {
    id: string;
    name: string;
    email: string;
  };
  clients: Client[];
  subscriptionPlan: string;
  subscriptionId: string | null;
}

const CoachManagement: React.FC = () => {
  const [coaches, setCoaches] = useState<Coach[]>([]);
  const [openCoach, setOpenCoach] = useState<string | null>(null);
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [selectedCoach, setSelectedCoach] = useState<Coach | null>(null);
  const [formData, setFormData] = useState({
    subscriptionPlan: '',
    subscriptionId: '',
  });

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

  const handleOpenCoach = (coachId: string) => {
    setOpenCoach(openCoach === coachId ? null : coachId);
  };

  const handleEditCoach = (coach: Coach) => {
    setSelectedCoach(coach);
    setFormData({
      subscriptionPlan: coach.subscriptionPlan || '',
      subscriptionId: coach.subscriptionId || '',
    });
    setEditDialogOpen(true);
  };

  const handleCloseEditDialog = () => {
    setEditDialogOpen(false);
    setSelectedCoach(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedCoach) return;

    try {
      await api.put(`/admin/coaches/${selectedCoach.id}`, formData);
      handleCloseEditDialog();
      fetchCoaches();
    } catch (error) {
      console.error('Error updating coach:', error);
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
              <TableCell>Subscription Plan</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {coaches.map((coach) => (
              <React.Fragment key={coach.id}>
                <TableRow>
                  <TableCell>
                    <IconButton
                      size="small"
                      onClick={() => handleOpenCoach(coach.id)}
                    >
                      {openCoach === coach.id ? (
                        <KeyboardArrowUpIcon />
                      ) : (
                        <KeyboardArrowDownIcon />
                      )}
                    </IconButton>
                  </TableCell>
                  <TableCell>{coach.user.name}</TableCell>
                  <TableCell>{coach.user.email}</TableCell>
                  <TableCell>{coach.subscriptionPlan || 'No Plan'}</TableCell>
                  <TableCell>
                    <IconButton onClick={() => handleEditCoach(coach)}>
                      <EditIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    style={{ paddingBottom: 0, paddingTop: 0 }}
                    colSpan={5}
                  >
                    <Collapse
                      in={openCoach === coach.id}
                      timeout="auto"
                      unmountOnExit
                    >
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

      <Dialog open={editDialogOpen} onClose={handleCloseEditDialog}>
        <DialogTitle>Edit Coach Subscription</DialogTitle>
        <form onSubmit={handleSubmit}>
          <DialogContent>
            <FormControl fullWidth margin="normal">
              <InputLabel>Subscription Plan</InputLabel>
              <Select
                value={formData.subscriptionPlan}
                onChange={(e) =>
                  setFormData({ ...formData, subscriptionPlan: e.target.value })
                }
                label="Subscription Plan"
              >
                <MenuItem value="free">Free</MenuItem>
                <MenuItem value="basic">Basic</MenuItem>
                <MenuItem value="premium">Premium</MenuItem>
              </Select>
            </FormControl>
            <TextField
              fullWidth
              label="Subscription ID"
              value={formData.subscriptionId}
              onChange={(e) =>
                setFormData({ ...formData, subscriptionId: e.target.value })
              }
              margin="normal"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseEditDialog}>Cancel</Button>
            <Button type="submit" variant="contained">
              Update
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </Container>
  );
};

export default CoachManagement; 