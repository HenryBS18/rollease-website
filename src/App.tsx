import Navbar from "./components/Navbar"
import PrimaryButton from "./components/PrimaryButton"

function App() {
  const review = [
    {
      message: "Roll Ease has been a game-changer for my daily commute! The Argo type is perfect for my short trips around town, and I love that I only pay for the minutes I use. Highly recommended!",
      rating: 5,
      reviewerName: "Maria Angelica",
      date: "2 months ago",
      picture: "/assets/images/person 1.png"
    },
    {
      message: "I've been using Roll Ease for my weekend adventures, and it's been fantastic. The Duration option allows me to plan my rides in advance, and returning the vehicle is a breeze.",
      rating: 4,
      reviewerName: "Edgar Tan",
      date: "1 months ago",
      picture: "/assets/images/person 2.png"
    },
    {
      message: "Roll Ease has been a game-changer for my daily commute! The Argo type is perfect for my short trips around town, and I love that I only pay for the minutes I use. Highly recommended!",
      rating: 5,
      reviewerName: "Putra Taufik",
      date: "20 days ago",
      picture: "/assets/images/person 3.png"
    }
  ]

  return (
    <div className="h-[2000px]">
      <Navbar />

      <div className="w-full h-[600px]">
        <img src="/assets/images/scooters.png" alt="image" className="w-full h-[600px] absolute z-0" />

        <div className="w-full h-[600px] absolute z-10 bg-[#222222] opacity-60"></div>

        <div className="w-full h-[600px] absolute z-20 flex flex-col justify-center items-start text-white pl-12">
          <span className="flex">
            <p className="text-[#768EAA] text-xl">ROLL</p>
            <p className=" text-xl">-</p>
            <p className="text-[#A2C90C] text-xl">EASE</p>
          </span>

          <span className="flex flex-wrap text-7xl font-bold w-[590px]">
            <p>DISCOVER</p>
            <div className="flex">
              <p>EVERY</p>
              <p className="text-[#A2C90C] ml-6">CORNERS</p>
              <p>.</p>
            </div>
          </span>

          <p className="mt-2 mb-5">Electric Vehicle Rentals for Seamless Explorations.</p>

          <PrimaryButton title="Start Riding" />
        </div>
      </div>

      <div className="h-10" id="about-us"></div>

      <div className="w-full h-[500px] p-12 flex justify-between">
        <div className="w-[60%]" >
          <h1 className="text-4xl text-[#A2C90C] font-bold">About Us</h1>

          <div className="mt-4 mb-6">
            <span className="text-2xl">
              At Roll Ease, we're dedicated to revolutionizing your experience of exploring Centre Point of Indonesia (CPI). With our convenient scooter rental service, we aim to provide seamless mobility solutions, empowering you to navigate CPI effortlessly. Our mission is to make your journeys around CPI enjoyable, convenient, and memorable. Start rolling with
              <span className="inline-flex">
                <p className="text-[#768EAA] ml-1">Roll</p>
                <p className="text-[#A2C90C] mx-1">Ease</p>
              </span>
              today and unlock the adventure awaiting you!
            </span>
          </div>

          <PrimaryButton title="Start Riding" />
        </div>

        <img src="/assets/images/about-us.png" alt="image" className="w-[400px] h-[400px]" />
      </div>

      <div className="flex justify-evenly">
        <div className="w-[150px] flex flex-col items-center gap-y-1">
          <img src="/assets/icons/electric-scooter-icon.png" alt="" className="w-[64px]" />
          <p className="text-center text-xl font-semibold">Effortless Mobility</p>
        </div>

        <div className="w-[150px] flex flex-col items-center gap-y-1">
          <img src="/assets/icons/booking-icon.png" alt="" className="w-[64px]" />
          <p className="text-center text-xl font-semibold">Convenience at Your Fingertips</p>
        </div>

        <div className="w-[150px] flex flex-col items-center gap-y-1">
          <img src="/assets/icons/near-me-icon.png" alt="" className="w-[64px]" />
          <p className="text-center text-xl font-semibold">Return at Nearest Station</p>
        </div>

        <div className="w-[150px] flex flex-col items-center gap-y-1">
          <img src="/assets/icons/quality-icon.png" alt="" className="w-[64px]" />
          <p className="text-center text-xl font-semibold">Enhanced Experience</p>
        </div>
      </div>

      <div className="h-10" id="vehicle"></div>

      <div className="pt-14" >
        <div className="flex flex-col items-center font-bold">
          <p className="text-4xl">Our</p>
          <p className="text-4xl text-[#A2C90C]">Electric Vehicle</p>
        </div>

        <div className="mt-3 flex justify-between px-20">
          <div className="w-[46%] flex gap-x-3">
            <img src="/assets/images/electric-scooter.png" alt="" className="w-[220px] h-[320px]" />

            <div className="h-[320px] flex flex-col justify-between">
              <div>
                <h1 className="text-[#768EAA] text-3xl font-bold w-[120px] mb-3">Electric Scooter</h1>
                <p className="text-lg mb-5">Our electric scooters provide an eco-friendly and convenient transportation option for exploring CPI. Ideal for quick trips around the area with high energy efficiency.</p>
              </div>

              <PrimaryButton title="Rent Now" />
            </div>
          </div>

          <div className="w-[1px] h-[340px] bg-black"></div>

          <div className="w-[46%] flex gap-x-3">
            <div className="h-[320px] flex flex-col items-end">
              <div className="flex flex-col items-end">
                <h1 className="text-[#768EAA] text-3xl font-bold w-[120px] mb-3 text-end">Electric Bike</h1>
                <p className="text-lg mb-5 text-end">Our electric bikes offer a fun and time-saving biking experience around CPI. With the assistance of its electric motor, you can explore the area effortlessly without breaking a sweat.</p>
              </div>

              <PrimaryButton title="Rent Now" />
            </div>

            <img src="/assets/images/bike.png" alt="" className="w-[220px] h-[320px]" />
          </div>
        </div>

        <div className="px-20">
          <div className="w-full h-[1px] bg-black"></div>
        </div>

        <div className="flex justify-between items-center px-12 pt-20" id="services">
          <div className="w-[40%] h-fit">
            <h1 className="text-[46px] leading-tight text-[#A2C90C] font-bold">Experience Freedom with Roll-Ease.</h1>
            <p className="text-xl mt-3 w-[86%]">Choose between our flexible Argo type for short trips charged per minute, or our convenient Duration type for longer journeys with pre-selected ride durations.</p>
          </div>

          <div className="flex gap-x-16">
            <div className="w-[300px] h-[350px] flex justify-end  relative">
              <div className="bg-[#768EAA] w-[280px] h-[330px] text-white pt-5 text-center rounded-2xl">
                <h1 className="text-xl font-bold px-12">Flexibility with Argo Type</h1>
                <p className="px-4">Enjoy short trips with our Argo type, where you pay per minute. Only pay for the time you ride, giving you flexibility to hop on and off as needed.</p>
              </div>

              <div className="w-[140px] h-[140px] bg-[#A2C90C] rounded-2xl absolute bottom-0 left-0 flex justify-center items-center">
                <img src="/assets/icons/location-icon.png" alt="icon" />
              </div>
            </div>

            <div className="w-[300px] h-[350px] flex justify-end  relative">
              <div className="bg-[#768EAA] w-[280px] h-[330px] text-white pt-5 text-center rounded-2xl">
                <h1 className="text-xl font-bold px-12">Convenience with Duration Type</h1>
                <p className="px-4">Choose our Duration option for longer rides. Select your preferred duration upfront, return hassle-free before time ends</p>
              </div>

              <div className="w-[140px] h-[140px] bg-[#A2C90C] rounded-2xl absolute bottom-0 left-0 flex justify-center items-center">
                <img src="/assets/icons/clock-icon.png" alt="icon" />
              </div>
            </div>
          </div>
        </div>

        <div className="pt-20 pb-14" id="review">
          <div className="text-[#A2C90C] text-4xl text-center">
            <h1 className="font-medium mb-1">Read Reviews,</h1>
            <h1 className="font-bold">Ride With Confidence.</h1>
          </div>

          <div className="flex gap-x-10 justify-center mt-10">
            {
              review.map(e => (
                <div className="flex flex-col">
                  <div className="w-[320px] h-full bg-[#768EAA] p-6 rounded-t-2xl rounded-br-2xl">
                    <p className="text-white text-lg">{e.message}</p>

                    <div className="mt-4 flex">
                      {
                        [1, 1, 1, 1, 1].map(_ => (
                          <p className="text-[#A2C90C] text-3xl">&#9733;</p>
                        ))
                      }
                    </div>
                  </div>

                  <div className="flex">
                    <div className="relative w-14 h-11">
                      <div className="absolute top-0 left-0 w-0 h-0 border-l-[56px] border-b-transparent border-b-[48px] border-l-[#768EAA] rounded-bl-2xl"></div>
                    </div>

                    <div className="flex items-center gap-x-3 mt-3">
                      <img src={e.picture} alt="profile" width={64} />

                      <div>
                        <h1 className="text-xl font-bold">{e.reviewerName}</h1>
                        <p className="text-sm opacity-50 font-medium">{e.date}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>

        <div className="w-full h-[480px] bg-[#768EAA] px-12 py-8 flex justify-between items-center">
          <div className="w-[30%]">
            <div className=" text-white text-2xl font-bold mb-5">
              <h1>Ready to roll with ease and effortless exploration?</h1>
              <h1>Start your adventure with Roll-Ease today.</h1>
            </div>

            <PrimaryButton title="Download App" />
          </div>

          <div className="w-[65%] h-full flex justify-between">
            <div className="w-[178px] h-full relative">
              <img src="/assets/images/app 1.png" alt="" className="w-[178px] h-[356px] absolute bottom-0" />
            </div>

            <div className="w-[178px] h-full relative">
              <img src="/assets/images/app 2.png" alt="" className="w-[178px] h-[356px] absolute top-0" />
            </div>

            <div className="w-[178px] h-full relative">
              <img src="/assets/images/app 3.png" alt="" className="w-[178px] h-[356px] absolute bottom-0" />
            </div>

            <div className="w-[178px] h-full relative">
              <img src="/assets/images/app 4.png" alt="" className="w-[178px] h-[356px] absolute top-0" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
