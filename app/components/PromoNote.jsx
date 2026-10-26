"use client";

import { useEffect, useState } from "react";
import { PROMO_ENDS, PROMO_SHORT } from "./promo";

export default function PromoNote() {
  const [active, setActive] = useState(true);

  useEffect(() => {
    if (new Date() >= PROMO_ENDS) setActive(false);
  }, []);

  if (!active) return null;

  return (
    <p
      style={{
        display: "inline-block",
        marginTop: "14px",
        background: "var(--gold-100)",
        color: "var(--navy-950)",
        border: "1.5px solid var(--gold-500)",
        borderRadius: "999px",
        padding: "8px 18px",
        fontWeight: 700,
        fontSize: ".95rem",
      }}
    >
      Fall special: {PROMO_SHORT}.
    </p>
  );
}
