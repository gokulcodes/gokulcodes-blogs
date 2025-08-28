import Image from "next/image";
import Link from "next/link";

const socials = [
  {
    id: 1,
    name: "Twitter",
    url: "https://twitter.com/gokul_varadan",
    logo: "/twitter.png",
  },
  {
    id: 2,
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/gokulvaradan",
    logo: "/linkedin.png",
  },
  {
    id: 3,
    name: "GitHub",
    url: "https://github.com/gokulcodes",
    logo: "/github.png",
  },
];

export default function Header() {
  return (
    <header className="flex items-center py-4 pt-8 w-11/12 justify-between md:w-full border-b border-black/10 dark:border-white/10 text-white">
      <Link href="/" className="flex items-center gap-2">
        <Image
          src="/logo.svg"
          alt="Gblogs logo"
          className="h-10 dark:invert-0 invert"
          width={100}
          height={100}
          priority
        />
      </Link>
      <div className="flex gap-6">
        {socials.map((social) => {
          return (
            <a
              key={social.id}
              target="_blank"
              className="opacity-60 hover:opacity-100"
              href={social.url}
            >
              <Image
                src={social.logo}
                alt={`${social.name} logo`}
                className="h-5 w-5 dark:invert"
                width={24}
                height={24}
              />
            </a>
          );
        })}
      </div>
    </header>
  );
}
