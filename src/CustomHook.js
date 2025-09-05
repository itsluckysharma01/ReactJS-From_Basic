import { useState, useEffect } from "react";

// ✅ custom hook
function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
}

// ✅ using custom hook in component
function MyComponent() {
  const width = useWindowWidth();
  return <p>Window width is: {width}px</p>;
}
