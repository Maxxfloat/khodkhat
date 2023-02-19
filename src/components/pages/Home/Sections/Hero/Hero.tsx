import Link from 'next/link';
import Banner from './Banner';

function Hero() {
  return (
    <div className="w-full sm:w-5/6 md:w-4/6 lg:w-6/12 xl:4/12 2xl:w-4/12 px-5">
      <Banner />
      <div className="flex w-full gap-4 h-10">
        <Link href="writer">
          <button type="button" className="h-full border-2 border-black hover:bg-white px-6">
            Start
          </button>
        </Link>
        <button type="button" className="h-full grow border-2 border-gold">
          Tutorial
        </button>
      </div>
    </div>
  );
}

export default Hero;
