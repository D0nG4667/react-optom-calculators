export { }; // ensures this file is treated as a module

declare global {
    interface Window {
        adsbygoogle?: unknown[];
    }

    interface ImportMetaEnv {
        readonly VITE_ADSENSE_CLIENT: string;
        readonly VITE_API_URL?: string;
    }

    interface ImportMeta {
        readonly env: ImportMetaEnv;
    }
}
