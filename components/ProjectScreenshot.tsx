"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function ProjectScreenshot({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <>
      <div
        className="w-full max-w-[900px] h-[600px] overflow-y-auto rounded-lg border mb-8 cursor-zoom-in bg-white"
        onClick={() => setOpen(true)}
        title="Нажмите для увеличения"
      >
        <Image
          src={src}
          alt={alt}
          width={900}
          height={2000}
          style={{ objectFit: "contain", width: "100%" }}
        />
      </div>
      {open && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setOpen(false)}
          style={{ cursor: "zoom-out" }}
        >
          <Image
            src={src}
            alt={alt}
            width={1200}
            height={3000}
            style={{ maxHeight: "90vh", width: "auto", borderRadius: "12px" }}
          />
        </div>
      )}
    </>
  );
}
