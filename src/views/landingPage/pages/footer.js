export default function Footer() {
  return (
    <div className="flex flex-col justify-center p-5 sm:p-20 sm:py-28">
      <div className="flex justify-between w-full flex-wrap gap-1">
        <div className="font-100 text-[12px] sm:text-[16px]  sm:gap-4 flex flex-col">
          <h1 className="font-600 text-[14px] sm:text-[20px]">Corporate</h1>
          <ul className="hover:underline transition-all cursor-pointer">
            About Us
          </ul>
          <ul className="hover:underline transition-all cursor-pointer">Join Us</ul>
          <ul className="hover:underline transition-all cursor-pointer">Media Kit</ul>
          <ul className="hover:underline transition-all cursor-pointer">Affiliate Program</ul>
          <ul className="hover:underline transition-all cursor-pointer">Blog</ul>
          {/* <ul>News & Announcements</ul> */}
          <ul className="hover:underline transition-all cursor-pointer">Referral</ul>
          <ul className="hover:underline transition-all cursor-pointer">Security</ul>
        </div>

        <div className="font-100 text-[12px] sm:text-[16px] gap-2 sm:gap-4 flex flex-col">
          <h1 className="font-600 text-[14px] sm:text-[20px]">Products</h1>
          <ul className="hover:underline transition-all cursor-pointer">Trading Bot</ul>
          <ul className="hover:underline transition-all cursor-pointer">Lending</ul>
          <ul className="hover:underline transition-all cursor-pointer">Minig</ul>
          <ul className="hover:underline transition-all cursor-pointer">Converter</ul>
          <ul className="hover:underline transition-all cursor-pointer">ADROX Earn</ul>
          <ul className="hover:underline transition-all cursor-pointer">ADROX Learn</ul>
        </div>

        <div className="font-100 text-[12px] sm:text-[16px] gap-2 sm:gap-4 flex flex-col">
          <h1 className="font-600 text-[14px] sm:text-[20px]">Services</h1>
          <ul className="hover:underline transition-all cursor-pointer">Help Center</ul>
          <ul className="hover:underline transition-all cursor-pointer">Suubmit a Ticket</ul>
          <ul className="hover:underline transition-all cursor-pointer">Fees & VIP</ul>
          <ul className="hover:underline transition-all cursor-pointer">Ticket Verification</ul>
          <ul className="hover:underline transition-all cursor-pointer">Technical Support</ul>
          <ul className="hover:underline transition-all cursor-pointer">Bug Bounty</ul>
          <ul className="hover:underline transition-all cursor-pointer">Beginner's Guide</ul>
          <ul>Official Verification Center</ul>
        </div>

        <div className="font-100 text-[12px] sm:text-[16px] gap-2 sm:gap-4 flex flex-col mt-5">
          <h1 className="font-600 text-[14px] sm:text-[20px]">Legal</h1>
          <ul className="hover:underline transition-all cursor-pointer">Privacy Policy</ul>
          <ul className="hover:underline transition-all cursor-pointer">Term of use</ul>
          <ul className="hover:underline transition-all cursor-pointer">Risk Disclosure Statement</ul>
          <ul className="hover:underline transition-all cursor-pointer">Special Treatement</ul>
        </div>

        <div className="font-100 text-[12px] sm:text-[16px] gap-2 sm:gap-4 flex flex-col max-sm:mt-5">
          <h1 className="font-600 text-[14px] sm:text-[20px]">Business</h1>
          <ul className="hover:underline transition-all cursor-pointer">Token Listing</ul>
          <ul className="hover:underline transition-all cursor-pointer">ADROX Labs</ul>
          <ul className="hover:underline transition-all cursor-pointer">ADROX Ventures</ul>
          <ul className="hover:underline transition-all cursor-pointer">Safeguard Program</ul>
        </div>
      </div>

      <div
        className="font-700 text-[26px] gap-5 flex flex-col"
        style={{
          padding: "6em 0",
          width: "100%",
          display: "flex",
          margin: "auto",
          alignItems: "center",
        }}
      >
        <h1>Community</h1>
        {/* <div className="flex gap-10 text-black">
          <i className="ri-facebook-circle-fill bg-white px-2 rounded-lg cursor-pointer"></i>
          <i className="ri-twitter-x-line bg-white px-2 rounded-lg font-100 cursor-pointer"></i>
          <i className="ri-telegram-fill bg-white px-2 rounded-lg cursor-pointer"></i>
          <i className="ri-youtube-fill bg-white px-2 rounded-lg cursor-pointer"></i>
          <i className="ri-github-fill bg-white px-2 rounded-lg font-200 cursor-pointer"></i>
          <i className="ri-linkedin-fill bg-white px-2 rounded-lg font-200 cursor-pointer"></i>
          <i className="ri-instagram-line bg-white px-2 rounded-lg font-100 cursor-pointer"></i>
        </div> */}

        <div className="flex flex-wrap justify-center gap-5 sm:gap-10 text-black">
          <a
            href="https://www.facebook.com"
            style={{ all: "unset", cursor: "pointer" }}
            target="_blank"
            rel="noreferrer"
          >
            <i className="ri-facebook-circle-fill bg-white px-2 rounded-lg"></i>
          </a>
          <a
            href="https://x.com/adroxorg?s=21"
            style={{ all: "unset", cursor: "pointer" }}
            target="_blank"
            rel="noreferrer"
          >
            <i className="ri-twitter-x-line bg-white px-2 rounded-lg font-100"></i>
          </a>
          <a
            href="https://t.me"
            style={{ all: "unset", cursor: "pointer" }}
            target="_blank"
            rel="noreferrer"
          >
            <i className="ri-telegram-fill bg-white px-2 rounded-lg"></i>
          </a>
          <a
            href="https://youtube.com/@adroxorg?si=CXNoQlpgZWyfDcBM"
            style={{ all: "unset", cursor: "pointer" }}
            target="_blank"
            rel="noreferrer"
          >
            <i className="ri-youtube-fill bg-white px-2 rounded-lg"></i>
          </a>
          <a
            href="https://github.com"
            style={{ all: "unset", cursor: "pointer" }}
            target="_blank"
            rel="noreferrer"
          >
            <i className="ri-github-fill bg-white px-2 rounded-lg font-200"></i>
          </a>
          <a
            href="https://linkedin.com"
            style={{ all: "unset", cursor: "pointer" }}
            target="_blank"
            rel="noreferrer"
          >
            <i className="ri-linkedin-fill bg-white px-2 rounded-lg font-200"></i>
          </a>
          <a
            href="https://www.instagram.com/adroxmarket?igsh=MTQ5aW9sbTgxa2VqYg=="
            style={{ all: "unset", cursor: "pointer" }}
            target="_blank"
            rel="noreferrer"
          >
            <i className="ri-instagram-line bg-white px-2 rounded-lg font-100"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
