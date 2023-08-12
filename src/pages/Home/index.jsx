import {
  Logo,
  ICServices,
  ICAccounts,
  ICGames,
  ICGifts,
  ICCourses,
  HomeBackground1,
  ICGlobal,
  ICDark,
  ICServex,
  ElapseImage1,
  ICSearchTool,
} from "../../assets/images";
import { Link } from "react-router-dom";

const Home = () => {
  const navLinks = (
    <ul className="text-white font-[400] flex justify-between gap-20 z-20">
      <li>
        <Link to="/services" className="flex gap-2">
          {/* <img src={ICServices} alt="icon services" /> */}
          <img src={ICServices} alt="icon services" />
          Services
        </Link>
      </li>
      <li>
        <Link to="/accounts" className="flex gap-2">
          <img src={ICAccounts} alt="icon accounts" />
          Accounts
        </Link>
      </li>
      <li>
        <Link to="/games" className="flex gap-2">
          <img src={ICGames} alt="icon games" />
          Accounts
        </Link>
      </li>
      <li>
        <Link to="/gift-codes" className="flex gap-2">
          <img src={ICGifts} alt="icon gifts" />
          Gift Codes
        </Link>
      </li>
      <li>
        <Link to="/courses" className="flex gap-2">
          <img src={ICCourses} alt="icon courses" />
          Courses
        </Link>
        </li>
    </ul>
  );

  return (
    <div className="relative">
      <div className="absolute top-0 right-0">
        <img src={HomeBackground1} alt="home background" />
      </div>
      <div className="absolute top-0 left-1/2">
        <img src={ElapseImage1} alt="elapse" />
      </div>
      <header className="bg-[#0B0E0F] h-20 flex items-center">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <div>
              {/* <img src={Logo} alt="logo" /> */}
              <img src={ICServex} alt="logo" />
            </div>
            <div className="flex jusitify-end">{navLinks}</div>
            <div className="flex gap-10 z-50">
              {/* <button className="rounded-full">
                <img src={ICGlobal} alt="global icon" />
              </button>
              <button className="rounded-full">
                <img src={ICDark} alt="dark icon" />
              </button> */}
              <button className="bg-[#FFFFFF66] text-[#53FC18] px-6 py-2 w-28 rounded-[10px] font-bold shadow-[#34D17801] shadow-xl">
                Sign In
              </button>
              <button className="bg-[#53FC18] text-black px-6 py-2 w-28 rounded-[10px] font-bold shadow-[#34D17801] shadow-xl">
                Register
              </button>
            </div>
          </div>
        </div>
      </header>
      <main className="bg-[#0B0E0F] h-[800px]">
        <section key={"welcome"} className="h-full flex items-center">
          <div className="w-1/2 flex justify-end">
            <div className="flex flex-col gap-10 ml-60">
              <p className="text-[#A4AFB6] text-[40px] font-bold">Welcome To</p>
              <div className="w-256">
              <img src={ICServex} alt="logo servex"/>
              </div>
              
              <p className="font-bold text-[#A4AFB6] text-[21px]">
                Find the widest range of freelancers and professionals for your
                small and large projects. <span className="text-[#53FC18]">Servex</span> not only hosts individuals but
                also the collaborating teams of “professionals”
              </p>
              <button className="gap-2 flex-shrink rounded-[40px] w-64 h-12 text-[] bg-[#53FC18] items-center flex p-5">
                <img src={ICSearchTool} alt="search tool"/>
                <p className="text-20px font-normal">Search My Professional</p>
              </button>
            </div>
          </div>

          <div className="w-1/2 flex">
            {/* <h1>Here</h1> */}
            <div className="w-140 h-140">

            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
