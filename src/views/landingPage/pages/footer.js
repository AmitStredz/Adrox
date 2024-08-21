export default function footer() {
  return (
    <div className="flex flex-col justify-center p-20 py-28 max-sm:hidden">
      <div className="flex justify-evenly w-full">

        <div className="font-100 text-[16px] gap-4 flex flex-col">
          <h1 className="font-600 text-[20px]">Corporate</h1>
          <ul>About Us</ul>
          <ul>Join Us</ul>
          <ul>Media Kit</ul>
          <ul>Affiliate Program</ul>
          <ul>Blog</ul>
          <ul>News & Announcements</ul>
          <ul>Referral</ul>
          <ul>Security</ul>
        </div>
        
        <div className="font-100 text-[16px] gap-4 flex flex-col">
          <h1 className="font-600 text-[20px]">Products</h1>
          <ul>Trading Bot</ul>
          <ul>Staking</ul>
          <ul>Minig</ul>
          <ul>Converter</ul>
          <ul>ADROX Earn</ul>
          <ul>ADROX Learn</ul>
        </div>

        <div className="font-100 text-[16px] gap-4 flex flex-col">
          <h1 className="font-600 text-[20px]">Services</h1>
          <ul>Help Center</ul>
          <ul>Suubmit a Ticket</ul>
          <ul>Fees & VIP</ul>
          <ul>Ticket Verification</ul>
          <ul>Technical Support</ul>
          <ul>Bug Bounty</ul>
          <ul>Beginner's Guide</ul>
          <ul>Official Verification Center</ul>
        </div>

        <div className="font-100 text-[16px] gap-4 flex flex-col">
          <h1 className="font-600 text-[20px]">Legal</h1>
          <ul>Term of use</ul>
          <ul>Privacy Policy</ul>
          <ul>Risk Disclosure Statement</ul>
          <ul>Special Treatement</ul>
        </div>

        <div className="font-100 text-[16px] gap-4 flex flex-col">
          <h1 className="font-600 text-[20px]">Business</h1>
          <ul>Token Listing</ul>
          <ul>ADROX Labs</ul>
          <ul>ADROX Ventures</ul>
          <ul>Safeguard Program</ul>
        </div>


      </div>

      <div className="p-24 font-700 text-[26px] gap-5 flex flex-col">
        <h1>Community</h1>
        <div className="flex gap-10 text-black">
        <i className="ri-facebook-circle-fill bg-white px-2 rounded-lg cursor-pointer"></i>
        <i className="ri-twitter-x-line bg-white px-2 rounded-lg font-100 cursor-pointer"></i>
        <i className="ri-telegram-fill bg-white px-2 rounded-lg cursor-pointer"></i>
        <i className="ri-youtube-fill bg-white px-2 rounded-lg cursor-pointer"></i>
        <i className="ri-github-fill bg-white px-2 rounded-lg font-200 cursor-pointer"></i>
        <i className="ri-linkedin-fill bg-white px-2 rounded-lg font-200 cursor-pointer"></i>
        <i className="ri-instagram-line bg-white px-2 rounded-lg font-100 cursor-pointer"></i>
        </div>
      </div>
    </div>
  );
}
