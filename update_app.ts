import fs from 'fs';

let content = fs.readFileSync('src/App.tsx', 'utf-8');

const startStr = "{/* 3. About House of Gurnani */}";
const endStr = "{/* 12. Timeline */}";

const startIndex = content.indexOf(startStr);
const endIndex = content.indexOf(endStr);

if (startIndex !== -1 && endIndex !== -1) {
  const replacement = `          {/* 3. Project Strategy & Approach */}
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

            <div className="grid md:grid-cols-2 gap-6 bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
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
                  A custom logomark and an elegant "signature magenta" color palette that balances global authority with your unique flair, utilizing modern typography for maximum readability.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center"><ShieldCheck className="w-4 h-4"/></div>
                  Authoritative Copywriting
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  Transforming complex global operations into a trustworthy narrative. Every section will build credibility, explicitly highlighting your audits, pending ISO certification, and legacy.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center"><Settings className="w-4 h-4"/></div>
                  Lead Generation Focus
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  Making contact frictionless. We'll integrate quick-action WhatsApp tools, smart routing contact forms, and persistent CTAs across all pages.
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

          {/* 4. Timeline */}
`;
  
  const newContent = content.substring(0, startIndex) + replacement + content.substring(endIndex + 20);
  
  // Also rename Investment from 13 to 5
  const newerContent = newContent.replace('{/* 13. Investment */}', '{/* 5. Investment */}').replace('{/* 14. Why Us */}', '{/* 6. Why Us & Next Steps */}').replace('{/* 15. Next Steps */}', '');
  
  fs.writeFileSync('src/App.tsx', newerContent);
  console.log("Updated App.tsx successfully via script!");
} else {
  console.log("Could not find boundaries.");
}
