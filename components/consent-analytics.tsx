"use client";

import { useEffect, useState } from "react";

const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export function ConsentAnalytics() {
  const [choice, setChoice] = useState<"accepted" | "rejected" | null>(null);

  useEffect(() => {
    if (!measurementId) return;
    const saved = window.localStorage.getItem("restory-consent");
    const timer = window.setTimeout(() => {
      if (saved === "accepted" || saved === "rejected") setChoice(saved);
    }, 0);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!measurementId || choice !== "accepted") return;

    const analyticsWindow = window as Window & {
      dataLayer?: unknown[][];
      gtag?: (...args: unknown[]) => void;
    };
    analyticsWindow.dataLayer = analyticsWindow.dataLayer || [];
    analyticsWindow.gtag = (...args: unknown[]) => analyticsWindow.dataLayer?.push(args);
    analyticsWindow.gtag("js", new Date());
    analyticsWindow.gtag("config", measurementId, { anonymize_ip: true });

    const existing = document.querySelector<HTMLScriptElement>(`script[data-restory-ga="${measurementId}"]`);
    if (existing) return;

    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    script.dataset.restoryGa = measurementId;
    document.head.appendChild(script);

    return () => script.remove();
  }, [choice]);

  if (!measurementId) return null;

  const decide = (value: "accepted" | "rejected") => {
    window.localStorage.setItem("restory-consent", value);
    setChoice(value);
  };

  return (
    <>
      {choice === null && (
        <aside className="consent" aria-label="Analytics consent">
          <div><strong>Optional analytics</strong><p>Help us see which repair guides are useful. Analytics stays off until you accept.</p></div>
          <div className="consent-actions"><button onClick={() => decide("rejected")}>Reject</button><button className="primary" onClick={() => decide("accepted")}>Accept</button></div>
        </aside>
      )}
    </>
  );
}
