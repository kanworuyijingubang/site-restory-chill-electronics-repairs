"use client";

import { useEffect, useState } from "react";

const CONSENT_KEY = "restory-consent";
const ADSTERRA_SRC = "https://pl30883736.effectivecpmnetwork.com/9adb731e78c649ba2eb0d233f3330f85/invoke.js";
const ADSTERRA_CONTAINER_ID = "container-9adb731e78c649ba2eb0d233f3330f85";

/**
 * Adsterra ad unit. Loads only after the visitor accepts the consent panel
 * (same consent as analytics). Placed at the bottom of every page, below all
 * content, so it never sits above a direct answer or quick-answer section.
 */
export function AdSlot() {
  const [granted, setGranted] = useState(false);

  useEffect(() => {
    const update = () => {
      let ok = false;
      try {
        ok = window.localStorage.getItem(CONSENT_KEY) === "accepted";
      } catch {
        ok = false;
      }
      setGranted(ok);
    };
    update();
    window.addEventListener("restory:consent-changed", update);
    return () => window.removeEventListener("restory:consent-changed", update);
  }, []);

  useEffect(() => {
    if (!granted) return;
    const existing = document.getElementById("restory-adsterra-script");
    if (existing) return;
    const script = document.createElement("script");
    script.id = "restory-adsterra-script";
    script.async = true;
    script.setAttribute("data-cfasync", "false");
    script.src = ADSTERRA_SRC;
    document.body.appendChild(script);
    return () => {
      script.remove();
    };
  }, [granted]);

  if (!granted) return null;

  return (
    <div className="ad-slot">
      <p className="ad-slot-label">Advertisement</p>
      <div id={ADSTERRA_CONTAINER_ID} />
    </div>
  );
}
