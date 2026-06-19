import { useRef, useState, useEffect, useCallback, type PointerEvent as ReactPointerEvent, type KeyboardEvent as ReactKeyboardEvent } from 'react';

interface Props {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
  beforeLabel: string;
  afterLabel: string;
  handleLabel: string;
  /** Localized "sample image" badge; omit once real photos are in. */
  sampleLabel?: string;
  initial?: number;
  /** True for the LCP hero instance (eager load); false lazy-loads. */
  priority?: boolean;
  className?: string;
}

const clamp = (n: number) => Math.min(100, Math.max(0, n));

export default function BeforeAfter({
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
  beforeLabel,
  afterLabel,
  handleLabel,
  sampleLabel,
  initial = 50,
  priority = false,
  className = '',
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(clamp(initial));
  const [dragging, setDragging] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  const setFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    setPos(clamp(((clientX - rect.left) / rect.width) * 100));
  }, []);

  const onPointerDown = (e: ReactPointerEvent) => {
    (e.currentTarget as HTMLElement).setPointerCapture?.(e.pointerId);
    setDragging(true);
    setFromClientX(e.clientX);
  };
  const onPointerMove = (e: ReactPointerEvent) => {
    if (!dragging) return;
    setFromClientX(e.clientX);
  };
  const endDrag = () => setDragging(false);

  const onKeyDown = (e: ReactKeyboardEvent) => {
    const step = e.shiftKey ? 10 : 2;
    if (e.key === 'ArrowLeft') { setPos((p) => clamp(p - step)); e.preventDefault(); }
    else if (e.key === 'ArrowRight') { setPos((p) => clamp(p + step)); e.preventDefault(); }
    else if (e.key === 'Home') { setPos(0); e.preventDefault(); }
    else if (e.key === 'End') { setPos(100); e.preventDefault(); }
  };

  const ease = dragging || reduced ? 'none' : 'clip-path 140ms cubic-bezier(0.22,1,0.36,1), left 140ms cubic-bezier(0.22,1,0.36,1)';

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden rounded-xl bg-slate select-none ${className}`}
      style={{ aspectRatio: '4 / 3' }}
    >
      {/* AFTER = base layer (right of the handle) */}
      <img
        src={afterSrc}
        alt={afterAlt}
        draggable={false}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* BEFORE = clipped to the left of the handle */}
      <img
        src={beforeSrc}
        alt={beforeAlt}
        draggable={false}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : undefined}
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)`, transition: ease }}
      />

      {/* Corner labels */}
      <span className="pointer-events-none absolute left-3 top-3 rounded-md bg-slate/80 px-2.5 py-1 font-mono text-xs font-medium uppercase tracking-wider text-white/95 backdrop-blur-sm">
        {beforeLabel}
      </span>
      <span className="pointer-events-none absolute right-3 top-3 rounded-md bg-slate/80 px-2.5 py-1 font-mono text-xs font-medium uppercase tracking-wider text-white/95 backdrop-blur-sm">
        {afterLabel}
      </span>
      {sampleLabel && (
        <span className="pointer-events-none absolute bottom-3 left-3 rounded-md border border-white/25 bg-slate/70 px-2.5 py-1 font-mono text-[0.68rem] uppercase tracking-wider text-white/85 backdrop-blur-sm">
          {sampleLabel}
        </span>
      )}

      {/* Divider + handle (full-height grab strip; only this captures the gesture) */}
      <div
        role="slider"
        tabIndex={0}
        aria-label={handleLabel}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(pos)}
        aria-orientation="horizontal"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onLostPointerCapture={endDrag}
        onKeyDown={onKeyDown}
        className="absolute top-0 z-10 flex h-full w-11 -translate-x-1/2 cursor-ew-resize touch-none items-center justify-center focus-visible:outline-none"
        style={{ left: `${pos}%`, transition: ease }}
      >
        <span className="absolute inset-y-0 left-1/2 w-0.5 -translate-x-1/2 bg-white/90" aria-hidden="true"></span>
        <span className="relative grid h-11 w-11 place-items-center rounded-full bg-accent text-white shadow-lg ring-2 ring-white/80 transition-transform duration-200 ease-out group-active:scale-95">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M10 8 6 12l4 4" />
            <path d="M14 8l4 4-4 4" />
          </svg>
        </span>
      </div>
    </div>
  );
}
