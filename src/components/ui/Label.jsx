// components/ui/Label.js
import React from "react";
import styled from "styled-components";

const StyledLabel = styled.label`
  font-size: 0.875rem; /* text-sm */
  font-weight: 500; /* font-medium */
  line-height: 1.25rem; /* leading-none */

  /* Disabled styles via 'peer' emulation must be handled explicitly */
  &[data-disabled="true"] {
    cursor: not-allowed;
    opacity: 0.7;
  }
`;

const Label = React.forwardRef(({ className, ...props }, ref) => {
  return <StyledLabel ref={ref} className={className} {...props} />;
});
Label.displayName = "Label";

export { Label };
