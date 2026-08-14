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
          backgroundColor: "#EDE8DF",
          padding: 72,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ width: 10, height: 10, backgroundColor: "#8B2942" }} />
          <div style={{ fontSize: 24, color: "#5A6B3A", letterSpacing: "0.08em" }}>
            UK ASYLUM TRIBUNALS
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 78,
              color: "#2B2118",
              letterSpacing: "-0.02em",
              lineHeight: 1.05,
            }}
          >
            Country evidence for South Asian appeals
          </div>
          <div style={{ fontSize: 28, color: "#6A5D52", marginTop: 24 }}>
            Bangladesh · India · Sri Lanka · Nepal · Bhutan
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid #C9C0B3",
            paddingTop: 24,
          }}
        >
          <div style={{ fontSize: 28, color: "#2B2118" }}>South Asia Reports</div>
          <div style={{ fontSize: 24, color: "#8B2942" }}>Lodge a case</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
