function Logo() {
  return (

      <div className=" text-teal-400 relative group cursor-pointer w-12 h-20 inline-block -translate-y-2 scale-75 transition-all duration-500">
        <div className="dev inline-block absolute text-5xl font-semibold -left-[.3125rem] top-[.625rem]  transition-all opacity-50 group-hover:opacity-100 tracking-[.75rem] group-hover:tracking-[.8125rem]">
          DEV
        </div>
        <div className="tiven inline-block absolute text-5xl font-semibold top-[3.125rem] transition-all opacity-50 group-hover:opacity-100 ">
          Tiven
        </div>
        <div className="line-x inline-block absolute left-[2.4375rem] top-[3.6875rem] w-[4.6875rem] h-[.3125rem] bg-teal-300 transition-all translate-x-full group-hover:translate-x-0 opacity-0 group-hover:opacity-100 duration-700 ease-in-out"></div>
        <div className="line-y inline-block absolute left-[.125rem] top-[4.25rem] w-[.25rem] h-[1.625rem] bg-teal-300 transition-all translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100 duration-700 ease-in-out"></div>
        <div className="line-y inline-block absolute left-[1.375rem] top-[4.25rem] w-[.25rem] h-[1.625rem] bg-teal-300 transition-all  translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100 duration-700 ease-in-out"></div>
      </div>

  );
}

export default Logo;
