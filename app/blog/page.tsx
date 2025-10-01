import React from 'react';
import Head from 'next/head';

const BlogPage: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Why Cybersecurity Is Important for Individuals and Organizations',
      excerpt: 'Hackers often target individuals and organizations because they usually don’t have strong security systems. Just one attack can',
      date: '2025',
      slug: 'cybersecurity-threats-2025',
      category: 'Threat Intelligence',
      readTime: '8 min read',
      image: '/images/blog1.png'
    },
    {
      id: 2,
      title: 'How to Spot a Fake Website Before You Click',
      excerpt: 'In today’s digital world, fake websites are everywhere, and they’re becoming increasingly difficult to spot. Cybercriminals use them to steal your personal information, trick you into downloading malware, or even hijack your accounts.',
      date: '2025',
      slug: 'zero-trust-architecture',
      category: 'Network Security',
      readTime: '10 min read',
      image: '/images/blog2.png'
    },
    {
      id: 3,
      title: 'The Dangers of Public Wi-Fi and How to Stay Safe',
      excerpt: 'Free Wi-Fi might be convenient, but it can also be a hacker’s playground. Learn how attackers can intercept your data and how you can protect yourself.',
      date: '2025',
      slug: 'public-wifi-risks',
      category: 'Network Security',
      readTime: '7 min read',
      image: '/images/blog3.png'
    },
    {
      id: 4,
      title: 'Why Your Password Might Already Be Leaked',
      excerpt: 'Millions of passwords are leaked every year. Learn how it happens and how to check if your credentials are exposed.',
      date: '2025',
      slug: 'password-leaks',
      category: 'Threat Intelligence',
      readTime: '6 min read',
      image: '/images/blog4.png'
    },
    {
      id: 5,
      title: 'Top 10 Ransomware Attacks of 2025',
      excerpt: 'Ransomware continues to evolve, targeting governments, hospitals, and businesses. Here are the biggest cases from this year.',
      date: '2025',
      slug: 'ransomware-2025',
      category: 'Malware Analysis',
      readTime: '9 min read',
      image: '/images/blog5.png'
    },
    {
      id: 6,
      title: 'Phishing Emails: Tricks Hackers Use to Fool You',
      excerpt: 'Phishing emails are more convincing than ever. Discover the red flags and how to avoid falling victim.',
      date: '2025',
      slug: 'phishing-attacks',
      category: 'Threat Intelligence',
      readTime: '8 min read',
      image: '/images/blog6.png'
    },
    {
      id: 7,
      title: 'Deepfake Scams: The New Face of Cybercrime',
      excerpt: 'AI-powered deepfakes are being used to scam individuals and companies. Learn how to spot them before it’s too late.',
      date: '2025',
      slug: 'deepfake-scams',
      category: 'AI Security',
      readTime: '12 min read',
      image: '/images/blog7.png'
    },
    {
      id: 8,
      title: 'Why Two-Factor Authentication (2FA) Is a Must in 2025',
      excerpt: 'Passwords alone are not enough. Here’s why enabling 2FA can save your accounts from being hacked.',
      date: '2025',
      slug: 'two-factor-authentication',
      category: 'Network Security',
      readTime: '5 min read',
      image: '/images/blog8.png'
    },
    {
      id: 9,
      title: 'IoT Security Risks: When Your Smart Home Turns Against You',
      excerpt: 'Smart devices are convenient, but they’re also vulnerable to hacking. Learn how to secure your IoT gadgets.',
      date: '2025',
      slug: 'iot-security',
      category: 'IoT Security',
      readTime: '9 min read',
      image: '/images/blog9.png'
    },
    {
      id: 10,
      title: 'What Is Ethical Hacking? A Beginner’s Guide',
      excerpt: 'Not all hackers are bad. Ethical hackers help organizations find and fix security weaknesses.',
      date: '2025',
      slug: 'ethical-hacking',
      category: 'Penetration Testing',
      readTime: '6 min read',
      image: '/images/blog10.png'
    },
    {
      id: 11,
      title: 'Cloud Security Challenges in 2025',
      excerpt: 'Cloud adoption is growing, but so are cyber risks. Learn the top challenges businesses face and how to overcome them.',
      date: '2025',
      slug: 'cloud-security-2025',
      category: 'Cloud Security',
      readTime: '8 min read',
      image: '/images/blog11.png'
    },
    {
      id: 12,
      title: 'The Rise of AI-Powered Cyber Attacks',
      excerpt: 'Cybercriminals are using AI to automate phishing, password cracking, and malware creation. Here’s how it’s changing the threat landscape.',
      date: '2025',
      slug: 'ai-cyber-attacks',
      category: 'AI Security',
      readTime: '11 min read',
      image: '/images/blog12.png'
    },
    {
      id: 13,
      title: 'Social Engineering: Why Humans Are the Weakest Link',
      excerpt: 'Hackers don’t just exploit systems, they exploit people. Learn the psychology behind social engineering.',
      date: '2025',
      slug: 'social-engineering',
      category: 'Threat Intelligence',
      readTime: '7 min read',
      image: '/images/blog13.png'
    },
    {
      id: 14,
      title: 'Zero Trust Security: Why Companies Are Adopting It',
      excerpt: 'Trust no one, verify everything. Zero Trust is becoming the new standard for network security.',
      date: '2025',
      slug: 'zero-trust-security',
      category: 'Network Security',
      readTime: '9 min read',
      image: '/images/blog14.png'
    },
    {
      id: 15,
      title: 'Malware vs. Virus: What’s the Difference?',
      excerpt: 'People often confuse viruses with malware. Learn the key differences and why it matters.',
      date: '2025',
      slug: 'malware-vs-virus',
      category: 'Malware Analysis',
      readTime: '5 min read',
      image: '/images/blog15.png'
    },
    {
      id: 16,
      title: 'How to Build a Career in Cybersecurity',
      excerpt: 'Cybersecurity professionals are in high demand. Here’s how you can start your career in this field.',
      date: '2025',
      slug: 'cybersecurity-career',
      category: 'Compliance',
      readTime: '12 min read',
      image: '/images/blog16.png'
    },
    {
      id: 17,
      title: 'The Future of Digital Privacy in 2025',
      excerpt: 'From social media to smart devices, privacy is under threat. Learn how to take control of your data.',
      date: '2025',
      slug: 'digital-privacy-2025',
      category: 'Compliance',
      readTime: '10 min read',
      image: '/images/blog17.png'
    },
    {
      id: 19,
      title: 'Dark Web: What Really Happens There?',
      excerpt: 'The dark web isn’t just about illegal activities, but it’s also where stolen data is traded. Learn the truth behind it.',
      date: '2025',
      slug: 'dark-web-explained',
      category: 'Threat Intelligence',
      readTime: '9 min read',
      image: '/images/blog1.png'
    },
  ];

  return (
    <>
      <Head>
        <title>Cybersecurity Blog | Latest Trends, Threats & Defense Strategies</title>
        <meta name="description" content="Stay updated with the latest cybersecurity news, threat intelligence, and best practices from industry experts." />
        <meta name="keywords" content="cybersecurity blog, hacking news, threat intelligence, network security, ethical hacking" />
        <meta property="og:title" content="Cybersecurity Blog | WolfGuider" />
        <meta property="og:description" content="Expert insights on cybersecurity trends, threats, and defense strategies" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://wolfguider.com/blog" />
        <link rel="canonical" href="https://wolfguider.com/blog" />
      </Head>

      <div className="min-h-screen pt-20 bg-gradient-to-b from-gray-900 to-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#00FF94] to-[#00CC77]">
              Cybersecurity Insights
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Expert analysis on the latest threats, defense strategies, and security technologies
            </p>
          </div>

          {/* Featured Post */}
          <div className="mb-16 group">
            <div className="relative overflow-hidden rounded-xl border border-gray-800 hover:border-[#00FF94]/50 transition-all duration-500">
              <img
                src="/images/cover2.png"
                alt="Featured Cybersecurity Post"
                className="w-full h-96 object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-8">
                <span className="text-[#00FF94] font-mono text-sm mb-2">FEATURED POST</span>
                <h2 className="text-3xl font-bold mb-4">The Evolution of Cyber Warfare in 2025</h2>
                <p className="text-gray-300 mb-6 max-w-2xl">
                  How nation-state actors are leveraging AI and quantum computing in sophisticated cyber attacks, and what it means for global security.
                </p>
                <div className="flex items-center text-gray-400 text-sm">
                  <span>July 2, 2025</span>
                  <span className="mx-2">•</span>
                  <span>15 min read</span>
                </div>
              </div>
            </div>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {blogPosts.map(post => (
              <article 
                key={post.id} 
                className="bg-gray-800/50 rounded-xl overflow-hidden border border-gray-800 hover:border-[#00FF94]/30 transition-all duration-300 group"
                itemScope
                itemType="http://schema.org/BlogPosting"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    itemProp="image"
                  />
                  <div className="absolute top-4 right-4 bg-[#00FF94] text-black text-xs font-bold px-2 py-1 rounded">
                    {post.category}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-gray-400 text-sm mb-3">
                    <time dateTime="2025-06-15" itemProp="datePublished">{post.date}</time>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="text-xl font-bold mb-3 hover:text-[#00FF94] transition-colors" itemProp="headline">
                    <a href={`/blog/${post.slug}`}>{post.title}</a>
                  </h2>
                  <p className="text-gray-300 mb-4" itemProp="description">{post.excerpt}</p>
                  <a 
                    href={`/blog/${post.slug}`} 
                    className="inline-flex items-center text-[#00FF94] group-hover:text-white transition-colors"
                    aria-label={`Read more about ${post.title}`}
                  >
                    Read more
                    <svg className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </a>
                </div>
              </article>
            ))}
          </div>

          {/* Categories Section */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-center">Explore by Category</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { name: 'Threat Intelligence', icon: '🛡️', count: 12 },
                { name: 'Network Security', icon: '🌐', count: 8 },
                { name: 'Penetration Testing', icon: '🔓', count: 15 },
                { name: 'Cloud Security', icon: '☁️', count: 7 },
                { name: 'Malware Analysis', icon: '🦠', count: 9 },
                { name: 'Compliance', icon: '📜', count: 5 },
                { name: 'IoT Security', icon: '📱', count: 6 },
                { name: 'AI Security', icon: '🧠', count: 11 },
              ].map((category, index) => (
                <div 
                  key={index} 
                  className="bg-gray-800/50 p-4 rounded-lg border border-gray-800 hover:border-[#00FF94]/50 transition-colors cursor-pointer"
                >
                  <div className="text-2xl mb-2">{category.icon}</div>
                  <h3 className="font-medium mb-1">{category.name}</h3>
                  <p className="text-gray-400 text-sm">{category.count} articles</p>
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter CTA */}
          <div className="bg-gradient-to-r from-gray-900 to-black rounded-xl p-8 md:p-12 border border-gray-800 mb-16">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Stay Updated on Cybersecurity</h2>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Get the latest security news, vulnerability alerts, and expert insights delivered to your inbox weekly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-grow px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00FF94] text-white"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-[#00FF94] to-[#00CC77] text-black font-bold rounded-lg hover:opacity-90 transition-opacity">
                  Subscribe
                </button>
              </div>
              <p className="text-gray-500 text-xs mt-3">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPage;
