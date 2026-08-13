/**
 * Frame-rate independent exponential smoothing.
 * Same feel at 60 Hz or 144 Hz — the game/UI industry standard for "follow".
 * Higher lambda = snappier (dot ~28, ring ~11, ambient ~8).
 */
export function damp(
  current: number,
  target: number,
  lambda: number,
  dt: number
) {
  return target + (current - target) * Math.exp(-lambda * dt);
}
