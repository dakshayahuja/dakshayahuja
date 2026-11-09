// Optional feedback only. Navigation and email work with JavaScript disabled.
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
const finePointer = matchMedia('(hover: hover) and (pointer: fine)');
for (const surface of document.querySelectorAll('.profile-terminal')) {
  let frame = 0;
  let pointer;
  surface.addEventListener('pointermove', event => {
    if (reducedMotion.matches || !finePointer.matches) return;
    pointer = { x: event.clientX, y: event.clientY };
    if (frame) return;
    frame = requestAnimationFrame(() => {
      const bounds = surface.getBoundingClientRect();
      surface.style.setProperty('--pointer-x', `${pointer.x - bounds.left}px`);
      surface.style.setProperty('--pointer-y', `${pointer.y - bounds.top}px`);
      frame = 0;
    });
  });
  surface.addEventListener('pointerleave', () => {
    cancelAnimationFrame(frame);
    frame = 0;
  });
}
for (const path of document.querySelectorAll('.route-flow')) path.setAttribute('pathLength', '100');
