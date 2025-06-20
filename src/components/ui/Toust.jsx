import React from "react";
import styled, { css, keyframes } from "styled-components";
import { X } from "lucide-react";

// ========== VARIANTS ==========
const variants = {
  default: css`
    background-color: white;
    border: 1px solid #e5e7eb;
    color: #111827;
  `,
  destructive: css`
    background-color: #f87171;
    color: white;
    border: 1px solid #ef4444;
  `,
};

// ========== ANIMATIONS ==========
const slideIn = keyframes`
  from { transform: translateY(100%); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`;

const slideOut = keyframes`
  from { transform: translateX(0); opacity: 1; }
  to { transform: translateX(100%); opacity: 0; }
`;

// ========== STYLED COMPONENTS ==========
export const ToastProvider = ({ children }) => <>{children}</>;

export const ToastViewport = styled.div`
  position: fixed;
  bottom: 16px;
  right: 16px;
  max-width: 420px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  z-index: 9999;
`;

export const ToastWrapper = styled.div`
  ${({ variant = "default" }) => variants[variant] || variants.default};
  border-radius: 8px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
  padding: 16px 24px 16px 16px;
  display: flex;
  align-items: start;
  justify-content: space-between;
  animation: ${slideIn} 0.3s ease forwards;
  position: relative;
  overflow: hidden;
  min-width: 280px;

  &[data-state="closed"] {
    animation: ${slideOut} 0.3s ease forwards;
  }
`;

export const ToastTitle = styled.div`
  font-weight: bold;
  font-size: 0.95rem;
  margin-bottom: 4px;
`;

export const ToastDescription = styled.div`
  font-size: 0.875rem;
  opacity: 0.9;
`;

export const ToastClose = styled.button`
  background: transparent;
  border: none;
  color: inherit;
  cursor: pointer;
  position: absolute;
  top: 8px;
  right: 8px;

  svg {
    width: 16px;
    height: 16px;
  }

  &:hover {
    opacity: 0.75;
  }
`;

export const ToastAction = styled.button`
  background-color: transparent;
  border: 1px solid currentColor;
  padding: 4px 10px;
  font-size: 0.8rem;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 12px;

  &:hover {
    opacity: 0.85;
  }
`;

export const Toast = React.forwardRef(
  (
    { title, description, children, variant = "default", onClose, ...props },
    ref
  ) => (
    <ToastWrapper ref={ref} variant={variant} {...props}>
      <div>
        {title && <ToastTitle>{title}</ToastTitle>}
        {description && <ToastDescription>{description}</ToastDescription>}
        {children}
      </div>
      <ToastClose onClick={onClose}>
        <X />
      </ToastClose>
    </ToastWrapper>
  )
);
