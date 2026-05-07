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
  ArrowUp
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
    { id: 'about', label: 'Client Understanding' },
    { id: 'goals', label: 'Goals & Outcomes' },
    { id: 'sitemap', label: 'Website Structure' },
    { id: 'visuals', label: 'Visual Direction' },
    { id: 'content', label: 'Content Strategy' },
    { id: 'lead-gen', label: 'Lead Generation' },
    { id: 'tech', label: 'Technical Approach' },
    { id: 'pdf', label: 'Company Profile PDF' },
    { id: 'deliverables', label: 'Project Deliverables' },
    { id: 'timeline', label: 'Timelines' },
    { id: 'investment', label: 'Investment & Terms' },
    { id: 'why-us', label: 'Why Choose Us' },
    { id: 'next-steps', label: 'Next Steps' },
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

        <main className="max-w-4xl mx-auto px-6 py-12 md:py-20 lg:px-12">
          
          {/* 1. Cover Section */}
          <motion.section 
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6, ease: "easeOut" }}
            id="cover" className="min-h-[85vh] flex flex-col justify-center mb-16 relative">
            <div className="absolute top-10 right-0 w-72 h-72 bg-fuchsia-100 rounded-full blur-3xl opacity-50 -z-10 animate-pulse pointer-events-none" />
            <div className="uppercase tracking-widest text-fuchsia-600 font-semibold text-sm mb-4">Project Proposal</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 leading-[1.15]">
              Website & Corporate Profile Proposal for <span className="text-fuchsia-700">House of Gurnani</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-10 max-w-2xl font-light leading-relaxed">
              Elevating your global B2B footprint through targeted digital design and authoritative storytelling.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 mt-4 p-6 md:p-8 bg-white rounded-2xl shadow-sm border border-slate-100 items-start sm:items-center justify-between lg:justify-start">
              <div className="w-full sm:w-auto">
                <p className="text-xs tracking-wider uppercase text-slate-400 font-bold mb-1">Prepared For</p>
                <p className="text-lg font-bold text-slate-800">Kunal & Partner</p>
                <p className="text-slate-600 text-sm">House of Gurnani</p>
              </div>
              <div className="hidden sm:block w-px h-12 bg-slate-200"></div>
              <div className="w-full sm:w-auto">
                <p className="text-xs tracking-wider uppercase text-slate-400 font-bold mb-1">Date</p>
                <p className="text-lg font-bold text-slate-800">{new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
              </div>
              <div className="hidden sm:block w-px h-12 bg-slate-200"></div>
              <div className="w-full sm:w-auto">
                <p className="text-xs tracking-wider uppercase text-slate-400 font-bold mb-1">Prepared By</p>
                <p className="text-lg font-bold text-slate-800">Icreatepixels</p>
                <p className="text-slate-600 text-sm">Digital Strategy Team</p>
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

          {/* 3. About House of Gurnani */}
          <motion.section 
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6, ease: "easeOut" }}
            id="about" className="mb-24 scroll-mt-24 p-8 md:p-12 bg-white border border-slate-100 rounded-3xl shadow-sm relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-48 h-48 bg-fuchsia-50 rounded-bl-full -z-10 transition-transform group-hover:scale-110 duration-700 ease-out" />
            <h2 className="text-3xl font-bold text-slate-900 mb-8 tracking-tight">Client Understanding: House of Gurnani</h2>
            <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
              <p>
                Understanding House of Gurnani means understanding the power of a handshake that bridges continents. Founded in 1998 by Kunal and partner, the firm was born from an innate flair for networking and relationship-building. Today, those relationships span decades, driving operations across key global markets including India, China, Panama, Indonesia, South Africa, the UAE, the USA, and Singapore.
              </p>
              <p className="border-l-4 border-fuchsia-600 pl-6 py-2 my-8 font-medium text-slate-800 bg-fuchsia-50/50 rounded-r-xl">
                What truly sets House of Gurnani apart is your internal gauge for success. Rather than benchmarking against competitors, you fiercely <strong>"compete with your past"</strong>—ensuring every delivery is superior to the last. This relentless pursuit of excellence is backed by stringent external audits and a strong commitment to quality assurance.
              </p>
              <p>
                Your unique selling proposition is profound: an exceptional ability to locate and secure what others miss. Coupled with a multilingual team commanding English, Mandarin, Spanish, Arabic, Bahasa Indonesia, Hindi, and Telugu, you break down borders. Our core focus will be translating this reputation—where clients rarely look elsewhere once they partner with you—into a compelling, trustworthy digital narrative.
              </p>
            </div>
          </motion.section>

          {/* 4. Project Goals & Outcomes */}
          <motion.section 
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6, ease: "easeOut" }}
            id="goals" className="mb-24 scroll-mt-24">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-fuchsia-100 flex items-center justify-center text-fuchsia-600 shrink-0">
                <Target className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Project Goals & Outcomes</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4 lg:gap-6">
              {[
                "Establish a credible, modern online presence that precisely reflects your decades-long legacy and global B2B operations.",
                "Clearly articulate core services (Import–Export, Corporate Investment Consulting) and prime specialisations (Food, Printing, Manufacturing).",
                "Build undeniable digital trust through strategic storytelling highlighting certifications, audits, multi-lingual capabilities, and long-term client relationships.",
                "Enable frictionless lead capture and immediate enquiries via strategically placed WhatsApp integrations and online forms.",
                "Deliver a concise, impactful PDF company profile—perfectly aligned with the website—to be shared seamlessly with prospects and stakeholders."
              ].map((goal, idx) => (
                <div key={idx} className={`flex items-start gap-4 p-6 bg-white rounded-2xl border border-slate-100 shadow-sm transition-all hover:shadow-md hover:border-fuchsia-200 ${idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''}`}>
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-fuchsia-100 text-fuchsia-600 flex items-center justify-center font-bold text-sm">
                    {idx + 1}
                  </div>
                  <p className="text-slate-700 leading-relaxed font-medium">{goal}</p>
                </div>
              ))}
            </div>
          </motion.section>

          {/* 5. Website Structure */}
          <motion.section 
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6, ease: "easeOut" }}
            id="sitemap" className="mb-24 scroll-mt-24">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-fuchsia-100 flex items-center justify-center text-fuchsia-600 shrink-0">
                <Layout className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Proposed Website Structure</h2>
            </div>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed">
              We propose a tightly focused, high-impact <strong>5-page architecture</strong> designed to guide corporate visitors from initial awareness to direct enquiry.
            </p>
            
            <div className="space-y-6">
              {[
                {
                  title: "Home",
                  id: "01",
                  desc: "The primary landing page serving as digital headquarters.",
                  details: "Features a strong hero section highlighting global reach and legacy. Includes key statistics (years of experience, countries served), a snapshot of the 'needle in a haystack' USP, and clear pathways to services. Prominent CTAs will drive immediate engagement."
                },
                {
                  title: "About Us",
                  id: "02",
                  desc: "The heartbeat of the brand narrative.",
                  details: "Unpacks the House of Gurnani story since 1998. Highlights the founder's vision, the 'compete with our past' philosophy, linguistic capabilities (7 languages), and quality commitments (annual audits, pending ISO). Built to foster deep trust."
                },
                {
                  title: "Services",
                  id: "03",
                  desc: "Detailed breakdown of core offerings.",
                  details: "Clearly delineates Import–Export solutions and Corporate Investment Consulting. Emphasises vendor flexibility (client's choice vs. vetted network) and showcases the rigorous standards applied to service delivery."
                },
                {
                  title: "Industries & Expertise",
                  id: "04",
                  desc: "Demonstrating sector-specific authority.",
                  details: "Dedicated focus on the Food, Printing, and Manufacturing sectors. This page will reassure sector-specific B2B buyers that House of Gurnani deeply understands their unique logistical and consulting needs."
                },
                {
                  title: "Contact & Enquiries",
                  id: "05",
                  desc: "The main conversion hub.",
                  details: "Provides direct communication channels including interactive maps of global footprints, detailed enquiry forms, and one-click WhatsApp integration for rapid response."
                }
              ].map((page) => (
                <div key={page.id} className="bg-white border focus-within:ring-2 ring-fuchsia-400 border-slate-200 p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row gap-6 md:items-start group">
                  <div className="w-16 flex-shrink-0">
                    <span className="text-4xl font-extrabold text-slate-100 group-hover:text-fuchsia-100 transition-colors">{page.id}</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">{page.title}</h3>
                    <p className="font-semibold text-fuchsia-600 mb-3">{page.desc}</p>
                    <p className="text-slate-600 leading-relaxed">{page.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* 6. Visual Direction */}
          <motion.section 
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6, ease: "easeOut" }}
            id="visuals" className="mb-24 scroll-mt-24">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-fuchsia-100 flex items-center justify-center text-fuchsia-600 shrink-0">
                <PenTool className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Visual Direction & Branding</h2>
            </div>
            <div className="grid lg:grid-cols-2 gap-10">
              <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                <p>
                  Taking inspiration from modern, corporate B2B layouts, the visual identity will balance global authority with the unique House of Gurnani flair. The aesthetic will be exceptionally clean, heavily utilising whitespace to let content breathe and signify premium positioning.
                </p>
                <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm">
                  <h4 className="font-bold text-slate-900 mb-6 text-xl">Proposed Brand Palette</h4>
                  
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-fuchsia-600 shadow-lg shadow-fuchsia-600/30"></div>
                    <div>
                      <p className="font-bold text-slate-900 text-lg">Signature Magenta</p>
                      <p className="text-sm text-slate-500">Primary Accent & Driving Colour</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3 pt-6 border-t border-slate-100">
                    <div className="flex-1 space-y-2">
                       <div className="h-10 rounded-lg bg-slate-900"></div>
                       <p className="text-xs font-semibold text-center text-slate-500 uppercase tracking-widest">Slate</p>
                    </div>
                    <div className="flex-1 space-y-2">
                       <div className="h-10 rounded-lg bg-slate-100 border border-slate-200"></div>
                       <p className="text-xs font-semibold text-center text-slate-500 uppercase tracking-widest">Bone</p>
                    </div>
                    <div className="flex-1 space-y-2">
                       <div className="h-10 rounded-lg bg-white border border-slate-200"></div>
                       <p className="text-xs font-semibold text-center text-slate-500 uppercase tracking-widest">Clean</p>
                    </div>
                  </div>
                  <p className="text-sm mt-6 text-slate-600">
                    Magenta will act as an elegant, striking highlighter against these professional neutrals rather than overwhelming the eye.
                  </p>
                </div>
              </div>
              <div className="space-y-6 text-slate-600 text-lg leading-relaxed pt-2 lg:pt-0">
                <div className="mb-6">
                  <h4 className="font-bold text-slate-900 text-xl mb-3 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-fuchsia-600"></div> Imagery Strategy
                  </h4>
                  <p className="pl-4 border-l border-slate-200">Curated, high-end stock and AI-assisted aesthetics representing global trade, expansive ports, modern logistics, and sophisticated boardroom environments. We will weave in subtle visual cues pointing to food, manufacturing, and printing sectors without being cliché.</p>
                </div>
                <div className="mb-6">
                  <h4 className="font-bold text-slate-900 text-xl mb-3 flex items-center gap-2">
                     <div className="w-2 h-2 rounded-full bg-fuchsia-600"></div> Typography Direction
                  </h4>
                  <p className="pl-4 border-l border-slate-200">We will implement clean, modern sans-serif typefaces (e.g., Inter or Plus Jakarta Sans) tailored for digital screens. They will ensure impeccable readability for long-form corporate reading while maintaining a sharp, premium aesthetic.</p>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-xl mb-3 flex items-center gap-2">
                     <div className="w-2 h-2 rounded-full bg-fuchsia-600"></div> Logo Concepting
                  </h4>
                  <p className="pl-4 border-l border-slate-200">Developing a bold, timeless logomark and wordmark from scratch that anchors the brand and looks excellent on both digital properties and printed corporate documents.</p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* 7. Content Strategy */}
          <motion.section 
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6, ease: "easeOut" }}
            id="content" className="mb-24 scroll-mt-24">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-fuchsia-100 flex items-center justify-center text-fuchsia-600 shrink-0">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Content Strategy & Copywriting</h2>
            </div>
            
            <div className="bg-slate-900 text-white p-8 md:p-12 rounded-3xl shadow-xl">
              <p className="text-xl md:text-2xl text-slate-300 mb-10 font-light leading-relaxed max-w-3xl">
                Great design catches the eye, but <strong className="text-white font-medium">compelling copy closes the deal</strong>. Our copywriting will transform complex global operations into a simple, authoritative, and trustworthy narrative.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                <div className="bg-slate-800/50 backdrop-blur border border-slate-700/50 p-6 md:p-8 rounded-2xl hover:bg-slate-800 transition-colors">
                  <h4 className="text-xl font-bold text-fuchsia-400 mb-3">1. Brand Messaging</h4>
                  <p className="text-slate-400 leading-relaxed">Refining your core narrative to focus heavily on legacy, long-term relationships, and the "needle in the haystack" factor. The tone will be confident, professional, and vastly experienced.</p>
                </div>
                <div className="bg-slate-800/50 backdrop-blur border border-slate-700/50 p-6 md:p-8 rounded-2xl hover:bg-slate-800 transition-colors">
                  <h4 className="text-xl font-bold text-fuchsia-400 mb-3">2. Structural Copy</h4>
                  <p className="text-slate-400 leading-relaxed">Crafting sharp, impactful headlines, scannable service descriptions, and persuasive Calls to Action (CTAs) that guide the user journey intuitively across all 5 pages.</p>
                </div>
                <div className="bg-slate-800/50 backdrop-blur border border-slate-700/50 p-6 md:p-8 rounded-2xl md:col-span-2 flex flex-col sm:flex-row items-start gap-6 hover:bg-slate-800 transition-colors">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-7 h-7" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-emerald-400 mb-3">3. Building Credibility Vectors</h4>
                    <p className="text-slate-400 leading-relaxed text-lg">We will explicitly dedicate copy segments to high-trust indicators: the annual external audits, the upcoming ISO 9001 certification, and your precise vendor philosophy ("only as good as your last performance"). This actively disarms buyer hesitation.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* 8. Lead Generation */}
          <motion.section 
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6, ease: "easeOut" }}
            id="lead-gen" className="mb-24 scroll-mt-24">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-fuchsia-100 flex items-center justify-center text-fuchsia-600 shrink-0">
                <Settings className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Lead Generation & Integrations</h2>
            </div>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed">
              A B2B website must be a 24/7 sales mechanism. We ensure that once a prospect is convinced, getting in touch is completely frictionless.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="border hover:border-fuchsia-300 border-slate-200 p-8 rounded-2xl bg-white shadow-sm hover:shadow-md transition-all group">
                <div className="w-16 h-16 rounded-full bg-emerald-50 mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <MessageSquare className="w-8 h-8 text-emerald-500" />
                </div>
                <h4 className="font-bold text-slate-900 text-xl mb-3">WhatsApp Business</h4>
                <p className="text-slate-600 leading-relaxed">Floating, immediate-response integration allowing instant messaging from any page, tapping into the speed of global trade.</p>
              </div>
              <div className="border hover:border-fuchsia-300 border-slate-200 p-8 rounded-2xl bg-white shadow-sm hover:shadow-md transition-all group">
                <div className="w-16 h-16 rounded-full bg-blue-50 mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <ListChecks className="w-8 h-8 text-blue-500" />
                </div>
                <h4 className="font-bold text-slate-900 text-xl mb-3">Smart Forms</h4>
                <p className="text-slate-600 leading-relaxed">Multi-field contact forms deployed strategically to capture detailed corporate enquiries, filtering and routing leads effectively.</p>
              </div>
              <div className="border hover:border-fuchsia-300 border-slate-200 p-8 rounded-2xl bg-white shadow-sm hover:shadow-md transition-all group">
                <div className="w-16 h-16 rounded-full bg-fuchsia-50 mb-6 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Award className="w-8 h-8 text-fuchsia-500" />
                </div>
                <h4 className="font-bold text-slate-900 text-xl mb-3">Strategic CTAs</h4>
                <p className="text-slate-600 leading-relaxed">Persistent calls to action in the main navigation, at the end of service pages, and in the footer so a conversion opportunity is always visible.</p>
              </div>
            </div>
          </motion.section>

          {/* 9. Technical Approach */}
          <motion.section 
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6, ease: "easeOut" }}
            id="tech" className="mb-24 scroll-mt-24">
             <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-fuchsia-100 flex items-center justify-center text-fuchsia-600 shrink-0">
                <CodeIcon className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Technical Approach</h2>
            </div>
            <div className="bg-slate-100 p-8 md:p-12 rounded-3xl">
              <div className="grid sm:grid-cols-2 gap-8 lg:gap-12 pl-4">
                <div className="relative">
                  <div className="absolute -left-8 top-1 w-3 h-3 rounded-full bg-fuchsia-500 ring-4 ring-fuchsia-100"></div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Modern Architecture</h4>
                  <p className="text-slate-600 leading-relaxed">Developed on a fast, industry-standard modern web stack ensuring robust security and high performance, easily manageable for future content updates.</p>
                </div>
                 <div className="relative">
                  <div className="absolute -left-8 top-1 w-3 h-3 rounded-full bg-fuchsia-500 ring-4 ring-fuchsia-100"></div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Flawless Responsiveness</h4>
                  <p className="text-slate-600 leading-relaxed">Mobile-first engineering guaranteeing that the website layout adapts perfectly across smartphones, tablets, laptops, and large boardroom displays.</p>
                </div>
                 <div className="relative sm:col-span-2 md:w-2/3">
                  <div className="absolute -left-8 top-1 w-3 h-3 rounded-full bg-fuchsia-500 ring-4 ring-fuchsia-100"></div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">SEO-Ready Infrastructure</h4>
                  <p className="text-slate-600 leading-relaxed">Built with clean code, fast load times, and structured on-page SEO (meta titles, descriptions, and semantic headings) to lay a strong foundation for search engine visibility right from day one.</p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* 10. Company Profile PDF */}
          <motion.section 
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6, ease: "easeOut" }}
            id="pdf" className="mb-24 scroll-mt-24">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-fuchsia-100 flex items-center justify-center text-fuchsia-600 shrink-0">
                <FileBox className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Company Profile PDF (Corporate Deck)</h2>
            </div>
            
            <div className="flex flex-col lg:flex-row gap-10 items-start">
              <div className="lg:w-1/2 space-y-6">
                <p className="text-xl text-slate-600 leading-relaxed">
                  To complement the website, we will design a highly professional <strong>8 to 12-page Company Profile PDF</strong>. 
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  This vital digital asset will serve as a powerful leave-behind after B2B meetings and an easily forwardable document via email or WhatsApp. It will share exact visual DNA with the new website for seamless brand consistency.
                </p>
                <div className="bg-fuchsia-50 p-6 rounded-xl border border-fuchsia-100">
                  <h4 className="font-bold text-fuchsia-900 mb-2">Dual Output Formats</h4>
                  <p className="text-fuchsia-800 text-sm">We provide both a high-resolution version for <strong>professional printing</strong> and a compressed, optimised version perfect for <strong>digital sharing</strong>.</p>
                </div>
              </div>
              
              <div className="lg:w-1/2 w-full bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-slate-900 px-6 py-4 rounded-t-2xl font-bold text-white tracking-wide">
                  Proposed Deck Structure
                </div>
                <div className="p-6">
                  <ul className="space-y-4">
                    {[
                      "Cover Page",
                      "About House of Gurnani",
                      "Legacy & Milestones (1998–Present)",
                      "Global Presence Map & Logistics",
                      "Services & Investment Consulting",
                      "Industries / Specialisations",
                      "Approach, Philosophy & USP",
                      "Team & Leadership",
                      "Certifications & Quality Audits",
                      "Contact Information"
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                        <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-xs text-slate-400 font-bold shrink-0">{i+1}</div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.section>

          {/* 11. Deliverables */}
          <motion.section 
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6, ease: "easeOut" }}
            id="deliverables" className="mb-24 scroll-mt-24">
             <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-fuchsia-100 flex items-center justify-center text-fuchsia-600 shrink-0">
                <ListChecks className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Project Deliverables Summary</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Conceptualisation of visual identity & logo design basis the Magenta theme.",
                "Custom 5-page responsive B2B website (Home, About, Services, Industries, Contact).",
                "Full professional copywriting and strategic content development for all web pages.",
                "Basic on-page SEO setup (Meta data, semantic structure, tags).",
                "Integration of interactive lead mechanisms (WhatsApp, Routing Contact Forms).",
                "Design and export of an 8–12 page Company Profile PDF (Digital & Print).",
                "Complete handover of all source files and administrative access credentials."
              ].map((del, i) => (
                <div key={i} className="flex gap-4 bg-white border border-slate-200 p-5 rounded-xl items-start shadow-sm hover:bg-slate-50 transition-colors">
                  <div className="mt-0.5 w-6 h-6 rounded-full bg-fuchsia-100 text-fuchsia-600 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="text-slate-700 font-medium leading-snug">{del}</span>
                </div>
              ))}
            </div>
          </motion.section>

          {/* 12. Timeline */}
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

          {/* 13. Investment */}
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
              <div className="p-8 md:p-10 border-b border-white/10">
                <h3 className="text-2xl font-bold mb-8">Project Investment Scope</h3>
                <ul className="space-y-0">
                  {[
                    { name: "Strategy, Architecture & Project Management", price: "₹ 20,000" },
                    { name: "Visual Identity & Logo Definition", price: "₹ 15,000" },
                    { name: "Custom 5-Page Website Design & Development", price: "₹ 60,000" },
                    { name: "Professional Corporate Copywriting", price: "₹ 25,000" },
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
              
              <div className="bg-slate-950 p-8 md:p-10">
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
            <p className="text-sm text-slate-500 italic px-4 mb-10">*All statutory taxes applicable extra. Third-party costs (e.g., domain registration, server hosting) are not included unless specified.</p>

            <div className="bg-white border border-slate-200 p-8 md:p-10 rounded-3xl shadow-sm mt-8">
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
                    <p className="text-slate-600 leading-relaxed"><strong>In simple terms:</strong> The face of your business. We aren't just picking a font and a colour. We are creating a unique, professional brand identity from scratch that conveys trust, global scale, and your decades of legacy. This involves multiple design iterations, colour psychology, and ensuring the logo looks perfect everywhere from a mobile screen to a printed document.</p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-start">
                  <div className="w-10 h-10 rounded-full bg-fuchsia-100 text-fuchsia-600 flex items-center justify-center font-bold shrink-0">3</div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-xl mb-2">Custom 5-Page Website Design & Development</h4>
                    <p className="text-slate-600 leading-relaxed"><strong>In simple terms:</strong> The actual build. This is the heavy lifting. First, we custom-design each page so it looks premium and exact. Then, our developers write the code to bring it to life. This step ensures the website loads instantly, looks perfect on every phone, tablet, and computer, is secure from hackers, and is structured perfectly so Google can eventually read and rank it.</p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-start">
                  <div className="w-10 h-10 rounded-full bg-fuchsia-100 text-fuchsia-600 flex items-center justify-center font-bold shrink-0">4</div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-xl mb-2">Professional Corporate Copywriting</h4>
                    <p className="text-slate-600 leading-relaxed"><strong>In simple terms:</strong> The sales pitch. We don't just ask you for text to paste on the site. We have professional copywriters digest your complex business, your USP of "finding needles in haystacks," and your 1998 legacy, and turn that into persuasive, scannable, and engaging text. Great copy is what convinces a visitor to click the "Contact Us" button.</p>
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

          {/* 14. Why Us */}
          <motion.section 
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6, ease: "easeOut" }}
            id="why-us" className="mb-24 scroll-mt-24">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 tracking-tight">Why Partner With Us?</h2>
            <div className="bg-gradient-to-br from-fuchsia-600 to-fuchsia-800 text-white p-10 md:p-12 rounded-3xl shadow-xl relative overflow-hidden">
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
          </motion.section>

          {/* 15. Next Steps */}
          <motion.section 
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6, ease: "easeOut" }}
            id="next-steps" className="mb-10 scroll-mt-24">
            <div className="bg-slate-900 text-white p-10 md:p-16 rounded-3xl text-center relative overflow-hidden shadow-2xl">
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
          className="fixed bottom-8 right-8 p-4 bg-slate-900 text-white rounded-full shadow-lg hover:bg-fuchsia-600 hover:shadow-fuchsia-500/25 transition-all z-50 group"
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
