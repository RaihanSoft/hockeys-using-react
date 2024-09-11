import React from "react";

function Program() {
  return (
    <div>
      <section className="w-11/12 mx-auto m-10">
        {/* header  */}
        <div className="text-center">
          <h1 className="text-3xl font-bold">Program Sections</h1>
          <p>
            Dit amet consectetur. Condimentum dignissim adipiscing aliquam
            turpis <br /> placerat dolor. Purus urna in sit nullam proin.{" "}
          </p>
        </div>

        {/* grid  */}

        <div className="grid grid-cols-12 mt-10 gap-3">

          <div className=" lg:col-span-6 col-span-12 bg-[url(./Images/2.png)] bg-no-repeat bg-cover py-20 rounded-3xl">
  
            <div className="pt-16 text-white space-y-3">
                <h1 className="text-xl font-bold">Junior Program</h1>
                <p>Dolor sit amet consectetur. Ut urna diam quis sagittis. Elit elit 
                enim sagittis turpis in magna. Id et sed euismod natoque amet nunc morbi nulla. Tortor congue sed et in.</p>
            <button className="bg-error text-white btn ">Register Now!</button>
            </div>
          </div>

          <div className=" lg:col-span-6  col-span-12 bg-[url(./Images/3.png)] bg-no-repeat bg-cover py-20 rounded-3xl">
  
          <div className="pt-16 text-white space-y-3">
                <h1 className="text-xl font-bold">Junior Program</h1>
                <p>Dolor sit amet consectetur. Ut urna diam quis sagittis. Elit elit 
                enim sagittis turpis in magna. Id et sed euismod natoque amet nunc morbi nulla. Tortor congue sed et in.</p>
            <button className="bg-error text-white btn ">Register Now!</button>
            </div>
          </div>

          <div className=" col-span-12 bg-[url(./Images/4.png)] bg-no-repeat bg-cover py-20 rounded-3xl">
          <div className="pt-16 text-white space-y-3">
                <h1 className="text-xl font-bold">Junior Program</h1>
                <p>Dolor sit amet consectetur. Ut urna diam quis sagittis. Elit elit 
                enim sagittis turpis in magna. Id et sed euismod natoque amet nunc morbi nulla. Tortor congue sed et in.</p>
            <button className="bg-error text-white btn ">Register Now!</button>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}

export default Program;
