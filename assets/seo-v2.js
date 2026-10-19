/* Eau-Energie — SEO commun v2.0 — 19 octobre 2026
 * Test Google Drive : données complémentaires uniquement.
 * Les balises statiques et le JSON-LD spécifiques à chaque page font autorité.
 * Aucun changement visuel et aucune suppression des directives noindex.
 */
(function () {
  'use strict';

  const BASE = 'https://www.eau-energie.fr';
  const SITE = {
    name: 'Cabinet Eau-Energie',
    author: 'Denis Bouzon',
    email: 'contact@eau-energie.fr',
    telephone: '+33 6 99 59 39 60',
    image: BASE + '/bandeau.jpg',
    orcid: 'https://orcid.org/0009-0007-8894-8902',
    linkedin: 'https://www.linkedin.com/in/denis-bouzon-a7343a313/'
  };
  const head = document.head;
  if (!head) return;

  const path = window.location.pathname || '/';
  const canonical = head.querySelector('link[rel="canonical"]');
  const canonicalUrl = canonical && canonical.href
    ? canonical.href
    : BASE + path;
  const robots = head.querySelector('meta[name="robots"]');
  const noindex = robots && /(?:^|[,\s])noindex(?:$|[,\s])/i.test(robots.content || '');
  const description = head.querySelector('meta[name="description"]');
  const descriptionText = description ? description.content : '';
  const title = document.title || SITE.name;

  /* Compléter uniquement les métadonnées manquantes ; préserver tout contenu explicite. */
  function addMeta(attribute, key, value) {
    if (!value || head.querySelector('meta[' + attribute + '="' + key + '"]')) return;
    const item = document.createElement('meta');
    item.setAttribute(attribute, key);
    item.setAttribute('content', value);
    head.appendChild(item);
  }
  if (!canonical) {
    const link = document.createElement('link');
    link.rel = 'canonical';
    link.href = canonicalUrl;
    head.appendChild(link);
  }
  /* Ne jamais injecter index sur une page dont la directive robots est absente ou noindex. */
  addMeta('name', 'author', SITE.author);
  addMeta('property', 'og:title', title);
  addMeta('property', 'og:description', descriptionText);
  addMeta('property', 'og:type', 'website');
  addMeta('property', 'og:url', canonicalUrl);
  addMeta('property', 'og:image', SITE.image);
  addMeta('property', 'og:site_name', SITE.name);
  addMeta('property', 'og:locale', 'fr_FR');
  addMeta('name', 'twitter:card', 'summary_large_image');
  addMeta('name', 'twitter:title', title);
  addMeta('name', 'twitter:description', descriptionText);
  addMeta('name', 'twitter:image', SITE.image);

  /* Respecter les graphes statiques existants, y compris les tableaux et @graph. */
  const types = new Set();
  const ids = new Set();
  function scan(value) {
    if (!value || typeof value !== 'object') return;
    if (Array.isArray(value)) { value.forEach(scan); return; }
    if (typeof value['@id'] === 'string') ids.add(value['@id']);
    const type = value['@type'];
    if (Array.isArray(type)) type.forEach(t => types.add(t));
    else if (typeof type === 'string') types.add(type);
    Object.values(value).forEach(scan);
  }
  head.querySelectorAll('script[type="application/ld+json"]').forEach(script => {
    try { scan(JSON.parse(script.textContent)); } catch (_) { /* JSON-LD de page inchangé */ }
  });

  const graph = [];
  function appendIfMissing(type, id, value) {
    if (!types.has(type) && !ids.has(id)) {
      graph.push(value);
      types.add(type);
      ids.add(id);
    }
  }
  appendIfMissing('WebSite', BASE + '/#website', {
    '@type': 'WebSite', '@id': BASE + '/#website',
    url: BASE + '/', name: SITE.name, inLanguage: 'fr-FR',
    publisher: { '@id': BASE + '/#organization' }
  });
  appendIfMissing('Organization', BASE + '/#organization', {
    '@type': 'Organization', '@id': BASE + '/#organization',
    name: SITE.name, url: BASE + '/', email: SITE.email,
    telephone: SITE.telephone,
    areaServed: { '@type': 'Country', name: 'France' },
    address: { '@type': 'PostalAddress', addressLocality: 'Pau',
      addressRegion: 'Pyrénées-Atlantiques', addressCountry: 'FR' }
  });
  appendIfMissing('Person', BASE + '/denis-bouzon.html#person', {
    '@type': 'Person', '@id': BASE + '/denis-bouzon.html#person',
    name: SITE.author, url: BASE + '/denis-bouzon.html',
    sameAs: [SITE.orcid, SITE.linkedin],
    worksFor: { '@id': BASE + '/#organization' }
  });

  /* Pages indexables uniquement. Les pages noindex et redirections restent intactes. */
  if (!noindex) {
    appendIfMissing('WebPage', canonicalUrl + '#webpage', {
      '@type': 'WebPage', '@id': canonicalUrl + '#webpage',
      url: canonicalUrl, name: title,
      isPartOf: { '@id': BASE + '/#website' },
      ...(descriptionText ? { description: descriptionText } : {})
    });
  }
  if (graph.length && !head.querySelector('script[data-eau-energie-seo="v2"]')) {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-eau-energie-seo', 'v2');
    script.textContent = JSON.stringify({ '@context': 'https://schema.org', '@graph': graph });
    head.appendChild(script);
  }
})();
