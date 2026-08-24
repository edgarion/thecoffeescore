import React from 'react';
import { Link } from 'react-router-dom';
import { BUYING_GUIDES } from '../data/catalog';

export const GuidesPage: React.FC = () => {
  return (
    <div>
      {/* Breadcrumb */}
      <div className="breadcrumb">
        <Link to="/">Inicio</Link>
        <span className="sep">/</span>
        <span className="current">Guías de Compra</span>
      </div>

      {/* Page Header */}
      <div className="page-head">
        <div className="page-eyebrow">
          Criterio Editorial
        </div>
        <h1 className="page-title">Guías de compra y análisis</h1>
        <p className="page-sub">
          Artículos en profundidad redactados por expertos en café de especialidad y tecnología de extracción para guiar tu inversión según tu presupuesto real.
        </p>
      </div>

      {/* Guides Grid */}
      <div className="wrap" style={{ padding: '32px' }}>
        <div className="guides-grid">
          {BUYING_GUIDES.map(guide => (
            <article key={guide.id} className="guide-tile">
              <div className="guide-tile-photo">
                <img src={guide.image} alt={guide.title} />
              </div>
              <div className="guide-tile-body">
                <div className="guide-tile-cat">
                  {guide.category} · {guide.readTime}
                </div>
                <h3 className="guide-tile-title">{guide.title}</h3>
                <p className="guide-tile-desc">{guide.subtitle}</p>
                <div style={{ marginTop: 14 }}>
                  <span className="link-arrow">Leer guía completa →</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export const BlogPage: React.FC = () => {
  return (
    <div>
      {/* Breadcrumb */}
      <div className="breadcrumb">
        <Link to="/">Inicio</Link>
        <span className="sep">/</span>
        <span className="current">Blog & Técnica</span>
      </div>

      <div className="page-head">
        <div className="page-eyebrow">
          Cultura & Ciencia
        </div>
        <h1 className="page-title">Ciencia del café y recetas</h1>
        <p className="page-sub">
          Técnicas de texturizado de leche, calibración de molinos paso a paso, química del agua y perfiles de tueste.
        </p>
      </div>

      <div className="wrap" style={{ padding: '32px' }}>
        <div className="content-grid">
          <div className="content-card">
            <div className="eyebrow-red">Técnica & Barismo</div>
            <h3 className="content-heading">Por qué el ratio 1:2 no siempre es la respuesta</h3>
            <p className="content-sub">Cómo adaptar el rendimiento en taza según la densidad del grano y el perfil de tueste.</p>
            <span className="link-arrow">Leer artículo →</span>
          </div>

          <div className="content-card">
            <div className="eyebrow-red">Química del Agua</div>
            <h3 className="content-heading">Dureza y alcalinidad en tu cafetera</h3>
            <p className="content-sub">El agua representa el 98% de tu espresso. Analizamos las mejores soluciones de filtración doméstica.</p>
            <span className="link-arrow">Leer artículo →</span>
          </div>

          <div className="content-card">
            <div className="eyebrow-red">Mantenimiento</div>
            <h3 className="content-heading">Descalcificación y limpieza del grupo E61</h3>
            <p className="content-sub">Protocolos recomendados para prolongar la vida útil de bombas y calderas sin dañar juntas.</p>
            <span className="link-arrow">Leer artículo →</span>
          </div>
        </div>
      </div>
    </div>
  );
};
