import { useState } from 'react';
// Real Argix logo goes in public/assets/logo-white.svg (to be supplied). Until then, a plain text wordmark is shown.
export default function Logo({ height = 26 }) {
  const [broken, setBroken] = useState(false);
  if (!__HAS_LOGO__ || broken) return <span className="wordmark">Argix</span>;
  return <img src={`${import.meta.env.BASE_URL}assets/logo-white.svg`} alt="Argix" height={height} onError={() => setBroken(true)} />;
}
