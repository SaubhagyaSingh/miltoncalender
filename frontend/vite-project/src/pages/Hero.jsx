import React, { useState } from 'react';
import calendar from "../../public/icons8-calendar.gif"
import Button from '../components/Button'
import Subtitle from '../components/Subtitle'
import Emojistack from '../components/Emojistack'
import s1 from "../assets/s1.png"
import s2 from "../assets/s2.png"
import Subheading from '../components/Subheading'
import Heading from '../components/Heading'
import Chatbox from '../components/Chatbox'
import f1 from "../assets/f1.png"
import f2 from "../assets/f2.png"
import f3 from "../assets/f3.png"
import f4 from "../assets/f4.png"

import s3 from "../assets/s3.png"
import s4 from "../assets/s4.png"
import s5 from "../assets/s5.png"
import Card from '../components/Card'
import c1 from "../assets/c1.png"
import c2 from "../assets/c2.png"
import c3 from "../assets/c3.png"
import c4 from "../assets/c4.png"
import c5 from "../assets/c5.png"
import c6 from "../assets/c6.png"
import Review from '../components/Review'
import ReviewContainer from '../components/ReviewContainer'
import ToggleButtons from '../components/ToggleButtons';
import ServiceCard from '../components/ServiceCard';
import Dropdown from '../components/Dropdown';
import Footer from '../components/Footer';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { CSSTransition } from 'react-transition-group';




