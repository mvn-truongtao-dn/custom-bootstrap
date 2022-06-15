import React from "react";
import ToastItem from "../ToastItem";

export default function ToastStacking() {
  const notification = [
    {
      time: "just now",
      description: "Heloo",
    },
    {
      time: "2 mins ago",
      description: "Heloo",
    },
  ];
  return (
    <div className="toast-container">
      {notification.map((item, index) => (
        <ToastItem item={item} key={index} id={index}></ToastItem>
      ))}
    </div>
  );
}
