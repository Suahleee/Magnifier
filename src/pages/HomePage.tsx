import React, { useState } from 'react';
// import BasicEmbed from '../components/BasicEmbed';
import TableauReport from 'tableau-react-embed';
import { BrowserRouter as Router, Link } from 'react-router-dom';
export const HomePage = () => {
  const [menu, setMenu] = useState(1);

  const options = {
    height: '700px',
    width: '100%',
    hideTabs: false,
    // All other vizCreate options are supported here, too
    // They are listed here: https://onlinehelp.tableau.com/current/api/js_api/en-us/JavaScriptAPI/js_api_ref.htm#ref_head_9
  };

  return (
    <div>
      <div>HomePage</div>
      <aside className="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
        <div>
          <div className="-mx-6 px-6 py-4">
            <a href="#" title="home">
              <Link to="/">
                <img
                  src="/magnifierlogo.png"
                  className="w-50"
                  alt="magnifier logo"
                />
              </Link>
            </a>
          </div>
          {/* Search here* */}
          <ul className="space-y-2 tracking-wide mt-8">
            <div className="flex space-x-4">
              <div hidden className="md:block">
                <div className="relative flex items-center text-gray-400 focus-within:text-cyan-400">
                  <span className="absolute left-4 h-6 flex items-center pr-3 ">
                    {/* <svg
                      xmlns="http://ww50w3.org/2000/svg"
                      className="w-4 fill-current"
                      viewBox="0 0 35.997 36.004"
                    >
                      <path
                        id="Icon_awesome-search"
                        data-name="search"
                        d="M35.508,31.127l-7.01-7.01a1.686,1.686,0,0,0-1.2-.492H26.156a14.618,14.618,0,1,0-2.531,2.531V27.3a1.686,1.686,0,0,0,.492,1.2l7.01,7.01a1.681,1.681,0,0,0,2.384,0l1.99-1.99a1.7,1.7,0,0,0,.007-2.391Zm-20.883-7.5a9,9,0,1,1,9-9A8.995,8.995,0,0,1,14.625,23.625Z"
                      ></path>
                    </svg> */}
                  </span>
                  {/* <input
                    type="search"
                    name="leadingIcon"
                    id="leadingIcon"
                    placeholder="Search here"
                    className="w-full pl-14 pr-4 py-2.5 rounded-xl text-sm text-gray-600 outline-none border border-gray-300 focus:border-cyan-300 transition"
                  /> */}
                </div>
              </div>
            </div>
            {/* dashboard */}
            <li>
              <a
                href="#"
                onClick={() => {
                  setMenu(1);
                }}
                aria-label="dashboard"
                className={
                  'px-4 py-3 flex items-center space-x-4 rounded-xl text-white' +
                  (menu === 1 && ' bg-gradient-to-r from-sky-600 to-cyan-400')
                }
              >
                <svg className="-ml-1 h-6 w-6" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M6 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8ZM6 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-1Z"
                    className="fill-current text-cyan-400 dark:fill-slate-600"
                  ></path>
                  <path
                    d="M13 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2V8Z"
                    className="fill-current text-cyan-200 group-hover:text-cyan-300"
                  ></path>
                  <path
                    d="M13 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-1Z"
                    className="fill-current group-hover:text-sky-300"
                  ></path>
                </svg>
                <span className="-mr-1 font-medium">Dashboard</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => {
                  setMenu(2);
                }}
                className={
                  'px-4 py-3 flex items-center space-x-4 rounded-xl text-white' +
                  (menu === 2 && ' bg-gradient-to-r from-sky-600 to-cyan-400')
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    className="fill-current text-gray-300 group-hover:text-cyan-300"
                    fill-rule="evenodd"
                    d="M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z"
                    clip-rule="evenodd"
                  />
                  <path
                    className="fill-current text-gray-600 group-hover:text-cyan-600"
                    d="M6 12a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H2h2a2 2 0 002-2v-2z"
                  />
                </svg>
                <span className="group-hover:text-gray-700">Top Account</span>
              </a>
            </li>
            {/* Report */}
            <li>
              <a
                onClick={() => {
                  setMenu(3);
                }}
                className={
                  'px-4 py-3 flex items-center space-x-4 rounded-xl text-white' +
                  (menu === 3 && ' bg-gradient-to-r from-sky-600 to-cyan-400')
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    className="fill-current text-gray-600 group-hover:text-cyan-600"
                    fill-rule="evenodd"
                    d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
                    clip-rule="evenodd"
                  />
                  <path
                    className="fill-current text-gray-300 group-hover:text-cyan-300"
                    d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"
                  />
                </svg>
                <span className="group-hover:text-gray-700">Comparison</span>
              </a>
            </li>
          </ul>
        </div>
        {/* 로그아웃지움 */}
      </aside>
      <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
        <div className="sticky z-10 top-0 h-16 border-b bg-white lg:py-2.5">
          <div className="px-6 flex items-center justify-between space-x-4 2xl:container">
            <h5 hidden className="text-2xl text-gray-600 font-medium lg:block">
              Dashboard{/* Dashboard */}
            </h5>
            <button className="w-12 h-16 -mr-2 border-r lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 my-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
            <div className="flex space-x-4">
              <div hidden className="md:block">
                <div className="relative flex items-center text-gray-400 focus-within:text-cyan-400">
                  <span className="absolute left-4 h-6 flex items-center pr-3 ">
                    {/* <svg
                      xmlns="http://ww50w3.org/2000/svg"
                      className="w-4 fill-current"
                      viewBox="0 0 35.997 36.004"
                    >
                      <path
                        id="Icon_awesome-search"
                        data-name="search"
                        d="M35.508,31.127l-7.01-7.01a1.686,1.686,0,0,0-1.2-.492H26.156a14.618,14.618,0,1,0-2.531,2.531V27.3a1.686,1.686,0,0,0,.492,1.2l7.01,7.01a1.681,1.681,0,0,0,2.384,0l1.99-1.99a1.7,1.7,0,0,0,.007-2.391Zm-20.883-7.5a9,9,0,1,1,9-9A8.995,8.995,0,0,1,14.625,23.625Z"
                      ></path>
                    </svg> */}
                  </span>
                  {/* <input
                    type="search"
                    name="leadingIcon"
                    id="leadingIcon"
                    placeholder="Search here"
                    className="w-full pl-14 pr-4 py-2.5 rounded-xl text-sm text-gray-600 outline-none border border-gray-300 focus:border-cyan-300 transition"
                  /> */}
                </div>
              </div>

              {/* <button
                aria-label="search"
                className="w-10 h-10 rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200 md:hidden"
              >
                <svg
                  xmlns="http://ww50w3.org/2000/svg"
                  className="w-4 mx-auto fill-current text-gray-600"
                  viewBox="0 0 35.997 36.004"
                >
                  <path
                    id="Icon_awesome-search"
                    data-name="search"
                    d="M35.508,31.127l-7.01-7.01a1.686,1.686,0,0,0-1.2-.492H26.156a14.618,14.618,0,1,0-2.531,2.531V27.3a1.686,1.686,0,0,0,.492,1.2l7.01,7.01a1.681,1.681,0,0,0,2.384,0l1.99-1.99a1.7,1.7,0,0,0,.007-2.391Zm-20.883-7.5a9,9,0,1,1,9-9A8.995,8.995,0,0,1,14.625,23.625Z"
                  ></path> */}
              {/* </svg>
              </button> */}
              {/* 로그인 버튼 */}
              <a href="/login">
                <button className="w-20 h-10 rounded-xl border place-self-center border-orange-400 text-orange-500 focus:bg-white-100 active:bg-orange-100">
                  로그인
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                  />
                </button>
              </a>
              {/* 회원가입 버튼 */}
              <a href="/signup">
                <button className="w-20 h-10 rounded-xl border border-orange-400 text-orange-500 focus:bg-white-100 active:bg-orange-100">
                  회원가입
                  <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                </button>
              </a>
            </div>
          </div>
        </div>
        {/* Chart 자리 */}
        <div className="h-full px-6 pt-6 2xl:container">
          <div className="grid gap-6 h-full">
            <div
              className="
              w-full h-700 py-8 px-6 space-y-6 rounded-xl border border-gray-200 bg-white"
            >
              {menu === 1 && (
                <TableauReport
                  className="w-full"
                  options={options}
                  url="https://public.tableau.com/views/basicdashboard_16550535053000/Dash?:language=ko-KR&publish=yes&:display_count=n&:origin=viz_share_link"
                />
              )}

              {menu === 2 && (
                <TableauReport
                  className="h-full"
                  options={options}
                  url="https://public.tableau.com/views/dashboardtop/Top?:language=ko-KR&:display_count=n&:origin=viz_share_link"
                />
              )}

              {menu === 3 && (
                <TableauReport
                  className="h-full"
                  options={options}
                  url="https://public.tableau.com/views/basicdashboard2/sheet10?:language=ko-KR&:display_count=n&:origin=viz_share_link"
                />
              )}

              {/* <BasicEmbed /> */}
              {/* <iframe
                  id="inlineFrameExample"
                  title="Inline Frame Example"
                  width="300"
                  height="200"
                  src="file:///Users/suahlee/final_project/magnifier/src/pages/index.html"
                ></iframe> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
