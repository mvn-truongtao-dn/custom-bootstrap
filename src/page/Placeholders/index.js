import React from "react";
import PlaceholderItem from "../../components/Placeholder";

export default function Placeholder() {
  return (
    <>
      <h2>Example</h2>
      <div className="block-content">
        <PlaceholderItem property=""></PlaceholderItem>
        <PlaceholderItem property="bg-primary"></PlaceholderItem>
        <PlaceholderItem property="bg-secondary"></PlaceholderItem>
        <PlaceholderItem property="bg-success"></PlaceholderItem>
        <PlaceholderItem property="bg-dangers"></PlaceholderItem>
        <PlaceholderItem property="bg-info"></PlaceholderItem>
        <PlaceholderItem property="bg-light"></PlaceholderItem>
        <PlaceholderItem property="bg-dark"></PlaceholderItem>
      </div>
      <h2>Sizing</h2>
      <div className="block-content">
        <PlaceholderItem property="bg-primary placeholder-lg"></PlaceholderItem>
        <PlaceholderItem property="bg-primary placeholder"></PlaceholderItem>
        <PlaceholderItem property="bg-primary placeholder-sm"></PlaceholderItem>
        <PlaceholderItem property="bg-primary placeholder-xs"></PlaceholderItem>
      </div>
      <h2>Animation</h2>
      <div className="block-content">
        <p className="placeholder-glow">
          <PlaceholderItem property="bg-dark"></PlaceholderItem>
        </p>
      </div>
    </>
  );
}
