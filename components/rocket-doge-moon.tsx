"use client";

import {
  Coins,
  CreditCard,
  Dog,
  DollarSign,
  Lock,
  Moon,
  Rocket,
  Shield,
  Star,
  TrendingUp,
  Zap,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import Confetti from "react-confetti";
import { animated, config, useSpring } from "react-spring";

export default function RocketDogeMoonLanding() {
  const [buyClicks, setBuyClicks] = useState(0);
  const [price, setPrice] = useState(0.000001);
  const [showConfetti, setShowConfetti] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Floating animation for the logo
  const floatAnimation = useSpring({
    from: { transform: "translateY(0px)" },
    to: async (next) => {
      while (true) {
        await next({ transform: "translateY(20px)" });
        await next({ transform: "translateY(0px)" });
      }
    },
    config: { duration: 2000 },
  });

  // Rocket animation
  const rocketAnimation = useSpring({
    from: { transform: "translateY(0px) rotate(0deg)" },
    to: async (next) => {
      while (true) {
        await next({ transform: "translateY(-500px) rotate(45deg)" });
        await next({ transform: "translateY(0px) rotate(0deg)" });
      }
    },
    config: { duration: 5000 },
  });

  // Price ticker animation
  useEffect(() => {
    const interval = setInterval(() => {
      setPrice((prevPrice) => prevPrice * (1 + Math.random() * 0.1));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Buy button animation
  const [buttonProps, setButtonProps] = useSpring(() => ({
    scale: 1,
    rotate: 0,
  }));

  const handleBuyClick = () => {
    setBuyClicks((prev) => prev + 1);
    setButtonProps({
      scale: 1.5,
      rotate: 360,
      config: config.wobbly,
      onRest: () => setButtonProps({ scale: 1, rotate: 0 }),
    });
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 3000);
  };

  // Update the coin rain animation
  const coinProps = useSpring({
    from: { top: "-20%" },
    to: async (next) => {
      while (true) {
        await next({ top: "120%" });
        await next({ top: "-20%" });
      }
    },
    config: { duration: 5000 },
  });

  // Star twinkle animation
  const starProps = useSpring({
    from: { opacity: 0.2 },
    to: async (next) => {
      while (true) {
        await next({ opacity: 1 });
        await next({ opacity: 0.2 });
      }
    },
    config: { duration: 1000 },
  });

  useEffect(() => {
    // Update percentage element after initial render
    const updatePercentage = () => {
      const percentageElement = document.getElementById("price-percentage");
      if (percentageElement) {
        percentageElement.textContent = `+${(Math.random() * 1000).toFixed(
          2
        )}%`;
      }
    };

    updatePercentage();
    const interval = setInterval(updatePercentage, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-600 via-pink-500 to-yellow-500 text-white p-2 md:p-8 overflow-hidden relative">
      {showConfetti && (
        <Confetti width={windowSize.width} height={windowSize.height} />
      )}

      <div className="fixed top-0 left-0 right-0 overflow-hidden whitespace-nowrap bg-black py-1 md:py-2 z-50">
        <div className="relative flex overflow-x-hidden">
          <div className="animate-marquee whitespace-nowrap">
            {Array(10)
              .fill(
                "🚀 Fair Launch on Pump.fun! 💎 No Team Allocation! 🔒 Safe & Secure! "
              )
              .map((text, index) => (
                <span
                  key={index}
                  className="text-sm md:text-2xl font-bold mx-2 md:mx-4 text-yellow-300 animate-pulse"
                >
                  {text}
                </span>
              ))}
          </div>

          <div className="absolute top-0 animate-marquee2 whitespace-nowrap">
            {Array(10)
              .fill(
                "🚀 Fair Launch on Pump.fun! 💎 No Team Allocation! 🔒 Safe & Secure! "
              )
              .map((text, index) => (
                <span
                  key={index}
                  className="text-sm md:text-2xl font-bold mx-2 md:mx-4 text-yellow-300 animate-pulse"
                >
                  {text}
                </span>
              ))}
          </div>
        </div>
      </div>

      <animated.div
        style={floatAnimation}
        className="text-center mb-4 md:mb-8 mt-12 md:mt-16"
      >
        <h1 className="text-3xl md:text-7xl font-bold mb-2 md:mb-4 text-yellow-300 drop-shadow-lg animate-neon px-2">
          🚀 RocketDogeMoon (RDM)
        </h1>
        <p className="text-lg md:text-3xl mb-2 md:mb-4 animate-bounce font-extrabold text-white px-2">
          Fair Launch on Solana via Pump.fun! 🌟
        </p>
      </animated.div>

      <div className="max-w-[200px] md:max-w-md mx-auto mb-4 md:mb-8">
        <Image
          src="/RocketDogeMoon.webp"
          alt="RocketDogeMoon Logo"
          className="w-full h-auto rounded-lg shadow-2xl animate-pulse"
          width={500}
          height={500}
        />
      </div>

      <div className="max-w-4xl mx-auto bg-black/30 backdrop-blur-md rounded-lg p-3 md:p-8 mb-4 md:mb-8">
        <h2 className="text-2xl md:text-5xl font-bold mb-4 text-center animate-rainbow">
          Why RocketDogeMoon?
        </h2>
        <ul className="list-none text-sm md:text-2xl space-y-2 md:space-y-4">
          <li className="flex items-center">
            <Rocket
              className="mr-2 text-yellow-300 animate-pulse shrink-0"
              size={20}
            />{" "}
            <span className="flex-1">
              100% Fair Launch on Pump.fun - No Presale, No Team Allocation! 🚀
            </span>
          </li>
          <li className="flex items-center">
            <Lock
              className="mr-2 text-yellow-300 animate-bounce shrink-0"
              size={20}
            />{" "}
            <span className="flex-1">
              Liquidity Automatically Locked on Raydium 🔒
            </span>
          </li>
          <li className="flex items-center">
            <Shield
              className="mr-2 text-yellow-300 animate-spin-slow shrink-0"
              size={20}
            />{" "}
            <span className="flex-1">
              Anti-Rug Protection via Pump.fun Smart Contracts ✅
            </span>
          </li>
          <li className="flex items-center">
            <Dog
              className="mr-2 text-yellow-300 animate-bounce shrink-0"
              size={20}
            />{" "}
            <span className="flex-1">
              Cuter than your ex&apos;s puppy AND your current crush 😍🐶
            </span>
          </li>
          <li className="flex items-center">
            <Moon
              className="mr-2 text-yellow-300 animate-spin-slower shrink-0"
              size={20}
            />{" "}
            <span className="flex-1">
              First crypto to actually reach the moon* 🌕
            </span>
          </li>
          <li className="flex items-center">
            <CreditCard
              className="mr-2 text-yellow-300 animate-pulse shrink-0"
              size={20}
            />{" "}
            <span className="flex-1">
              Accepted nowhere, valued EVERYWHERE 💳💰
            </span>
          </li>
          <li className="flex items-center">
            <TrendingUp
              className="mr-2 text-yellow-300 animate-bounce shrink-0"
              size={20}
            />{" "}
            <span className="flex-1">
              Graph always goes up (if you turn your screen upside down) 📈🙃
            </span>
          </li>
          <li className="flex items-center">
            <Zap
              className="mr-2 text-yellow-300 animate-spin-slow shrink-0"
              size={20}
            />{" "}
            <span className="flex-1">
              Powered by memes, dreams, and PURE HOPIUM ⚡️💭
            </span>
          </li>
        </ul>
        <p className="text-xs md:text-sm mt-4 animate-shake text-yellow-300">
          * Moon landing pending. Terms and conditions apply. Not valid on Earth
          or any known planet. May be valid in parallel universes.
        </p>
      </div>

      <div className="text-center mb-4 md:mb-8">
        <a
          href="https://pump.fun/coin/CXemw9dViRWqQJKiRXeWiK5xC2zG4jLMv3B8nxnGpump"
          target="_blank"
          rel="noopener noreferrer"
        >
          <animated.button
            style={buttonProps}
            onClick={handleBuyClick}
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 md:py-6 px-6 md:px-12 rounded-full text-xl md:text-4xl shadow-lg animate-jello relative overflow-hidden group"
          >
            <span className="relative z-10">
              {buyClicks === 0
                ? "APE IN NOW!"
                : buyClicks < 5
                ? "MORE!"
                : "YOLO!"}
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </animated.button>
        </a>
        {buyClicks >= 10 && (
          <p className="mt-4 text-lg md:text-2xl animate-bounce text-yellow-300 font-bold">
            🚨 WHALE ALERT! 🚨 Save some for the rest of us!
          </p>
        )}
      </div>

      <div className="max-w-4xl mx-auto bg-black/30 backdrop-blur-md rounded-lg p-3 md:p-8 mb-4 md:mb-8">
        <h2 className="text-2xl md:text-5xl font-bold mb-4 text-center animate-rainbow">
          RDM Tokenomics
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-purple-700/50 p-4 rounded-lg text-center">
            <DollarSign
              className="mx-auto mb-2 text-yellow-300 animate-bounce"
              size={32}
            />
            <h3 className="text-xl md:text-2xl font-bold mb-2">
              1 Billion Supply
            </h3>
            <p className="text-sm md:text-lg">
              Total supply: 1,000,000,000 RDM
            </p>
          </div>
          <div className="bg-purple-700/50 p-4 rounded-lg text-center">
            <Coins
              className="mx-auto mb-2 text-yellow-300 animate-pulse"
              size={48}
            />
            <h3 className="text-2xl font-bold mb-2">Fair Distribution</h3>
            <p className="text-lg">100% via Pump.fun Bonding Curve 📈</p>
          </div>
          <div className="bg-purple-700/50 p-4 rounded-lg text-center">
            <Lock
              className="mx-auto mb-2 text-yellow-300 animate-spin"
              size={48}
            />
            <h3 className="text-2xl font-bold mb-2">Locked Liquidity</h3>
            <p className="text-lg">Auto-locked on Raydium at $5000 MC 🔒</p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto bg-black/30 backdrop-blur-md rounded-lg p-3 md:p-8 mb-4 md:mb-8">
        <h2 className="text-2xl md:text-5xl font-bold mb-4 text-center animate-rainbow">
          How to Buy RDM
        </h2>
        <div className="space-y-2 md:space-y-4">
          <div className="flex items-center space-x-2 md:space-x-4 animate-pulse">
            <div className="w-8 h-8 md:w-12 md:h-12 bg-yellow-300 rounded-full flex items-center justify-center font-bold text-black text-lg md:text-2xl shrink-0">
              1
            </div>
            <p className="text-sm md:text-2xl">
              Visit{" "}
              <a
                href="https://pump.fun/coin/CXemw9dViRWqQJKiRXeWiK5xC2zG4jLMv3B8nxnGpump"
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-300 hover:text-yellow-400 underline"
              >
                Pump.fun
              </a>{" "}
              and connect your Solana wallet 👛
            </p>
          </div>
          <div className="flex items-center space-x-2 md:space-x-4 animate-bounce">
            <div className="w-8 h-8 md:w-12 md:h-12 bg-yellow-300 rounded-full flex items-center justify-center font-bold text-black text-lg md:text-2xl shrink-0">
              2
            </div>
            <p className="text-sm md:text-2xl">
              Buy RDM on the Bonding-Curve 📈
            </p>
          </div>
          <div className="flex items-center space-x-2 md:space-x-4 animate-spin-slow">
            <div className="w-8 h-8 md:w-12 md:h-12 bg-yellow-300 rounded-full flex items-center justify-center font-bold text-black text-lg md:text-2xl shrink-0">
              3
            </div>
            <p className="text-sm md:text-2xl">
              Hold until $5000 MC for Raydium listing 🚀
            </p>
          </div>
          <div className="flex items-center space-x-2 md:space-x-4 animate-pulse">
            <div className="w-8 h-8 md:w-12 md:h-12 bg-yellow-300 rounded-full flex items-center justify-center font-bold text-black text-lg md:text-2xl shrink-0">
              4
            </div>
            <p className="text-sm md:text-2xl">
              Trade freely on Raydium with locked liquidity 🔄
            </p>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-black/70 backdrop-blur-md p-2 md:p-4">
        <p className="text-lg md:text-3xl font-mono animate-pulse text-center">
          RDM Price:{" "}
          <span className="text-yellow-300 font-bold">${price.toFixed(8)}</span>
          <span className="ml-2 text-green-400" id="price-percentage"></span>
          <span className="ml-2 animate-ping inline-flex h-2 w-2 md:h-3 md:w-3 rounded-full bg-green-400 opacity-75"></span>
        </p>
      </div>

      <animated.div style={rocketAnimation} className="absolute top-0 right-0">
        <span className="text-5xl md:text-9xl">🚀</span>
      </animated.div>

      {/* Update the coin rain rendering - move it before the stars */}
      <animated.div
        style={coinProps}
        className="fixed left-0 w-full h-screen pointer-events-none z-20"
      >
        <div className="flex justify-evenly w-full">
          {Array(8)
            .fill(null)
            .map((_, index) => (
              <div
                key={index}
                className="text-3xl md:text-6xl"
                style={{
                  animation: `fall ${3 + Math.random() * 2}s linear infinite`,
                  animationDelay: `${Math.random() * 2}s`,
                }}
              >
                💰
              </div>
            ))}
        </div>
      </animated.div>

      {Array(15)
        .fill(null)
        .map((_, index) => (
          <animated.div
            key={index}
            style={{
              ...starProps,
              position: "absolute",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            <Star className="text-yellow-300" size={Math.random() * 12 + 8} />
          </animated.div>
        ))}

      <div className="fixed bottom-4 right-4 animate-bounce">
        <span className="text-3xl md:text-6xl">🔥</span>
      </div>
    </div>
  );
}
