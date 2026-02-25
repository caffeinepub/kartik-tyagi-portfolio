import { useEffect, useState } from 'react';

export const useCounterAnimation = (
  target: number,
  duration: number = 2000,
  isVisible: boolean = false,
  format: 'number' | 'currency' | 'decimal' = 'number'
) => {
  const [count, setCount] = useState('0');

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = target * easeOutQuart;

      if (format === 'currency') {
        setCount(Math.floor(currentCount).toLocaleString('en-IN'));
      } else if (format === 'decimal') {
        setCount(currentCount.toFixed(1));
      } else {
        setCount(Math.floor(currentCount).toLocaleString('en-IN'));
      }

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        if (format === 'currency') {
          setCount(target.toLocaleString('en-IN'));
        } else if (format === 'decimal') {
          setCount(target.toFixed(1));
        } else {
          setCount(target.toLocaleString('en-IN'));
        }
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [target, duration, isVisible, format]);

  return count;
};
