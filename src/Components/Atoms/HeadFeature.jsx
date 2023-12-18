import React from 'react';

export default function HeadFeature({ children }) {
  return (
    <>
      <h1 className="text-2xl font-semibold">{children}</h1>
    </>
  );
}
