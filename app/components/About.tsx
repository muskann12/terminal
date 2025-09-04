import React from 'react';

const About = () => {
  return (
    <section
      id="about"
      className="py-20 px-4 bg-gradient-to-br from-black via-gray-900 to-gray-800 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20">
        <div className="absolute top-20 left-10 w-40 h-40 bg-[#00FF94] rounded-full filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-10 right-20 w-60 h-60 bg-[#FF2E63] rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-[#00B4FF] rounded-full filter blur-3xl opacity-20"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-50 bg-[url('/images/about.png')]"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block glassmorphism px-8 py-3 rounded-full mb-6 border border-[#00FF94]/30 hover:border-[#00FF94]/50 transition-all duration-300 hover:scale-105">
            <span className="text-[#00FF94] font-bold text-lg tracking-widest">
              ABOUT WOLFGUIDER
            </span>
          </div>
          <h2 className="text-4xl md:text-4xl font-bold mb-8 cyber-gradient">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FF94] via-[#00FF94] to-[#FF2E63]">
              Trusted Cybersecurity for Modern Businesses
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00FF94] to-[#FF2E63] mx-auto mb-8 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch mb-16">
          <div className="flex flex-col justify-between">
            <div>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                WolfGuider empowers companies with{' '}
                <span className="text-[#00FF94] font-semibold">
                  cutting-edge cybersecurity solutions
                </span>{' '}
                to protect sensitive data, maintain compliance, and ensure
                business continuity.
              </p>
              <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                From small businesses to large enterprises, our{' '}
                <span className="text-white font-medium">
                  enterprise-grade security platform
                </span>{' '}
                delivers real-time monitoring, proactive threat prevention, and
                cost-efficient protection.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 mb-8">
              <div className="text-center glassmorphism p-6 rounded-xl hover:scale-105 transition-transform duration-300 border border-[#00FF94]/20 hover:border-[#00FF94]/40">
                <div className="text-4xl font-bold text-[#00FF94] mb-2">
                  80%
                </div>
                <div className="text-gray-300">Cost Savings</div>
                <div className="text-xs text-gray-500 mt-1 tracking-widest">
                  VS MARKET AVERAGE
                </div>
              </div>
              <div className="text-center glassmorphism p-6 rounded-xl hover:scale-105 transition-transform duration-300 border border-[#FF2E63]/20 hover:border-[#FF2E63]/40">
                <div className="text-4xl font-bold text-[#FF2E63] mb-2">
                  24/7
                </div>
                <div className="text-gray-300">Expert Support</div>
                <div className="text-xs text-gray-500 mt-1 tracking-widest">
                  DEDICATED RESPONSE TEAM
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4 glassmorphism p-4 rounded-lg hover:bg-gradient-to-r from-[#00FF94]/10 to-transparent border border-[#00FF94]/10 hover:border-[#00FF94]/30 transition-all duration-300">
                <div className="w-12 h-12 bg-[#00FF94] rounded-lg flex items-center justify-center shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-black"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-white">
                    Enterprise-Level Protection
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Comprehensive tools trusted by leading global companies
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 glassmorphism p-4 rounded-lg hover:bg-gradient-to-r from-[#FF2E63]/10 to-transparent border border-[#FF2E63]/10 hover:border-[#FF2E63]/30 transition-all duration-300">
                <div className="w-12 h-12 bg-[#FF2E63] rounded-lg flex items-center justify-center shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-white">
                    Always Up-to-Date
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Regular updates aligned with latest security standards
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 glassmorphism p-4 rounded-lg hover:bg-gradient-to-r from-[#00B4FF]/10 to-transparent border border-[#00B4FF]/10 hover:border-[#00B4FF]/30 transition-all duration-300">
                <div className="w-12 h-12 bg-[#00B4FF] rounded-lg flex items-center justify-center shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-black"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-white">
                    Industry Certified
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Developed by certified security professionals
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Image section - Fixed height issue */}
          <div className="h-full">
            <div className="glassmorphism p-8 rounded-2xl border border-gray-700/50 hover:border-[#00FF94]/30 transition-all duration-500 h-full flex flex-col">
              <div className="relative group mb-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative overflow-hidden rounded-lg h-32">
                    <img
                      src="/images/about1.png"
                      alt="Security Infrastructure"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute bottom-2 left-2 text-xs font-mono text-[#00FF94]">
                      SECURITY OPERATIONS
                    </div>
                  </div>
                  <div className="relative overflow-hidden rounded-lg h-32">
                    <img
                      src="/images/about2.png"
                      alt="Network Protection"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute bottom-2 left-2 text-xs font-mono text-[#00FF94]">
                      NETWORK PROTECTION
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#00FF94] to-[#00B4FF]">
                The WolfGuider Advantage
              </h3>

              <div className="space-y-4 flex-grow">
                {[
                  {
                    title: 'No Compromise Security',
                    desc: 'Advanced encryption and secure architecture for complete data safety',
                  },
                  {
                    title: 'Continuously Evolving',
                    desc: 'Regular feature upgrades to meet new compliance and threat requirements',
                  },
                  {
                    title: 'Dedicated Support',
                    desc: 'Direct access to our team for fast, reliable assistance',
                  },
                  {
                    title: 'One Platform, Multiple Solutions',
                    desc: 'End-to-end security tools in a single unified platform',
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 group">
                    <div className="w-6 h-6 bg-[#00FF94] rounded-full flex items-center justify-center mt-1 shrink-0 group-hover:animate-pulse">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3 w-3 text-black"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1 group-hover:text-[#00FF94] transition-colors duration-300">
                        {item.title}
                      </h4>
                      <p className="text-gray-300 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Value proposition banner */}
        <div className="glassmorphism p-8 rounded-2xl border border-[#00FF94]/20 mb-16 text-center bg-gradient-to-r from-[#00FF94]/10 to-[#FF2E63]/10">
          <h3 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#00FF94] to-[#FF2E63]">
            Professional Cybersecurity Without Breaking the Bank
          </h3>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            WolfGuider delivers{' '}
            <span className="text-[#00FF94] font-semibold">
              premium business security tools
            </span>{' '}
            at affordable prices —{' '}
            <span className="text-white">
              so every company can operate with peace of mind.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;