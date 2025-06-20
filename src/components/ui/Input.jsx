// components/ui/Input.js
import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  height: 2.5rem; /* h-10 */
  width: 100%;
  padding: 0.5rem 0.75rem; /* px-3 py-2 */
  font-size: 0.875rem; /* text-sm */
  border: 1px solid #d1d5db; /* border-input */
  border-radius: 0.375rem; /* rounded-md */
  background-color: white; /* bg-background */
  color: #111827;
  outline: none;

  &::placeholder {
    color: #9ca3af; /* muted-foreground */
  }

  &:focus-visible {
    box-shadow: 0 0 0 2px #3b82f6; /* ring-ring */
    outline: none;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  &::file-selector-button {
    border: none;
    background: transparent;
    font-size: 0.875rem;
    font-weight: 500;
  }
`;

const Input = React.forwardRef(
  ({ className, type = "text", ...props }, ref) => {
    return (
      <StyledInput ref={ref} type={type} className={className} {...props} />
    );
  }
);
Input.displayName = "Input";

export { Input };
