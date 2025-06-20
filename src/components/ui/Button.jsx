// components/ui/Button.js
import React from "react";
import styled, { css } from "styled-components";

// 🎨 Variants styling
const variantStyles = {
  default: css`
    background-color: #3b82f6; /* primary */
    color: white;
    &:hover {
      background-color: #2563eb; /* primary/90 */
    }
  `,
  destructive: css`
    background-color: #ef4444;
    color: white;
    &:hover {
      background-color: #dc2626;
    }
  `,
  outline: css`
    border: 1px solid #d1d5db; /* border-input */
    background-color: white;
    &:hover {
      background-color: #f1f5f9;
      color: #111827;
    }
  `,
  secondary: css`
    background-color: #e5e7eb;
    color: #111827;
    &:hover {
      background-color: #d1d5db;
    }
  `,
  ghost: css`
    background: transparent;
    &:hover {
      background-color: #f1f5f9;
      color: #111827;
    }
  `,
  link: css`
    background: transparent;
    color: #3b82f6;
    text-decoration: underline;
    text-underline-offset: 4px;
    &:hover {
      text-decoration: underline;
    }
  `,
};

// 📐 Size styling
const sizeStyles = {
  default: css`
    height: 2.5rem;
    padding: 0.5rem 1rem;
  `,
  sm: css`
    height: 2.25rem;
    padding: 0.5rem 0.75rem;
  `,
  lg: css`
    height: 2.75rem;
    padding: 0.5rem 2rem;
  `,
  icon: css`
    height: 2.5rem;
    width: 2.5rem;
    padding: 0;
  `,
};

// ✅ Styled component
const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 0.875rem;
  font-weight: 500;
  border-radius: 0.375rem;
  transition: background-color 0.2s;
  outline: none;
  border: none;

  &:focus-visible {
    box-shadow: 0 0 0 2px #3b82f6;
  }

  &:disabled {
    opacity: 0.5;
    pointer-events: none;
  }

  ${({ variant }) => variantStyles[variant || "default"]}
  ${({ size }) => sizeStyles[size || "default"]}
`;

// 🔘 React component
const Button = React.forwardRef(
  (
    {
      className,
      variant = "default",
      size = "default",
      asChild = false,
      ...props
    },
    ref
  ) => {
    const Component = asChild ? "span" : StyledButton;
    return (
      <Component
        ref={ref}
        variant={variant}
        size={size}
        className={className}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
