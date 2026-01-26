type InlineSVGProps = {
  svgContent: string;
  className?: string;
  width?: number;
  height?: number;
};

export default function InlineSVG({
  svgContent,
  className,
  width,
  height,
}: InlineSVGProps) {
  if (!svgContent) return null;

  return (
    <div
      className={className}
      style={{ width, height }}
      dangerouslySetInnerHTML={{ __html: svgContent }}
    />
  );
}

