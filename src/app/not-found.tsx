"use client";

import { useRouter } from "next/navigation";
import { Code2, AlertTriangle, Home, Mail } from "lucide-react";

export default function NotFound() {
  const router = useRouter();
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", backgroundColor: "var(--color-brand-bg)", padding: "24px" }}>
      <div style={{ textAlign: "center", maxWidth: "600px" }}>
        {/* Icon with warning badge */}
        <div style={{ position: "relative", display: "inline-block", marginBottom: "24px" }}>
          <div style={{ width: "80px", height: "80px", borderRadius: "16px", backgroundColor: "var(--color-brand-surface)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}>
            <Code2 size={36} style={{ color: "var(--color-brand-accent)" }} />
          </div>
          <div style={{ position: "absolute", top: "-8px", right: "-8px", width: "24px", height: "24px", borderRadius: "50%", backgroundColor: "#8B7355", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <AlertTriangle size={14} style={{ color: "#fff" }} />
          </div>
        </div>

        {/* Error badge */}
        <div style={{ display: "inline-block", padding: "6px 16px", borderRadius: "20px", backgroundColor: "var(--color-brand-surface-container-low)", marginBottom: "24px" }}>
          <span style={{ fontSize: "12px", fontWeight: 600, color: "var(--color-brand-accent)", letterSpacing: "0.1em" }}>ERROR 404</span>
        </div>

        {/* Heading */}
        <h1 style={{ fontSize: "36px", fontWeight: 700, color: "var(--color-brand-text)", marginBottom: "16px", lineHeight: 1.2 }}>
          Oops! This page got lost in the code.
        </h1>

        {/* Description */}
        <p style={{ fontSize: "15px", color: "var(--color-brand-muted)", lineHeight: 1.6, marginBottom: "32px", maxWidth: "480px", marginLeft: "auto", marginRight: "auto" }}>
          It looks like the link you followed has a bug or the page has been refactored out of existence. Don&apos;t worry, even the best compilers miss a semicolon sometimes.
        </p>

        {/* Action Buttons */}
        <div style={{ display: "flex", flexDirection: "row", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
          <button
            onClick={() => router.push("/")}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              backgroundColor: "var(--color-brand-accent)",
              color: "#fff",
              fontSize: "14px",
              fontWeight: 500,
              padding: "12px 24px",
              borderRadius: "8px",
              border: "none",
              cursor: "pointer",
            }}
          >
            <Home size={16} />
            Back to Home
          </button>
          <button
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              backgroundColor: "transparent",
              color: "var(--color-brand-accent)",
              fontSize: "14px",
              fontWeight: 500,
              padding: "12px 24px",
              borderRadius: "8px",
              border: "1.5px solid var(--color-brand-accent)",
              cursor: "pointer",
            }}
          >
            <Mail size={16} />
            Report Bug
          </button>
        </div>

        {/* Code snippets decoration */}
        <div style={{ marginTop: "48px", display: "flex", justifyContent: "center", gap: "32px", opacity: 0.4, fontFamily: "monospace", fontSize: "11px", color: "var(--color-brand-muted)" }}>
          <div style={{ textAlign: "left" }}>
            <div><span style={{ color: "#999" }}>01</span> <span style={{ color: "var(--color-brand-accent)" }}>function</span> findPage() {'{'}</div>
            <div><span style={{ color: "#999" }}>02</span>&nbsp;&nbsp;<span style={{ color: "var(--color-brand-accent)" }}>return</span> null;</div>
            <div><span style={{ color: "#999" }}>03</span> {'}'}</div>
          </div>
          <div style={{ textAlign: "left" }}>
            <div><span style={{ color: "#999" }}>04</span> try {'{'}</div>
            <div><span style={{ color: "#999" }}>05</span>&nbsp;&nbsp;navigate(route);</div>
            <div><span style={{ color: "#999" }}>06</span> {'}'} <span style={{ color: "var(--color-brand-accent)" }}>catch</span> (e) {'{'} ... {'}'}</div>
          </div>
          <div style={{ textAlign: "left" }}>
            <div><span style={{ color: "#999" }}>07</span> <span style={{ color: "#666" }}>{"// Lost in space"}</span></div>
            <div><span style={{ color: "#999" }}>08</span> console.<span style={{ color: "var(--color-brand-accent)" }}>log</span>(<span style={{ color: "#666" }}>&quot;404&quot;</span>);</div>
          </div>
          <div style={{ textAlign: "left" }}>
            <div><span style={{ color: "#999" }}>09</span> <span style={{ color: "var(--color-brand-accent)" }}>while</span>(lost) {'{'}</div>
            <div><span style={{ color: "#999" }}>10</span>&nbsp;&nbsp;search();</div>
            <div><span style={{ color: "#999" }}>11</span> {'}'}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
