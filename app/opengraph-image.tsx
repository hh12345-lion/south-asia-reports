import { ImageResponse } from "next/og";

export const alt = "South Asia Reports - South Asia Expert Witness Services UK";
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
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#1B2A4A",
          padding: 80,
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            color: "#FFFFFF",
            letterSpacing: "-0.02em",
            textAlign: "center",
            lineHeight: 1.1,
          }}
        >
          South Asia Reports
        </div>
        <p
          style={{
            marginTop: 32,
            fontSize: 36,
            fontWeight: 600,
            color: "#C4793A",
            textAlign: "center",
            lineHeight: 1.3,
          }}
        >
          South Asia Expert Witness Services UK
        </p>
      </div>
    ),
    { ...size }
  );
}
