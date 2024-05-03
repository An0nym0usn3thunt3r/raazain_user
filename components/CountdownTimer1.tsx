'use client'
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { Card, CardBody } from '@nextui-org/react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer: React.FC<{ targetDate: Date }> = ({ targetDate }) => {
  const calculateTimeLeft = (): TimeLeft => {
    const difference = +targetDate - +new Date();
    let timeLeft: TimeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const { days, hours, minutes, seconds } = timeLeft;

  return (
    <section className='border-primary p-3 flex flex-row justify-center'>
      <Card >
        <CardBody className='flex flex-row gap-x-10 '>
      <div className='flex flex-col items-center'>
        <h1 className='text-2xl text-primary font-medium'>{days}</h1>
        <p className='text-gray-700 font-medium'>Days</p>
      </div>
      <div className='flex flex-col items-center'>
        <h1 className='text-2xl text-primary font-medium'>{hours}</h1>
        <p className='text-gray-700 font-medium'>Hours</p>
      </div>
      <div className='flex flex-col items-center'>
        <h1 className='text-2xl text-primary font-medium'>{minutes}</h1>
        <p className='text-gray-700 font-medium'>Minutes</p>
      </div>
      <div className='flex flex-col items-center'>
        <h1 className='text-2xl text-primary font-medium'>{seconds}</h1>
        <p className='text-gray-700 font-medium'>Seconds</p>
      </div>
      </CardBody>
      </Card>
    </section>
  );
};

export default dynamic(() => Promise.resolve(CountdownTimer), {ssr: false})