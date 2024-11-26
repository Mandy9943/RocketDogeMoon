"use client";

import {
  Coins,
  CreditCard,
  Dog,
  DollarSign,
  Moon,
  Rocket,
  Star,
  TrendingUp,
  Trophy,
  Zap,
} from "lucide-react";
import { useEffect, useState } from "react";
import Confetti from "react-confetti";
import { animated, config, useSpring } from "react-spring";

export default function RocketDogeMoonLanding() {
  const [buyClicks, setBuyClicks] = useState(0);
  const [price, setPrice] = useState(0.00001234);
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

  // Coin rain animation
  const coinProps = useSpring({
    from: { transform: "translateY(-100vh)" },
    to: async (next) => {
      while (true) {
        await next({ transform: "translateY(100vh)" });
        await next({ transform: "translateY(-100vh)" });
      }
    },
    config: { duration: 10000, loop: true },
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
    config: { duration: 1000, loop: true },
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-600 via-pink-500 to-yellow-500 text-white p-8 overflow-hidden relative">
      {showConfetti && (
        <Confetti width={windowSize.width} height={windowSize.height} />
      )}

      <div className="fixed top-0 left-0 right-0 overflow-hidden whitespace-nowrap bg-black py-2 z-50">
        <div className="animate-marquee inline-block">
          {Array(10)
            .fill("🚀 RocketDogeMoon to $1! 💎🙌 Buy now or cry later! 🐶🌙💥 ")
            .map((text, index) => (
              <span
                key={index}
                className="text-2xl font-bold mx-4 text-yellow-300 animate-pulse"
              >
                {text}
              </span>
            ))}
        </div>
        <div className="animate-marquee2 inline-block absolute top-2">
          {Array(10)
            .fill("🚀 RocketDogeMoon to $1! 💎🙌 Buy now or cry later! 🐶🌙💥 ")
            .map((text, index) => (
              <span
                key={index}
                className="text-2xl font-bold mx-4 text-yellow-300 animate-pulse"
              >
                {text}
              </span>
            ))}
        </div>
      </div>

      <animated.div style={floatAnimation} className="text-center mb-8 mt-16">
        <h1 className="text-7xl font-bold mb-4 text-yellow-300 drop-shadow-lg animate-neon">
          🚀🐕🌕 RocketDogeMoon (RDM)
        </h1>
        <p className="text-3xl mb-4 animate-bounce font-extrabold text-white">
          The MOST DEGEN coin in the UNIVERSE! 🌟
        </p>
      </animated.div>

      <div className="max-w-4xl mx-auto bg-black/30 backdrop-blur-md rounded-lg p-8 mb-8 transform hover:scale-105 transition-transform duration-300 border-2 border-yellow-300">
        <h2 className="text-5xl font-bold mb-4 text-center animate-rainbow">
          Why RocketDogeMoon?
        </h2>
        <ul className="list-none text-2xl space-y-4">
          <li className="flex items-center">
            <Rocket className="mr-2 text-yellow-300 animate-pulse" size={32} />{" "}
            Guaranteed to moon (not financial advice) 🚀🌙
          </li>
          <li className="flex items-center">
            <Dog className="mr-2 text-yellow-300 animate-bounce" size={32} />{" "}
            Cuter than your ex's puppy AND your current crush 😍🐶
          </li>
          <li className="flex items-center">
            <Moon className="mr-2 text-yellow-300 animate-spin" size={32} />{" "}
            First crypto to actually reach the moon* 🌕
          </li>
          <li className="flex items-center">
            <CreditCard
              className="mr-2 text-yellow-300 animate-pulse"
              size={32}
            />{" "}
            Accepted nowhere, valued EVERYWHERE 💳💰
          </li>
          <li className="flex items-center">
            <TrendingUp
              className="mr-2 text-yellow-300 animate-bounce"
              size={32}
            />{" "}
            Graph always goes up (if you turn your screen upside down) 📈🙃
          </li>
          <li className="flex items-center">
            <Zap className="mr-2 text-yellow-300 animate-spin" size={32} />{" "}
            Powered by memes, dreams, and PURE HOPIUM ⚡️💭
          </li>
        </ul>
        <p className="text-sm mt-4 animate-shake text-yellow-300">
          * Moon landing pending. Terms and conditions apply. Not valid on Earth
          or any known planet. May be valid in parallel universes.
        </p>
      </div>

      <div className="text-center mb-8">
        <animated.button
          style={buttonProps}
          onClick={handleBuyClick}
          className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-6 px-12 rounded-full text-4xl shadow-lg animate-jello relative overflow-hidden group"
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
        {buyClicks >= 10 && (
          <p className="mt-4 text-2xl animate-bounce text-yellow-300 font-bold">
            🚨 WHALE ALERT! 🚨 Save some for the rest of us!
          </p>
        )}
      </div>

      <div className="max-w-4xl mx-auto bg-black/30 backdrop-blur-md rounded-lg p-8 mb-8 transform hover:rotate-1 transition-transform duration-300 border-2 border-yellow-300">
        <h2 className="text-5xl font-bold mb-4 text-center animate-rainbow">
          RDM Tokenomics
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-purple-700/50 p-4 rounded-lg text-center transform hover:scale-110 transition-transform duration-300">
            <DollarSign
              className="mx-auto mb-2 text-yellow-300 animate-bounce"
              size={48}
            />
            <h3 className="text-2xl font-bold mb-2">1 Quadrillion Supply</h3>
            <p className="text-lg">Because more is ALWAYS better! 🤑</p>
          </div>
          <div className="bg-purple-700/50 p-4 rounded-lg text-center transform hover:scale-110 transition-transform duration-300">
            <Coins
              className="mx-auto mb-2 text-yellow-300 animate-pulse"
              size={48}
            />
            <h3 className="text-2xl font-bold mb-2">99% Burn</h3>
            <p className="text-lg">
              We'll burn 99% of the supply... eventually! 🔥
            </p>
          </div>
          <div className="bg-purple-700/50 p-4 rounded-lg text-center transform hover:scale-110 transition-transform duration-300">
            <Trophy
              className="mx-auto mb-2 text-yellow-300 animate-spin"
              size={48}
            />
            <h3 className="text-2xl font-bold mb-2">1% for Devs</h3>
            <p className="text-lg">We promise not to dump... much. 😇</p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto bg-black/30 backdrop-blur-md rounded-lg p-8 mb-8 transform hover:-rotate-1 transition-transform duration-300 border-2 border-yellow-300">
        <h2 className="text-5xl font-bold mb-4 text-center animate-rainbow">
          RDM Roadmap to GLORY
        </h2>
        <div className="space-y-4">
          <div className="flex items-center space-x-4 animate-pulse">
            <div className="w-12 h-12 bg-yellow-300 rounded-full flex items-center justify-center font-bold text-black text-2xl">
              1
            </div>
            <p className="text-2xl">Launch token (You are here) 🚀</p>
          </div>
          <div className="flex items-center space-x-4 animate-bounce">
            <div className="w-12 h-12 bg-yellow-300 rounded-full flex items-center justify-center font-bold text-black text-2xl">
              2
            </div>
            <p className="text-2xl">Create dank memes 🐸</p>
          </div>
          <div className="flex items-center space-x-4 animate-spin">
            <div className="w-12 h-12 bg-yellow-300 rounded-full flex items-center justify-center font-bold text-black text-2xl">
              3
            </div>
            <p className="text-2xl">??? 🤔</p>
          </div>
          <div className="flex items-center space-x-4 animate-pulse">
            <div className="w-12 h-12 bg-yellow-300 rounded-full flex items-center justify-center font-bold text-black text-2xl">
              4
            </div>
            <p className="text-2xl">PROFIT!!! 💰🤑💎</p>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-black/70 backdrop-blur-md p-4">
        <p className="text-3xl font-mono animate-pulse text-center">
          RDM Price:{" "}
          <span className="text-yellow-300 font-bold">${price.toFixed(8)}</span>
          <span className="ml-2 text-green-400">
            +{(Math.random() * 1000).toFixed(2)}%
          </span>
          <span className="ml-2 animate-ping inline-flex h-3 w-3 rounded-full bg-green-400 opacity-75"></span>
        </p>
      </div>

      <animated.div style={rocketAnimation} className="absolute top-0 right-0">
        <span className="text-9xl">🚀</span>
      </animated.div>

      <animated.div
        style={coinProps}
        className="fixed left-0 w-full pointer-events-none"
      >
        <div className="flex justify-between">
          {Array(10)
            .fill(null)
            .map((_, index) => (
              <span key={index} className="text-5xl animate-spin">
                💰
              </span>
            ))}
        </div>
      </animated.div>

      {Array(30)
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
            <Star className="text-yellow-300" size={Math.random() * 24 + 12} />
          </animated.div>
        ))}

      <div className="fixed bottom-4 right-4 animate-bounce">
        <span className="text-6xl">🔥</span>
      </div>
    </div>
  );
}
