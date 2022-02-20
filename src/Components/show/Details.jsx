import React from "react";

export default function Details({ status, premiered, network }) {
  return (
    <div>
      <p>
        Status:<span>{status}</span>
      </p>
    </div>
  );
}
