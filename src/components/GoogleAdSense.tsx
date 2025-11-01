import React, { useRef, useEffect } from 'react';
import { useAdSense } from '@/hooks/useAdSense';
import styles from './GoogleAdSense.module.css';
import type { GoogleAdsenseProps } from '@/types/googleAdsense';

const GoogleAdsense: React.FC<GoogleAdsenseProps> = ({
  adSlot,
  adFormat = 'auto',
  fullWidth = 'true',
  className = '',
}) => {
  const AD_CLIENT = import.meta.env.VITE_ADSENSE_CLIENT;

  useAdSense({ client: AD_CLIENT });

  const pushedRef = useRef(false);

  useEffect(() => {
    if (pushedRef.current) return;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
      pushedRef.current = true;
    } catch (err) {
      console.error('adsbygoogle push error:', err);
    }
  }, []);

  return (
    <ins
      className={`adsbygoogle ${styles.ads} ${className}`} // 'adsbygoogle' required by Google + module styling
      data-ad-client={AD_CLIENT}
      data-ad-slot={adSlot}
      data-ad-format={adFormat}
      data-full-width-responsive={fullWidth}
      aria-hidden="true"
    />
  );
};

export default GoogleAdsense;
