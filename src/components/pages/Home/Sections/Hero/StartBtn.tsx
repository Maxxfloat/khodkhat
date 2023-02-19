import Link from 'next/link';

function StartBtn() {
  return (
    <Link href="writer">
      <button type="button" className="px-5 py-1 mt-2 border border-black hover:bg-white ">
        Start
      </button>
    </Link>
  );
}

export default StartBtn;
