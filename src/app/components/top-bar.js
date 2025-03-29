import Head from "next/head";

export default function TopBar() {
  return ( 
  <>
    <Head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"/>
    </Head>
    
    <nav className="flex justify-between p-2 px-16 text-xs bg-amber-50 text-black dark:bg-[#2a24242d] dark:text-white max-sm:px-5">
      <p className="flex items-center max-sm:hidden">Welcome to our online store</p>

      <div className="flex items-center space-x-5 max-sm:space-x-2 max-sm:w-full max-sm:justify-between">
        <select className="max-sm:text-[10px]">
          <option className="dark:bg-white dark:text-black">English</option>
          <option className="dark:bg-white dark:text-black">Spanish</option>
          <option className="dark:bg-white dark:text-black">French</option>
        </select>
        <a className="border-l-2 px-5 max-sm:text-[10px] max-sm:px-1 text-center max-sm:w-36" href="#">Login or Register</a>
        <div className="flex space-x-4">
          <a href="https://github.com/jadodevs">
            <img className="invert dark:invert-0  " src="/github.svg" alt="GitHub" width="30" height="30" />
          </a>
          <a href="https://www.instagram.com/danielortiz_04?igsh=ZnpxbzVmaTVhNTQy">
            <img className="invert dark:invert-0  " src="/instagram.svg" alt="Instagram" width="30" height="30" />
          </a>
          <a href="https://www.linkedin.com/in/santiago-aristizabal-sepulveda-b30981264?trk=mutual-connections_member-name">
            <img className="invert dark:invert-0  " src="/linkedin.svg" alt="LinkedIn" width="30" height="30" />
          </a>
        </div>
      </div>
    </nav>
  </>
  );
}