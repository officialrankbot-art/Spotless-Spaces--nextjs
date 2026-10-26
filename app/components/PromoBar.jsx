"use client";

import { useEffect, useState } from "react";
import { PROMO_ENDS, PROMO_SHORT } from "./promo";

export default function PromoBar() {
  const [active, setActive] = useState(true);

  useEffect(() => {
    if (new Date() >= PROMO_ENDS) setActive(false);
  }, []);

  if (!active) return null;

  return (
    <div
      role="region"
      aria-label="Current promotion"
      style={{
        background: "var(--gold-500)",
        color: "var(--navy-950)",
        textAlign: "center",
        padding: "10px 16px",
        fontFamily: "Nunito, sans-serif",
        fontWeight: 700,
        fontSize: ".95rem",
        lineHeight: 1.4,
      }}
    >
      Fall special: {PROMO_SHORT}.{" "}
      <a href="/#walkthrough" style={{ color: "var(--navy-950)", textDecoration: "underline", whiteSpace: "nowrap" }}>
        Request a free walkthrough →
      </a>
    </div>
  );
}
