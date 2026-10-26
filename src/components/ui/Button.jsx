"use client";

const variants = {
  primary: "bg-[#FB7185] text-[#18181B]",
  secondary: "bg-[#27272A] text-[#FAFAFA]",
};

export default function Button({
  children,
  type = "button",
  variant = "primary",
  className = "",
  ...props
}) {
  return (
    <button
      {...props}
      type={type}
      className={`
        inline-flex min-h-10 shrink-0 items-center justify-center
        gap-2 rounded-2xl border-2 border-[#18181B] px-8 py-4
        text-sm font-semibold uppercase tracking-wide
        cursor-pointer transition-all duration-150

        shadow-[4px_4px_0_0_#52525B]

        hover:translate-x-[2px] hover:translate-y-[2px]
        hover:shadow-[2px_2px_0_0_#52525B]

        active:translate-x-[4px] active:translate-y-[4px]
        active:shadow-none

        focus-visible:outline-2
        focus-visible:outline-offset-4
        focus-visible:outline-[#FDA4AF]

        disabled:pointer-events-none disabled:opacity-50

        [&_svg]:size-4 [&_svg]:shrink-0

        ${variants[variant] ?? variants.primary}
        ${className}
      `}
    >
      {children}
    </button>
  );
}