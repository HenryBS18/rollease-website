import PrimaryButton from "./PrimaryButton"

const Navbar = ({ className }: { className?: string }) => {
  return (
    <div className={`w-full h-20 px-12 fixed z-50 bg-white ${className}`}>
      <div className="w-full h-full flex items-center justify-between">
        <a href="/">
          <img src="/rollease-logo.png" alt="logo" width={56} height={56} />
        </a>

        <div className="flex gap-x-20 items-center">
          <a href="#about-us" className="text-[#768EAA] text-lg font-semibold select-none">About Us</a>
          <a href="#vehicle" className="text-[#768EAA] text-lg font-semibold select-none">Vehicle</a>
          <a href="#services" className="text-[#768EAA] text-lg font-semibold select-none">Services</a>
          <a href="#review" className="text-[#768EAA] text-lg font-semibold select-none">Review</a>
          <PrimaryButton title="Download App" />
        </div>
      </div>
    </div>
  )
}

export default Navbar