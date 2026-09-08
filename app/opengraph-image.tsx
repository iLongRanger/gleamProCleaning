import { ImageResponse } from "next/og";

export const alt =
  "Gleam Pro Cleaning — owner-led commercial cleaning in Metro Vancouver. Get a free quote at gleampro.ca.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        background: "#f5f1e8",
        color: "#0b192c",
        padding: "60px 70px",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span style={{ fontSize: 33, fontWeight: 700 }}>
          Gleam Pro Cleaning.
        </span>
        <span style={{ fontSize: 18, color: "#4b5968" }}>METRO VANCOUVER</span>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          fontSize: 86,
          lineHeight: 1.1,
          letterSpacing: -4,
          fontWeight: 700,
        }}
      >
        <span>A cleaner space.</span>
        <span style={{ color: "#055f4b" }}>A better start.</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <span style={{ fontSize: 25 }}>
          Owner-led commercial cleaning. A local team you can count on.
        </span>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 24,
            borderTop: "1px solid #b59961",
            paddingTop: 25,
          }}
        >
          <span style={{ fontSize: 20 }}>
            Vancouver · Burnaby · New Westminster
          </span>
          <span
            style={{
              fontSize: 23,
              background: "#055f4b",
              color: "white",
              padding: "15px 24px",
              borderRadius: 6,
            }}
          >
            Get a free quote · gleampro.ca
          </span>
        </div>
      </div>
    </div>,
    size,
  );
}
