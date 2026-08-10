import { ImageResponse } from "next/og";

export const alt = "South Asia Reports — country evidence for UK asylum tribunals";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#EFEAE0",
          padding: 72,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div style={{ width: 64, height: 2, backgroundColor: "#9C6B1A" }} />
          <div style={{ fontSize: 26, color: "#9C6B1A", letterSpacing: "0.01em" }}>
            UK asylum and immigration tribunals
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 82,
              color: "#241C33",
              letterSpacing: "-0.02em",
              lineHeight: 1.05,
            }}
          >
            Country evidence for South Asian asylum appeals
          </div>
          <div style={{ fontSize: 30, color: "#5B5268", marginTop: 28 }}>
            Bangladesh · India · Sri Lanka · Nepal · Bhutan
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid #DAD2C4",
            paddingTop: 24,
          }}
        >
          <div style={{ fontSize: 28, color: "#241C33" }}>South Asia Reports</div>
          <div style={{ fontSize: 24, color: "#4B3FA7" }}>southasiareports.com</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
