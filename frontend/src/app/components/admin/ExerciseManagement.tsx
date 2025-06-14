import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  IconButton,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import { api } from '../../services/api';

interface Exercise {
  id: string;
  name: string;
  videoUrl: string;
  instructionsText: string;
  defaultSets: number;
  defaultReps: number;
  defaultWeight: number;
  weightType: string;
  weightMeasurementType: string;
}

const ExerciseManagement: React.FC = () => {
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [open, setOpen] = useState(false);
  const [editingExercise, setEditingExercise] = useState<Exercise | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    videoUrl: '',
    instructionsText: '',
    defaultSets: 3,
    defaultReps: 10,
    defaultWeight: 0,
    weightType: 'barbell',
    weightMeasurementType: 'kg',
  });

  useEffect(() => {
    fetchExercises();
  }, []);

  const fetchExercises = async () => {
    try {
      const response = await api.get('/admin/exercises');
      setExercises(response.data);
    } catch (error) {
      console.error('Error fetching exercises:', error);
    }
  };

  const handleOpen = (exercise?: Exercise) => {
    if (exercise) {
      setEditingExercise(exercise);
      setFormData(exercise);
    } else {
      setEditingExercise(null);
      setFormData({
        name: '',
        videoUrl: '',
        instructionsText: '',
        defaultSets: 3,
        defaultReps: 10,
        defaultWeight: 0,
        weightType: 'barbell',
        weightMeasurementType: 'kg',
      });
    }
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setEditingExercise(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (editingExercise) {
        await api.put(`/admin/exercises/${editingExercise.id}`, formData);
      } else {
        await api.post('/admin/exercises', formData);
      }
      handleClose();
      fetchExercises();
    } catch (error) {
      console.error('Error saving exercise:', error);
    }
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this exercise?')) {
      try {
        await api.delete(`/admin/exercises/${id}`);
        fetchExercises();
      } catch (error) {
        console.error('Error deleting exercise:', error);
      }
    }
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
        <Typography variant="h4" component="h1">
          Manage Global Exercises
        </Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => handleOpen()}
        >
          Add Exercise
        </Button>
      </Box>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Default Sets</TableCell>
              <TableCell>Default Reps</TableCell>
              <TableCell>Default Weight</TableCell>
              <TableCell>Weight Type</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {exercises.map((exercise) => (
              <TableRow key={exercise.id}>
                <TableCell>{exercise.name}</TableCell>
                <TableCell>{exercise.defaultSets}</TableCell>
                <TableCell>{exercise.defaultReps}</TableCell>
                <TableCell>{exercise.defaultWeight}</TableCell>
                <TableCell>{exercise.weightType}</TableCell>
                <TableCell>
                  <IconButton onClick={() => handleOpen(exercise)}>
                    <EditIcon />
                  </IconButton>
                  <IconButton onClick={() => handleDelete(exercise.id)}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <DialogTitle>
          {editingExercise ? 'Edit Exercise' : 'Add New Exercise'}
        </DialogTitle>
        <form onSubmit={handleSubmit}>
          <DialogContent>
            <TextField
              fullWidth
              label="Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="Video URL"
              value={formData.videoUrl}
              onChange={(e) => setFormData({ ...formData, videoUrl: e.target.value })}
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="Instructions"
              value={formData.instructionsText}
              onChange={(e) => setFormData({ ...formData, instructionsText: e.target.value })}
              margin="normal"
              multiline
              rows={4}
              required
            />
            <TextField
              fullWidth
              label="Default Sets"
              type="number"
              value={formData.defaultSets}
              onChange={(e) => setFormData({ ...formData, defaultSets: parseInt(e.target.value) })}
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="Default Reps"
              type="number"
              value={formData.defaultReps}
              onChange={(e) => setFormData({ ...formData, defaultReps: parseInt(e.target.value) })}
              margin="normal"
              required
            />
            <TextField
              fullWidth
              label="Default Weight"
              type="number"
              value={formData.defaultWeight}
              onChange={(e) => setFormData({ ...formData, defaultWeight: parseFloat(e.target.value) })}
              margin="normal"
              required
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit" variant="contained">
              {editingExercise ? 'Update' : 'Create'}
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </Container>
  );
};

export default ExerciseManagement; 