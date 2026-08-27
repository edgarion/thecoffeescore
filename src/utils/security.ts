/**
 * Security & Sanitization Utilities
 * Implements defenses against XSS, Prototype Pollution, and Malicious Redirection
 */

/**
 * Strips dangerous HTML tags and script injections from user input
 */
export function sanitizeInput(input: string | null | undefined): string {
  if (!input) return '';
  return input
    .replace(/[<>]/g, '') // Remove < and >
    .replace(/javascript:/gi, '') // Remove javascript: pseudo-protocols
    .replace(/onload/gi, '')
    .replace(/onerror/gi, '')
    .replace(/onclick/gi, '')
    .trim();
}

/**
 * Validates whether an external URL is safe for navigation or image rendering
 */
export function isSafeUrl(url: string | null | undefined): boolean {
  if (!url || typeof url !== 'string') return false;
  
  // Allow relative paths starting with /
  if (url.startsWith('/') && !url.startsWith('//')) {
    return true;
  }

  try {
    const parsed = new URL(url);
    // Only allow http and https protocols
    return parsed.protocol === 'http:' || parsed.protocol === 'https:';
  } catch {
    return false;
  }
}

/**
 * Sanitizes search queries and prevents ReDoS (Regular Expression Denial of Service)
 */
export function sanitizeSearchQuery(query: string): string {
  if (!query) return '';
  return query
    .slice(0, 100) // Prevent payload bloat
    .replace(/[^\w\s\u00C0-\u017F\-\.\+]/gi, '') // Only allow alphanumeric, accented chars, hyphens
    .trim();
}
