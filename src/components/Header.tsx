import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center py-4 pt-8 w-11/12 justify-between md:w-full border-b border-white/10 text-white">
      <Link href="/" className="flex items-center gap-2">
        <Image
          src="/logo.svg"
          alt="Gblogs logo"
          className="h-10"
          width={100}
          height={100}
          priority
        />
      </Link>
      <div className="flex gap-4">
        <a
          target="_blank"
          className="opacity-80 hover:opacity-100"
          href="https://github.com/gokulcodes"
        >
          <Image
            src="/github.png"
            alt="GitHub logo"
            className="h-4 w-4 dark:invert"
            width={24}
            height={24}
          />
        </a>
        <a
          target="_blank"
          className="opacity-80 hover:opacity-100"
          href="https://twitter.com/gokul_varadan"
        >
          <Image
            src="/twitter.png"
            alt="Twitter logo"
            className="h-4 w-4 dark:invert"
            width={24}
            height={24}
          />
        </a>
        <a
          target="_blank"
          className="opacity-80 hover:opacity-100"
          href="https://www.linkedin.com/in/gokulvaradan/"
        >
          <Image
            src="/linkedin.png"
            alt="LinkedIn logo"
            className="h-4 w-4 dark:invert"
            width={24}
            height={24}
          />
        </a>
      </div>
    </header>
  );
}
