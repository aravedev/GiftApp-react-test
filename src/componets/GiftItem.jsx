import React from "react";

export default function GiftItem({ url, title }) {
  return (
    <div className="card">
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  );
}
