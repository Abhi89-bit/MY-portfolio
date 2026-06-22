interface SectionTitleProps {
  badge: string;
  title: string;
  subtitle: string;
  center?: boolean;
}

export default function SectionTitle({ badge, title, subtitle, center = true }: SectionTitleProps) {
  return (
    <div className={`space-y-3 mb-12 flex flex-col ${center ? "items-center text-center" : "items-start text-left"}`}>
      {/* Small glowing tag */}
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-primary/10 border border-brand-primary/25 text-brand-primary text-xs font-mono font-semibold uppercase tracking-widest shadow-[0_0_15px_var(--theme-bg-glow)]">
        <span className="w-1.5 h-1.5 rounded-full bg-brand-primary animate-pulse" />
        {badge}
      </div>

      {/* Main heading */}
      <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
        {title}
      </h2>

      {/* Subtitle */}
      <p className="text-base text-slate-400 max-w-2xl leading-relaxed">
        {subtitle}
      </p>

      {/* Futuristic accent line */}
      <div className="flex items-center gap-1.5 pt-2">
        <div className="h-[2px] w-8 bg-gradient-to-r from-transparent to-brand-primary rounded-full" />
        <div className="h-1.5 w-1.5 rounded-full bg-brand-primary shadow-[0_0_8px_var(--theme-primary)]" />
        <div className="h-[2px] w-8 bg-gradient-to-l from-transparent to-brand-primary rounded-full" />
      </div>
    </div>
  );
}
