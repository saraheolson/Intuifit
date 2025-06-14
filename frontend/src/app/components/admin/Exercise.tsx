import React, { useState, useEffect } from 'react';
import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import {
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
  IconButton,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  MenuItem,
  Alert,
  Snackbar,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useAuthenticatedApi } from '../../../services/api';

interface Exercise {
  id: string;
  name: string;
  defaultSets: number;
  defaultReps: number;
  defaultWeight: number;
  weightType: string;
  thumbnailUrl: string;
}

interface CreateExerciseDto {
  name: string;
  defaultSets: number;
  defaultReps: number;
  defaultWeight: number;
  weightType: string;
  videoUrl: string;
  thumbnailUrl: string;
  instructionsText: string;
  weightMeasurementType: string;
}

const WEIGHT_TYPES = [
  'bodyweight',
  'kettlebell',
  'dumbbell',
  'band',
  'machine',
  'other',
];
const WEIGHT_MEASUREMENT_TYPES = [
  'lbs',
  'kg',
  'other',
];

const Exercise: React.FC = () => {
  const { user } = useUser();
  const router = useRouter();
  const api = useAuthenticatedApi();
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [open, setOpen] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [newExercise, setNewExercise] = useState<CreateExerciseDto>({
    name: '',
    defaultSets: 3,
    defaultReps: 10,
    defaultWeight: 0,
    weightType: 'bodyweight',
    videoUrl: '',
    thumbnailUrl: '',
    instructionsText: '',
    weightMeasurementType: '',
  });

  useEffect(() => {
    console.log('Exercise component - Auth State:', {
      user,
      role: user?.publicMetadata?.role,
      metadata: user?.publicMetadata
    });
    fetchExercises();
  }, [user, router]);

  const fetchExercises = async () => {
    try {
      console.log('Exercise component - Fetching exercises');
      const response = await api.get<Exercise[]>('/exercises/global');
      console.log('Exercise component - Fetch response:', response);
      if (response.data) {
        setExercises(Array.isArray(response.data) ? response.data : []);
      }
    } catch (error: any) {
      console.error('Exercise component - Error fetching exercises:', {
        message: error.message,
        response: error.response?.data,
        status: error.response?.status,
        headers: error.response?.headers
      });
      if (error.response?.status === 401) {
        router.push('/sign-in');
      } else {
        setError(
          error.response?.data?.message || 
          error.message || 
          'Failed to fetch exercises. Please check if the API server is running.'
        );
      }
      setExercises([]);
    }
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this exercise?')) {
      try {
        await api.delete(`/exercises/global/${id}`);
        await fetchExercises();
      } catch (error: any) {
        console.error('Error deleting exercise:', error);
        if (error.response?.status === 401) {
          router.push('/sign-in');
        } else {
          setError(error.response?.data?.message || 'Failed to delete exercise');
        }
      }
    }
  };

  const handleCreate = async () => {
    try {
      console.log('Creating exercise:', newExercise);
      const response = await api.post<Exercise>('/exercises/global', {
        ...newExercise,
        createdById: user?.id,
      });
      console.log('Create response:', response);
      
      if (response.data) {
        setExercises(prev => [...prev, response.data]);
        setOpen(false);
        // Reset form
        setNewExercise({
          name: '',
          defaultSets: 3,
          defaultReps: 10,
          defaultWeight: 0,
          weightType: 'bodyweight',
          videoUrl: '',
          thumbnailUrl: '',
          instructionsText: '',
          weightMeasurementType: '',
        });
      }
    } catch (error: any) {
      console.error('Error creating exercise:', error);
      if (error.response?.status === 401) {
        router.push('/sign-in');
      } else {
        setError(error.response?.data?.message || 'Failed to create exercise');
      }
    }
  };

  const handleCloseError = () => {
    setError(null);
  };

  if (!exercises) {
    return <div>Loading...</div>;
  }

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
        <Typography variant="h4" component="h1">
          Manage Global Exercises
        </Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => setOpen(true)}
        >
          Add Exercise
        </Button>
      </Box>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Thumbnail</TableCell>
              <TableCell>Default Sets</TableCell>
              <TableCell>Default Reps</TableCell>
              <TableCell>Default Weight</TableCell>
              <TableCell>Weight Type</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Array.isArray(exercises) && exercises.map((exercise) => (
              <TableRow key={exercise.id}>
                <TableCell>{exercise.name}</TableCell>
                <TableCell>
                  {exercise.thumbnailUrl && (
                    <img 
                      src={exercise.thumbnailUrl} 
                      alt={`${exercise.name} thumbnail`}
                      style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                    />
                  )}
                </TableCell>
                <TableCell>{exercise.defaultSets}</TableCell>
                <TableCell>{exercise.defaultReps}</TableCell>
                <TableCell>{exercise.defaultWeight}</TableCell>
                <TableCell>{exercise.weightType}</TableCell>
                <TableCell>
                  <IconButton onClick={() => {/* TODO: Implement edit exercise */}}>
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

      <Dialog 
        open={open} 
        onClose={() => setOpen(false)}
        aria-labelledby="exercise-dialog-title"
        aria-describedby="exercise-dialog-description"
        disableEnforceFocus
        keepMounted
      >
        <DialogTitle id="exercise-dialog-title">Add New Exercise</DialogTitle>
        <DialogContent id="exercise-dialog-description">
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, pt: 2 }}>
            <TextField
              label="Exercise Name"
              value={newExercise.name}
              onChange={(e) => setNewExercise({ ...newExercise, name: e.target.value })}
              fullWidth
              required
            />
            <TextField
              label="Video URL"
              value={newExercise.videoUrl || ''}
              onChange={(e) => setNewExercise({ ...newExercise, videoUrl: e.target.value })}
              fullWidth
              required
            />
            <TextField
              label="Thumbnail URL"
              value={newExercise.thumbnailUrl || ''}
              onChange={(e) => setNewExercise({ ...newExercise, thumbnailUrl: e.target.value })}
              fullWidth
              required
              helperText="URL to the exercise thumbnail image"
            />
            <TextField
              label="Instructions"
              value={newExercise.instructionsText || ''}
              onChange={(e) => setNewExercise({ ...newExercise, instructionsText: e.target.value })}
              fullWidth
              multiline
              rows={4}
              required
            />
            <TextField
              label="Default Sets"
              type="number"
              value={newExercise.defaultSets}
              onChange={(e) => setNewExercise({ ...newExercise, defaultSets: Number(e.target.value) })}
              fullWidth
              required
            />
            <TextField
              label="Default Reps"
              type="number"
              value={newExercise.defaultReps}
              onChange={(e) => setNewExercise({ ...newExercise, defaultReps: Number(e.target.value) })}
              fullWidth
              required
            />
            <TextField
              label="Default Weight"
              type="number"
              value={newExercise.defaultWeight}
              onChange={(e) => setNewExercise({ ...newExercise, defaultWeight: Number(e.target.value) })}
              fullWidth
              required
            />
            <TextField
              select
              label="Weight Type"
              value={newExercise.weightType || ''}
              onChange={(e) => setNewExercise({ ...newExercise, weightType: e.target.value })}
              fullWidth
              required
            >
              {WEIGHT_TYPES.map((type) => (
                <MenuItem key={type} value={type}>{type.charAt(0).toUpperCase() + type.slice(1)}</MenuItem>
              ))}
            </TextField>
            <TextField
              select
              label="Weight Measurement Type"
              value={newExercise.weightMeasurementType || ''}
              onChange={(e) => setNewExercise({ ...newExercise, weightMeasurementType: e.target.value })}
              fullWidth
              required
            >
              {WEIGHT_MEASUREMENT_TYPES.map((type) => (
                <MenuItem key={type} value={type}>{type.toUpperCase()}</MenuItem>
              ))}
            </TextField>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button 
            onClick={handleCreate} 
            variant="contained" 
            disabled={!newExercise.name}
          >
            Create
          </Button>
        </DialogActions>
      </Dialog>

      <Snackbar open={!!error} autoHideDuration={6000} onClose={handleCloseError}>
        <Alert onClose={handleCloseError} severity="error" sx={{ width: '100%' }}>
          {error}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default Exercise; 