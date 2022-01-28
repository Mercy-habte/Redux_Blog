import react from 'react'
import Typical from 'react-typical'

const Main =()=>{
    return <div>
        <div class="bg-gray-50 min-h-screen flex items-center justify-center px-16  border-b-2">
  <div class="relative w-full max-w-lg">
  <div class='relative w-full pt-3 pb-3 bg-white bg-opacity-0'>
    <h1 class='text-7xl m-20 mb-5 font-bold text-dark text-center'>PLATFORM IN THE MAKING</h1>
        <p class='text-center text-primary text-4xl '> FOR {''}
        <Typical class='text-dark'
    loop={Infinity}
    wrapper='b'
    steps={[
        'FREELANCERS.',
        2000,
        'SMALL BUISNESSES.',
        2000,
        'REMOTE WORKERS.',
        2000,
        'JOB SEEKERS.',
        2000,
        'STUDENTS.',
        2000
    ]}/>
    </p>
    </div>
    <div class="absolute top-0 -left-4 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
    <div class="absolute top-0 -right-4 w-72 h-72 bg-gray-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
    <div class="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
   
    
   
        
  </div>
</div>

</div> 
}

export default Main