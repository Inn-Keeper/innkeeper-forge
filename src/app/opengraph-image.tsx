import { ImageResponse } from "next/og";

export const alt =
  "Innkeeper Forge, Dalton Castro's web and mobile software portfolio";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        position: "relative",
        display: "flex",
        width: "100%",
        height: "100%",
        overflow: "hidden",
        background: "#0b0a09",
        color: "#f5f0e8",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: -180,
          right: -100,
          display: "flex",
          width: 620,
          height: 620,
          borderRadius: 620,
          background:
            "radial-gradient(circle, rgba(245,158,11,0.28) 0%, rgba(234,88,12,0.08) 48%, rgba(11,10,9,0) 72%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          right: 104,
          bottom: 78,
          display: "flex",
          width: 168,
          height: 168,
          transform: "rotate(45deg)",
          border: "2px solid rgba(245,158,11,0.35)",
          borderRadius: 28,
        }}
      />
      <div
        style={{
          position: "absolute",
          right: 150,
          bottom: 124,
          display: "flex",
          width: 76,
          height: 76,
          transform: "rotate(45deg)",
          borderRadius: 18,
          background: "linear-gradient(135deg, #f59e0b, #ea580c)",
          boxShadow: "0 0 60px rgba(245,158,11,0.45)",
        }}
      />

      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "100%",
          padding: "72px 86px",
        }}
      >
        <div
          style={{
            display: "flex",
            color: "#f59e0b",
            fontSize: 22,
            fontWeight: 700,
            letterSpacing: 5,
            textTransform: "uppercase",
          }}
        >
          Portfolio / Workshop
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 24,
            fontSize: 82,
            fontWeight: 800,
            letterSpacing: -4,
            lineHeight: 1,
          }}
        >
          Innkeeper Forge
        </div>
        <div
          style={{
            display: "flex",
            maxWidth: 720,
            marginTop: 30,
            color: "#b8aea4",
            fontSize: 32,
            lineHeight: 1.35,
          }}
        >
          Web and mobile projects forged in code and curated by Dalton Castro.
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: 52,
            color: "#f5f0e8",
            fontSize: 23,
            fontWeight: 600,
          }}
        >
          <div
            style={{
              display: "flex",
              width: 34,
              height: 4,
              marginRight: 14,
              borderRadius: 4,
              background: "#f59e0b",
            }}
          />
          Inn-Keeper
        </div>
      </div>
    </div>,
    size,
  );
}
