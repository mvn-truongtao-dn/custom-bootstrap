import React, { useEffect, useState } from "react";
import TestTooltips from "../../components/Tooltips/TestTooltips";
import TooltipItem from "../../components/Tooltips/TooltipItem";

export default function Tooltips() {
  return (
    <div>
      <div className="block-content"></div>
      <h2>Example</h2>
      <div className="block-content flex flex-wrap-wrap gap-1">
        <TooltipItem placement="start"></TooltipItem>
        <TooltipItem placement="top"></TooltipItem>
        <TooltipItem placement="bottom"></TooltipItem>
        <TooltipItem placement="end"></TooltipItem>
      </div>
    </div>
  );
}
