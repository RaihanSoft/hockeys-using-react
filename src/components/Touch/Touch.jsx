import React from "react";

function Touch() {
  return (
    <div className="w-11/12 mx-auto">
      <section>
        <div className="text-center mt-10">
          <h1 className="text-xl font-bold">Get In Touch</h1>
          <p>
            Dit amet consectetur. Condimentum dignissim adipiscing aliquam
            turpis placerat dolor. Purus urna in sit nullam proin.{" "}
          </p>
        </div>

        <div className="grid grid-cols-2">
          <div className=" ">
            <div className="bg-[#BCED6D1A]">
              <div>
                <img src="./Images/Group 1171275317.png" alt="" />
              </div>
              <p>
                Phone Number : <br />
                (+62) 123-321-543
              </p>
            </div>

            <div className="bg-[#BCED6D1A]">
              <div>
                <img src="./Images/Group 1171275317.png" alt="" />
              </div>
              <p>
                Phone Number : <br />
                (+62) 123-321-543
              </p>
            </div>

            <div className="bg-[#BCED6D1A]">
              <div>
                <img src="./Images/Group 1171275317.png" alt="" />
              </div>
              <p>
                Phone Number : <br />
                (+62) 123-321-543
              </p>
            </div>
          </div>

          <div className="border-4 bg-red-50">
            <div className="flex">
              <div>
                <p>Your Name</p>
                <input type="text" placeholder="Enter your full name" />
              </div>
              <div>
                <p>Your Email</p>
                <input type="text" placeholder="Enter your email" />
              </div>
            </div>

            <div className="flex">
              <div>
                <p>Your Name</p>
                <input type="text" placeholder="Enter your full name" />
              </div>
              <div>
                <p>Your Email</p>
                <input type="text" placeholder="Enter your email" />
              </div>
            </div>

            <div>
              <textarea
                placeholder="Bio"
                className="textarea textarea-bordered textarea-xl w-full max-w-xs"
              ></textarea>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Touch;
