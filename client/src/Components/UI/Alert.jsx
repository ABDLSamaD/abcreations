"use client";

import { CheckCircle, AlertCircle, X } from "lucide-react";
import { cn } from "../../lib/utils";

export function Alert({ type, message, onClose }) {
  const alertStyles = {
    success: "bg-green-500/20 border-green-500/30 text-green-400",
    error: "bg-red-500/20 border-red-500/30 text-red-400",
    warning: "bg-yellow-500/20 border-yellow-500/30 text-yellow-400",
    info: "bg-blue-500/20 border-blue-500/30 text-blue-400",
  };

  const icons = {
    success: CheckCircle,
    error: AlertCircle,
    warning: AlertCircle,
    info: AlertCircle,
  };

  const Icon = icons[type] || AlertCircle;

  return (
    <div
      className={cn(
        "flex items-center space-x-3 p-4 rounded-2xl border backdrop-blur-xl shadow-lg min-w-[300px] max-w-md",
        alertStyles[type]
      )}
    >
      <Icon className="w-5 h-5 flex-shrink-0" />
      <p className="flex-1 text-sm font-medium">{message}</p>
      {onClose && (
        <button
          onClick={onClose}
          className="flex-shrink-0 hover:opacity-70 transition-opacity"
        >
          <X className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}
