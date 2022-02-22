import React from "react";
import { DetailWrapper } from "./Detailstyle";

export default function Details({ status, premiered, network }) {
  return (
    <DetailWrapper>
      <p>
        Status:<span>{status}</span>
      </p>
      <p>
        Premiered {premiered} {network ? `on ${network.name}` : null}
      </p>
    </DetailWrapper>
  );
}
