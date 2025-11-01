import React, { createContext, useState } from 'react';
import type { ContactContextType, EyeValues, ContactProviderProps } from '@/types/contact';

// Create context with undefined initial value for runtime safety
export const ContactContext = createContext<ContactContextType | undefined>(undefined);

const ContactProvider: React.FC<ContactProviderProps> = ({ children }) => {
  // Initial eye values
  const [clSphere, setClSphere] = useState<EyeValues>({ OD: '', OS: '' });
  const [clCylinder, setClCylinder] = useState<EyeValues>({ OD: '', OS: '' });
  const [clAxis, setClAxis] = useState<EyeValues>({ OD: '', OS: '' });

  // Boolean state
  const [sphericalEquivalent, setSphericalEquivalent] = useState<boolean>(false);

  const value: ContactContextType = {
    clSphere,
    setClSphere,
    clCylinder,
    setClCylinder,
    clAxis,
    setClAxis,
    sphericalEquivalent,
    setSphericalEquivalent,
  };

  return <ContactContext.Provider value={value}>{children}</ContactContext.Provider>;
};

export default ContactProvider;

// ----------------------------
// Custom hook for safety
// ----------------------------
/**
 * Hook to access the ContactContext safely.
 * Throws an error if used outside the ContactProvider.
 */
export const useContact = (): ContactContextType => {
  const context = React.useContext(ContactContext);
  if (!context) {
    throw new Error('useContact must be used within a ContactProvider');
  }
  return context;
};
