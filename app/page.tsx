'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden">
      {/* Hero Section */}
      <header className="min-h-screen flex flex-col items-center justify-center relative bg-gradient-to-br from-[#0a0a0a] via-[#1a1a2e] to-[#0a0a0a] px-6">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,212,255,0.08),transparent_70%)]" />
        
        <div className="relative z-10 text-center max-w-3xl mx-auto">
          {/* Glowing Pill with Avatar */}
          <div className="inline-flex items-center bg-[#111827] rounded-[60px] border border-[#00d4ff] p-2 pl-3 mb-10 shadow-2xl shadow-[#00d4ff]/30">
            <div 
              className="rounded-full overflow-hidden border-4 border-[#00d4ff] shadow-xl transition-transform duration-500"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              style={{ transform: isHovered ? 'scale(1.05)' : 'scale(1)' }}
            >
              <Image
                src="/nick.jpg"
                alt="Nick McLarty"
                width={160}
                height={160}
                className="rounded-full"
                priority
              />
            </div>
          </div>

          <h1 className="text-7xl md:text-[5.2rem] font-bold tracking-tighter mb-4 leading-none">
            Hi, I&apos;m Nick
          </h1>
          
          <p className="text-2xl md:text-3xl text-gray-400 mb-8 tracking-wide">
            Cyber Guy • Pilot • Veteran
          </p>

          <p className="text-xl text-gray-300 max-w-xl mx-auto mb-12 leading-relaxed">
            Native Texan. Adopted Floridian.<br />
            Passionate about technology, aviation, and staying informed.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://x.com/NickMcLarty"
              target="_blank"
              className="group px-8 py-4 bg-transparent border-2 border-[#00d4ff] rounded-full font-semibold text-lg flex items-center justify-center gap-3 hover:bg-[#00d4ff] hover:text-black transition-all duration-300 min-w-[200px]"
            >
              Follow on 𝕏
            </a>
          </div>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-[#00d4ff] animate-bounce text-2xl">
          ↓
        </div>
      </header>

      {/* About Section */}
      <section className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16">About Me</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-[#111] p-8 rounded-3xl border border-gray-800 hover:border-[#00d4ff]/50 transition-all group">
            <div className="text-4xl mb-6">👨‍💻</div>
            <h3 className="text-2xl font-semibold mb-4">Cybersecurity</h3>
            <p className="text-gray-400">
              I work in cybersecurity, helping protect systems and data in an increasingly digital world.
            </p>
          </div>

          <div className="bg-[#111] p-8 rounded-3xl border border-gray-800 hover:border-[#00d4ff]/50 transition-all group">
            <div className="text-4xl mb-6">✈️</div>
            <h3 className="text-2xl font-semibold mb-4">Aviation</h3>
            <p className="text-gray-400">
              Certified pilot with a deep passion for flying. Nothing beats being up in the air.
            </p>
          </div>

          <div className="bg-[#111] p-8 rounded-3xl border border-gray-800 hover:border-[#00d4ff]/50 transition-all group">
            <div className="text-4xl mb-6">🇺🇸</div>
            <h3 className="text-2xl font-semibold mb-4">Veteran</h3>
            <p className="text-gray-400">
              Proud veteran of the United States Armed Forces. Service shaped my discipline and leadership.
            </p>
          </div>
        </div>
      </section>

      {/* Celebration Section */}
      <section className="bg-[#111] py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-8">Currently in Celebration, Florida</h2>
          <p className="text-2xl text-gray-400">
            Enjoying the sunshine and vibrant energy of Central Florida.
          </p>
        </div>
      </section>

      {/* Connect Section */}
      <section className="py-24 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-5xl font-bold mb-8">Let&apos;s Connect</h2>
        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
          Whether you want to talk tech, aviation, current events, or just say hello — I&apos;m always open to good conversations.
        </p>
        
        <a
          href="https://x.com/NickMcLarty"
          target="_blank"
          className="inline-block px-10 py-5 bg-[#00d4ff] text-black rounded-full text-xl font-semibold hover:bg-white transition-all"
        >
          Message me on 𝕏
        </a>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-12 text-center text-gray-500">
        <p>&copy; Nick McLarty • Built with Next.js</p>
      </footer>
    </div>
  );
}