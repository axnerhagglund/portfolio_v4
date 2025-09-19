// components/WaveSeparator.tsx
type Props = {
  topColor?: string;     // färgen ovanför vågen
  bottomColor?: string;  // färgen under vågen
  className?: string;    // extra klasser om du vill
};

export default function Wave({
  topColor = "#112D29",
  bottomColor = "#0B1A18",
  className = "",
}: Props) {
  return (
    <svg
      viewBox="0 0 1440 120"
      preserveAspectRatio="none"
      className={`w-full h-[90px] ${className}`}
      aria-hidden="true"
    >
      
      <rect x="0" y="0" width="1440" height="120" fill={topColor} />
      
      <path
        d="M0,60 C80,100 160,100 240,60 C320,20 400,20 480,60 C560,100 640,100 720,60 C800,20 880,20 960,60 C1040,100 1120,100 1200,60 C1280,20 1360,20 1440,60 L1440,120 L0,120 Z"
        fill={bottomColor}
      />
    </svg>
  );
}