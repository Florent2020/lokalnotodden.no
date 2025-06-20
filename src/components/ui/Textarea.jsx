// components/ui/Textarea.js
import React from "react";
import styled from "styled-components";

const StyledTextarea = styled.textarea`
  min-height: 80px;
  width: 100%;
  border: 1px solid #d1d5db; /* fallback for border-input */
  background-color: white; /* fallback for bg-background */
  padding: 0.5rem 0.75rem;
  font-size: 0.875rem;
  border-radius: 0.375rem;
  resize: vertical;

  &::placeholder {
    color: #9ca3af; /* muted-foreground */
  }

  &:focus-visible {
    outline: none;
    /* ring: none; */
    box-shadow: 0 0 0 2px #3b82f6; /* fallback for ring-ring */
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

const Textarea = React.forwardRef((props, ref) => {
  return <StyledTextarea ref={ref} {...props} />;
});
Textarea.displayName = "Textarea";

export { Textarea };
