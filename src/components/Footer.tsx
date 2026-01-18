import { socialLinks } from "../data";

const Footer = () => {
  return (
    <footer className="border-t border-zinc-800/50 py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <a href="/" className="font-mono text-xl font-bold text-white">
            Victor<span className="text-emerald-500">.</span>
          </a>

          <div className="flex gap-4">
            {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-zinc-800 p-2 text-zinc-400 transition-all hover:border-emerald-500/50 hover:text-emerald-400"
                >
                  <link.icon className="h-4 w-4" />
                </a>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center gap-2 text-center text-sm text-zinc-500">
          <p>© {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
