import React, { createContext, useState } from 'react';
import powersJson from '../powers.json';
import type { SpectacleContextType, SpectacleProviderProps } from '@/types/spectacle';
import type { PowersJSON, PowerEntry, AxisEntry, VertexEntry } from '@/types/powers';
import type { Eye, EyeValues } from '@/types/eye';

// 1️⃣ Create context with undefined initial value for safety
export const SpectacleContext = createContext<SpectacleContextType | undefined>(undefined);

const SpectacleProvider: React.FC<SpectacleProviderProps> = ({ children }) => {
  // Ranges from powers.json
  const powers = powersJson as PowersJSON;

  const [sphereRange] = useState<PowerEntry[]>(powers.spheres);
  const [cylinderRange] = useState<PowerEntry[]>(powers.cylinders);
  const [axisRange] = useState<AxisEntry[]>(powers.axes);
  const [vertexRange] = useState<VertexEntry[]>(powers.vertices);

  // Eye values with defaults
  const [sphere, setSphere] = useState<EyeValues>({ OD: '', OS: '' });
  const [cylinder, setCylinder] = useState<EyeValues>({ OD: '', OS: '' });
  const [axis, setAxis] = useState<EyeValues>({ OD: '', OS: '' });
  const [bvd, setBvd] = useState<EyeValues>({ OD: '12', OS: '12' });

  // UI state
  const [currentEye, setCurrentEye] = useState<Eye>();
  const [sameBothEyes, setSameBothEyes] = useState<boolean>(false);

  const value: SpectacleContextType = {
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
    currentEye,
    setCurrentEye,
    sameBothEyes,
    setSameBothEyes,
  };

  return <SpectacleContext.Provider value={value}>{children}</SpectacleContext.Provider>;
};

export default SpectacleProvider;

/**
 * Custom hook to access the SpectacleContext.
 *
 * Ensures the hook is used within a SpectacleProvider.
 * Throws an error if accessed outside the provider for runtime safety.
 *
 * @returns {SpectacleContextType} The current context values and setters
 */
export const useSpectacle = (): SpectacleContextType => {
  const context = React.useContext(SpectacleContext);
  if (!context) {
    throw new Error('useSpectacle must be used within a SpectacleProvider');
  }
  return context;
};
