import about from '../imgs/about.png'


const About = ()=>{
    return (
        <div id='mercy'>
            <div class='grid grid-cols-2  bg-white'>
                <img src={about} class='bg-primary pt-20 pr-20 pb-20 pl-5'></img>
                <div class='h-48 w-full '>
                        <h1 class='text-primary text-4xl font-bold bg-white pt-10 pb-5'> About Us</h1>
                        <p class='bg-white  text-gray-600 text-xl'>
                        Molto terfo is an online market place for freelance services. Our company connects freelancers to freelance service seeking companies/individuals. And remote freelancers with digital skills to people seeking their services across Ethiopia and abroad (soon).
<br/>
We also provide personalized Full-time/Part-time jobs on our website.
<br/>

Moreover we give career coaching and training to recent graduates or for anyone who’s looking into approaching their career strategically
                        </p>
                        <div class='flex flex-wrap bg-white p-10'>
                      <a href='#' class='hover:bg-primary hover:text-white transition-colors duration-200 bg-white text-primary border-2 border-primary inline-flex items items-center md:mb-2 lg:mb-0  p-1 rounded-md drop-shadow-lg'> Learn More
                      </a>
                    </div>
                </div>
            </div>
            <div class=''  >
                <h1 class='text-center text-primary mt-30 mb-10 mt-20 pt-20 text-5xl font-bold'> OUR MISSION</h1>
                <p class=' text-center mb-20 pb-20 pl-20 ml-20 pr-20 mr-20 text-gray-700 text-xl '>At Molto terfo our goal is to solve Ethiopia’s unemployment issue one person at a time by providing opportunities for anyone to hire any freelancer at any time with affordable prices.
                 We hope to create a marketplace where anyone can sell their skill or talent without worrying about where and how to sell it. And where service seekers and Buyers never have to ramble to find the best talent to complete a task or employ someone with specific skills.</p>
            
            </div>
            
        </div>
    )
}
export default About