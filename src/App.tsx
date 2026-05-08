import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  FileText, 
  Target, 
  Layout, 
  PenTool, 
  MessageSquare, 
  Settings, 
  FileBox, 
  ListChecks, 
  Clock, 
  CreditCard, 
  ShieldCheck, 
  ArrowRight,
  Award,
  ChevronRight,
  Menu,
  X,
  CheckCircle2,
  ArrowUp,
  Globe,
  ExternalLink
} from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('cover');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Smooth scroll spy
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollY = window.pageYOffset;

      if (scrollY > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }

      sections.forEach(current => {
        const sectionHeight = (current as HTMLElement).offsetHeight;
        const sectionTop = (current as HTMLElement).offsetTop - 100;
        const sectionId = current.getAttribute('id');

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          if (sectionId) setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
      setIsMobileMenuOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems = [
    { id: 'cover', label: 'Cover' },
    { id: 'executive-summary', label: 'Executive Summary' },
    { id: 'strategy', label: 'Project Strategy & Approach' },
    { id: 'recent-work', label: 'Recent Work Preview' },
    { id: 'timeline', label: 'Timeline' },
    { id: 'investment', label: 'Investment & Scope' },
    { id: 'next-steps', label: 'Why Us & Next Steps' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 flex">
      {/* Mobile Sidebar Overlay */}
      {isMobileMenuOpen && (
         <div 
           className="fixed inset-0 bg-slate-900/50 z-40 lg:hidden"
           onClick={() => setIsMobileMenuOpen(false)}
         />
      )}

      {/* Sidebar Navigation */}
      <nav className={`fixed top-0 left-0 h-full w-64 bg-white border-r border-slate-200 p-6 overflow-y-auto z-50 transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
        <div className="flex items-center justify-between mb-8">
          <div className="text-xl font-bold text-fuchsia-700 tracking-tight flex items-center gap-2" title="House of Gurnani Proposal">
            <FileText className="w-5 h-5 flex-shrink-0" />
            <span className="truncate">Proposal</span>
          </div>
          <button className="lg:hidden text-slate-500 hover:text-slate-700" onClick={() => setIsMobileMenuOpen(false)}>
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="space-y-1 pb-10">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`w-full text-left px-4 py-2.5 rounded-lg text-sm transition-all duration-200 ${
                activeSection === item.id 
                  ? 'bg-fuchsia-50 text-fuchsia-700 font-semibold' 
                  : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </nav>

      {/* Main Content Area */}
      <div className="flex-1 lg:ml-64 relative">
        {/* Mobile Header */}
        <header className="lg:hidden sticky top-0 z-30 bg-white border-b border-slate-200 px-4 py-3 flex items-center justify-between">
          <div className="text-lg font-bold text-slate-800 truncate pr-4">House of Gurnani Proposal</div>
          <button 
            className="p-2 text-slate-600 hover:bg-slate-100 rounded-md shrink-0"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className="w-5 h-5" />
          </button>
        </header>

        <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-20 lg:px-12">
          
          {/* 1. Cover Section */}
          <motion.section 
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6, ease: "easeOut" }}
            id="cover" className="min-h-[85vh] flex flex-col justify-center mb-16 relative py-10">
            
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] -z-20 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
            <div className="absolute top-0 right-10 w-96 h-96 bg-fuchsia-400/10 rounded-full blur-3xl opacity-60 -z-10 animate-pulse pointer-events-none" />
            <div className="absolute bottom-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl opacity-60 -z-10 animate-pulse delay-700 pointer-events-none" />
            
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 rounded-full bg-slate-900 text-white text-xs font-bold tracking-widest uppercase shadow-sm">
                Confidential
              </span>
              <span className="uppercase tracking-widest text-fuchsia-600 font-bold text-sm">Project Proposal</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 mb-8 leading-[1.1] tracking-tight">
              Website & Corporate Profile Proposal for <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 via-purple-600 to-indigo-600">House of Gurnani</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-500 font-light max-w-2xl mb-16 leading-relaxed">
              Elevating your global B2B footprint through targeted digital design and authoritative storytelling.
            </p>

            <div className="relative p-[1px] rounded-3xl bg-gradient-to-b from-slate-200 to-slate-100 max-w-3xl shadow-sm">
              <div className="grid sm:grid-cols-3 gap-8 bg-white/60 backdrop-blur-md p-8 md:p-10 rounded-[23px]">
                <div className="flex flex-col gap-1">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2">
                    <Target className="w-3 h-3"/> Prepared For
                  </p>
                  <p className="font-bold text-slate-900 text-lg">Kunal & Partner</p>
                  <p className="text-slate-500 text-sm font-medium">House of Gurnani</p>
                </div>
                <div className="sm:border-l sm:border-slate-200/60 sm:pl-8 flex flex-col gap-1">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2">
                    <Clock className="w-3 h-3"/> Date
                  </p>
                  <p className="font-bold text-slate-900 text-lg">{new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
                </div>
                <div className="sm:border-l sm:border-slate-200/60 sm:pl-8 flex flex-col gap-1">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-2">
                    <PenTool className="w-3 h-3"/> Prepared By
                  </p>
                  <p className="font-bold text-slate-900 text-lg">Icreatepixels</p>
                  <p className="text-slate-500 text-sm font-medium">Digital Strategy</p>
                </div>
              </div>
            </div>
          </motion.section>

          <hr className="w-full border-slate-200 mb-20 block" />

          {/* 2. Executive Summary */}
          <motion.section 
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6, ease: "easeOut" }}
            id="executive-summary" className="mb-24 scroll-mt-24">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-fuchsia-100 flex items-center justify-center text-fuchsia-600 shrink-0">
                <FileText className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Executive Summary</h2>
            </div>
            <div className="prose prose-lg text-slate-600 text-lg leading-relaxed space-y-6">
              <p>
                Since 1998, <strong>House of Gurnani</strong> has established a formidable reputation in the global marketplace, acting as a trusted consultancy and trading partner across 15+ countries. Driven by a philosophy of competing with your own past performances, your legacy is built on enduring relationships, an expansive linguistic footprint (7 languages), and a unique ability to uncover bespoke opportunities—"the smallest needles in the largest haystacks."
              </p>
              <p>
                As your business continues to expand its B2B consulting and import–export solutions in sectors like Food, Printing, and Manufacturing, your brand requires an authoritative digital presence. The objective of this project is to craft a premium, modern B2B website and an accompanying corporate profile PDF that accurately reflect your deeply established credibility, rigorous standards (including external audits and pending ISO 9001 certification), and vast global reach.
              </p>
              <p>
                We propose designing and developing a streamlined 5-page website along with an 8–12 page corporate deck. By leveraging sophisticated design cues, strategic brand messaging, and modern lead-generation touchpoints (such as WhatsApp integration), we will build a digital ecosystem that not only honors your legacy but acts as a powerful tool to generate qualified corporate leads.
              </p>
            </div>
          </motion.section>

                    {/* 3. Project Strategy & Approach */}
          <motion.section 
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6, ease: "easeOut" }}
            id="strategy" className="mb-24 scroll-mt-24">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-fuchsia-100 flex items-center justify-center text-fuchsia-600 shrink-0">
                <Target className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Project Strategy & Approach</h2>
            </div>
            
            <p className="text-xl text-slate-600 mb-10 leading-relaxed">
              We propose a tightly focused approach that combines premium visual design, authoritative writing, and frictionless lead generation to act as a 24/7 digital salesperson for your global operations.
            </p>

            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 bg-white p-6 sm:p-8 rounded-3xl border border-slate-100 shadow-sm">
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-fuchsia-50 text-fuchsia-600 flex items-center justify-center"><Layout className="w-4 h-4"/></div>
                  5-Page Digital HQ
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  A focused, high-impact architecture (Home, About, Services, Industries, Contact) designed to guide corporate visitors from initial awareness to direct enquiry.
                </p>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-fuchsia-50 text-fuchsia-600 flex items-center justify-center"><PenTool className="w-4 h-4"/></div>
                  Visual Identity & Branding
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  A custom logomark and an elegant "signature magenta" color palette that balances global authority with your unique flair. We will provide the final visual identity and logo definition files from our end for your ongoing use.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center"><ShieldCheck className="w-4 h-4"/></div>
                  SEO-Optimized Copywriting
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  Transforming complex global operations into a trustworthy narrative. The copywriting will naturally integrate an SEO perspective to keep search rankings in mind, fueled by targeted keyword research.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center"><Settings className="w-4 h-4"/></div>
                  Lead Generation & Email
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  Making contact frictionless. We'll integrate quick-action WhatsApp tools and smart forms. We're also adding the foundation for email marketing support, enabling us to focus on this in later phases of launch if needed.
                </p>
              </div>

              <div className="space-y-4 md:col-span-2 pt-6 mt-2 border-t border-slate-100">
                <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center"><FileBox className="w-4 h-4"/></div>
                  Company Profile PDF (Corporate Deck)
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm max-w-3xl">
                  To complement your website, we will distill the messaging and design into an immaculate 8–12 page digital PDF deck. Perfect as a pristine leave-behind after B2B meetings, tailored for both high-end print and quick corporate sharing across email or WhatsApp.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Recent Work Preview */}
          <motion.section 
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6, ease: "easeOut" }}
            id="recent-work" className="mb-24 scroll-mt-24">
             <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-fuchsia-100 flex items-center justify-center text-fuchsia-600 shrink-0">
                <Globe className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Recent Work Preview</h2>
            </div>
            
            <p className="text-xl text-slate-600 mb-10 leading-relaxed">
              Before we build your legacy, here's a glimpse into the digital experiences we've crafted for other premium brands.
            </p>

            <div className="grid lg:grid-cols-3 gap-6 bg-[#0a0a0a] p-6 sm:p-8 rounded-[2.5rem]">
              {[
                { 
                  name: "Savoir Studio", 
                  link: "https://www.ssbykmw.com/", 
                  desc: "Built the full-service content production arm for Karn Marketing Warfare from scratch. Live operational infrastructure.",
                  image: "https://api.microlink.io/?url=https://www.ssbykmw.com/&screenshot=true&meta=false&embed=screenshot.url",
                  useIframe: true,
                  badge: "STUDIO INCEPTION • LIVE",
                  tags: ["OPERATIONAL INFRASTRUCTURE", "CREATIVE LEADERSHIP", "PRODUCTION PIPELINE"]
                },
                { 
                  name: "CKC Jewellers", 
                  link: "https://www.krishniahchetty.co/", 
                  desc: "A robust e-commerce and heritage showcase. Balancing a rich legacy with modern, secure, and seamless digital shopping experiences.",
                  image: "https://api.microlink.io/?url=https://www.krishniahchetty.co/&screenshot=true&meta=false&embed=screenshot.url",
                  useIframe: true,
                  badge: "PREMIUM D2C • LIVE",
                  tags: ["BRAND IDENTITY", "E-COMMERCE ARCHITECTURE", "UI/UX DESIGN"]
                },
                { 
                  name: "Book Your Voyage", 
                  link: "https://www.bookyourvoyage.com/product-and-services", 
                  desc: "A comprehensive travel portal focused on user journey flow, structured service presentation, and frictionless lead generation.",
                  image: "https://api.microlink.io/?url=https://www.bookyourvoyage.com/product-and-services&screenshot=true&meta=false&embed=screenshot.url",
                  useIframe: false,
                  badge: "TRAVEL PORTAL • LIVE",
                  tags: ["WEBSITE ARCHITECTURE", "DIGITAL STRATEGY", "LEAD GEN"]
                }
              ].map((work, idx) => (
                <a href={work.link} target="_blank" rel="noopener noreferrer" key={idx} className="group flex flex-col bg-[#111111] border border-[#222] rounded-[2rem] hover:border-[#444] transition-all duration-300 overflow-hidden relative">
                  
                  {/* Image Header with overlapping Badge */}
                  <div className="h-64 relative w-full overflow-hidden bg-slate-900 shrink-0 flex items-center justify-center">
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500 z-10 pointer-events-none"></div>
                    
                    {work.useIframe ? (
                      <div className="absolute top-0 left-0 w-[400%] h-[400%] origin-top-left scale-[0.25] pointer-events-none transition-transform duration-700 ease-out group-hover:scale-[0.26]">
                        <iframe src={work.link} title={work.name} className="w-full h-full border-0" tabIndex={-1} aria-hidden="true" />
                      </div>
                    ) : (
                      <img src={work.image} alt={work.name} className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" loading="lazy" />
                    )}
                    
                    {/* Badge */}
                    <div className="absolute bottom-4 left-0 w-full flex justify-center z-20 pointer-events-none">
                      <span className="bg-[#2a2a2a]/90 backdrop-blur-md text-white text-[0.65rem] font-bold tracking-[0.2em] px-4 py-2 rounded-full border border-white/10 shadow-xl uppercase">
                        {work.badge}
                      </span>
                    </div>
                  </div>
                  
                  {/* Content Body */}
                  <div className="p-8 flex-1 flex flex-col bg-[#111111]">
                    <h3 className="text-3xl font-serif font-bold text-white mb-4 group-hover:text-slate-200 transition-colors">{work.name}</h3>
                    <p className="text-[#a0a0a0] leading-relaxed text-sm mb-8 flex-1">
                      {work.desc}
                    </p>
                    
                    {/* Bottom Tags */}
                    <div className="border-t border-white/10 pt-6 mt-auto">
                      <div className="flex flex-wrap gap-x-4 gap-y-3">
                        {work.tags.map((tag, i) => (
                          <div key={i} className="flex items-center gap-1.5 text-[0.65rem] font-bold tracking-widest text-[#888888] uppercase">
                            <div className="w-1 h-1 rounded-full bg-[#555]"></div>
                            {tag}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </motion.section>

          {/* 4. Timeline */}

          <motion.section 
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6, ease: "easeOut" }}
            id="timeline" className="mb-24 scroll-mt-24">
             <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-fuchsia-100 flex items-center justify-center text-fuchsia-600 shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Proposed Timelines</h2>
            </div>
            <p className="text-slate-600 mb-10 text-xl leading-relaxed">
              Given the urgency of the requirement, we propose an accelerated, sequential sprint methodology focused on rapid iteration.
            </p>
            
            <div className="relative border-l-2 border-slate-200 ml-4 md:ml-6 space-y-12">
              {[
                { phase: "Discovery & Strategy", time: "Week 1", desc: "Kickoff call, deep-dive into operations, architecture sign-off, and visual moodboard presentation." },
                { phase: "Content & Branding", time: "Week 2", desc: "Logo finalisation, copywriting drafts for website and PDF, and structural wireframes." },
                { phase: "Design & Development", time: "Week 3 & 4", desc: "High-fidelity website design mockups, front-end development, CMS integration, and initial PDF layouts." },
                { phase: "Testing & Revisions", time: "Week 5", desc: "Client feedback loops, responsive testing across devices, speed optimisation, and functional form checks." },
                { phase: "Launch & Handover", time: "Week 6", desc: "Final deployment of the live website to production, delivery of final PDF assets, and full operational handover." }
              ].map((item, idx) => (
                <div key={idx} className="relative pl-8 md:pl-10">
                  <div className="absolute top-1.5 -left-[9px] w-4 h-4 rounded-full bg-white border-4 border-fuchsia-500 shadow-sm"></div>
                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 mb-2">
                    <h4 className="text-xl font-bold text-slate-900">Phase {idx + 1}: {item.phase}</h4>
                    <span className="text-sm font-bold tracking-wider uppercase text-fuchsia-600 bg-fuchsia-50 px-3 py-1 rounded-full w-fit">
                      {item.time}
                    </span>
                  </div>
                  <p className="text-slate-600 text-lg leading-relaxed max-w-2xl">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.section>

          {/* 5. Investment */}
          <motion.section 
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6, ease: "easeOut" }}
            id="investment" className="mb-24 scroll-mt-24">
             <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-fuchsia-100 flex items-center justify-center text-fuchsia-600 shrink-0">
                <CreditCard className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Investment & Payment Terms</h2>
            </div>
            
            <div className="bg-slate-900 text-white rounded-3xl overflow-hidden mb-6 shadow-2xl">
              <div className="p-6 sm:p-8 md:p-10 border-b border-white/10">
                <h3 className="text-2xl font-bold mb-8">Project Investment Scope</h3>
                <ul className="space-y-0">
                  {[
                    { name: "Strategy, Architecture & Project Management", price: "₹ 20,000" },
                    { name: "Visual Identity & Logo Definition", price: "₹ 15,000" },
                    { name: "Custom 5-Page Website Design & Development", price: "₹ 60,000" },
                    { name: "Professional SEO Copywriting & Keyword Research", price: "₹ 25,000" },
                    { name: "8-12 Page Company Profile PDF Design", price: "₹ 15,000" }
                  ].map((item, i) => (
                    <li key={i} className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-5 border-b border-white/10 group hover:bg-white/5 px-4 -mx-4 rounded-lg transition-colors">
                      <span className="text-lg text-slate-300 font-medium mb-2 sm:mb-0">{item.name}</span>
                      <span className="text-fuchsia-400 font-mono tracking-widest text-sm bg-fuchsia-400/10 px-3 py-1 rounded-md sm:text-right">
                        {item.price}
                      </span>
                    </li>
                  ))}
                  <li className="flex flex-col sm:flex-row justify-between items-center pt-8 mt-2">
                    <span className="font-bold text-white text-2xl mb-2 sm:mb-0">Total Estimated Investment</span>
                    <span className="text-white font-mono tracking-wider text-xl font-bold bg-fuchsia-600 px-6 py-2 rounded-lg">
                      ₹ 1,35,000
                    </span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-slate-950 p-6 sm:p-8 md:p-10">
                <h4 className="font-semibold text-slate-400 mb-6 uppercase tracking-widest text-sm">Standard Payment Milestones</h4>
                <div className="grid sm:grid-cols-3 gap-6">
                   <div className="bg-slate-800/80 border border-slate-700/50 p-6 rounded-2xl text-center">
                     <span className="block text-4xl font-extrabold text-white mb-2">50%</span>
                     <span className="text-xs text-fuchsia-400 uppercase tracking-widest font-semibold">Advance on Signing</span>
                   </div>
                   <div className="bg-slate-800/80 border border-slate-700/50 p-6 rounded-2xl text-center">
                     <span className="block text-4xl font-extrabold text-white mb-2">30%</span>
                     <span className="text-xs text-fuchsia-400 uppercase tracking-widest font-semibold">On Design Approval</span>
                   </div>
                   <div className="bg-slate-800/80 border border-slate-700/50 p-6 rounded-2xl text-center">
                     <span className="block text-4xl font-extrabold text-white mb-2">20%</span>
                     <span className="text-xs text-fuchsia-400 uppercase tracking-widest font-semibold">Prior to Go-Live</span>
                   </div>
                </div>
              </div>
            </div>
            <p className="text-sm text-slate-500 italic px-4 mb-2 mt-4">*All statutory taxes applicable extra. Third-party costs (e.g., domain registration, server hosting) are not included unless specified.</p>
            <p className="text-sm text-slate-500 italic px-4 mb-10">*Pricing for website creation covers overall development within the timeline. Any changes requested after the timeline has concluded will be charged at actuals based on requirements. However, we are providing <span className="font-semibold text-slate-700">1 month of complimentary free support</span> post-launch.</p>

            <div className="bg-white border border-slate-200 p-6 sm:p-8 md:p-10 rounded-3xl shadow-sm mt-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">What Goes Into This Work?</h3>
              <p className="text-slate-600 mb-8 text-lg leading-relaxed">
                Building a website that acts as a 24/7 salesperson requires a lot more than just putting pages on the internet. Here is a simple breakdown of the effort and expertise required at each step to ensure we deliver a premium, high-performing asset for House of Gurnani, which justifies the investment:
              </p>
              
              <div className="space-y-8">
                <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-start">
                  <div className="w-10 h-10 rounded-full bg-fuchsia-100 text-fuchsia-600 flex items-center justify-center font-bold shrink-0">1</div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-xl mb-2">Strategy, Architecture & Project Management</h4>
                    <p className="text-slate-600 leading-relaxed"><strong>In simple terms:</strong> The blueprint. Before writing code or designing, we spend hours researching your industry, understanding your audience, and mapping out exactly how visitors should flow through the website to eventually contact you. This also covers the dedicated time spent interacting with you, managing the project, and ensuring everything runs smoothly and on time.</p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-start">
                  <div className="w-10 h-10 rounded-full bg-fuchsia-100 text-fuchsia-600 flex items-center justify-center font-bold shrink-0">2</div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-xl mb-2">Visual Identity & Logo Definition</h4>
                    <p className="text-slate-600 leading-relaxed"><strong>In simple terms:</strong> The face of your business. We aren't just picking a font and a colour. We are creating a unique, professional brand identity from scratch that conveys trust, global scale, and your decades of legacy. We will provide the final visual identity and logo definition files as per our end for your records.</p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-start">
                  <div className="w-10 h-10 rounded-full bg-fuchsia-100 text-fuchsia-600 flex items-center justify-center font-bold shrink-0">3</div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-xl mb-2">Custom 5-Page Website Design & Development</h4>
                    <p className="text-slate-600 leading-relaxed"><strong>In simple terms:</strong> The actual build. We custom-design each page so it looks premium, then our developers write the code to bring it to life. The pricing here is for the overall development. Any changes after the timeline will be charged per actual requirements, but you get complimentary 1 month free support.</p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-start">
                  <div className="w-10 h-10 rounded-full bg-fuchsia-100 text-fuchsia-600 flex items-center justify-center font-bold shrink-0">4</div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-xl mb-2">SEO Copywriting & Keyword Research</h4>
                    <p className="text-slate-600 leading-relaxed"><strong>In simple terms:</strong> The sales pitch. We have professionals digest your complex business and write persuasive text. The copywriting is crafted from an SEO perspective to keep ranking in mind. The research is charged for the keyword finding as per your business needs, and we will be sharing the targeted keywords with you.</p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-start">
                  <div className="w-10 h-10 rounded-full bg-fuchsia-100 text-fuchsia-600 flex items-center justify-center font-bold shrink-0">5</div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-xl mb-2">8-12 Page Company Profile PDF Design</h4>
                    <p className="text-slate-600 leading-relaxed"><strong>In simple terms:</strong> Your digital brochure. We take the beautiful design and powerful words from the website and re-format them into a stunning PDF document. This requires distinct layout skills to ensure it looks like a high-end corporate magazine, perfectly optimized to be shared easily over WhatsApp or printed for a boardroom meeting.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* 5. Why Us & Next Steps */}
          <motion.section 
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6, ease: "easeOut" }}
            id="next-steps" className="mb-10 scroll-mt-24">
            
            <h2 className="text-3xl font-bold text-slate-900 mb-8 tracking-tight">Why Partner With Us?</h2>
            
            <div className="bg-gradient-to-br from-fuchsia-600 to-fuchsia-800 text-white p-6 sm:p-10 md:p-12 mb-10 rounded-3xl shadow-xl relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/4" />
              
              <div className="relative z-10 space-y-6 text-lg md:text-xl font-light text-fuchsia-50 leading-relaxed">
                <p>
                  We recognise that House of Gurnani is not just a business, but a legacy built on trust, meticulous attention to detail, and enduring global relationships. You need a digital partner who operates with the exact same ethos.
                </p>
                <p>
                  We specialise in B2B brand storytelling and lead-generation architecture. We don't just build websites; we build digital assets that act as a direct extension of your boardroom, filtering and persuading corporate clients before you even speak to them. 
                </p>
                <p className="font-medium text-white border-l-4 border-fuchsia-400 pl-6 py-2 mt-8">
                  Like you, we judge ourselves strictly by the quality of our last delivery, ensuring that your transition into this new digital identity is managed with precision, punctuality, and uncompromising excellence.
                </p>
              </div>
            </div>

            <div className="bg-slate-900 text-white p-6 sm:p-10 md:p-16 rounded-3xl text-center relative overflow-hidden shadow-2xl">
              <div className="relative z-10">
                <h2 className="text-3xl md:text-5xl font-extrabold mb-6">Ready to Build the Legacy?</h2>
                <p className="text-slate-400 text-xl font-light mb-12 max-w-2xl mx-auto">
                  Let's bring the House of Gurnani narrative to the global digital stage.
                </p>
                
                <div className="bg-white/5 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 text-left max-w-2xl mx-auto mb-10 hover:bg-white/10 transition-colors">
                  <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                    <ArrowRight className="w-6 h-6 text-fuchsia-500"/> Immediate Next Steps
                  </h4>
                  <ul className="space-y-4 text-slate-300 text-lg">
                    <li className="flex gap-4 items-start">
                      <div className="w-8 h-8 rounded-full bg-slate-800 text-fuchsia-400 font-bold flex items-center justify-center shrink-0 border border-slate-700 shadow-sm">1</div> 
                      <span className="pt-1">Review and approve this proposal scope and commercial terms.</span>
                    </li>
                    <li className="flex gap-4 items-start">
                      <div className="w-8 h-8 rounded-full bg-slate-800 text-fuchsia-400 font-bold flex items-center justify-center shrink-0 border border-slate-700 shadow-sm">2</div> 
                      <span className="pt-1">Schedule a 45-minute project kickoff & discovery video call.</span>
                    </li>
                    <li className="flex gap-4 items-start">
                      <div className="w-8 h-8 rounded-full bg-slate-800 text-fuchsia-400 font-bold flex items-center justify-center shrink-0 border border-slate-700 shadow-sm">3</div> 
                      <span className="pt-1">Share any existing brand assets, company data, or product briefs.</span>
                    </li>
                  </ul>
                </div>

                <p className="font-medium text-2xl text-slate-200 mb-8">
                  We look forward to partnering with you on this journey.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a href="mailto:hello@icreatepixels.com" className="px-8 py-4 bg-fuchsia-600 hover:bg-fuchsia-500 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-fuchsia-500/25 flex items-center gap-2">
                    <MessageSquare className="w-5 h-5" />
                    Contact Me
                  </a>
                  <a href="https://www.icreatepixels.in/" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl border border-slate-700 transition-all flex items-center gap-2">
                    <Layout className="w-5 h-5" />
                    Visit Icreatepixels
                  </a>
                </div>
              </div>
            </div>
          </motion.section>

          <footer className="mt-24 pt-8 border-t border-slate-200 text-center pb-12">
            <p className="text-slate-500 flex flex-col md:flex-row items-center justify-center gap-2 mb-4">
              <span className="flex items-center gap-2"><FileBox className="w-4 h-4" /> House of Gurnani Proposal</span>
              <span className="hidden md:inline">•</span>
              <span>Strictly Confidential</span>
            </p>
            <p className="text-slate-400 text-sm">
              Made by <a href="https://www.icreatepixels.in/" target="_blank" rel="noopener noreferrer" className="text-fuchsia-600 hover:text-fuchsia-700 hover:underline font-semibold transition-colors">Icreatepixels</a>
            </p>
          </footer>

        </main>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 lg:bottom-8 lg:right-8 p-3 lg:p-4 bg-slate-900 text-white rounded-full shadow-lg hover:bg-fuchsia-600 hover:shadow-fuchsia-500/25 transition-all z-50 group"
          aria-label="Go to top"
        >
          <ArrowUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
        </button>
      )}
    </div>
  );
}

function CodeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}
