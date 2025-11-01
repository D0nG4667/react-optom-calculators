import { useEffect, useRef } from 'react';

type UseAdSenseOptions = { client: string; forceReload?: boolean };

export function useAdSense({ client, forceReload = false }: UseAdSenseOptions) {
    const loadedRef = useRef(false);
    const effectCalled = useRef(false);

    useEffect(() => {
        if (effectCalled.current) return;
        effectCalled.current = true;

        if (import.meta.env.DEV) return; // only load in production

        const existing = document.querySelector<HTMLScriptElement>(
            'script[src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]'
        );

        const pushAd = () => {
            try {
                (window.adsbygoogle = window.adsbygoogle || []).push({});
                loadedRef.current = true;
            } catch (err) {
                console.error('adsbygoogle push failed:', err);
            }
        };

        if (existing && !forceReload) {
            existing.addEventListener('load', pushAd);
            return;
        }

        const script = document.createElement('script');
        script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
        script.async = true;
        script.setAttribute('data-ad-client', client);
        script.addEventListener('load', pushAd);
        script.addEventListener('error', (e) => console.error('AdSense load failed', e));

        document.head.appendChild(script);
    }, [client, forceReload]);
}
