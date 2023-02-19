import Link from 'next/link';
import Banner from './Banner';

function Hero() {
  return (
    <div className="w-full sm:w-5/6 md:w-4/6 lg:w-6/12 xl:4/12 2xl:w-4/12 px-5">
      <Banner />
      <div className="flex w-full gap-4 h-10">
        <Link href="writer" className="w-2/6">
          <button
            type="button"
            className="h-full border-2 w-full hover:border-black  hover:bg-white border-white hover:text-black bg-gray-900 text-white px-10">
            Start
          </button>
        </Link>
        <button
          type="button"
          className="h-full w-4/6 border-2 border-red-700 hover:border-white hover:text-white hover:bg-red-800">
          Tutorial
        </button>
      </div>
    </div>
  );
}

export default Hero;
