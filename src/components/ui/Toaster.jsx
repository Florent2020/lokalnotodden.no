import React from "react";
import styled, { keyframes } from "styled-components";
import { useToast } from "./use-toast";

// Animation
const slideInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const ToastViewport = styled.div`
  position: fixed;
  bottom: 24px;
  right: 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  z-index: 9999;
`;

// Individual toast wrapper
const ToastWrapper = styled.div`
  background-color: #1f2937;
  color: white;
  padding: 16px 20px;
  border-radius: 8px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
  min-width: 280px;
  max-width: 350px;
  display: flex;
  justify-content: space-between;
  align-items: start;
  gap: 12px;
  animation: ${slideInUp} 0.3s ease;
`;

// Toast title
const ToastTitle = styled.div`
  font-weight: bold;
  font-size: 1rem;
`;

// Toast description
const ToastDescription = styled.div`
  font-size: 0.875rem;
  margin-top: 4px;
  color: #d1d5db;
`;

// Toast close button
const ToastClose = styled.button`
  background: transparent;
  border: none;
  color: white;
  font-size: 1.2rem;
  cursor: pointer;
  line-height: 1;
  margin-left: auto;
`;

const ToastContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export function Toaster() {
  const { toasts } = useToast();

  return (
    <ToastViewport>
      {toasts.map(({ id, title, description, dismiss, action }) => (
        <ToastWrapper key={id}>
          <ToastContent>
            {title && <ToastTitle>{title}</ToastTitle>}
            {description && <ToastDescription>{description}</ToastDescription>}
          </ToastContent>
          {action}
          <ToastClose onClick={dismiss}>&times;</ToastClose>
        </ToastWrapper>
      ))}
    </ToastViewport>
  );
}
