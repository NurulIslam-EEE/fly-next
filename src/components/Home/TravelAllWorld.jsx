import Link from "next/link";

function TravelAllWorld() {
  return (
    <div className="travel-sec relative">
      <div class="cloud-vector-block relative">
        <img src="/cloud-vector.png" alt="" className="cloud-vector" />
      </div>
      <img src="/vector-line.png" alt="" class="line-vector"></img>
      <div className="container mx-auto px-2">
        <div className="flex items-center justify-centers">
          <div className="left-content w-[34%]">
            <img src="" alt="" />
            <div className="left-content text">
              <span className="bg-lightest-gray px-4 h1">TRAVEL</span>
              <span className="bg-lightest-gray px-4 h1">ALL</span>
              <span className="bg-lightest-gray px-4 h1">OVER</span>
              <span className="bg-lightest-gray px-4 h1 color-primary">
                The
              </span>
              <span className="bg-lightest-gray px-4 h1 color-primary">
                WORLD
              </span>
            </div>
            <Link href="/" className="cus-btn my-4">
              Booking Now
            </Link>
          </div>
          <div className="w-[60%] relative">
            <div className="right-images-block sal-animate">
              <img
                src="/border-line.png"
                alt=""
                className="border-image z-50 inline-block"
              />
              <div class="flex justify-between items-center">
                <div className="w-[28%]">
                  <img src="/paris.png" alt="" className="side-image" />
                </div>
                <div class="w-[38%]">
                  <img src="/dubai.png" alt="" className="center-image " />
                </div>
                <div className="w-[28%]">
                  <img src="/italy.png" alt="" className="side-image " />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TravelAllWorld;
