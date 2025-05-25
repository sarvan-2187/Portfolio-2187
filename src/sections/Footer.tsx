import ArrowIcon from '@/assets/icons/arrow-up-right.svg';

const FooterLinks = [
  {
    title: 'Youtube',
    href: 'https://youtube.com/@sarvankumarnagarampalli?si=f3GT89uzimwiKzpM',
  },
  {
    title: 'Linkedin',
    href: 'https://www.linkedin.com/in/nagarampalli-sarvan-kumar/',
  },
  {
    title: 'Instagram',
    href: 'https://www.instagram.com/sarvan._.21/',
  },
  {
    title: 'Github',
    href: 'https://github.com/sarvan-2187',
  },
];

export const Footer = () => {
  return (
    <footer className="relative z-0 overflow-x-clip">
      <div className="absolute h-[180px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/50 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"></div>
      <div className="container">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center">
          <div>
            <div className="text-white/50">&copy; 2025. All Rights Reserved</div>
          </div>
          <nav className="flex flex-col md:flex-row z-10 gap-8 mt-8 md:mt-0">
            {FooterLinks.map((link) => (
              <a
                href={link.href}
                key={link.title}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-emerald-300 transition duration-500 cursor-pointer"
              >
                <span className="font-semibold">{link.title}</span>
                <ArrowIcon className="size-4" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
