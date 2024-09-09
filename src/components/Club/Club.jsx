import React from "react";

function Club() {
  return (
    <div>
      <section className="w-11/12 mx-auto mt-10">
        {/* title  */}
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold">Professional Hockeys Club</h1>
          <p>
            Dit amet consectetur. Condimentum dignissim adipiscing aliquam
            turpis placerat dolor. Purus urna in sit nullam proin.{" "}
          </p>
        </div>

        {/* boxs  */}



        <div className="grid  grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 justify-items-center ">

{/* one  */}
        <div className=" space-y-2 flex flex-col justify-center items-center p-2">
          <div className="h-[120px] w-[120px] flex justify-center items-center  border-r-8 border-r-slate-400 border-t-8 border-l-8 border-b-8 rounded-full border-error">
            <h1 className="font-bold text-2xl">87%</h1>
          </div>

          <h1 className="text-xl font-bold">Prayer Facility</h1>
          <p className="text-center">Amet consectetur. Condimentum <br /> dignissim adipiscing .</p>
        </div>

{/* two  */}
        <div className=" space-y-2 flex flex-col justify-center items-center p-2">
          <div className="h-[120px] w-[120px] flex justify-center items-center  border-r-8 border-r-slate-400 border-t-8 border-l-8 border-b-8 rounded-full border-[#49D293]">
            <h1 className="font-bold text-2xl">87%</h1>             
          </div>

          <h1 className="text-xl font-bold">Prayer Facility</h1>
          <p className="text-center">Amet consectetur. Condimentum <br /> dignissim adipiscing .</p>
        </div>

{/* three  */}
        <div className=" space-y-2 flex flex-col justify-center items-center p-2">
          <div className="h-[120px] w-[120px] flex justify-center items-center  border-r-8 border-r-slate-400 border-t-8 border-l-8 border-b-8 rounded-full border-[#4C8DF1]">
            <h1 className="font-bold text-2xl">87%</h1>
          </div>

          <h1 className="text-xl font-bold">Prayer Facility</h1>
          <p className="text-center">Amet consectetur. Condimentum <br /> dignissim adipiscing .</p>
        </div>

{/* one  */}
        <div className=" space-y-2 flex flex-col justify-center items-center p-2">
          <div className="h-[120px] w-[120px] flex justify-center items-center  border-r-8 border-r-slate-400 border-t-8 border-l-8 border-b-8 rounded-full border-warning">
            <h1 className="font-bold text-2xl">87%</h1>
          </div>

          <h1 className="text-xl font-bold">Prayer Facility</h1>
          <p className="text-center">Amet consectetur. Condimentum <br /> dignissim adipiscing .</p>
        </div>





        </div>


      </section>
    </div>
  );
}

export default Club;
