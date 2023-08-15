import { useEffect, useRef } from 'react';

const GoogleAdsense = () => {
  // Use effectCalled useRef to make useEffect render only once in dev mode
  const effectCalled = useRef(false);

  useEffect(() => {
    if (effectCalled.current) return;
    (window.adsbygoogle = window.adsbygoogle || []).push({});
    effectCalled.current = true;
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: 'block' }}
      data-ad-client="ca-pub-4706159117385053"
      data-ad-slot="6024584031"
      data-ad-format="auto"
      data-full-width-responsive="true"
    ></ins>
  );
};

export default GoogleAdsense;
