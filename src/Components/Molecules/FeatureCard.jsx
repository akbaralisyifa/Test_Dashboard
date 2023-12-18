import React from 'react';

export default function FeatureCard(props) {
  const { title, percentage, amount } = props;
  return (
    <div>
      <h2 className="font-semibold text-base ">{title}s</h2>
      <p className="font-semibold text-xl">{percentage}</p>
      <p className="font-semibold text-sm text-slate-500">{amount}</p>
    </div>
  );
}
