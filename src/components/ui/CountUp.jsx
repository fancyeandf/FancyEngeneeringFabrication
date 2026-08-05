"use client";

import { useEffect, useRef, useState } from "react";

const VALUE_PATTERN = /^(\D*)(\d+)(.*)$/;

const DURATION_MS = 1600;

function easeOutExpo(t) {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

export default function CountUp({ value, className = "" }) {
  const match = typeof value === "string" ? value.match(VALUE_PATTERN) : null;
  const [display, setDisplay] = useState(match ? 0 : value);
  const ref = useRef(null);
  const played = useRef(false);

  useEffect(() => {
    if (!match) return;
    const node = ref.current;
    if (!node) return;

    const target = Number(match[2]);
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || played.current) return;
        played.current = true;

        const start = performance.now();
        const tick = (now) => {
          const progress = Math.min((now - start) / DURATION_MS, 1);
          setDisplay(Math.round(target * easeOutExpo(progress)));
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        observer.disconnect();
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!match) {
    return (
      <span ref={ref} className={className}>
        {value}
      </span>
    );
  }

  const [, prefix, , suffix] = match;

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
