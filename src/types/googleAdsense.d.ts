/**
 * Props for the GoogleAdsense component
 */
export interface GoogleAdsenseProps {
    /** The AdSense ad slot ID provided by Google */
    adSlot: string;

    /** Optional ad format (default: 'auto') */
    adFormat?: string;

    /** Optional flag for full-width responsive ads (default: 'true') */
    fullWidth?: 'true' | 'false';

    /** Optional additional CSS class names to style the ad container */
    className?: string;
}
