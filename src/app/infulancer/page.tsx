  "use client";

  import { NextPage } from 'next';
  import React, { useState, useEffect, useRef } from 'react';
  import Head from 'next/head';
  import Image from 'next/image';
  import { motion, useInView } from 'framer-motion';
import InfiniteSlider from '@/components/InfiniteSlider/InfiniteSlider';
import Typewriter from '@/components/typewriter/typewriter';

  // --- Reusable Notification Card Component ---
  const NotificationCard = ({ app, user, message, time, icon }: { app: string, user: string, message: string, time: string, icon: string }) => (
    <div className="bg-[#1C1C1E] p-3 rounded-lg flex items-start gap-3 w-full">
      {/* <Image src={icon} alt={`${app} logo`} width={32} height={32} className="rounded-md flex-shrink-0" /> */}
      <div className="flex-1 overflow-hidden">
        <div className="flex justify-between items-baseline">
          <p className="font-bold text-sm text-white truncate">{app}</p>
          <p className="text-xs text-slate-500 flex-shrink-0">{time}</p>
        </div>
        <p className="text-sm text-white font-semibold truncate">{user}</p>
        <p className="text-sm text-slate-400 truncate">{message}</p>
      </div>
    </div>
  );


  // --- Reusable Typewriter Component ---
  // This component starts typing when it scrolls into view.
  // const Typewriter = ({ textToType, delay = 150, className = "" }: { textToType: string; delay?: number; className?: string }) => {
  //     const [currentText, setCurrentText] = useState('');
  //     const [currentIndex, setCurrentIndex] = useState(0);
  //     const containerRef = useRef(null);
  //     const isInView = useInView(containerRef, { once: true, amount: 0.5 });

  //     useEffect(() => {
  //         if (isInView && currentIndex < textToType.length) {
  //             const timeout = setTimeout(() => {
  //                 setCurrentText(prevText => prevText + textToType[currentIndex]);
  //                 setCurrentIndex(prevIndex => prevIndex + 1);
  //             }, delay);
  //             return () => clearTimeout(timeout);
  //         }
  //     }, [currentIndex, delay, textToType, isInView]);

  //     return <span ref={containerRef} className={className}>{currentText}<span className="blinking-cursor">|</span></span>;
  // };


  // --- Reusable Card Component for the Slider ---
  const ProblemCard = ({ bgColor, name, heading, imageUrl }: { bgColor: string; name: string; heading: string; imageUrl: string }) => {
      return (
          // flex-shrink-0 is crucial to prevent cards from shrinking
          <div className="relative w-[200px] h-[200px] flex-shrink-0 rounded-xl overflow-hidden shadow-lg">
              
              {/* Background Color (as requested for now) */}
              <div className={`absolute inset-0 ${bgColor}`}></div>

              {/* 
                  Future Developer: Uncomment the Image tag below and provide a valid src to use an image background.
                  The parent div is already set up for it.
              */}
              {/*
              <Image
                  src={imageUrl}
                  alt={heading}
                  layout="fill"
                  objectFit="cover"
                  className="opacity-80" // Adjust opacity as needed
              />
              */}
              
              {/* Gradient overlay to ensure text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

              {/* Content at the bottom */}
              <div className="absolute bottom-0 left-0 p-4 w-full text-white">
                  {/* 
                      Custom text-shadow applied using Tailwind's arbitrary properties.
                      This adds a soft black shadow for better contrast.
                  */}
                  <h3 className="font-bold text-lg [text-shadow:0_2px_4px_rgba(0,0,0,0.6)]">{name}</h3>
                  <p className="text-sm text-slate-200 [text-shadow:0_2px_4px_rgba(0,0,0,0.6)]">{heading}</p>
              </div>
          </div>
      );
  };

  // --- Main Page Component ---
  const HeroSectionPage: NextPage = () => {
    
  const marqueeRef = useRef<HTMLDivElement>(null);
  const [marqueeWidth, setMarqueeWidth] = useState(0);
  
    useEffect(() => {
      if (marqueeRef.current) {
        setMarqueeWidth(marqueeRef.current.scrollWidth / 2); // only original content
      }
    }, []);

    // Data for the background cards
    const notifications = [
      { app: "Discord", user: "Jessica Miller", message: "Hey, are you free tonight?", time: "5m", icon: "https://placehold.co/32x32/5865F2/FFFFFF?text=D" },
      { app: "Slack", user: "Operations Channel", message: "New campaign assets are ready for review.", time: "8m", icon: "https://placehold.co/32x32/E01E5A/FFFFFF?text=S" },
      { app: "Instagram", user: "David Wilson", message: "Commented on your photo: 'Amazing shot!'", time: "12m", icon: "https://placehold.co/32x32/E1306C/FFFFFF?text=I" },
      { app: "Messages", user: "Mom", message: "Call me when you get a chance", time: "20m", icon: "https://placehold.co/32x32/4CD964/FFFFFF?text=M" },
      { app: "LinkedIn", user: "Recruiter", message: "New opportunity for Project Management", time: "45m", icon: "https://placehold.co/32x32/0A66C2/FFFFFF?text=Li" },
      { app: "Facebook", user: "John Doe", message: "Tagged you in a photo", time: "1h", icon: "https://placehold.co/32x32/1877F2/FFFFFF?text=F" },
      { app: "WhatsApp", user: "Team Project", message: "Meeting is moved to 3pm", time: "2h", icon: "https://placehold.co/32x32/25D366/FFFFFF?text=W" },
      { app: "Twitter", user: "TechCrunch", message: "Breaking: Major traffic jam downtown...", time: "3h", icon: "https://placehold.co/32x32/1DA1F2/FFFFFF?text=T" },
    ];

    // Animation variants for the container to orchestrate staggered children
    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 0.2, // Final opacity for the container
        transition: {
          staggerChildren: 0.1, // Stagger delay between each child
          duration: 2.5, // Total duration for container opacity to reach 0.4
        },
      },
    };

    // Animation variants for each individual card
    const itemVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    // A placeholder for a Brand Logo component
  const BrandLogo = ({ className = '' }: { className?: string }) => (
  <div className={`text-2xl font-bold text-white ${className}`}>
  {/* Creator<span className="text-cyan-400">Hub</span> */}
  </div>
  );

      const problemCardsData = [
          { bgColor: "bg-blue-800", name: "Time", heading: "Slipping Away", imageUrl: "/images/problem/time.jpg" },
          { bgColor: "bg-purple-800", name: "Sleep", heading: "Sleepless Nights", imageUrl: "/images/problem/sleep.jpg" },
          { bgColor: "bg-red-800", name: "Stress", heading: "Rising Levels", imageUrl: "/images/problem/stress.jpg" },
          { bgColor: "bg-green-800", name: "Focus", heading: "Constantly Broken", imageUrl: "/images/problem/focus.jpg" },
          { bgColor: "bg-orange-800", name: "Health", heading: "Neglected", imageUrl: "/images/problem/health.jpg" },
          { bgColor: "bg-indigo-800", name: "Relationships", heading: "Feeling Distant", imageUrl: "/images/problem/relations.jpg" },
      ];
      
      // We duplicate the array to create a seamless loop for the marquee
      const duplicatedCards = [...problemCardsData, ...problemCardsData];

    return (
      <>
        <Head>
          <title>Hero Section - Distractions</title>
        </Head>
  {/* --- Header --- */}
  <header className="fixed w-100 top-0 z-50 bg-[#000] backdrop-blur-sm">
  <div className="container mx-auto px-6 py-4 flex justify-between items-center">
  <BrandLogo />
  <a
  href="#join"
  className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300 text-sm md:text-base"
  >
  Join For Free
  </a>
  </div>
  </header>
        <div className=" text-white font-sans">
          {/* --- Hero Section --- */}
          <section className="bg-black relative w-full h-screen min-h-[600px] flex items-center justify-center text-center overflow-hidden" style={{ flexWrap: 'wrap' }}>
            
            {/* Background Grid with Staggered Animation */}
            <motion.div
              className="absolute inset-0 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4 [mask-image:radial-gradient(ellipse_at_center,white_30%,transparent_100%)]"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {/* We map a larger array to ensure the grid is filled */}
              {[...notifications, ...notifications, ...notifications].slice(0, 16).map((item, i) => (
                <motion.div key={i} variants={itemVariants}>
                  <NotificationCard {...item} />
                </motion.div>
              ))}
            </motion.div>

            {/* Foreground Content */}
            <div className="relative z-10 p-6">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
                className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[62px]
  "
              >
                  Turn Your Influence into <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                  <h1>
        <Typewriter 
          words={['Hello', 'Mak', 'How']} 
          typingSpeed={100}
          deletingSpeed={50}
          delayBetweenWords={1500}
        />
      </h1>
                  </span>
              </motion.h1>
            </div>
            <div className="card-hero flex justify-center items-center">
              <h2>
              Join Now
              </h2>
              <div className="card-hero-content">
           
              </div>
            </div>

          </section>

          {/* 2nd section */}
  <section className=" bg-black py-2 md:py-28 overflow-hidden">
              <div className="container mx-auto px-6 trusted_partner">
                  <motion.h2
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ duration: 0.7 }}
                      className="text-4xl md:text-5xl font-bold tracking-tight text-center mb-10 mt-10 text-white">
                      Trusted by Brands
                  </motion.h2>
              </div>
              
              {/* Automated Marquee Container */}
              <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                  className="mt-0"
              >
                  {/* 
                      The marquee effect is created with these key components:
                      - w-full inline-flex: The container for the moving items.
                      - animate-marquee-slow: The custom CSS animation we defined.
                      - Duplicating content: Ensures a seamless loop.
                      - [mask-image]: Fades the edges for a clean look.
                  */}
{/* <div className="overflow-hidden w-full relative">
  <div
    ref={marqueeRef}
    className="flex"
    style={{
      animation: marqueeWidth
        ? `scroll-marquee ${marqueeWidth / 200}s linear infinite`
        : undefined,
    }}
  >
    {[...problemCardsData, ...problemCardsData].map((card, i) => (
      <div key={i} className="w-[200px] mx-2 shrink-0">
        <ProblemCard {...card} />
      </div>
    ))}
  </div>
</div> */}

