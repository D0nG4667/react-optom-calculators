import { Grid, TextField, Tooltip, IconButton } from '@mui/material';
import FeedbackIcon from '@mui/icons-material/Feedback';
import { useSpectacle } from '@/context/SpectacleContext';
import type { SpectaclePrescriptionProps } from '@/types/spectacle';
import type { PowerEntry, AxisEntry, VertexEntry } from '@/types/powers';

const SpectaclePrescription: React.FC<SpectaclePrescriptionProps> = ({ eye }) => {
  const {
    sphereRange,
    cylinderRange,
    axisRange,
    vertexRange,
    sphere,
    setSphere,
    cylinder,
    setCylinder,
    axis,
    setAxis,
    bvd,
    setBvd,
    setCurrentEye,
  } = useSpectacle();

  type Setter = 'sphere' | 'cylinder' | 'axis' | 'bvd';

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
    setter: Setter
  ) => {
    const value = e.target.value;
    setCurrentEye(eye);

    switch (setter) {
      case 'sphere':
        setSphere((prev) => ({ ...prev, [eye]: value }));
        break;
      case 'cylinder':
        setCylinder((prev) => ({ ...prev, [eye]: value }));
        break;
      case 'axis':
        setAxis((prev) => ({ ...prev, [eye]: value }));
        break;
      case 'bvd':
        setBvd((prev) => ({ ...prev, [eye]: value }));
        break;
    }
  };

  // Render dropdown options for sphere, cylinder, axis, or vertex
  const renderRxOptions = <T, K extends keyof T>(range: T[], key: K) => {
    return range.map((option) => (
      <option key={option[key] as string} value={option[key] as string}>
        {option[key] as string}
      </option>
    ));
  };

  const renderPowerOptions = (range: PowerEntry[]) => renderRxOptions(range, 'power');

  const renderAxisOptions = (range: AxisEntry[]) => renderRxOptions(range, 'axis');

  const renderVertexOptions = (range: VertexEntry[]) => renderRxOptions(range, 'vertex');

  return (
    <Grid container spacing={2}>
      <Grid size={{ xs: 12, md: 6 }}>
        <TextField
          select
          label="Sphere (DS)"
          fullWidth
          required
          value={sphere[eye]}
          onChange={(e) => handleChange(e, 'sphere')}
          slotProps={{
            inputLabel: { shrink: !!sphere[eye] },
            select: { native: true, 'aria-label': 'Select Sphere Power' },
          }}
          helperText="Select Sphere Power"
        >
          {renderPowerOptions(sphereRange)}
        </TextField>
      </Grid>

      <Grid size={{ xs: 12, md: 6 }}>
        <TextField
          select
          label="Cylinder (DC)"
          fullWidth
          value={cylinder[eye]}
          onChange={(e) => handleChange(e, 'cylinder')}
          slotProps={{
            inputLabel: { shrink: !!cylinder[eye] },
            select: { native: true, 'aria-label': 'Select Cylinder Power' },
          }}
          helperText="Select Cylinder Power"
        >
          {renderPowerOptions(cylinderRange)}
        </TextField>
      </Grid>

      <Grid size={{ xs: 12, md: 6 }}>
        <TextField
          select
          label="Axis"
          fullWidth
          value={axis[eye]}
          onChange={(e) => handleChange(e, 'axis')}
          slotProps={{
            inputLabel: { shrink: !!axis[eye] },
            select: { native: true, 'aria-label': 'Select Cylinder Axis' },
          }}
          helperText="Select Cylinder Axis"
        >
          {renderAxisOptions(axisRange)}
        </TextField>
      </Grid>

      <Grid size={{ xs: 12, md: 6 }}>
        <TextField
          select
          label="BVD (mm)"
          fullWidth
          required
          value={bvd[eye]}
          onChange={(e) => handleChange(e, 'bvd')}
          slotProps={{
            inputLabel: { shrink: !!bvd[eye] },
            select: { native: true, 'aria-label': 'Select Back Vertex Distance' },
          }}
          helperText="Back Vertex Distance"
        >
          {renderVertexOptions(vertexRange)}
        </TextField>
        <Tooltip title="Back vertex distance is the distance in millimetres from the back surface of your trial-frame/phoropter head to the front surface of the cornea">
          <IconButton>
            <FeedbackIcon />
          </IconButton>
        </Tooltip>
      </Grid>
    </Grid>
  );
};

export default SpectaclePrescription;
