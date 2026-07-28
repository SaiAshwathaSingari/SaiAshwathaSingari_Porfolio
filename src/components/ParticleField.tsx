import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  z: number; // depth 0..1 — drives size, opacity, and parallax strength
  vx: number;
  vy: number;
}

// Lightweight 2D-canvas replacement for the old WebGL particle field.
// Drifting green glow dots with gentle cursor parallax — visually the same,
// but with no three.js download and near-zero GPU cost.
export default function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let raf = 0;

    // Pre-rendered glow sprite: blitting a cached image is far cheaper than
    // building a radial gradient per particle per frame.
    const SPRITE = 64;
    const sprite = document.createElement("canvas");
    sprite.width = SPRITE;
    sprite.height = SPRITE;
    const sctx = sprite.getContext("2d")!;
    const grad = sctx.createRadialGradient(
      SPRITE / 2, SPRITE / 2, 0,
      SPRITE / 2, SPRITE / 2, SPRITE / 2
    );
    grad.addColorStop(0, "rgba(124,255,79,0.9)");
    grad.addColorStop(0.35, "rgba(124,255,79,0.28)");
    grad.addColorStop(1, "rgba(124,255,79,0)");
    sctx.fillStyle = grad;
    sctx.fillRect(0, 0, SPRITE, SPRITE);

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    const rand = (a: number, b: number) => a + Math.random() * (b - a);
    const COUNT = 140;
    const particles: Particle[] = Array.from({ length: COUNT }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      z: Math.random(),
      vx: rand(-7, 7),
      vy: rand(-5, 5),
    }));

    const target = { x: 0, y: 0 };
    const parallax = { x: 0, y: 0 };
    const onMove = (e: MouseEvent) => {
      target.x = (e.clientX / width - 0.5) * 2;
      target.y = (e.clientY / height - 0.5) * 2;
    };

    let last = performance.now();
    const frame = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;

      parallax.x += (target.x - parallax.x) * 0.03;
      parallax.y += (target.y - parallax.y) * 0.03;

      ctx.clearRect(0, 0, width, height);

      for (const p of particles) {
        p.x += p.vx * dt;
        p.y += p.vy * dt;
        if (p.x < -20) p.x = width + 20;
        else if (p.x > width + 20) p.x = -20;
        if (p.y < -20) p.y = height + 20;
        else if (p.y > height + 20) p.y = -20;

        const depth = 0.35 + p.z * 0.65;
        const size = 3 + p.z * 6;
        const px = p.x + parallax.x * 28 * depth;
        const py = p.y + parallax.y * 20 * depth;

        ctx.globalAlpha = 0.25 + p.z * 0.55;
        ctx.drawImage(sprite, px - size / 2, py - size / 2, size, size);
      }
      ctx.globalAlpha = 1;

      raf = requestAnimationFrame(frame);
    };

    raf = requestAnimationFrame(frame);
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMove, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return <canvas ref={canvasRef} className="h-full w-full" aria-hidden="true" />;
}
