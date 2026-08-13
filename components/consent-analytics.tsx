"use client";

import Script from "next/script";
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

  if (!measurementId) return null;

  const decide = (value: "accepted" | "rejected") => {
    window.localStorage.setItem("restory-consent", value);
    setChoice(value);
  };

  return (
    <>
      {choice === "accepted" && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`} strategy="afterInteractive" />
          <Script id="ga-consent" strategy="afterInteractive">{`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)};gtag('js',new Date());gtag('config','${measurementId}',{anonymize_ip:true});`}</Script>
        </>
      )}
      {choice === null && (
        <aside className="consent" aria-label="Analytics consent">
          <div><strong>Optional analytics</strong><p>Help us see which repair guides are useful. Analytics stays off until you accept.</p></div>
          <div className="consent-actions"><button onClick={() => decide("rejected")}>Reject</button><button className="primary" onClick={() => decide("accepted")}>Accept</button></div>
        </aside>
      )}
    </>
  );
}
