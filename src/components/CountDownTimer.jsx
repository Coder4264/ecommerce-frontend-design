import { useCallback, useEffect, useState, useRef } from "react";
export default function CountDownTimer() {
    const [countDownTime, setCountDownTime] = useState({
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
    });
    
    const intervalRef = useRef(null);
    
    const getTimeDifference = (countDownDate) => {
        const currentTime = new Date().getTime();
        const timeDifference = countDownDate - currentTime;
    
        let days = Math.floor(timeDifference / (24 * 60 * 60 * 1000));
        let hours = Math.floor((timeDifference % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60));
        let minutes = Math.floor((timeDifference % (60 * 60 * 1000)) / (1000 * 60));
        let seconds = Math.floor((timeDifference % (60 * 1000)) / 1000);
    
        // Pad single-digit values with leading zeros
        days = days >= 10 ? days : `0${days}`;
        hours = hours >= 10 ? hours : `0${hours}`;
        minutes = minutes >= 10 ? minutes : `0${minutes}`;
        seconds = seconds >= 10 ? seconds : `0${seconds}`;
    
        return { days, hours, minutes, seconds };
    };
    
    const startCountDown = useCallback(() => {
        const countDownDate = new Date("2025-7-10").getTime();
    
        intervalRef.current = setInterval(() => {
            const timeValues = getTimeDifference(countDownDate);
    
            // Only update the state if the countdown values have changed
            setCountDownTime((prevTime) => {
                if (
                    prevTime.days !== timeValues.days ||
                    prevTime.hours !== timeValues.hours ||
                    prevTime.minutes !== timeValues.minutes ||
                    prevTime.seconds !== timeValues.seconds
                ) {
                    return timeValues;
                }
                return prevTime; // No update if values haven't changed
            });
        }, 1000);
    }, []);
    
    useEffect(() => {
        startCountDown();
    
        return () => clearInterval(intervalRef.current); // Cleanup on unmount
    }, [startCountDown]);
    return (
        <div className="">
            <div className="flex flex-col items-center justify-center w-full h-full gap-4 sm:gap-8">

                <div className="flex justify-center gap-1 sm:gap-2">
                    <div className="flex flex-col relative bg-gray-800 text-white p-1 md:p-2 md:rounded-sm">
                        <div className="flex justify-center items-center ">

                            <span className="text-sm md:text-lg font-medium text-white">
                                {countDownTime?.days}
                            </span>
                        </div>
                        <span className="text-white text-xs text-center ">
                            {countDownTime?.days == 1 ? "Day" : "Days"}
                        </span>
                    </div>
                    <div className="flex flex-col relative bg-gray-800 text-white p-1 md:p-2 md:rounded-sm">
                        <div className="flex justify-center items-center">
                            <span className="text-sm md:text-lg font-medium text-white">
                                {countDownTime?.hours}
                            </span>
                        </div>
                        <span className="text-white text-xs text-center">
                            {countDownTime?.hours == 1 ? "Hour" : "Hours"}
                        </span>
                    </div>
                    <div className="flex flex-col relative bg-gray-800 text-white p-1 md:p-2 md:rounded-sm">
                        <div className="flex justify-center items-center">
                            
                            <span className="text-sm md:text-lg font-medium text-white">
                                {countDownTime?.minutes}
                            </span>
                        </div>
                        <span className="text-white text-xs text-center">
                            {countDownTime?.minutes == 1 ? "Min" : "Mins"}
                        </span>
                    </div>
                    <div className="flex flex-col relative bg-gray-800 text-white p-1 md:p-2 md:rounded-sm">
                        <div className="flex justify-center items-center">
                            <span className="text-sm md:text-lg font-medium text-white">
                                {countDownTime?.seconds}
                            </span>
                        </div>
                        <span className="text-white text-xs text-center">
                            {countDownTime?.seconds == 1 ? "Sec" : "Secs"}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};