import { memo } from "react";

export const Small = memo(({ value }) => {
  console.log('Generate me');
  return (
    <small>{value}</small>
  )
})
