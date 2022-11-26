import GithubPNG from '../imgs/github-logo.png'
import Twitcon from "../imgs/twitter.png"
import Lkndncon from "../imgs/linkedin.png"
import Instacon from "../imgs/instagram.png"

const footerItems = [
  {
    href: "https://github.com/TREWSKII",
    src: GithubPNG,
    alt: "Github icon",
    text: "GitHub",
  },
  {
    href: "https://linkedin.com/TREWSKII70",
    src: Lkndncon,
    alt: "LI icon",
    text: "linkedIn",
  },
  {
    href: "https://instagram.com/TREW_who",
    src: Instacon,
    alt: "Insta icon",
    text: "Instagram",
  },
  {
    href: "https://twitter.com/TREW_who",
    src: Twitcon,
    alt: "twitter icon",
    text: "Twitter",
  },
];

function Footer() {
  return (
    <>
  
      <div className="inline-flex justify-center space-x-20 font-bold tracking-wide text-gray-600 uppercase lg:bottom-20 h-70 m-20">
        {footerItems.map(item=>(
            <a
          href={item.href}
          className="text-blue-500 hover:text-blue-800"
        >
          <img className = "h-20 w-20 max-h-50 m-0"  src={item.src} 
          alt={item.alt} />
          <p className="text-slate-400 hover:text-black">{item.text}</p>
        </a>
        ))}
      </div>
    </>
  );
}

export default Footer;
