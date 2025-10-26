import { AnimatedCounter } from './AnimatedCounter';

interface StatCardProps {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  delay?: number;
}

export function StatCard({ value, suffix = '', prefix = '', label, delay = 0 }: StatCardProps) {
  return (
    <div className="text-center">
      <div className="text-4xl md:text-5xl lg:text-6xl text-accent mb-2">
        <AnimatedCounter end={value} suffix={suffix} prefix={prefix} />
      </div>
      <p className="text-white/80 uppercase tracking-widest text-sm">{label}</p>
    </div>
  );
}
