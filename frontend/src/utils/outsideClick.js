import { useEffect, useRef } from "react";

export default function useOnClickOutsideRef(box, callback, initialValue = null) {
  const elementRef = useRef(initialValue);
  useEffect(() => {
    function handler(event) {
      if (box && !elementRef.current?.contains(event.target)) {
        callback();
      }
    }
    window.addEventListener("mouseup", handler);
    return () => window.removeEventListener("mouseup", handler);
  }, [callback, box]);
  return elementRef;
}
