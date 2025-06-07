export const TechIcon = ({ component }: { component: React.ElementType }) => {
  const Component = component;

  return (
    <>
      <Component className="size-10 fill-[url(#techicon-gradient)]" />
      <svg className="size-0 absolute">
        <linearGradient id="techicon-gradient" gradientTransform="rotate(45)">
          <stop offset="0%" stopColor="#10b981" />   {/* Emerald-500 */}
          <stop offset="50%" stopColor="#22d3ee" />  {/* Cyan-400 */}
          <stop offset="100%" stopColor="#0ea5e9" /> {/* Sky-500 */}
        </linearGradient>
      </svg>
    </>
  );
};
