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

        <div className="grid justify-center md:grid-cols-2 mt-10">
          <div className="  space-y-5">
            <div className="bg-[#BCED6D1A]  p-3 w-1/3">
              <div>
                <img src="./Images/Group 1171275317.png" alt="" />
              </div>
              <p>
                Phone Number : <br />
                (+62) 123-321-543
              </p>
            </div>

            <div className="bg-[#BCED6D1A] w-1/3  p-5">
              <div>
                <img src="./Images/Group 1171275318.png" alt="" />
              </div>
              <p>
                Phone Number : <br />
                (+62) 123-321-543
              </p>
            </div>

            <div className="bg-[#BCED6D1A]  w-1/3 p-5">
              <div>
                <img src="./Images/Group 1171275317.png" alt="" />
              </div>
              <p>
                Phone Number : <br />
                (+62) 123-321-543
              </p>
            </div>
          </div>


{/* two  */}
          <div className=" space-y-5">


            <div className="flex gap-5 ">
              <div>
                <p className="font-bold">Your Name</p>
                <input type="text" className="w-[300px] p-2 rounded-xl " placeholder="Enter your full name" />
              </div>
              <div>
                <p className="font-bold">Your Email</p>
                <input type="text" className="w-[300px] p-2 rounded-xl" placeholder="Enter your email" />
              </div>
            </div>




            <div className="flex gap-5 ">
              <div>
                <p className="font-bold">Subject</p>
                <input type="text" className="max-w-[300px] p-2 rounded-xl " placeholder="Enter your subject" />
              </div>
              <div>
                <p className="font-bold">Phone Number</p>
                <input type="text" className="max-w-[300px] p-2 rounded-xl" placeholder="Enter your phone number" />
              </div>
            </div>



            <div>
              <textarea
                placeholder="Bio"
                className=" max-w-[620px] rounded-sm p-2"></textarea>
            </div>


            
          </div>
        </div>
      </section>
    </div>
  );
}

export default Touch;
