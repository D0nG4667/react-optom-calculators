import type { ReactNode } from 'react';
import { Eye, EyeValues } from './eye';
import type { PowerEntry, AxisEntry, VertexEntry } from './powers';


export interface SpectacleContextType {
    // Ranges
    sphereRange: PowerEntry[];
    cylinderRange: PowerEntry[];
    axisRange: AxisEntry[];
    vertexRange: VertexEntry[];

    // State
    sphere: EyeValues;
    setSphere: React.Dispatch<React.SetStateAction<EyeValues>>;

    cylinder: EyeValues;
    setCylinder: React.Dispatch<React.SetStateAction<EyeValues>>;

    axis: EyeValues;
    setAxis: React.Dispatch<React.SetStateAction<EyeValues>>;

    bvd: EyeValues;
    setBvd: React.Dispatch<React.SetStateAction<EyeValues>>;

    currentEye?: Eye;
    setCurrentEye: React.Dispatch<React.SetStateAction<Eye | undefined>>;

    sameBothEyes: boolean;
    setSameBothEyes: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface SpectacleProviderProps {
    children: ReactNode;
}

export interface SpectacleRange {
    power?: string;
    axis?: string;
    vertex?: string;
}

export interface SpectaclePrescriptionProps {
    eye: Eye;
}
