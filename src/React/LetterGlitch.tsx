import { useRef, useEffect } from "react";

const NucleotideGlitch = ({
  glitchColors = ["#5e4491", "#A476FF", "#241a38"],
  glitchSpeed = 33,
  centerVignette = false,
  outerVignette = false,
  smooth = true,
}: {
  glitchColors: string[];
  glitchSpeed: number;
  centerVignette: boolean;
  outerVignette: boolean;
  smooth: boolean;
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationRef = useRef<number | null>(null);
  const nucleotides = useRef<
    {
      char: string;
      color: string;
      targetColor: string;
      colorProgress: number;
    }[]
  >([]);
  const grid = useRef({ columns: 0, rows: 0 });
  const context = useRef<CanvasRenderingContext2D | null>(null);
  const lastGlitchTime = useRef(Date.now());

  const fontSize = 16;
  const charWidth = 10;
  const charHeight = 20;

  // Update this array to include the DNA nucleotides only (A, T, C, G)
  const nucleotidesArray = ["A", "T", "C", "G"];

  const getRandomChar = () => {
    // Return random nucleotide
    return nucleotidesArray[Math.floor(Math.random() * nucleotidesArray.length)];
  };

  const getRandomColor = () => {
    return glitchColors[Math.floor(Math.random() * glitchColors.length)];
  };

  const hexToRgb = (hex: string) => {
    const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, (m, r, g, b) => {
      return r + r + g + g + b + b;
    });

    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
        }
      : null;
  };

  const interpolateColor = (
    start: { r: number; g: number; b: number },
    end: { r: number; g: number; b: number },
    factor: number,
  ) => {
    const result = {
      r: Math.round(start.r + (end.r - start.r) * factor),
      g: Math.round(start.g + (end.g - start.g) * factor),
      b: Math.round(start.b + (end.b - start.b) * factor),
    };
    return `rgb(${result.r}, ${result.g}, ${result.b})`;
  };

  const calculateGrid = (width: number, height: number) => {
    const columns = Math.ceil(width / charWidth);
    const rows = Math.ceil(height / charHeight);
    return { columns, rows };
  };

  const initializeNucleotides = (columns: number, rows: number) => {
    grid.current = { columns, rows };
    const totalNucleotides = columns * rows;
    nucleotides.current = Array.from({ length: totalNucleotides }, () => ({
      char: getRandomChar(),
      color: getRandomColor(),
      targetColor: getRandomColor(),
      colorProgress: 1,
    }));
  };

  const resizeCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const parent = canvas.parentElement;
    if (!parent) return;

    const dpr = window.devicePixelRatio || 1;
    const rect = parent.getBoundingClientRect();

    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;

    canvas.style.width = `${rect.width}px`;
    canvas.style.height = `${rect.height}px`;

    if (context.current) {
      context.current.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    const { columns, rows } = calculateGrid(rect.width, rect.height);
    initializeNucleotides(columns, rows);
    drawNucleotides();
  };

  const drawNucleotides = () => {
    if (!context.current || nucleotides.current.length === 0) return;
    const ctx = context.current;
    const { width, height } = canvasRef.current!.getBoundingClientRect();
    ctx.clearRect(0, 0, width, height);
    ctx.font = `${fontSize}px monospace`;
    ctx.textBaseline = "top";

    nucleotides.current.forEach((nucleotide, index) => {
      const x = (index % grid.current.columns) * charWidth;
      const y = Math.floor(index / grid.current.columns) * charHeight;
      ctx.fillStyle = nucleotide.color;
      ctx.fillText(nucleotide.char, x, y);
    });
  };

  const updateNucleotides = () => {
    if (!nucleotides.current || nucleotides.current.length === 0) return;

    const updateCount = Math.max(1, Math.floor(nucleotides.current.length * 0.05));

    for (let i = 0; i < updateCount; i++) {
      const index = Math.floor(Math.random() * nucleotides.current.length);
      if (!nucleotides.current[index]) continue;

      nucleotides.current[index].char = getRandomChar();
      nucleotides.current[index].targetColor = getRandomColor();

      if (!smooth) {
        nucleotides.current[index].color = nucleotides.current[index].targetColor;
        nucleotides.current[index].colorProgress = 1;
      } else {
        nucleotides.current[index].colorProgress = 0;
      }
    }
  };

  const handleSmoothTransitions = () => {
    let needsRedraw = false;
    nucleotides.current.forEach((nucleotide) => {
      if (nucleotide.colorProgress < 1) {
        nucleotide.colorProgress += 0.05;
        if (nucleotide.colorProgress > 1) nucleotide.colorProgress = 1;

        const startRgb = hexToRgb(nucleotide.color);
        const endRgb = hexToRgb(nucleotide.targetColor);
        if (startRgb && endRgb) {
          nucleotide.color = interpolateColor(
            startRgb,
            endRgb,
            nucleotide.colorProgress,
          );
          needsRedraw = true;
        }
      }
    });

    if (needsRedraw) {
      drawNucleotides();
    }
  };

  const animate = () => {
    const now = Date.now();
    if (now - lastGlitchTime.current >= glitchSpeed) {
      updateNucleotides();
      drawNucleotides();
      lastGlitchTime.current = now;
    }

    if (smooth) {
      handleSmoothTransitions();
    }

    animationRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    context.current = canvas.getContext("2d");
    resizeCanvas();
    animate();

    let resizeTimeout: NodeJS.Timeout;

    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        cancelAnimationFrame(animationRef.current as number);
        resizeCanvas();
        animate();
      }, 100);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationRef.current!);
      window.removeEventListener("resize", handleResize);
    };
  }, [glitchSpeed, smooth]);

  return (
    <div className="relative w-full h-full bg-[#101010] overflow-hidden">
      <canvas ref={canvasRef} className="block w-full h-full" />
      {outerVignette && (
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none bg-[radial-gradient(circle,_rgba(16,16,16,0)_60%,_rgba(16,16,16,1)_100%)]"></div>
      )}
      {centerVignette && (
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none bg-[radial-gradient(circle,_rgba(0,0,0,0.8)_0%,_rgba(0,0,0,0)_60%)]"></div>
      )}
    </div>
  );
};

export default NucleotideGlitch;
