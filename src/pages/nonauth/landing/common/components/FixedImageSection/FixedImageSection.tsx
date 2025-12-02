
function FixedImageSection() {
  return (
    <>
      <div className="relative mt-9 h-[700px] bg-blue-500 overflow-hidden">
        {/* Fixed Image */}
        <div
          className="
          absolute inset-0
          bg-[url('https://png.pngtree.com/recommend-works/png-clipart/20250308/ourmid/pngtree-starbucks-cocoa-latte-coffee-cup-png-image_15744466.png')]
          bg-contain bg-no-repeat bg-center
          bg-fixed
        "
        ></div>
      </div>
      <div className="flex px-50 justify-between h-[200px]  items-center">
        <h1 className="   text-3xl">
          JOIN THE WAVE <br /> #WEARESOUTHWAVE
        </h1>
        <div className="flex justify-center items-center w-[150px] h-[150px] border-3 rounded-4xl border-blue-500">
          <h1 className="  ">grg</h1>
        </div>
      </div>
      <div className="grid grid-cols-4">
        <img
          src="https://png.pngtree.com/recommend-works/png-clipart/20250308/ourmid/pngtree-starbucks-cocoa-latte-coffee-cup-png-image_15744466.png"
          alt=""
          className="bg-green-700"
        />
        <img
          src="https://png.pngtree.com/recommend-works/png-clipart/20250308/ourmid/pngtree-starbucks-cocoa-latte-coffee-cup-png-image_15744466.png"
          alt=""
        />
        <img
          src="https://png.pngtree.com/recommend-works/png-clipart/20250308/ourmid/pngtree-starbucks-cocoa-latte-coffee-cup-png-image_15744466.png"
          alt=""
        />
        <img
          src="https://png.pngtree.com/recommend-works/png-clipart/20250308/ourmid/pngtree-starbucks-cocoa-latte-coffee-cup-png-image_15744466.png"
          alt=""
        />
        <img
          src="https://png.pngtree.com/recommend-works/png-clipart/20250308/ourmid/pngtree-starbucks-cocoa-latte-coffee-cup-png-image_15744466.png"
          alt=""
        />
        <img
          src="https://png.pngtree.com/recommend-works/png-clipart/20250308/ourmid/pngtree-starbucks-cocoa-latte-coffee-cup-png-image_15744466.png"
          alt=""
        />
        <img
          src="https://png.pngtree.com/recommend-works/png-clipart/20250308/ourmid/pngtree-starbucks-cocoa-latte-coffee-cup-png-image_15744466.png"
          alt=""
        />
        <img
          src="https://png.pngtree.com/recommend-works/png-clipart/20250308/ourmid/pngtree-starbucks-cocoa-latte-coffee-cup-png-image_15744466.png"
          alt=""
        />
      </div>
    </>
  );
}

export default FixedImageSection;
