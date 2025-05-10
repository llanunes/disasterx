import * as React from "react";
import { Slot } from "@radix-ui/react-slot";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
  size?: "default" | "sm" | "lg" | "icon";
}

const variantStyles: Record<string, React.CSSProperties> = {
  default: {
    backgroundColor: "#3b82f6",
    color: "#fff",
    border: "none",
  },
  destructive: {
    backgroundColor: "#ef4444",
    color: "#fff",
  },
  outline: {
    border: "1px solid #ccc",
    backgroundColor: "#fff",
    color: "#333",
  },
  secondary: {
    backgroundColor: "#e5e7eb",
    color: "#111827",
  },
  ghost: {
    backgroundColor: "transparent",
    color: "#333",
  },
  link: {
    backgroundColor: "transparent",
    color: "#3b82f6",
    textDecoration: "underline",
  },
};

const sizeStyles: Record<string, React.CSSProperties> = {
  default: {
    height: "40px",
    padding: "0 16px",
    fontSize: "14px",
  },
  sm: {
    height: "36px",
    padding: "0 12px",
    fontSize: "13px",
  },
  lg: {
    height: "44px",
    padding: "0 24px",
    fontSize: "16px",
  },
  icon: {
    height: "40px",
    width: "40px",
    padding: 0,
  },
};

const baseStyle: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "0.5rem",
  borderRadius: "8px",
  fontWeight: 500,
  transition: "all 0.2s ease-in-out",
  cursor: "pointer",
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { asChild = false, variant = "default", size = "default", style, ...props },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    const mergedStyle = {
      ...baseStyle,
      ...variantStyles[variant],
      ...sizeStyles[size],
      ...style,
    };

    return <Comp ref={ref} style={mergedStyle} {...props} />;
  }
);
Button.displayName = "Button";

export { Button };
