import {
  MouseEvent,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

export default function Draggable({
  children,
  className = "",
  enabled = true,
}: {
  children: ReactNode;
  className?: string;
  enabled?: boolean;
}) {
  const [dragging, setDragging] = useState(false);
  const [bounds, setBounds] = useState({ x: 0, y: 0 });
  const ref = useRef(null);

  const onMouseMove = useCallback((evt: globalThis.MouseEvent) => {
    // setBounds({ x: evt.pageX, y: evt.pageY });
    if (ref.current) {
      ref.current.style.transform = `translate(${evt.pageX}px, ${evt.pageY}px)`;
    }

    evt.stopPropagation();
    evt.preventDefault();
  }, []);

  const onMouseUp = useCallback(
    (evt: globalThis.MouseEvent) => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
      evt.stopPropagation();
      evt.preventDefault();
    },
    [onMouseMove]
  );

  const onMouseDown = useCallback(
    (evt: MouseEvent) => {
      if (enabled) {
        console.log("Mouse Down enabled");

        setDragging(true);
        setBounds({ x: evt.pageX, y: evt.pageY });

        document.addEventListener("mousemove", onMouseMove);
        document.addEventListener("mouseup", onMouseUp);

        evt.stopPropagation();
        evt.preventDefault();
      }
    },
    [enabled, onMouseMove, onMouseUp]
  );

  // useEffect(() => {
  //   if (enabled) {
  //   }
  // }, [enabled]);

  return (
    <div className={className} ref={ref} onMouseDown={onMouseDown}>
      {children}
    </div>
  );
}
