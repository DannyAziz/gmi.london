const Footer = () => (
  <footer className="bg-bg fixed bottom-0 border-t w-full p-4 flex flex-col sm:flex-row">
    <div className="flex flex-row gap-x-1">
      <span>Made By</span>
      <a className="underline text-cta" href="https://www.indieldn.com/" target="_blank">
        indie.london
      </a>
      <span>x</span>
      <a className="underline text-secondary" href="https://www.dannyaziz.com" target="_blank">
        Danny Aziz
      </a>
    </div>
    <a
      href="https://docs.google.com/forms/d/e/1FAIpQLSfmZPkzlCRiBf6vn-HNf8UjbIWkmEORnKUkrseQ_-D06kBxWA/viewform"
      target="_blank"
      className="sm:ml-auto"
    >
      Join 650+ <span className="hidden sm:inline-block">IndieLdn</span> Members On Slack
    </a>
  </footer>
);

export default Footer;