<div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      backgroundColor: 'transparent'
    }}>
      <InfiniteSlider 
        cards={['https://cdn.magicui.design/companies/Google.svg', 'https://cdn.magicui.design/companies/YouTube.svg', 'https://cdn.magicui.design/companies/Instagram.svg', 'https://cdn.magicui.design/companies/Spotify.svg', 'https://cdn.magicui.design/companies/Amazon.svg', 'https://cdn.magicui.design/companies/Netflix.svg']}
        speed={.5}
        cardWidth={130}
        gap={10}
      />
    </div>
              </motion.div>
          </section>

          {/* 3rd section */}
<div className="bg-black text-white">
          <section className="py-20 sm:py-28">
        <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
                <p className="text-base font-semibold leading-7 text-cyan-400">The Blueprint to Success</p>
                <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Your Journey from Creator to Earner</h2>
                <p className="mt-6 text-lg leading-8 text-gray-400">We've simplified the path to monetization. Our AI-driven platform makes finding and executing brand deals seamless and profitable.</p>
            </div>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                <div className="flex flex-col items-center">
                    <div className="flex items-center justify-center h-20 w-20 rounded-full bg-gray-800 border-2 border-cyan-400/30 shadow-lg shadow-cyan-500/10">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                    <h3 className="mt-6 text-xl font-semibold">1. Discover Promotions</h3>
                    <p className="mt-2 text-gray-400">Our AI matches your unique style with top brands. Browse a personalized feed of high-paying campaigns you'll love.</p>
                </div>

                <div className="flex flex-col items-center">
                    <div className="flex items-center justify-center h-20 w-20 rounded-full bg-gray-800 border-2 border-cyan-400/30 shadow-lg shadow-cyan-500/10">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.5L15.232 5.232z" />
                        </svg>
                    </div>
                    <h3 className="mt-6 text-xl font-semibold">2. Create & Publish</h3>
                    <p className="mt-2 text-gray-400">Accept a deal, create authentic content that resonates with your audience, and publish. No complex contracts, just creativity.</p>
                </div>

                <div className="flex flex-col items-center">
                    <div className="flex items-center justify-center h-20 w-20 rounded-full bg-gray-800 border-2 border-cyan-400/30 shadow-lg shadow-cyan-500/10">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                    </div>
                    <h3 className="mt-6 text-xl font-semibold">3. Get Paid Instantly</h3>
                    <p className="mt-2 text-gray-400">Once your promotion is live, get paid directly to your account. Fast, secure, and transparent payouts you can rely on.</p>
                </div>
            </div>
        </div>
    </section>


    <section className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
        <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Don't Just Take Our Word For It</h2>
                <p className="mt-6 text-lg leading-8 text-gray-400">See what top creators are saying about their success on our platform.</p>
            </div>
            
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                <div className="flex flex-col pb-10 sm:pb-16 lg:pb-0 lg:pr-8 xl:pr-20">
                    <figure className="mt-10 flex flex-auto flex-col justify-between">
                        <blockquote className="text-lg leading-8">
                            <p>"This platform completely changed my monetization game. The AI matching is scary good—it finds brands that are a perfect fit for my audience, and I'm earning more than ever before."</p>
                        </blockquote>
                        <figcaption className="mt-10 flex items-center gap-x-6">
                            {/* <img className="h-12 w-12 rounded-full bg-gray-800 object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=128&q=80" alt="Creator testimonial photo"> */}
                            <div className="text-base">
                                <div className="font-semibold">Alex Chen</div>
                                <div className="mt-1 text-gray-400">@alexchen_tech</div>
                            </div>
                        </figcaption>
                    </figure>
                </div>
                <div className="flex flex-col border-t border-white/10 pt-10 sm:pt-16 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0 xl:pl-20">
                    <figure className="mt-10 flex flex-auto flex-col justify-between">
                        <blockquote className="text-lg leading-8">
                            <p>"I was tired of endless emails and negotiations. Now, I find a campaign, create content, and get paid. It's that simple. The time I've saved is invaluable, letting me focus on what I love: creating."</p>
                        </blockquote>
                        <figcaption className="mt-10 flex items-center gap-x-6">
                            {/* <img className="h-12 w-12 rounded-full bg-gray-800 object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=128&q=80" alt="Creator testimonial photo"> */}
                            <div className="text-base">
                                <div className="font-semibold">Jenna Rodriguez</div>
                                <div className="mt-1 text-gray-400">@jennas_journeys</div>
                            </div>
                        </figcaption>
                    </figure>
                </div>
            </div>
        </div>
    </section>


    <section className="bg-black/20 py-20 sm:py-28">
        <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
                <p className="text-base font-semibold leading-7 text-cyan-400">Your Unfair Advantage</p>
                <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Built for the Modern Creator</h2>
                <p className="mt-6 text-lg leading-8 text-gray-400">We're more than a marketplace; we're your partner in growth. Here's what sets us apart.</p>
            </div>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="p-8 rounded-2xl bg-gray-800/50 border border-white/10 transform hover:-translate-y-2 transition-transform duration-300 ease-in-out">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-cyan-500/10">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                           <path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                    </div>
                    <h3 className="mt-6 font-semibold">AI-Powered Matching</h3>
                    <p className="mt-2 text-gray-400">Our intelligent algorithm connects you with brand deals that are perfectly aligned with your audience and content niche.</p>
                </div>
                <div className="p-8 rounded-2xl bg-gray-800/50 border border-white/10 transform hover:-translate-y-2 transition-transform duration-300 ease-in-out">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-cyan-500/10">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                           <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <h3 className="mt-6 font-semibold">Guaranteed Payments</h3>
                    <p className="mt-2 text-gray-400">Funds are held in escrow and released to you instantly upon campaign completion. No more chasing invoices.</p>
                </div>
                {/* <!-- Feature 3 --> */}
                <div className="p-8 rounded-2xl bg-gray-800/50 border border-white/10 transform hover:-translate-y-2 transition-transform duration-300 ease-in-out">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-cyan-500/10">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                    </div>
                    <h3 className="mt-6 font-semibold">Transparent Analytics</h3>
                    <p className="mt-2 text-gray-400">Track your campaign performance in real-time with a clear, easy-to-understand dashboard. Know your impact.</p>
                </div>
            </div>
        </div>
    </section>

    {/* <!-- 
      FOOTER: Clean & Professional
      This footer is comprehensive yet clean. It provides all necessary links, social proof, 
      and contact points in a well-organized, multi-column layout. The design is modern and reinforces 
      the professional identity of the platform.
    --> */}
    <footer className="bg-gray-900 border-t border-white/10">
        <div className="container mx-auto px-6 py-12 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
                <div className="col-span-2 lg:col-span-1">
                    <a href="#" className="text-2xl font-bold">
                        <span className="text-white">Ad</span><span className="text-cyan-400">AI</span>
                    </a>
                    <p className="mt-4 text-gray-400">The smartest way for creators to partner with brands.</p>
                </div>
                <div>
                    <h3 className="text-sm font-semibold leading-6">Solutions</h3>
                    <ul role="list" className="mt-4 space-y-2">
                        <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">For Creators</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">For Brands</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Analytics</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-sm font-semibold leading-6">Company</h3>
                    <ul role="list" className="mt-4 space-y-2">
                        <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">About Us</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Careers</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Blog</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-sm font-semibold leading-6">Legal</h3>
                    <ul role="list" className="mt-4 space-y-2">
                        <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Privacy</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">Terms</a></li>
                    </ul>
                </div>
            </div>
            <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between">
                <p className="text-xs leading-5 text-gray-400">© 2023 Ad.AI, Inc. All rights reserved.</p>
                <div className="flex space-x-6 mt-4 sm:mt-0">
                    <a href="#" className="text-gray-500 hover:text-cyan-400">
                        <span className="sr-only">Twitter</span>
                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                        </svg>
                    </a>
                    <a href="#" className="text-gray-500 hover:text-cyan-400">
                        <span className="sr-only">Instagram</span>
                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.013-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.345 2.525c.636-.247 1.363-.416 2.427-.465C9.792 2.013 10.146 2 12.315 2zM12 7a5 5 0 100 10 5 5 0 000-10zm0-2a7 7 0 110 14 7 7 0 010-14zm4.5-1.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" clip-rule="evenodd" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    </footer>
  </div>
        </div>
      </>
    );
  };

  export default HeroSectionPage;