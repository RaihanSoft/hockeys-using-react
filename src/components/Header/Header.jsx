function Header() {
  return (
    <div>
      <section className="w-11/12 mx-auto xl:relative mt-5">

      <div className="xl:h-[550px] mx-auto">
        <img className="mx-auto" src='./Images/1.png' alt="" />
      </div>

      <div className="xl:absolute xl:bottom-5 xl:right-36 bg-black text-white p-5 rounded-xl">
      <h1 className="text-2xl font-bold">Meet all the heroes from the field</h1>
      <p>Dit amet consectetur. Condimentum dignissim adipiscing aliquam turpis <br /> placerat dolor. Purus urna in sit nullam proin. </p>
      </div>

      {/* arrow  */}

      <div className="space-x-3 absolute hidden xl:block xl:bottom-10 left-40">
      <i class="ri-arrow-left-s-line text-xl font-bold bg-black rounded-full p-2 text-white"></i>
      <i class="ri-arrow-right-s-line text-xl font-bold bg-black rounded-full p-2 text-white"></i>
      </div>




      </section>
    </div>
  );
}

export default Header;
