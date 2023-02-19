const SUBTITLE = ['enter subject.', 'set options.', 'a nice article is what you get.'];

function Banner() {
  return (
    <div className="mb-5 text-center">
      <h2 className="py-2 mb-2 text-5xl border-b border-black sm:text-6xl md:text-7xl">Article</h2>
      <ul className="flex flex-col sm:flex-row text-2xl gap-1 justify-center mt-6">
        {SUBTITLE.map((item) => (
          <li key={item} className="text-justify border-is border-black pis-1 mx-3 capitalize">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Banner;
