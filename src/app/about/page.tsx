// app/page.tsx

import type { NextPage } from 'next';
import Head from 'next/head';
import { IndianRupee, ArrowRight, Star, CheckCircle, Users, Zap, Target } from 'lucide-react';

// A placeholder for a Brand Logo component
const BrandLogo = ({ className = '' }: { className?: string }) => (
<div className={`text-2xl font-bold text-white ${className}`}>
Creator<span className="text-cyan-400">Hub</span>
</div>
);


const CreatorPage: NextPage = () => {
return (
<>
<Head>
<title>CreatorHub - Monetize Your Influence in India</title>
<meta
name="description"
content="The platform for Indian creators to partner with brands, run campaigns, and earn directly. No middlemen, no confusion. Join CreatorHub today."
/>
<link rel="icon" href="/favicon.ico" />
</Head>

<div className="bg-slate-900 text-slate-100 font-sans">
{/* --- Header --- */}
<header className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-sm">
<div className="container mx-auto px-6 py-4 flex justify-between items-center">
<BrandLogo />
<a
href="#join"
className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300 text-sm md:text-base"
>
Join For Free
</a>
</div>
</header>

<main>
{/* --- Hero Section --- */}
<section className="relative pt-20 pb-24 md:pt-32 md:pb-36 text-center">
<div className="absolute top-0 left-0 w-full h-full bg-grid-slate-700/[0.05]"></div>
<div className="absolute inset-0 -z-10 h-full w-full bg-slate-900 bg-[radial-gradient(125%_125%_at_50%_10%,#0f172a_40%,#06b6d4_100%)] opacity-20"></div>

<div className="container mx-auto px-6 relative z-10">
<div className="bg-cyan-400/10 text-cyan-400 text-sm font-bold px-4 py-1 rounded-full inline-block mb-4">
Exclusively for Indian Creators
</div>
<h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">
Turn Your Influence into Income
</h1>
<p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-8">
Connect with top Indian brands, promote campaigns you love, and get paid directly. Simple, transparent, and built for you.
</p>
<div className="flex justify-center gap-4 flex-wrap">
<a
href="#join"
className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-8 rounded-full text-lg transition-transform duration-300 hover:scale-105 flex items-center gap-2"
>
Become a Creator <ArrowRight size={20} />
</a>
</div>
<div className="mt-8 text-slate-400">
<p>Trusted by 10,000+ creators across India</p>
</div>
</div>
</section>

{/* --- How It Works Section --- */}
<section id="how-it-works" className="py-20 md:py-28 bg-slate-950/50">
<div className="container mx-auto px-6">
<div className="text-center mb-12">
<h2 className="text-3xl md:text-4xl font-bold text-white">Your Journey to Earnings in 4 Simple Steps</h2>
<p className="text-slate-400 mt-2">Everything you need, all in one place.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
{/* Step 1 */}
<div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 text-center">
<div className="inline-block bg-cyan-500/10 text-cyan-400 p-4 rounded-full mb-4">
<Users size={32} />
</div>
<h3 className="text-xl font-bold mb-2">1. Join the Platform</h3>
<p className="text-slate-400">Create your free profile in minutes. Link your social accounts and you're ready to go.</p>
</div>
{/* Step 2 */}
<div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 text-center">
<div className="inline-block bg-cyan-500/10 text-cyan-400 p-4 rounded-full mb-4">
<Target size={32} />
</div>
<h3 className="text-xl font-bold mb-2">2. Discover Campaigns</h3>
<p className="text-slate-400">Browse campaigns from leading Indian brands that match your niche and audience.</p>
</div>
{/* Step 3 */}
<div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 text-center">
<div className="inline-block bg-cyan-500/10 text-cyan-400 p-4 rounded-full mb-4">
<Zap size={32} />
</div>
<h3 className="text-xl font-bold mb-2">3. Promote & Create</h3>
<p className="text-slate-400">Accept a campaign, create authentic content, and share it with your followers.</p>
</div>
{/* Step 4 */}
<div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 text-center">
<div className="inline-block bg-cyan-500/10 text-cyan-400 p-4 rounded-full mb-4">
<IndianRupee size={32} />
</div>
<h3 className="text-xl font-bold mb-2">4. Get Paid Instantly</h3>
<p className="text-slate-400">Receive your earnings directly to your bank account via UPI or NEFT. No delays, no fuss.</p>
</div>
</div>
</div>
</section>

{/* --- Features Section --- */}
<section className="py-20 md:py-28">
<div className="container mx-auto px-6">
<div className="text-center mb-12">
<h2 className="text-3xl md:text-4xl font-bold text-white">Why Creators Choose Us</h2>
<p className="text-slate-400 mt-2">We're built to empower you, not to get in your way.</p>
</div>
<div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="flex items-start gap-4">
<div className="bg-cyan-500/10 text-cyan-400 p-3 rounded-full"><CheckCircle size={24}/></div>
<div>
<h3 className="text-xl font-bold text-white">Direct Payouts</h3>
<p className="text-slate-400 mt-1">Your money, your way. We cut out the middleman so you get paid faster and keep more of what you earn.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="bg-cyan-500/10 text-cyan-400 p-3 rounded-full"><Star size={24}/></div>
<div>
<h3 className="text-xl font-bold text-white">Top Indian Brands</h3>
<p className="text-slate-400 mt-1">Gain access to a curated list of exciting startups and established companies in India.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="bg-cyan-500/10 text-cyan-400 p-3 rounded-full"><Users size={24}/></div>
<div>
<h3 className="text-xl font-bold text-white">For Creators of All Sizes</h3>
<p className="text-slate-400 mt-1">Whether you have 1,000 or 1 million followers, there are campaigns waiting for you.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="bg-cyan-500/10 text-cyan-400 p-3 rounded-full"><Zap size={24}/></div>
<div>
<h3 className="text-xl font-bold text-white">Simple & Transparent</h3>
<p className="text-slate-400 mt-1">A clear dashboard shows your earnings, campaign progress, and opportunities. No hidden fees, no confusion.</p>
</div>
</div>
</div>
</div>
</section>

{/* --- Testimonials Section --- */}
<section className="py-20 md:py-28 bg-slate-950/50">
<div className="container mx-auto px-6">
<div className="text-center mb-12">
<h2 className="text-3xl md:text-4xl font-bold text-white">Hear from fellow Creators</h2>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
{/* Testimonial 1 */}
<div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
<div className="flex items-center mb-4">
{/* Placeholder for user image */}
<div className="w-12 h-12 rounded-full bg-slate-700 mr-4"></div>
<div>
<p className="font-bold text-white">Priya Sharma</p>
<p className="text-sm text-cyan-400">@priyacreates</p>
</div>
</div>
<p className="text-slate-300">"CreatorHub is a game-changer. I landed my first paid collaboration within a week. The payments are super fast directly via UPI, which is amazing!"</p>
</div>
{/* Testimonial 2 */}
<div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
<div className="flex items-center mb-4">
<div className="w-12 h-12 rounded-full bg-slate-700 mr-4"></div>
<div>
<p className="font-bold text-white">Rohan Singh</p>
<p className="text-sm text-cyan-400">@techrohan</p>
</div>
</div>
<p className="text-slate-300">"Finally, a platform that understands Indian creators. The quality of brands is top-notch. The entire process from discovery to payment is incredibly smooth."</p>
</div>
{/* Testimonial 3 */}
<div className="bg-slate-800 p-6 rounded-lg border border-slate-700">
<div className="flex items-center mb-4">
<div className="w-12 h-12 rounded-full bg-slate-700 mr-4"></div>
<div>
<p className="font-bold text-white">Aisha Khan</p>
<p className="text-sm text-cyan-400">@aishasfoodjourney</p>
</div>
</div>
<p className="text-slate-300">"As a food blogger, finding relevant brands was tough. CreatorHub connects me with F&B brands I actually want to work with. Highly recommended!"</p>
</div>
</div>
</div>
</section>

{/* --- FAQ Section --- */}
<section className="py-20 md:py-28">
<div className="container mx-auto px-6 max-w-3xl">
<div className="text-center mb-12">
<h2 className="text-3xl md:text-4xl font-bold text-white">Frequently Asked Questions</h2>
</div>
<div className="space-y-4">
{/* Using details/summary for a no-JS accordion */}
<details className="bg-slate-800/50 p-4 rounded-lg cursor-pointer" open>
<summary className="font-bold text-lg text-white">Is it free for creators to join?</summary>
<p className="text-slate-300 mt-2">Yes, absolutely! Joining CreatorHub is 100% free for creators. Our mission is to help you earn, not to charge you.</p>
</details>
<details className="bg-slate-800/50 p-4 rounded-lg cursor-pointer">
<summary className="font-bold text-lg text-white">How and when do I get paid?</summary>
<p className="text-slate-300 mt-2">Payments are processed as soon as the brand approves your campaign deliverable. You can withdraw your earnings directly to your Indian bank account via UPI or NEFT. Most payouts happen within 24-48 hours.</p>
</details>
<details className="bg-slate-800/50 p-4 rounded-lg cursor-pointer">
<summary className="font-bold text-lg text-white">Do I need a minimum number of followers?</summary>
<p className="text-slate-300 mt-2">No! We believe in the power of micro and nano-influencers. While some campaigns may have specific follower requirements set by the brand, many are open to creators of all sizes with an engaged audience.</p>
</details>
<details className="bg-slate-800/50 p-4 rounded-lg cursor-pointer">
<summary className="font-bold text-lg text-white">Is this only for creators in India?</summary>
<p className="text-slate-300 mt-2">Yes. Currently, CreatorHub is exclusively for content creators residing in India with an Indian bank account for payouts.</p>
</details>
</div>
</div>
</section>

{/* --- Final CTA Section --- */}
<section id="join" className="py-20 md:py-32">
<div className="container mx-auto px-6 text-center">
<div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-8 md:p-12 rounded-xl">
<h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
Ready to Start Earning?
</h2>
<p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto mb-8">
Join India's fastest-growing creator community. Your next brand collaboration is just a click away.
</p>
<a
href="#join"
className="bg-white hover:bg-slate-200 text-slate-900 font-bold py-3 px-8 rounded-full text-lg transition-transform duration-300 hover:scale-105 inline-block"
>
Sign Up Now - It's Free!
</a>
</div>
</div>
</section>

</main>

{/* --- Footer --- */}
<footer className="bg-slate-950/50 border-t border-slate-800">
<div className="container mx-auto px-6 py-8 text-center text-slate-400">
<BrandLogo className="justify-center mb-4" />
<p>© {new Date().getFullYear()} CreatorHub. All Rights Reserved. Made with ❤️ in India.</p>
<div className="flex justify-center gap-6 mt-4">
<a href="#" className="hover:text-white transition-colors">Terms of Service</a>
<a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
</div>
</div>
</footer>

</div>
</>
);
};

export default CreatorPage;