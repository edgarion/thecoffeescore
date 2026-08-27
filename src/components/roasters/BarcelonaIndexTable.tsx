import React, { useState } from 'react';
import { BarcelonaRoaster } from '../../core/domain/Roaster';
import { BARCELONA_ROASTERS } from '../../data/catalog';

export const BarcelonaIndexTable: React.FC = () => {
  const [roasters, setRoasters] = useState<BarcelonaRoaster[]>(BARCELONA_ROASTERS);
  const [sortField, setSortField] = useState<'priceKg' | 'score' | 'name'>('score');
  const [sortAsc, setSortAsc] = useState(false);

  const handleSort = (field: 'priceKg' | 'score' | 'name') => {
    const isSame = sortField === field;
    const nextAsc = isSame ? !sortAsc : false;
    setSortField(field);
    setSortAsc(nextAsc);

    const sorted = [...roasters].sort((a, b) => {
      if (field === 'name') {
        return nextAsc ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
      }
      return nextAsc ? a[field] - b[field] : b[field] - a[field];
    });

    setRoasters(sorted);
  };

  return (
    <div className="compare-table-wrap">
      <table className="compare-table">
        <thead>
          <tr>
            <th onClick={() => handleSort('name')} style={{ cursor: 'pointer' }}>
              <span>Tostador</span>
            </th>
            <th>Distrito / Obrador</th>
            <th onClick={() => handleSort('priceKg')} style={{ cursor: 'pointer', textAlign: 'right' }}>
              <span>Precio Medio / kg</span>
            </th>
            <th>Orígenes frecuentes</th>
            <th>Frecuencia de tueste</th>
            <th onClick={() => handleSort('score')} style={{ cursor: 'pointer', textAlign: 'right' }}>
              <span>Coffee Score</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {roasters.map((r) => (
            <tr key={r.name}>
              <td style={{ fontWeight: 700 }}>
                {r.name}
                <span style={{ display: 'block', fontSize: '0.72rem', color: 'var(--muted)', fontWeight: 400 }}>
                  {r.signature}
                </span>
              </td>
              <td style={{ color: 'var(--muted)' }}>{r.district}</td>
              <td style={{ fontWeight: 700, textAlign: 'right' }}>
                {r.priceKg.toFixed(2)} €
              </td>
              <td style={{ color: 'var(--muted)', fontSize: '0.82rem' }}>{r.origins}</td>
              <td style={{ fontWeight: 500 }}>{r.roastFreq}</td>
              <td style={{ textAlign: 'right' }}>
                <span className="score-badge">
                  {r.score.toFixed(1)}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
