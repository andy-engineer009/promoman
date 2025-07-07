'use client'
import React, { useEffect, useRef } from 'react';
import styles from './InfiniteSlider.module.css'; // CSS module for styling
import Image from 'next/image';

interface InfiniteSliderProps {
  cards?: string[]; // Custom cards can be passed as props
  speed?: number; // Scroll speed (pixels per frame)
  cardWidth?: number; // Width of each card
  gap?: number; // Gap between cards
}

const InfiniteSlider: React.FC<InfiniteSliderProps> = ({
  // cards = ['/img/you.png', '/img/tiltok.png', '/img/rdit.png', '/img/linked.png', '/img/linked.png', '/img/linked.png'],
  cards = ['https://cdn.magicui.design/companies/Google.svg', 'https://cdn.magicui.design/companies/YouTube.svg', 'https://cdn.magicui.design/companies/Instagram.svg', 'https://cdn.magicui.design/companies/Spotify.svg', 'https://cdn.magicui.design/companies/Amazon.svg', 'https://cdn.magicui.design/companies/Netflix.svg'],

  speed = 1,
  cardWidth = 100,
  gap = 10,
}) => {
  const sliderTrackRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | undefined>(undefined);
  const positionRef = useRef<number>(0);
  const isPausedRef = useRef<boolean>(false);

  // Helper function to validate and format URLs
  const getValidImageUrl = (url: string): string => {
    try {
      // If it's already a valid URL, return as is
      new URL(url);
      return url;
    } catch {
      // If it's a relative path, ensure it starts with /
      if (url.startsWith('/')) {
        return url;
      }
      // If it's a relative path without /, add it
      return `/${url}`;
    }
  };

  // Debug: Log the processed URLs
  // useEffect(() => {
  //   console.log('InfiniteSlider cards:', cards);
  //   cards.forEach((card, index) => {
  //     const processedUrl = getValidImageUrl(card);
  //     console.log(`Card ${index}:`, card, '→', processedUrl);
  //   });
  // }, [cards]);

  useEffect(() => {
    const sliderTrack = sliderTrackRef.current;
    if (!sliderTrack) return;

    // Calculate total width of original cards
    const sliderWidth = (cardWidth + gap) * cards.length;

    const animate = () => {
      if (!isPausedRef.current) {
        positionRef.current -= speed;
        
        // Reset position seamlessly when reaching the end
        if (Math.abs(positionRef.current) >= sliderWidth) {
          positionRef.current = 0;
        }

        if (sliderTrack) {
          sliderTrack.style.transform = `translateX(${positionRef.current}px)`;
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    // Start animation
    animationRef.current = requestAnimationFrame(animate);

    // Cleanup on unmount
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [cards.length, cardWidth, gap, speed]);

  // Pause on hover/touch
  // const handlePause = () => isPausedRef.current = true;
  // const handleResume = () => isPausedRef.current = false;

  return (
    <div className={styles.sliderContainer}>
      <div 
        className={styles.sliderTrack} 
        ref={sliderTrackRef}
            // onMouseEnter={handlePause}
            // onMouseLeave={handleResume}
            // onTouchStart={handlePause}
            // onTouchEnd={handleResume}
      >
        {/* Original cards */}
        {cards.map((card, index) => {
          
          return (
              <div key={`original-${index}`} className= {`${styles.sliderCard} ${styles.img}`} style={{ width: cardWidth }}>
              <Image 
                src={card} 
                alt={`Card ${index + 1}`} 
                width={120} 
                height={120}
                onLoad={() => console.log(`Image loaded successfully: ${card}`)}
           
              />
            </div>
          );
        })}
        {/* Cloned cards for seamless loop */}
        {cards.map((card, index) => {
          // const imageUrl = getValidImageUrl(card);
          // const isExternal = card.startsWith('http');
          
          return (
            <div key={`clone-${index}`} className={`${styles.sliderCard} ${styles.img}`} style={{ width: cardWidth }}>
              <Image 
                src={card} 
                alt={`Card ${index + 1}`} 
                width={120} 
                height={120}
                onLoad={() => console.log(`Image loaded successfully: ${card}`)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default InfiniteSlider;