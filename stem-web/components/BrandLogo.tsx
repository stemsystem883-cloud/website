import Image from "next/image";

type BrandLogoProps = {
  size?: number;
  showName?: boolean;
  className?: string;
  nameClassName?: string;
};

export function BrandLogo({
  size = 36,
  showName = true,
  className = "",
  nameClassName = "text-xl font-bold text-deep-ink",
}: BrandLogoProps) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <Image
        src="/v1.png"
        alt="Stem logo"
        width={size}
        height={size}
        className="rounded-xl"
        priority
      />
      {showName ? <span className={nameClassName}>Stem</span> : null}
    </span>
  );
}