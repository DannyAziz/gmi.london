const Header = () => (
  <div className="h-28 w-full flex flex-row items-center px-8 justify-between">
    <div className="flex flex-row gap-x-7">
      <div className="bg-gray-400 h-16 w-16" />
      <nav>
        <ul className="flex flex-row gap-x-4 items-center h-full">
          <li>
            <a href="#">Event</a>
          </li>
          <li>
            <a href="#">Speakers</a>
          </li>
          <li>
            <a href="#">Reserve</a>
          </li>
          <li>
            <a href="#">NFT</a>
          </li>
        </ul>
      </nav>
    </div>
    <div>
      <button className="bg-cta h-12 w-full rounded-md px-4">
        <span>Join 900+ IndieLdn Members On Slack</span>
      </button>
    </div>
  </div>
);

export default Header;
