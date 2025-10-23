'use client'
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiShield, 
  FiLock, 
  FiRefreshCw, 
  FiMail, 
  FiAlertTriangle, 
  FiCheck, 
  FiArrowRight,
  FiX,
  FiAlertCircle,
  FiKey,
  FiUserCheck,
  FiDownload,
  FiEye,
  FiExternalLink,
  FiFileText
} from 'react-icons/fi';

type BreachSeverity = 'high' | 'medium' | 'low';

interface Breach {
  name: string;
  date: string;
  records: number;
  severity: BreachSeverity;
}

interface ScanResult {
  found: boolean;
  breaches: Breach[];
  message: string;
}

const DataBreachChecker: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isChecking, setIsChecking] = useState(false);
  const [result, setResult] = useState<ScanResult | null>(null);
  const [scanProgress, setScanProgress] = useState(0);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (isChecking) {
      const interval = setInterval(() => {
        setScanProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + 5;
        });
      }, 100);
      return () => clearInterval(interval);
    } else {
      setScanProgress(0);
    }
  }, [isChecking]);

  const handleCheck = async () => {
    if (!email) return;
    
    setIsChecking(true);
    setResult(null);
    setError(null);
    
    try {
      const response = await fetch('/api/check-breaches', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error('Failed to check breaches');
      }

      const data = await response.json();
      setResult(data);
    } catch (err) {
      console.error('Error checking breaches:', err);
      setError('Failed to check breaches. Please try again later.');
    } finally {
      setIsChecking(false);
    }
  };

  const handleGetDetailedReport = () => {
    window.open('https://t.me/Shadowwolfi_bot', '_blank');
  };

  const SeverityBadge = ({ level }: { level: BreachSeverity }) => {
    const colors = {
      high: 'bg-red-500/20 text-red-400 border-red-500/30',
      medium: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
      low: 'bg-green-500/20 text-green-400 border-green-500/30'
    };
    
    return (
      <span className={`text-xs px-2 py-1 rounded-full border ${colors[level]} flex items-center gap-1`}>
        {level === 'high' && <FiAlertCircle className="inline" />}
        {level === 'medium' && <FiAlertTriangle className="inline" />}
        {level === 'low' && <FiCheck className="inline" />}
        {level.charAt(0).toUpperCase() + level.slice(1)}
      </span>
    );
  };

  return (
    <section id="breach-checker" className="py-12 md:py-20 px-4 bg-gray-900 relative overflow-hidden">
      {/* Fixed background with better mobile support */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gray-900"></div>
        <div className="absolute inset-0 opacity-70 bg-[url('/images/data1.png')] bg-cover bg-center bg-no-repeat"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black/80 to-black/50"></div>
      </div>
      
      {/* Binary code animation overlay - simplified for mobile */}
      <div className="absolute inset-0 z-0 opacity-10 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/data2.png')] bg-[length:20px_20px] md:animate-[moveBg_100s_linear_infinite]"></div>
      </div>

      {/* Animated floating elements - reduced for mobile */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="hidden md:block absolute top-20 left-10 w-2 h-2 bg-[#00FF94] rounded-full animate-pulse"></div>
        <div className="hidden md:block absolute bottom-32 right-20 w-3 h-3 bg-[#FF2E63] rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-8 md:mb-12"
        >
          <div className="inline-flex items-center justify-center bg-[#00FF94]/10 p-2 md:p-3 rounded-full mb-4 md:mb-6 border border-[#00FF94]/30">
            <FiShield className="text-xl md:text-2xl text-[#00FF94]" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#00FF94] to-[#00CC77]">
            Dark Web Breach Scanner
          </h2>
          <p className="text-base md:text-xl text-gray-300 mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed">
            Discover if your credentials have been exposed in any known data breaches across the dark web
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="glassmorphism p-4 md:p-8 rounded-xl md:rounded-2xl max-w-2xl mx-auto border border-white/10 backdrop-blur-sm"
        >
          <div className="flex flex-col gap-4 mb-4 md:mb-6">
            <div className="relative flex-1">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <FiMail />
              </div>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-8 py-3 md:py-4 bg-gray-800/70 border border-gray-600 rounded-lg focus:border-[#00FF94] focus:outline-none text-white text-base md:text-lg placeholder-gray-400 transition-all duration-300"
              />
              {email && (
                <button 
                  onClick={() => setEmail('')}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                >
                  <FiX />
                </button>
              )}
            </div>
            <button
              onClick={handleCheck}
              disabled={!email || isChecking}
              className="px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-[#00FF94] to-[#00CC77] text-black font-bold rounded-lg hover:from-[#00CC77] hover:to-[#00AA66] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-[#00FF94]/30 relative overflow-hidden group"
            >
              <span className="relative z-10 flex items-center justify-center gap-2 text-sm md:text-base">
                {isChecking ? (
                  <>
                    <FiRefreshCw className="animate-spin" />
                    Scanning...
                  </>
                ) : (
                  <>
                    Scan Now
                    <FiArrowRight className="transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </span>
              <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
            </button>
          </div>

          {/* Error message */}
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-4 p-3 bg-red-900/30 border border-red-500/30 rounded-lg text-red-300 text-sm flex items-center gap-2"
            >
              <FiAlertCircle className="flex-shrink-0" />
              {error}
            </motion.div>
          )}

          {/* Scan progress bar */}
          {isChecking && (
            <div className="mb-4 md:mb-6">
              <div className="flex justify-between text-xs md:text-sm text-gray-400 mb-1 md:mb-2">
                <span className="flex items-center gap-1 md:gap-2">
                  <FiEye className="animate-pulse text-sm" />
                  Scanning dark web...
                </span>
                <span>{scanProgress}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2 md:h-2.5">
                <motion.div 
                  className="bg-gradient-to-r from-[#00FF94] to-[#00CC77] h-2 md:h-2.5 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${scanProgress}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>
          )}

          <AnimatePresence>
            {result && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4 }}
                className={`overflow-hidden rounded-lg border ${result.found ? 'bg-red-900/20 border-red-500/30' : 'bg-green-900/20 border-green-500/30'}`}
              >
                <div className="p-4 md:p-6">
                  <div className="flex items-start gap-3 md:gap-4 mb-3 md:mb-4">
                    <div className={`flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center ${result.found ? 'bg-red-500/20 border border-red-500' : 'bg-green-500/20 border border-green-500'}`}>
                      {result.found ? (
                        <FiAlertTriangle className="text-lg md:text-xl text-red-400" />
                      ) : (
                        <FiCheck className="text-lg md:text-xl text-green-400" />
                      )}
                    </div>
                    <div>
                      <h3 className={`text-lg md:text-xl font-bold ${result.found ? 'text-red-400' : 'text-green-400'}`}>
                        {result.message}
                      </h3>
                      <p className="text-gray-400 mt-1 text-sm md:text-base">
                        {result.found 
                          ? 'We found your email in the following breaches:' 
                          : 'No known breaches found in our database.'}
                      </p>
                    </div>
                  </div>
                  
                  {result.found && result.breaches.length > 0 && (
                    <div className="mt-3 md:mt-4">
                      <div className="grid gap-3 md:gap-4">
                        {result.breaches.map((breach, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-gray-800/50 p-3 md:p-4 rounded-lg border border-red-900/50"
                          >
                            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                              <div>
                                <h4 className="font-bold text-red-300 text-sm md:text-base">{breach.name}</h4>
                                <p className="text-xs md:text-sm text-gray-400">Breached: {breach.date}</p>
                              </div>
                              <div className="flex items-center gap-2">
                                <span className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs">
                                  {breach.records.toLocaleString()} records
                                </span>
                                <SeverityBadge level={breach.severity} />
                              </div>
                            </div>
                            <div className="mt-2 md:mt-3 flex items-center gap-2 text-xs md:text-sm text-gray-400">
                              <FiKey className="flex-shrink-0" />
                              <span>Passwords, emails, and personal data exposed</span>
                            </div>
                          </motion.div>
                        ))}
                      </div>

                      {/* Get Detailed Report Button */}
                      <div className="mt-4 md:mt-6 p-4 bg-gray-800/70 rounded-lg border border-gray-600">
                        <div className="text-center mb-4">
                          <h4 className="font-bold text-white mb-2 flex items-center justify-center gap-2 text-sm md:text-base">
                            <FiFileText className="text-[#00FF94]" />
                            Want Detailed Information?
                          </h4>
                          <p className="text-gray-300 text-xs md:text-sm mb-4">
                            Get complete breach details including exact data exposed, 
                            password hashes, and comprehensive security recommendations
                          </p>
                        </div>
                        <button
                          onClick={handleGetDetailedReport}
                          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-bold flex items-center justify-center gap-2 transition-all duration-300 shadow-lg hover:shadow-blue-500/30"
                        >
                          <FiExternalLink className="text-lg" />
                          Get Detailed Report - Contact on Telegram
                        </button>
                        <p className="text-center text-xs text-gray-400 mt-2">
                          Complete breach analysis with actionable insights
                        </p>
                      </div>
                      
                      <div className="mt-4 md:mt-6 p-3 md:p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                        <h4 className="font-bold text-white mb-2 md:mb-3 flex items-center gap-2 text-sm md:text-base">
                          <FiShield />
                          Recommended Actions:
                        </h4>
                        <ul className="space-y-2 md:space-y-3 text-xs md:text-sm text-gray-300">
                          <li className="flex items-start gap-2 md:gap-3">
                            <div className="bg-[#00FF94]/10 p-1 rounded-full mt-0.5">
                              <FiKey className="text-[#00FF94] text-sm" />
                            </div>
                            <span>Change passwords for affected accounts immediately</span>
                          </li>
                          <li className="flex items-start gap-2 md:gap-3">
                            <div className="bg-[#00FF94]/10 p-1 rounded-full mt-0.5">
                              <FiUserCheck className="text-[#00FF94] text-sm" />
                            </div>
                            <span>Enable two-factor authentication where available</span>
                          </li>
                          <li className="flex items-start gap-2 md:gap-3">
                            <div className="bg-[#00FF94]/10 p-1 rounded-full mt-0.5">
                              <FiDownload className="text-[#00FF94] text-sm" />
                            </div>
                            <span>Monitor financial accounts for suspicious activity</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="mt-6 md:mt-8 text-xs md:text-sm text-gray-400 flex flex-col items-center">
            <div className="flex items-center gap-1 md:gap-2 mb-1 md:mb-2">
              <FiLock className="text-[#00FF94] text-sm" />
              <span>Your email is never stored or shared</span>
            </div>
            <p className="text-center">We only check against public breach databases</p>
          </div>
        </motion.div>

        {/* Security tips with professional icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-8 md:mt-16 text-left max-w-2xl mx-auto"
        >
          <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6 flex items-center gap-2 md:gap-3">
            <FiShield className="text-[#00FF94]" />
            Security Best Practices
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {[
              {
                icon: <FiKey className="text-xl md:text-2xl text-[#00FF94]" />,
                title: 'Use Strong Passwords',
                description: 'Create complex passwords with a mix of letters, numbers, and symbols.'
              },
              {
                icon: <FiUserCheck className="text-xl md:text-2xl text-[#00FF94]" />,
                title: 'Enable 2FA',
                description: 'Add an extra layer of security with two-factor authentication.'
              },
              {
                icon: <FiRefreshCw className="text-xl md:text-2xl text-[#00FF94]" />,
                title: 'Regular Updates',
                description: 'Keep your software and apps updated to patch vulnerabilities.'
              },
              {
                icon: <FiAlertTriangle className="text-xl md:text-2xl text-[#00FF94]" />,
                title: 'Email Vigilance',
                description: 'Be cautious with email attachments and suspicious links.'
              }
            ].map((tip, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -3 }}
                className="bg-gray-800/30 p-3 md:p-5 rounded-lg border border-gray-700 hover:border-[#00FF94]/30 transition-colors"
              >
                <div className="bg-[#00FF94]/10 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center mb-2 md:mb-4">
                  {tip.icon}
                </div>
                <h4 className="font-bold text-white mb-1 md:mb-2 text-sm md:text-base">{tip.title}</h4>
                <p className="text-xs md:text-sm text-gray-400">{tip.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DataBreachChecker;