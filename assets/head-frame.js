/* Eau-Energie — head frame v1.0 — 03 septembre 2026 */
(function(){
  'use strict';

  const mount = document.getElementById('site-head');
  if(!mount) return;

  const items = [
    ['index.html','Présentation'],
    ['hydroelectricite.html','Hydroélectricité'],
    ['due-diligence.html','Due Diligence'],
    ['productible-hydroelectrique.html','Productible'],
    ['reglementaire.html','Réglementaire'],
    ['environnement.html','Environnement'],
    ['partenaires.html','Partenaires'],
    ['foncier.html','Foncier'],
    ['publications.html','Publications'],
    ['actualite.html','Actualités'],
    ['denis-bouzon.html','Denis Bouzon'],
    ['contact.html','Contact']
  ];

  let current = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  if(current === '') current = 'index.html';

  const nav = items.map(([href,label]) => {
    const active = current === href.toLowerCase();

    return `<li><a href="/${href}"${active ? ' class="active" aria-current="page"' : ''}>${label}</a></li>`;
  }).join('');

  mount.innerHTML = `
    <div id="bandeau">
      <img
        src="/bandeau.jpg"
        alt="Eau-Energie — hydraulique et hydroélectricité"
        width="1600"
        height="500"
      >

      <div id="bandeau-overlay">
        <h1>Eau-Energie</h1>
        <p>Bureau d'études hydraulique — Pau, Pyrénées-Atlantiques</p>
      </div>
    </div>

    <nav aria-label="Navigation principale">
      <ul>${nav}</ul>
    </nav>
  `;
})();   óK^Æ2'   '              ¤    mimetypePK    ÝMQê—æg’   1             ¤M   META-INF/manifest.xmlPK    NQZbAh   ã              ¤  content.xmlPK      ²   º    
