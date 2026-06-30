// scroll.jsx — drag-to-scroll + auto-scroll hooks for horizontal rails.
const { useRef: useRr, useEffect: useEr } = React;

// pointer drag to scroll a horizontal container; didDrag() tells click handlers to bail.
function useDragScroll(ref) {
  const st = useRr({ down: false, x: 0, left: 0, moved: 0 });
  const onPointerDown = (e) => {
    const el = ref.current;
    if (!el) return;
    st.current = { down: true, x: e.clientX, left: el.scrollLeft, moved: 0 };
    el.classList.add("grabbing");
    const move = (ev) => {
      const s = st.current;
      if (!s.down) return;
      s.moved += Math.abs(ev.movementX || 0);
      el.scrollLeft = s.left - (ev.clientX - s.x);
    };
    const up = () => {
      st.current.down = false;
      el.classList.remove("grabbing");
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
    };
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);
  };
  return { onPointerDown, didDrag: () => st.current.moved > 6 };
}

// slow continuous auto-scroll; keeps moving even on hover, pauses only while the
// user is actively dragging (rail has class "grabbing"). Time-based so speed is
// consistent across framerates. Expects a duplicated track (content twice) so it
// loops seamlessly at the halfway point. speed = px per second.
// NOTE: browsers snap scrollLeft to integers, so a sub-pixel-per-frame increment
// would round to 0 and never move. We keep our own float position and only let
// the browser store the rounded value — the fraction lives in `pos`.
function useAutoScroll(ref, active, speed) {
  useEr(() => {
    const el = ref.current;
    if (!el || !active) return;
    const pxPerSec = speed || 26;
    let raf;
    let last = null;
    let pos = el.scrollLeft;
    let lastSet = Math.round(pos);
    const step = (now) => {
      if (last == null) last = now;
      const dt = Math.min((now - last) / 1000, 0.05); // clamp big gaps (tab blur)
      last = now;
      // If something else moved the rail (drag, wheel, arrow buttons), adopt it.
      if (Math.abs(el.scrollLeft - lastSet) > 1) pos = el.scrollLeft;
      if (!el.classList.contains("grabbing")) {
        const half = el.scrollWidth / 2;
        pos += pxPerSec * dt;
        if (half > 0 && pos >= half) pos -= half;
        el.scrollLeft = pos;
        lastSet = Math.round(el.scrollLeft);
      } else {
        pos = el.scrollLeft;
        lastSet = Math.round(pos);
      }
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [active]);
}

Object.assign(window, { useDragScroll, useAutoScroll });