function Hero() {

  const { ref, inView } = useInView({
    triggerOnce: true, // Change this to false if you want the animation to trigger again whenever it comes in view
  });
  useEffect(() => {
    if (inView) {
      document.documentElement.style.scrollBehavior = 'smooth';
    }
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, [inView]);
  const [activeDeal, setActiveDeal] = useState('deal1');

  const deal1Services = [
    { name: 'Service 1', tagline: 'Best for home', cost: 0, features: ['Feature A', 'Feature B'], buttonText: 'Buy Now',payment:'Free Forever',card:'No credit card required.' },
    { name: 'Service 2', tagline: 'Perfect for office', cost: 15, features: ['Feature C', 'Feature D'], buttonText: 'Buy Now' ,payment:'Billed Monthly',card:'7 days trial No credit card required.'},
    { name: 'Service 3', tagline: 'Ideal for travel', cost: 45, features: ['Feature E', 'Feature F'], buttonText: 'Buy Now' ,payment:'Billed Monthly',card:'7 days trial No credit card required.'},
  ];

  const deal2Services = [
    { 
      name: 'Service 4', 
      tagline: 'Affordable', 
      cost: 0, 
      features: ['Feature G', 'Feature H', 'Feature M', 'Feature N'], 
      buttonText: 'Order Now', 
      payment: 'Billed Annually', 
      card: '14 days trial No credit card required.' 
    },
    { 
      name: 'Service 5', 
      tagline: 'Great for businesses', 
      cost: 19, 
      features: ['Feature I', 'Feature J', 'Feature O', 'Feature P'], 
      buttonText: 'Order Now', 
      payment: 'Billed Quarterly', 
      card: '30 days trial No credit card required.' 
    },
    { 
      name: 'Service 6', 
      tagline: 'Premium quality', 
      cost: 49, 
      features: ['Feature K', 'Feature L', 'Feature Q', 'Feature R'], 
      buttonText: 'Order Now', 
      payment: 'Billed Monthly', 
      card: '7 days trial No credit card required.' 
    },
  ];
  const services = activeDeal === 'deal1' ? deal1Services : deal2Services;

  return (
    <div className='mt-24 overflow-x-hidden ' ref={ref}>
      <CSSTransition in={inView} timeout={300} classNames="fade" unmountOnExit>
      
      {/* the central things */}
      <div className='flex gap-1 flex-col justify-center items-center '>
        {/* sub title div */}
        <div className="mt-24">
       <Subheading text="An another way to manage Time." ></Subheading>
        </div>
        {/* title */}
        <div className='flex   text-[42px] font-bold'>
    Your new favorite calendar {"  "} 
    < img src={calendar} className="ml-2 w-12 h-12 mt-2" />
     app
        </div>
        <div className='text-gray-400 text-wrap mt-2 text-center'>
        Here you should focus on how cool your app is.Remember,focus on the benefits for<br></br> your users,not on the features.

        </div>

        <div>
          <Button />
        </div>
        <div>
      <Subtitle></Subtitle>
        </div>
        <div>
          <Emojistack />
        </div>

        <div className='mt-24 h-auto w-[800px]'><img src={s1}></img></div>
        <div className='p-2 mt-36 mb-4'><Subheading text="Our main Features🙇‍♂️"></Subheading></div>
        <div><Heading text="Discover your New"></Heading><Heading text="Superpowers"></Heading></div>

        <div className=' flex items-start mt-36 gap-36'>
          <div className='flex flex-col'>
            <div><Chatbox text="Seamless Scheduling"></Chatbox></div>
            <div className='text-[48px] font-bold leading-[50px]'>Focus on what</div>
            <div className='text-[48px] font-bold leading-[50px]'>matter most for</div>
            <div className='text-[48px] font-bold leading-[50px]'>You</div>
            <div className='overflow-auto mt-4 text-gray-400 text-[20px]'>Effortlessly plan your day with our<br></br>intutive drag-and drop interface.Sync<br></br> with Multiple calender platforms,import<br></br> events from emails, and add participants<br></br> with just a few click</div>
            <div className='flex mt-4'>
              <div><img className="h-16 w-12 mt-8 m-2"
              src={f1}></img></div>
              <div className='text-center flex items-center justify-center bg-[#eed0b6] p-2 rounded-xl font-semibold'> I tested many calender apps<br></br>This app is the best of all!<br></br> it saves me hours of time,<br></br> --Carla Head of finance</div>

            </div>
            </div>
            <div>
              
            </div>
          <div>
            <img className="h-[400px] w-[400px]" src={s2}></img>
          </div>
        </div>


        <div className='mt-64 flex'>
          <div><img className='h-[500px] w-[500px]' src={s3}></img></div>
          <div className='ml-4'>
            <div className='text-black bg-[#eed0b6] text-center text-[16px] p-3 font-bold rounded-full max-w-[250px] max-h-[45px]'>
            Smart Reminders & Task
            </div>        
            <div className='text-[48px] font-bold leading-[50px] '>Never miss an</div>
            <div className='text-[48px] font-bold leading-[50px]'>important deadline</div>
            <div className='text-[48px] font-bold leading-[50px] mb-12'>or event again</div>
            <div className='overflow-auto mt-4 text-gray-400 text-[20px]'>Effortlessly plan your day with our<br></br>intutive drag-and drop interface.Sync<br></br> with Multiple calender platforms,import<br></br> events from emails, and add participants<br></br> with just a few click</div>
            <div className='flex mt-4'>
              <div><img className="h-16 w-12 mt-8 m-2"
              src={f2}></img></div>
              <div className='text-center flex  bg-[#eed0b6] p-2 rounded-xl font-semibold'> I love how user friendly<br></br>This app is its so easy to<br></br> add events and set reminders,<br></br> --Adam entreprenuer</div>

            </div>
          </div>
        </div>



        <div className=' flex items-start mt-36 gap-36'>
          <div className='flex flex-col'>
            <div><Chatbox text="Seamless Scheduling"></Chatbox></div>
            <div className='text-[48px] font-bold'>Focus on what</div>
            <div className='text-[48px] font-bold'>matter most for You</div>
            <div className='overflow-auto mt-4 text-gray-400 text-[20px]'>Effortlessly plan your day with our<br></br>intutive drag-and drop interface.Sync<br></br> with Multiple calender platforms,import<br></br> events from emails, and add participants<br></br> with just a few click</div>
            <div className='flex mt-4'>
              <div><img className="h-16 w-12 mt-8 m-2"
              src={f1}></img></div>
              <div className='text-center flex items-center justify-center bg-[#eed0b6] p-2 rounded-xl font-semibold'> I tested many calender apps<br></br>This app is the best of all!<br></br> it saves me hours of time,<br></br> --Carla Head of finance</div>

            </div>
            </div>
            <div>
              
            </div>
          <div>
            <img className="h-[500px] w-[500px]" src={s4}></img>
          </div>
        </div>

        <div className='mt-64 flex'>
          <div><img className='h-[500px] w-[500px]' src={s5}></img></div>
          <div className='ml-4'>
            <div className='text-black bg-[#eed0b6] text-center text-[16px] p-3 font-bold rounded-full max-w-[250px] max-h-[45px]'>
            Smart Reminders & Task
            </div>        
            <div className='text-[48px] font-bold leading-[50px] '>Never miss an</div>
            <div className='text-[48px] font-bold leading-[50px]'>important deadline</div>
            <div className='text-[48px] font-bold leading-[50px] mb-12'>or event again</div>
            <div className='overflow-auto mt-4 text-gray-400 text-[20px]'>Effortlessly plan your day with our<br></br>intutive drag-and drop interface.Sync<br></br> with Multiple calender platforms,import<br></br> events from emails, and add participants<br></br> with just a few click</div>
            <div className='flex mt-4'>
             
              <div className='text-center flex  bg-[#eed0b6] p-2 rounded-xl font-semibold'> I love how user friendly<br></br>This app is its so easy to<br></br> add events and set reminders,<br></br> --Adam entreprenuer</div>
              <div><img className="h-16 w-12 mt-8 m-2"
              src={f4}></img></div>

            </div>
          </div>
        </div>
        <div className='p-2 mt-64 mb-4'><Subheading text="And so much more ...💼"></Subheading></div>

      <div className='flex flex-col'>
        <div><Heading text="Our Features to make your"></Heading></div>
        <div><Heading text="life Easier"></Heading></div>
        <div className='flex'>
        <div><Card myimg={c1} title="Cross Device Sync" desc="keep your schedule in sync across all your devices,ensuring seamless acess to your calender,events and tasks wherever you go." ></Card></div>
        <div><Card myimg={c2} title="Auto import Event" desc="Automatically import events from emails,social media, and other sources, so you never miss a beat or have to manually input details." titleColor="lightyellow"></Card></div>
        <div><Card myimg={c3} title="Task Delegation" desc="Easily assign tasks to team members,family or friends,promoting shared responsibility and seamless collabration."titleColor="lightblue"></Card></div>
      </div>

      <div className='flex'>
        <div><Card myimg={c4} title="Voice Command Integration" desc="Quickly create events,set reminders, or reschedule appointments with voice commands,thanks to compatibility with popular virtual assistants." titleColor="lightgreen"></Card></div>
        <div><Card myimg={c5} title="Customizable Alerts" desc="Personalize notification types and timings for events,tasks,and goals,ensuring you stay on track and informed without feeling overwhelmed." titleColor="peachpuff"></Card></div>
        <div><Card myimg={c6} title="Privacy Protection" desc="Safeguard your personal information and event details with our robust security measures,including end-to-end encryption and optional passoword protection." titleColor="purple"></Card></div>
      </div>
        </div>

      <div className='mt-12'>
      <Subheading text="They already love our products😍"></Subheading>
      </div>
      <div>
        <div><Heading text="See what our users say"></Heading></div>
        <div><Heading text="about us"></Heading></div>
      </div>

      <div className='m-12'>
      <div className='m-12'>
    <ReviewContainer></ReviewContainer>
      </div>
      <div className='m-12'>
    <ReviewContainer></ReviewContainer>
      </div>
      <div className='m-12'>
    <ReviewContainer></ReviewContainer>
      </div>
      </div>
      <div>
      <Subheading text="Pricing and plans 💰"></Subheading>
      </div>
      
      
      <div>
        <div>
          <Heading text="Find the best plan for"></Heading>
          <Heading text="your needs"></Heading>
        </div>
        <div className="bg-gray-100 min-h-screen flex flex-col items-center py-10">
        <ToggleButtons activeDeal={activeDeal} setActiveDeal={setActiveDeal} />
        <div className="flex  items-center space-y-4">
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} />
          ))}
        </div>
    </div>
      </div>
            <div className='mt-36'><Subheading text="Relevant stuff,bla bla📯"></Subheading></div>
          <div>
            <div><Heading text="Frequently Asked Questions"></Heading></div>
          </div>
          <div>
          <div className='mb-16 mt-12'>
            <Dropdown question="Can i cancel my subscription?"></Dropdown>
          </div>
          <div className='mb-16'>
            <Dropdown question="What happens after my trial Ends?"></Dropdown>
          </div>   <div className='mb-16'>
            <Dropdown question="What payment methods do you offer?"></Dropdown>
          </div>   <div className='mb-16'>
            <Dropdown question="What is your refund Policy?"></Dropdown>
          </div>   <div className='mb-16'>
            <Dropdown question="Do you offer Discounts to Educational Institutions?"></Dropdown>
          </div>
          </div>
          <div className='mt-36'><Subheading text="Last call Baby! 🚀"></Subheading></div>
          <div>
            <div><Heading text="Ready to start?"></Heading></div>
            <div className='text-gray-400 flex text-center text-[20px]'>Here is your last chance to explain how cool your app is. Focus on the benefits for<br></br> your users,not on the features</div>
            <div className='flex items-center justify-center mb-16 mt-16'><Button></Button></div>

            <div className='flex mt-4 ml-12'>
              <div><img className="h-16 w-12 mt-8 m-2"
              src={f2}></img></div>
              <div className='text-center flex items-center justify-center bg-[#eed0b6] p-2 rounded-xl font-bold'> I tested many calender apps.This app is the best of all! it saves me <br></br>hours of time,<br></br> Carla Head of finance</div>

            </div>
          </div>
          <div className='w-full mt-24'>
            <Footer></Footer>
          </div>
      </div>
      </CSSTransition>

    </div>
  )
}

export default Hero
