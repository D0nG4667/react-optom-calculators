import type { ReactNode } from 'react';
import { Eye, EyeValues } from './eye';

/**
 * Context values for the ContactContext
*/
export interface ContactContextType {
    /** Sphere values for OD/OS */
    clSphere: EyeValues;
    setClSphere: React.Dispatch<React.SetStateAction<EyeValues>>;

    /** Cylinder values for OD/OS */
    clCylinder: EyeValues;
    setClCylinder: React.Dispatch<React.SetStateAction<EyeValues>>;

    /** Axis values for OD/OS */
    clAxis: EyeValues;
    setClAxis: React.Dispatch<React.SetStateAction<EyeValues>>;

    /** Whether spherical equivalent is being used */
    sphericalEquivalent: boolean;
    setSphericalEquivalent: React.Dispatch<React.SetStateAction<boolean>>;
}

/**
 * Props for the ContactProvider component
 */
export interface ContactProviderProps {
    children: ReactNode;
}
