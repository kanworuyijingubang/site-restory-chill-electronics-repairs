import { ImageResponse } from "next/og";

export const alt = "ReStory Repair Desk — evidence-labeled electronics repair guides";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        position: "relative",
        overflow: "hidden",
        color: "#eef5f1",
        background: "#07110f",
        fontFamily: "Arial, sans-serif"
      }}
    >
      <div style={{ position: "absolute", inset: 0, opacity: .22, backgroundImage: "linear-gradient(#75efbd22 1px, transparent 1px),linear-gradient(90deg,#75efbd22 1px,transparent 1px)", backgroundSize: "38px 38px" }} />
      <div style={{ position: "absolute", top: -180, right: -80, width: 620, height: 620, borderRadius: "50%", background: "#174e3b", filter: "blur(110px)", opacity: .6 }} />
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: "100%", padding: "72px 78px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 62, height: 62, border: "2px solid #477265", borderRadius: 18, color: "#75efbd", background: "#10251f", fontSize: 36 }}>↗</div>
          <div style={{ display: "flex", flexDirection: "column" }}><span style={{ fontSize: 24, fontWeight: 800 }}>ReStory</span><span style={{ color: "#9dafa9", fontSize: 14, letterSpacing: 5, textTransform: "uppercase" }}>Repair Desk</span></div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 920 }}>
          <span style={{ color: "#75efbd", fontSize: 18, letterSpacing: 4, textTransform: "uppercase" }}>Full-release field manual</span>
          <div style={{ display: "flex", flexDirection: "column", marginTop: 20, fontSize: 66, fontWeight: 800, lineHeight: 1.04, letterSpacing: -3 }}><span>Repair the device.</span><span>Verify the answer.</span></div>
          <div style={{ marginTop: 28, color: "#b7c6c2", fontSize: 24 }}>Guides, achievements, devices and story routes — with sources and update boundaries.</div>
        </div>
      </div>
      <div style={{ position: "absolute", right: 75, bottom: 72, display: "flex", width: 190, height: 116, border: "2px solid #477265", borderRadius: 24, background: "#10241f", transform: "rotate(-8deg)", boxShadow: "12px 15px 0 #040b09" }}>
        <div style={{ position: "absolute", top: 22, left: 22, width: 92, height: 46, border: "2px solid #315f51", borderRadius: 8, background: "#06140f" }} />
        <div style={{ position: "absolute", right: 22, bottom: 20, width: 34, height: 34, border: "6px solid #75efbd", borderRadius: "50%" }} />
      </div>
    </div>,
    size
  );
}
