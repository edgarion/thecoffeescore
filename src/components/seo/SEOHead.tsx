import React, { useEffect } from 'react';
import { SITE_URL, SITE_NAME, SITE_DEFAULT_IMAGE } from '../../utils/seoSchemas';

export interface SEOHeadProps {
  title?: string;
  description?: string;
  canonical?: string;
  image?: string;
  type?: 'website' | 'article' | 'product';
  jsonLd?: Record<string, any> | Array<Record<string, any>>;
  noindex?: boolean;
  googleSiteVerification?: string;
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description = 'Comparador independiente de cafeteras espresso, molinos de café y accesorios. Pruebas de laboratorio, puntuaciones The Coffee Score y precios actualizados.',
  canonical,
  image = SITE_DEFAULT_IMAGE,
  type = 'website',
  jsonLd,
  noindex = false,
  googleSiteVerification,
}) => {
  useEffect(() => {
    // 1. Page Title
    const formattedTitle = title
      ? `${title} | ${SITE_NAME}`
      : `Comparador de Cafeteras y Molinos de Café | ${SITE_NAME}`;
    document.title = formattedTitle;

    // Helper function to set or create meta tags
    const setMetaTag = (attrName: string, attrValue: string, content: string) => {
      let element = document.querySelector(`meta[${attrName}="${attrValue}"]`) as HTMLMetaElement | null;
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attrName, attrValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // 2. Primary & Google Search Console Meta Tags
    setMetaTag('name', 'description', description);
    setMetaTag('name', 'robots', noindex ? 'noindex, nofollow' : 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');
    setMetaTag('name', 'googlebot', noindex ? 'noindex, nofollow' : 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');

    // Google Search Console Verification Tag
    const verificationCode = googleSiteVerification ||
      (typeof process !== 'undefined' ? process.env?.VITE_GOOGLE_SITE_VERIFICATION : undefined) ||
      'gsc_thecoffeescore_verification_token';
    if (verificationCode) {
      setMetaTag('name', 'google-site-verification', verificationCode);
    }

    // OpenSEO / IndexNow / Bing Webmaster Verification
    setMetaTag('name', 'openseo', '614ace238a6c458bb905f3a04044418f');
    setMetaTag('name', 'msvalidate.01', '614ace238a6c458bb905f3a04044418f');
    setMetaTag('name', 'indexnow-key', '614ace238a6c458bb905f3a04044418f');

    setMetaTag('name', 'author', 'The Coffee Score Lab');

    // 3. Open Graph
    const currentUrl = canonical
      ? canonical.startsWith('http')
        ? canonical
        : `${SITE_URL}${canonical}`
      : `${SITE_URL}${typeof window !== 'undefined' ? window.location.pathname : '/'}`;

    const fullImageUrl = image.startsWith('http') ? image : `${SITE_URL}${image}`;

    setMetaTag('property', 'og:title', formattedTitle);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:url', currentUrl);
    setMetaTag('property', 'og:image', fullImageUrl);
    setMetaTag('property', 'og:type', type);
    setMetaTag('property', 'og:site_name', SITE_NAME);
    setMetaTag('property', 'og:locale', 'es_ES');

    // 4. Twitter Cards
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', formattedTitle);
    setMetaTag('name', 'twitter:description', description);
    setMetaTag('name', 'twitter:image', fullImageUrl);
    setMetaTag('name', 'twitter:site', '@thecoffeescore');

    // 5. Canonical Link
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', currentUrl);

    // 6. JSON-LD Structured Data
    const existingJsonLd = document.querySelectorAll('script[type="application/ld+json"][data-seo="dynamic"]');
    existingJsonLd.forEach((el) => el.remove());

    if (jsonLd) {
      const schemas = Array.isArray(jsonLd) ? jsonLd : [jsonLd];
      schemas.forEach((schemaData) => {
        if (!schemaData) return;
        const script = document.createElement('script');
        script.setAttribute('type', 'application/ld+json');
        script.setAttribute('data-seo', 'dynamic');
        script.textContent = JSON.stringify(schemaData, null, 2);
        document.head.appendChild(script);
      });
    }

    return () => {
      // Cleanup dynamically injected JSON-LD on unmount
      const dynamicScripts = document.querySelectorAll('script[type="application/ld+json"][data-seo="dynamic"]');
      dynamicScripts.forEach((el) => el.remove());
    };
  }, [title, description, canonical, image, type, jsonLd, noindex]);

  return null;
};
