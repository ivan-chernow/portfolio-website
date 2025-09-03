"use client";
import { useState } from "react";
import Image from "next/image";

export default function ProjectScreenshot({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);

  return (
    <>
      <div
        className="w-full max-w-[900px] h-[600px] overflow-y-auto rounded-lg border mb-8 cursor-zoom-in bg-white"
        onClick={handleOpen}
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
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="max-h-[90vh] max-w-[95vw] w-full rounded-lg bg-white p-2 overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="min-w-[600px]">
              <Image
                src={src}
                alt={alt}
                width={1400}
                height={3200}
                style={{ width: "130%", height: "auto", borderRadius: "8px", cursor: "zoom-out" }}
                onClick={() => setOpen(false)}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
