import Image from "next/image";

export default function Header() {
  return (
    <header className="flex items-start justify-start py-4 mb-4 w-11/12 md:w-full text-white">
      <Image
        src="/logo.svg"
        alt="Gblogs logo"
        className="h-10"
        width={100}
        height={100}
        priority
      />
    </header>
  );
}
