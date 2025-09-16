/**
 * Favicon Configuration
 * 
 * This file centralizes favicon management for easy updates.
 * To update the favicon:
 * 1. Replace the favicon files in the public directory
 * 2. Update the paths in this configuration
 * 3. The favicon will be automatically applied site-wide
 */

export const faviconConfig = {
  // Standard favicon (ICO format for older browsers)
  favicon: '/favicon.ico',
  
  // Modern favicon sizes (PNG format)
  favicon16: '/favicon-16x16.png',
  favicon32: '/favicon-32x32.png',
  
  // Apple touch icons
  appleTouchIcon: '/apple-touch-icon.png',
  appleTouchIcon57: '/apple-touch-icon-57x57.png',
  appleTouchIcon60: '/apple-touch-icon-60x60.png',
  appleTouchIcon72: '/apple-touch-icon-72x72.png',
  appleTouchIcon76: '/apple-touch-icon-76x76.png',
  appleTouchIcon114: '/apple-touch-icon-114x114.png',
  appleTouchIcon120: '/apple-touch-icon-120x120.png',
  appleTouchIcon144: '/apple-touch-icon-144x144.png',
  appleTouchIcon152: '/apple-touch-icon-152x152.png',
  appleTouchIcon180: '/apple-touch-icon-180x180.png',
  
  // Android chrome icons
  androidChrome192: '/android-chrome-192x192.png',
  androidChrome512: '/android-chrome-512x512.png',
  
  // Web manifest
  manifest: '/site.webmanifest',
  
  // Microsoft tiles
  msTile: '/mstile-150x150.png',
  msConfig: '/browserconfig.xml',
  
  // Theme colors
  themeColor: '#ff6b6b', // Primary color
  msApplicationTileColor: '#1a1a2e', // Dark background
  
  // Safari pinned tab
  safariPinnedTab: '/safari-pinned-tab.svg',
  safariPinnedTabColor: '#ff6b6b'
};

/**
 * Generate favicon meta tags
 * Use this function to generate all necessary favicon meta tags
 */
export function generateFaviconMetaTags(): string {
  return `
    <!-- Standard favicon -->
    <link rel="icon" href="${faviconConfig.favicon}" />
    
    <!-- Modern favicon sizes -->
    <link rel="icon" type="image/png" sizes="16x16" href="${faviconConfig.favicon16}" />
    <link rel="icon" type="image/png" sizes="32x32" href="${faviconConfig.favicon32}" />
    
    <!-- Apple touch icons -->
    <link rel="apple-touch-icon" href="${faviconConfig.appleTouchIcon}" />
    <link rel="apple-touch-icon" sizes="57x57" href="${faviconConfig.appleTouchIcon57}" />
    <link rel="apple-touch-icon" sizes="60x60" href="${faviconConfig.appleTouchIcon60}" />
    <link rel="apple-touch-icon" sizes="72x72" href="${faviconConfig.appleTouchIcon72}" />
    <link rel="apple-touch-icon" sizes="76x76" href="${faviconConfig.appleTouchIcon76}" />
    <link rel="apple-touch-icon" sizes="114x114" href="${faviconConfig.appleTouchIcon114}" />
    <link rel="apple-touch-icon" sizes="120x120" href="${faviconConfig.appleTouchIcon120}" />
    <link rel="apple-touch-icon" sizes="144x144" href="${faviconConfig.appleTouchIcon144}" />
    <link rel="apple-touch-icon" sizes="152x152" href="${faviconConfig.appleTouchIcon152}" />
    <link rel="apple-touch-icon" sizes="180x180" href="${faviconConfig.appleTouchIcon180}" />
    
    <!-- Android chrome icons -->
    <link rel="icon" type="image/png" sizes="192x192" href="${faviconConfig.androidChrome192}" />
    <link rel="icon" type="image/png" sizes="512x512" href="${faviconConfig.androidChrome512}" />
    
    <!-- Web manifest -->
    <link rel="manifest" href="${faviconConfig.manifest}" />
    
    <!-- Microsoft tiles -->
    <meta name="msapplication-TileImage" content="${faviconConfig.msTile}" />
    <meta name="msapplication-TileColor" content="${faviconConfig.msApplicationTileColor}" />
    <meta name="msapplication-config" content="${faviconConfig.msConfig}" />
    
    <!-- Theme colors -->
    <meta name="theme-color" content="${faviconConfig.themeColor}" />
    
    <!-- Safari pinned tab -->
    <link rel="mask-icon" href="${faviconConfig.safariPinnedTab}" color="${faviconConfig.safariPinnedTabColor}" />
  `.trim();
}