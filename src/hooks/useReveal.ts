import { useEffect } from "react";

/** Adds scroll-reveal to all `.reveal` elements on the page. */
export function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal:not(.revealed)");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("revealed");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  });
}
