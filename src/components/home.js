import React from 'react';
import addis from '../../src/imgs/addis.jpg'
import {Link } from 'react-router-dom'
import '../index.css'
function Home() {
  return (
    <div class=' bg-white' className='Blogs'>
        <section class ='md:h-full flex items-center text-gray-600'>
          <div class='container px-5 py-24 mx-auto '>
            <div center='text-center mb-12'>
              <h5 class='text-base md:text-lg text-dark mb-1'>Recent</h5>
              <h1 class='text-4xl md:text-6xl text-primary font-semibold'>Blogs</h1>
            </div>
            <div class='flex flex-wrap m-4 '>
              <div class='p-4 sm:w-1/2 lg:w-1/3 hover:scale-110 transiton:all'>
                <div class='h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden bg-white shadow-xl'>
                  <img src='https://cdn.pixabay.com/photo/2016/06/13/09/57/meeting-1453895__340.png' alt='image' class='lg:h-72 md:h-48 w-full
                  object-cover object-center'/>
                  <div class='p-6 transition transform duration-300 ease-in bg-white'>
                        <h2 class='text-base font-medium text-primary mb-1 bg-white'>October 29, 2021</h2>
                        <h1 class='text-2xl font-semibold m-3 text-primary bg-white'>Team work is Importamt</h1>
                        <p class='leading-relaxed mb-3 bg-white'>A crime has taken place and the detective needs your help. The detective gave you the crime scene report, but you somehow lost it.</p>
                    <div class='flex items-center flex-wrap bg-white'>
                      <a href='#' class='hover:bg-primary hover:text-white transition-colors duration-200 bg-white text-primary border-2 border-primary inline-flex items items-center md:mb-2 lg:mb-0  p-1 rounded-md drop-shadow-lg'> Read more
                    
                      </a>
                    </div>
                  </div>

                </div>

              </div>
              <div class='p-4 sm:w-1/2 lg:w-1/3 hover:scale-110 transform transiton:all'>
                <div class='h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden shadow-xl'>
                  <img src='https://images.unsplash.com/photo-1487528278747-ba99ed528ebc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGpvYnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60' alt='image' class='lg:h-72 md:h-48 w-full
                  object-cover object-center'/>
                  <div class='p-6 transition duration-300 ease-in bg-white'>
                        <h2 class='text-base font-medium text-primary mb-1 bg-white'>October 29, 2021</h2>
                        <h1 class='text-2xl font-semibold m-3 text-primary bg-white'>Cities are crowded</h1>
                        <p class='leading-relaxed mb-3 bg-white'>A crime has taken place and the detective needs your help. The detective gave you the crime scene report, but you somehow lost it. </p>
                    <div class='flex items-center flex-wrap bg-white'>
                      <a href='#' class=' hover:bg-primary hover:text-white transition-colors duration-200 bg-white text-primary inline-flex items items-center md:mb-2 lg:mb-0 bg-white  border-2 border-primary p-1 rounded-md drop-shadow-lg'> Read more
                      </a>
                    </div>
                  </div>

                </div>

              </div>
              <div class='p-4 sm:w-1/2 lg:w-1/3 hover:scale-110 transform transition:all'>
                <div class='h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden shadow-xl'>
                  <img src='https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8am9ifGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60' alt='image' class='lg:h-72 md:h-48 w-full
                  object-cover object-center'/>
                  <div class='p-6  transition duration-300 ease-in bg-white'>
                        <h2 class='text-base font-medium text-primary mb-1 bg-white'>October 29, 2021</h2>
                        <h1 class='text-2xl font-semibold m-3 text-primary bg-white'>Cities are crowded</h1>
                        <p class='leading-relaxed mb-3 bg-white'>A crime has taken place and the detective needs your help. The detective gave you the crime scene report, but you somehow lost it. </p>
                    <div class='flex items-center flex-wrap bg-white'>
                      <a href='#' class='hover:bg-primary hover:text-white transition-colors duration-200 bg-white text-primary inline-flex items items-center md:mb-2 lg:mb-0 bg-white border-2 border-primary p-1 rounded-md drop-shadow-lg'> Read more
                     
                      
                      </a>
                    </div>
                  </div>

                </div>

              </div>

            </div>
           
            
            
          </div>
        </section>
      
    </div>
 
  )
  }
export default Home
