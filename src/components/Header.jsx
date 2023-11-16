import React from 'react';
import check from '../Layout/AuthPage/images/check.svg';
import arrow from '../Layout/AuthPage/images/arrow.svg';
import bg from '../Layout/AuthPage/images/Rectangle 144.svg';
import fff from '../images/C0D4C3B0-111B-41CF-952D-926464E01F8F.jpg';
import per1 from '../Layout/AuthPage/images/per1.svg'
import per2 from '../Layout/AuthPage/images/per2.svg'
import per3 from '../Layout/AuthPage/images/per3.svg'
import Footer from './Footer';

const Header = () => {
  return (
    <div>
      <div class=" h-full my-20 px-5">
        <div class="text-center items-center">
          <h1 class=" font-bold text-4xl">How it <span class="text-blue-600">Works</span> </h1>
          <p class="font-normal text-lg mt-2.5 text-gray-400">The process of taking an ad and reaching an <span class="text-black">ad-space </span> host.</p>
        </div>
        <div class=" mt-32 mb-4 max-w-full mx-auto max-w-screen-2xl max-auto place-content-center justify-center justify-items-center grid md:grid-cols-2 lg:grid-cols-4 gap-x-20 gap-y-20">
          <div class=" number ease-in duration-700 cursor-pointer hover:shadow-2xl rounded-xl overflow-hidden max-w-xs order-first lg:order-none">
            <div class=" py-5 px-6 sm:px-8">
              <h1 class=" font-bold text-lg border  rounded-full text-center py-2.5 w-12 mb-2.5 ">1</h1>
              <h2 class="text-xl sm:text-2xl text-gray-800 font-semibold mb-3">Search for ad spaces</h2>
              <p class="text-gray-500 -relaxed">Use our search engine to find the best platform for your targeted audience to post your ad. Filter ad spaces based off budget and location</p>
            </div>
          </div>
          <div class="number ease-in duration-700 cursor-pointer hover:shadow-2xl rounded-xl overflow-hidden max-w-xs order-3 md:row-start-1 md:col-start-2 lg:order-none">
            <div class=" py-5 px-6 sm:px-8">
              <h1 class=" font-bold text-lg border  rounded-full text-center py-2.5 w-12 mb-2.5 ">2</h1>
              <h2 class="text-xl sm:text-2xl text-gray-800 font-semibold mb-3">Request contact</h2>
              <p class="text-gray-500 -relaxed">Send a message describing your ad and what you are looking for out of the ad space</p>
            </div>
          </div>
          <div class="number ease-in duration-700 cursor-pointer hover:shadow-2xl rounded-xl overflow-hidden max-w-xs order-5 lg:order-none">
            <div class=" py-5 px-6 sm:px-8">
              <h1 class=" font-bold text-lg border  rounded-full text-center py-2.5 w-12 mb-2.5 ">3</h1>
              <h2 class="text-xl sm:text-2xl text-gray-800 font-semibold mb-3">Come to an agreement</h2>
              <p class="text-gray-500 -relaxed">Disclose ad space details and requirements such as content, posting date, availability, and pricing.</p>
            </div>
          </div>
          <div class="number ease-in duration-700 cursor-pointer hover:shadow-2xl rounded-xl overflow-hidden max-w-xs order-5 lg:order-none ">
            <div class=" py-5 px-6 sm:px-8">
              <h1 class=" font-bold text-lg border  rounded-full text-center py-2.5 w-12 mb-2.5 ">4</h1>
              <h2 class="text-xl sm:text-2xl text-gray-800 font-semibold mb-3">Results</h2>
              <p class="text-gray-500 -relaxed">See your content on their ad space. Submit a review and share your experience.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-sky-100 py-10 md:py-0">
        <div class="md:flex max-w-6xl mx-auto p-6 px-8 md:p-24   md:mb-10 md:px-8  xl:px-5">
          <div class="w-full md:w-1/2 md:ml-8 items-center ">
            <div class="">
              <h1 class="font-bold text-4xl -10">Sell your <span class="text-blue-600">ad space</span></h1>
              <p class="font-normal text-sm -6 mt-4">Sell your ads in 3 simple steps.</p>
            </div>
            <div class="flex font-normal mt-4 text-lg -8">
              <img src={check} alt="" />
              <p class="ml-2.5">Sign up as an space host.</p>
            </div>
            <div class="flex font-normal mt-4 text-lg -8">
              <img src={check} alt="" />
              <p class="ml-2.5">Setup your account and get verified.</p>
            </div>
            <div class="flex font-normal mt-4 text-lg -8">
              <img src={check} alt="" />
              <p class="ml-2.5">Get advertisers to contact you.</p>
            </div>
            <div class="flex mt-4 font-bold text-base -7">
              <span class="cursor-pointer text-blue-600">Get Started</span>
              <img src={arrow} alt="" />
            </div>
          </div>
          <div class="w-full md:w-1/2 xl:px-5">
            <div>
              <section class="duration-700  rounded-lg">
                <div class="card rounded-lg bg-white hover:bg-blue-600 hover:text-white p-4 mt-6 shadow-lg">
                  <div class="content hover:bg-blue-600">
                    <h1 class="font-semibold text-base -7">Sign up as an space host.</h1>
                    <div class="hover_content hover:bg-blue-600 flex">
                      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
                      <div class=" items-center relative">
                        <img class="logo img-fluid  w-96" src={bg} alt="mparticle" />
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section class=" rounded-lg">
                <div class="card rounded-lg bg-white hover:bg-blue-600 hover:text-white p-4 mt-6 shadow-lg">
                  <div class="content hover:bg-blue-600">
                    <h1 class="font-semibold text-base -7">Setup your account and get verified.</h1>
                    <div class="hover_content hover:bg-blue-600 flex">
                      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
                      <div class=" items-center relative">
                        <img class="logo img-fluid  w-96" src={bg} alt="mparticle" />
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section class=" rounded-lg">
                <div class="card rounded-lg bg-white hover:bg-blue-600 hover:text-white p-4 mt-6 shadow-lg">
                  <div class="content hover:bg-blue-600">
                    <h1 class="font-semibold text-base -7">Get advertisers to contact you.</h1>
                    <div class="hover_content hover:bg-blue-600 flex">
                      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
                      <div class=" items-center relative">
                        <img class="logo img-fluid  w-96" src={bg} alt="mparticle" />
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
      <div class="md:flex items-center justify-end max-w-screen-2xl px-8 py-10 md:py-0 mx-auto xl:px-5">
        <div class="md:w-3/5 w-full mb-6 md:mb-0">
          <img class="" src={fff} alt="" />
        </div>
        <div class="md:w-2/5 md:ml-8 items-center ">
          <div class="">
            <h1 class="font-bold text-4xl -10">Why use AdMrt?</h1>
          </div>
          <div class="flex font-normal mt-4 text-lg -8">
            <img src={check} alt="" />
            <p class="ml-2.5">By using our platform we eliminate the middleman, thereby enabling you to directly connect with ad hosts.</p>
          </div>
          <div class="flex font-normal mt-4 text-lg -8">
            <img src={check} alt="" />
            <p class="ml-2.5">Currently agencies take 30-50% of revenue from publishers. We take much less fees than current agencies</p>
          </div>
          <div class="flex font-normal mt-4 text-lg -8">
            <img src={check} alt="" />
            <p class="ml-2.5">Streamlined ad placement: discuss pricing and details with ad hosts and place orders conveniently.</p>
          </div>
        </div>
      </div>

      <div class="bg-sky-100 py-20">
        <div class="block justify-center items-center justify-end max-w-screen-2xl px-8 mx-auto xl:px-5">
          <div class="block text-center items-center justify-center">
            <h1 class=" text-5xl font-bold">Testimo<span class="text-blue-600">nials</span></h1>
            <p class="text-lg font-normal mt-4 text-gray-500">See what our property managers, landlords, and tenants have to say</p>
          </div>
          <div class=" text-center">
            <p class="text-xl font-medium mt-10 max-w-3xl mx-auto">“Admrt is the platform I go to on almost a daily basis for 2nd words and ads shopping, or to just look at dream homes in new areas. Thanks for fun home shopping and comparative analyzing, Admrt!”</p>
            <h3 class=" text-lg font-normal mt-10">Mira Culos, <span class="text-gray-400">Renter</span></h3>
          </div>
          <div class="flex justify-center mt-10">
            <div class="flex mb-10 gap-5">
              <img src={per1} alt="" />
              <img src={per2} alt="" />
              <img src={per3} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div>
 <Footer/>

      </div>
    </div>
  )
}

export default Header
