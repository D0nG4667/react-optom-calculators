import { useMemo, useEffect } from 'react';
import { Grid, Paper, Typography, styled } from '@mui/material';
import { useSpectacle } from '@/context/SpectacleContext';
import { useContact } from '@/context/ContactContext';
import type { ContactContextType } from '@/types/contact';
import type { Eye } from '@/types/eye';

// ----------------------
// Styled Paper component
// ----------------------
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

// ----------------------
// Utility Functions
// ----------------------

// Add + to positive powers if no plus sign
const addPlusSign = (D: number | string): string => {
  const num = typeof D === 'string' ? Number(D) : D;
  return num > 0 ? `+${num.toFixed(2)}` : num.toFixed(2);
};

// Round to nearest 0.25 dioptre
const nearestPointTwoFiveDioptre = (D: number): number => Math.round(D * 4) / 4;

// Calculate Contact Lens Power from Spectacle Rx and BVD
const contactLensPower = (D: number, v: number): string => {
  const CLPower = D / (1 - (D * v) / 1000);
  return addPlusSign(nearestPointTwoFiveDioptre(CLPower));
};

// Calculate Spherical Equivalent from Sphere + Cylinder
const sphericalEquivalentPower = (DS: string, DC: string): string => {
  const SEPower = Number(DS) + Number(DC) / 2;
  return addPlusSign(nearestPointTwoFiveDioptre(SEPower));
};

// shallow compare two records of Eye -> string
const shallowEqualEyeRecord = (a: Record<Eye, string>, b: Record<Eye, string>) => {
  const eyes: Eye[] = ['OD', 'OS'];
  for (const eye of eyes) {
    if ((a[eye] ?? '') !== (b[eye] ?? '')) return false;
  }
  return true;
};

// ----------------------
// ContactPrescription Component
// ----------------------
const ContactPrescription = () => {
  // ----------------------
  // Get Rx from Spectacle Context
  // ----------------------
  const { sphere, cylinder, axis, bvd, currentEye, sameBothEyes } = useSpectacle();

  // ----------------------
  // Get Contact Rx from ContactContext
  // ----------------------
  const {
    clSphere,
    setClSphere,
    clCylinder,
    setClCylinder,
    clAxis,
    setClAxis,
    sphericalEquivalent,
  } = useContact() as ContactContextType;

  const eyes: Eye[] = ['OD', 'OS'];

  // ----------------------
  // Compute derived Contact Lens Rx (pure, run during render)
  // ----------------------
  const computedContact = useMemo(() => {
    // clone existing values so we keep existing values for eyes not currently computed
    const newClSphere: Record<Eye, string> = {
      OD: clSphere?.OD ?? '0.00',
      OS: clSphere?.OS ?? '0.00',
    };
    const newClCylinder: Record<Eye, string> = {
      OD: clCylinder?.OD ?? '0.00',
      OS: clCylinder?.OS ?? '0.00',
    };
    const newClAxis: Record<Eye, string> = { OD: clAxis?.OD ?? '180', OS: clAxis?.OS ?? '180' };

    if (!currentEye) {
      return { newClSphere, newClCylinder, newClAxis };
    }

    // Calculate Sphere Power
    if (sphere[currentEye] && bvd[currentEye]) {
      newClSphere[currentEye] = contactLensPower(
        Number(sphere[currentEye]),
        Number(bvd[currentEye])
      );
    }

    // Calculate Cylinder Power
    if (cylinder[currentEye] && bvd[currentEye]) {
      // Spectacle sphere + cyl
      const spc = Number(sphere[currentEye]) + Number(cylinder[currentEye]);

      // Substract contacts sphere power from the contacts Sphere + Cyl, spc
      const cylPower =
        Number(contactLensPower(spc, Number(bvd[currentEye]))) -
        Number(contactLensPower(Number(sphere[currentEye]), Number(bvd[currentEye])));
      newClCylinder[currentEye] = addPlusSign(cylPower);
    }

    // Set axis
    if (axis[currentEye]) newClAxis[currentEye] = axis[currentEye];

    // If Both eyes switch is on then OS = OD values
    if (sameBothEyes) {
      const otherEye: Eye = currentEye === 'OD' ? 'OS' : 'OD'; // Get the other eye ('OD' ⇄ 'OS')
      newClSphere[otherEye] = newClSphere[currentEye];
      newClCylinder[otherEye] = newClCylinder[currentEye];
      newClAxis[otherEye] = newClAxis[currentEye];
    }

    return { newClSphere, newClCylinder, newClAxis };
    // We intentionally do NOT include setCl* in deps here because useMemo must be pure (no side-effects).
  }, [sphere, cylinder, axis, bvd, currentEye, sameBothEyes, clSphere, clCylinder, clAxis]);

  // ----------------------
  // After render, push computed values into ContactContext (side-effect)
  // ----------------------
  useEffect(() => {
    const { newClSphere, newClCylinder, newClAxis } = computedContact;

    // Only update if values actually changed (avoid extra renders)
    if (!shallowEqualEyeRecord(clSphere ?? { OD: '', OS: '' }, newClSphere)) {
      setClSphere(newClSphere);
    }
    if (!shallowEqualEyeRecord(clCylinder ?? { OD: '', OS: '' }, newClCylinder)) {
      setClCylinder(newClCylinder);
    }
    if (!shallowEqualEyeRecord(clAxis ?? { OD: '', OS: '' }, newClAxis)) {
      setClAxis(newClAxis);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [computedContact, setClSphere, setClCylinder, setClAxis]);

  const { newClSphere: cls, newClCylinder: clc, newClAxis: cla } = computedContact;

  // ----------------------
  // Render Contact Lens Rx
  // ----------------------
  return (
    <>
      {eyes.map((eye) => (
        <Grid size={12} key={eye}>
          <Item>
            <Typography variant="h6" sx={{ mb: 0.5 }}>
              {sphericalEquivalent
                ? // Display Spherical Equivalent
                  `${eye}: ${sphericalEquivalentPower(cls[eye] || '0.00', clc[eye] || '0.00')} DS`
                : // Display Full Toric Rx
                  `${eye}: ${cls[eye] || '0.00'} DS / ${clc[eye] || '0.00'} DC X ${cla[eye] || '0'}`}
            </Typography>
          </Item>
        </Grid>
      ))}
    </>
  );
};

export default ContactPrescription;
