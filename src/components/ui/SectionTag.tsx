export default function SectionTag({ children }: { children: string }) {
  return (
    <p className="text-xs font-semibold tracking-widest text-accent uppercase mb-3">
      {children}
    </p>
  );
}
