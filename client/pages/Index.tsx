import React, { useState } from "react";
import {
  MessageCircle,
  ArrowRight,
  Menu,
  X,
  Mail,
  Phone,
  MapPin,
  Linkedin,
} from "lucide-react";

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-brand-600/10 z-50">
        <div className="max-w-7xl mx-auto px-5">
          <div className="flex items-center justify-between py-3">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-brand-600 rounded-md flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-white" strokeWidth={2} />
              </div>
              <span className="font-alexandria text-2xl font-bold text-text-primary">
                Explainer
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <a
                href="#"
                className="font-poppins text-sm font-medium text-text-primary hover:text-brand-600 transition-colors"
              >
                Home
              </a>
              <a
                href="#"
                className="font-poppins text-sm font-medium text-text-primary hover:text-brand-600 transition-colors"
              >
                How It Works
              </a>
              <a
                href="#"
                className="font-poppins text-sm font-medium text-text-primary hover:text-brand-600 transition-colors"
              >
                About
              </a>
              <a
                href="#"
                className="font-poppins text-sm font-medium text-text-primary hover:text-brand-600 transition-colors"
              >
                Team
              </a>
              <a
                href="#"
                className="font-poppins text-sm font-medium text-text-primary hover:text-brand-600 transition-colors"
              >
                Contact
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-brand-600/10">
            <nav className="px-5 py-4 space-y-4">
              <a
                href="#"
                className="block font-poppins text-sm font-medium text-text-primary"
              >
                Home
              </a>
              <a
                href="#"
                className="block font-poppins text-sm font-medium text-text-primary"
              >
                How It Works
              </a>
              <a
                href="#"
                className="block font-poppins text-sm font-medium text-text-primary"
              >
                About
              </a>
              <a
                href="#"
                className="block font-poppins text-sm font-medium text-text-primary"
              >
                Team
              </a>
              <a
                href="#"
                className="block font-poppins text-sm font-medium text-text-primary"
              >
                Contact
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-5">
        <div className="max-w-4xl mx-auto text-center">
          {/* AI Badge */}
          <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-brand-300 mb-7">
            <span className="font-alexandria text-xs font-semibold text-text-primary">
              ⚖️ AI-Powered Legal Intelligence
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="font-alexandria text-6xl md:text-8xl lg:text-[96px] font-bold leading-tight tracking-tight mb-7">
            <span className="text-text-primary">expl</span>
            <span className="text-brand-600">ai</span>
            <span className="text-text-primary">ner</span>
          </h1>

          {/* Description */}
          <p className="font-poppins text-lg md:text-xl leading-7 text-text-secondary max-w-4xl mx-auto mb-8">
            Understand any legal document in minutes — clear, simple, risk-free.
            Explainer helps individuals and businesses instantly analyze,
            translate, and verify legal contracts — with clear summaries, risk
            flags, and compliance checks with Uzbekistan's laws.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="inline-flex items-center justify-center gap-4 px-8 py-3.5 bg-brand-600 hover:bg-brand-700 text-white rounded-md font-poppins text-sm font-medium transition-colors">
              Start Explaining
              <ArrowRight className="w-4 h-4" />
            </button>
            <button className="inline-flex items-center justify-center px-8 py-3.5 border border-brand-600 text-brand-600 hover:bg-brand-50 rounded-md font-poppins text-sm font-medium transition-colors">
              See Demo
            </button>
          </div>
        </div>
      </section>

      {/* About Explainer Section */}
      <section className="py-20 px-5 bg-brand-300/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-alexandria text-4xl md:text-5xl font-bold text-text-primary mb-4">
              About Explainer
            </h2>
            <p className="font-poppins text-xl text-text-muted">
              AI-powered legal assistant for smart contract analysis and
              compliance
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Content */}
            <div className="space-y-12">
              <p className="font-poppins text-base leading-7 text-text-secondary">
                Explainer simplifies legal documents using advanced AI. It
                analyzes contracts and agreements to deliver clear summaries,
                risk highlights, and insights based on Uzbekistan's laws.
              </p>
              <p className="font-poppins text-base leading-7 text-text-secondary">
                Built by legal and AI experts, Explainer combines LLMs with a
                RAG system to match document content against local legislation.
                It identifies document types, flags issues, and ensures legal
                clarity.
              </p>
              <p className="font-poppins text-base leading-7 text-text-secondary">
                Designed for businesses and individuals, Explainer turns complex
                legal language into understandable advice—helping users make
                smarter decisions with confidence.
              </p>
            </div>

            {/* Right Card */}
            <div className="bg-white rounded-lg border border-brand-600/20 shadow-lg p-8 text-center">
              <div className="w-16 h-48 bg-brand-300/50 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MessageCircle
                  className="w-16 h-16 text-brand-600"
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="font-alexandria text-xl font-semibold text-text-primary mb-3">
                Clear Legal Communication
              </h3>
              <p className="font-alexandria text-base text-text-muted">
                Making complex legal documents understandable for everyone
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Advantages Section */}
      <section className="py-20 px-5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-alexandria text-4xl md:text-5xl font-bold text-text-primary mb-4">
              Our Advantages
            </h2>
            <p className="font-poppins text-xl text-text-muted">
              Why Explainer is the preferred choice for legal document analysis
              and explanation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Smart AI Analysis */}
            <div className="bg-brand-300 rounded-lg border border-brand-600/20 shadow-sm p-6 text-center">
              <div className="w-16 h-16 bg-brand-600/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-brand-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h3 className="font-alexandria text-2xl font-semibold text-text-primary mb-7">
                Smart AI Analysis
              </h3>
              <p className="font-poppins text-base leading-6 text-text-secondary">
                Trained on legal documents, our AI breaks down complex contracts
                into clear insights—fast, accurate, and easy to understand.
              </p>
            </div>

            {/* Secure & Confidential */}
            <div className="bg-brand-300 rounded-lg border border-brand-600/20 shadow-sm p-6 text-center">
              <div className="w-16 h-16 bg-brand-600/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-brand-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="font-alexandria text-2xl font-semibold text-text-primary mb-7">
                Secure & Confidential
              </h3>
              <p className="font-poppins text-base leading-6 text-text-secondary">
                We use end-to-end encryption and professional-grade privacy
                standards to ensure all your legal data stays protected.
              </p>
            </div>

            {/* Instant Clarity */}
            <div className="bg-brand-300 rounded-lg border border-brand-600/20 shadow-sm p-6 text-center">
              <div className="w-16 h-16 bg-brand-600/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-brand-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="font-alexandria text-2xl font-semibold text-text-primary mb-7">
                Instant Clarity
              </h3>
              <p className="font-poppins text-base leading-6 text-text-secondary">
                Save hours of reading—get precise explanations and risk analysis
                in seconds, so you can act with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-5 bg-brand-300/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-alexandria text-4xl md:text-5xl font-bold text-text-primary mb-4">
              How It Works
            </h2>
            <p className="font-poppins text-xl text-text-muted">
              Understand any legal document in just three simple steps.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-20">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-brand-600/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-10 h-10 text-brand-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h3 className="font-alexandria text-2xl font-bold text-text-primary mb-4">
                Upload Documents
              </h3>
              <p className="font-poppins text-base leading-7 text-text-secondary max-w-sm mx-auto">
                Drop your contract or legal file — we support all major formats
                with secure, private processing.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-brand-600/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-10 h-10 text-brand-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h3 className="font-alexandria text-2xl font-bold text-text-primary mb-4">
                Let AI Do the Work
              </h3>
              <p className="font-poppins text-base leading-7 text-text-secondary max-w-sm mx-auto">
                Our AI breaks down clauses, terms, risks, and structure into
                clear insights.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-brand-600/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageCircle
                  className="w-10 h-10 text-brand-600"
                  strokeWidth={2}
                />
              </div>
              <h3 className="font-alexandria text-2xl font-bold text-text-primary mb-4">
                Get Instant Understanding
              </h3>
              <p className="font-poppins text-base leading-7 text-text-secondary max-w-sm mx-auto">
                See simplified explanations, risk flags, and practical
                suggestions — all in your language.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AI-Powered Legal Security Section */}
      <section className="py-20 px-5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-alexandria text-4xl md:text-5xl font-bold text-text-primary mb-4">
              AI-Powered Legal Security
            </h2>
            <p className="font-poppins text-xl text-text-muted">
              Trusted technology with expert-level accuracy and 24/7 support.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Stat 1 */}
            <div className="bg-white rounded-lg border border-brand-600/20 shadow-sm p-6 text-center">
              <div className="font-alexandria text-3xl font-bold text-brand-600 mb-4">
                99.2%
              </div>
              <h3 className="font-alexandria text-lg font-semibold text-text-primary mb-6">
                Explanation Accuracy
              </h3>
              <p className="font-poppins text-sm text-text-secondary">
                Backed by legal expert reviews for precise, reliable
                explanations.
              </p>
            </div>

            {/* Stat 2 */}
            <div className="bg-white rounded-lg border border-brand-600/20 shadow-sm p-6 text-center">
              <div className="font-alexandria text-3xl font-bold text-brand-600 mb-4">
                10K+
              </div>
              <h3 className="font-alexandria text-lg font-semibold text-text-primary mb-6">
                Users Trust Explainer
              </h3>
              <p className="font-poppins text-sm text-text-secondary">
                Professionals and individuals rely on Explainer for legal
                clarity.
              </p>
            </div>

            {/* Stat 3 */}
            <div className="bg-white rounded-lg border border-brand-600/20 shadow-sm p-6 text-center">
              <div className="font-alexandria text-3xl font-bold text-brand-600 mb-4">
                1M+
              </div>
              <h3 className="font-alexandria text-lg font-semibold text-text-primary mb-6">
                Documents Explained
              </h3>
              <p className="font-poppins text-sm text-text-secondary">
                Extensively trained on diverse legal texts for broad
                understanding.
              </p>
            </div>

            {/* Stat 4 */}
            <div className="bg-white rounded-lg border border-brand-600/20 shadow-sm p-6 text-center">
              <div className="font-alexandria text-3xl font-bold text-brand-600 mb-4">
                24/7
              </div>
              <h3 className="font-alexandria text-lg font-semibold text-text-primary mb-6">
                Expert Support
              </h3>
              <p className="font-poppins text-sm text-text-secondary">
                Always-on help from legal specialists and AI engineers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-5 bg-brand-300/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-alexandria text-4xl md:text-5xl font-bold text-text-primary mb-4">
              Our dabbalaw Team
            </h2>
            <p className="font-poppins text-xl text-text-muted">
              Legal minds & AI innovators working together to simplify the law
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white rounded-lg border border-brand-600/20 shadow-sm p-6 text-center">
              <div className="w-30 h-30 bg-gray-200 rounded-full mx-auto mb-6">
                <img
                  src="/placeholder.svg"
                  alt="Dr. James Chen"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <h3 className="font-alexandria text-2xl font-semibold text-text-primary mb-2">
                Dr. James Chen
              </h3>
              <p className="font-alexandria text-sm text-text-muted mb-6">
                CTO & AI Lead
              </p>
              <p className="font-poppins text-sm text-text-secondary">
                Stanford PhD in AI with expertise in natural language processing
                for legal document interpretation.
              </p>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white rounded-lg border border-brand-600/20 shadow-sm p-6 text-center">
              <div className="w-30 h-30 bg-gray-200 rounded-full mx-auto mb-6">
                <img
                  src="/placeholder.svg"
                  alt="Maria Rodriguez"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <h3 className="font-alexandria text-2xl font-semibold text-text-primary mb-2">
                Maria Rodriguez, Esq.
              </h3>
              <p className="font-alexandria text-sm text-text-muted mb-6">
                Head of Legal Operations
              </p>
              <p className="font-poppins text-sm text-text-secondary">
                Georgetown Law expert in legal ethics and compliance, ensuring
                explainer meets professional standards.
              </p>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white rounded-lg border border-brand-600/20 shadow-sm p-6 text-center">
              <div className="w-30 h-30 bg-gray-200 rounded-full mx-auto mb-6">
                <img
                  src="/placeholder.svg"
                  alt="Robert Thompson"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <h3 className="font-alexandria text-2xl font-semibold text-text-primary mb-2">
                Robert Thompson, Esq.
              </h3>
              <p className="font-alexandria text-sm text-text-muted mb-6">
                Senior Legal Analyst
              </p>
              <p className="font-poppins text-sm text-text-secondary">
                Yale Law graduate with 20+ years in contract analysis and legal
                document interpretation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Register Now Section */}
      <section className="py-20 px-5 bg-brand-600">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-alexandria text-4xl md:text-5xl font-bold text-white mb-4">
              Register Now
            </h2>
            <p className="font-poppins text-xl text-white/90">
              Join thousands of users who trust Explainer for clear, intelligent
              legal document analysis. Start your free trial today.
            </p>
          </div>

          {/* Registration Form */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 shadow-lg p-6">
            <div className="text-center mb-8">
              <h3 className="font-alexandria text-2xl font-semibold text-white mb-2">
                Start Your Free Trial
              </h3>
              <p className="font-poppins text-sm text-white/80">
                Full access for 14 days - no credit card required, no commitment
              </p>
            </div>

            <form className="space-y-5">
              <div>
                <label className="block font-poppins text-sm font-medium text-white text-center mb-3">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 rounded-md border border-white/30 bg-white/20 text-white placeholder-white/60 font-alexandria text-sm focus:outline-none focus:ring-2 focus:ring-white/50"
                />
              </div>

              <div>
                <label className="block font-poppins text-sm font-medium text-white text-center mb-3">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 rounded-md border border-white/30 bg-white/20 text-white placeholder-white/60 font-alexandria text-sm focus:outline-none focus:ring-2 focus:ring-white/50"
                />
              </div>

              <div>
                <label className="block font-poppins text-sm font-medium text-white text-center mb-3">
                  Secure Password
                </label>
                <input
                  type="password"
                  placeholder="Create a secure password"
                  className="w-full px-4 py-3 rounded-md border border-white/30 bg-white/20 text-white placeholder-white/60 font-alexandria text-sm focus:outline-none focus:ring-2 focus:ring-white/50"
                />
              </div>

              <button className="w-full flex items-center justify-center gap-4 bg-white text-brand-600 font-poppins text-sm font-medium px-8 py-3.5 rounded-md hover:bg-gray-50 transition-colors">
                Start Explaining Documents
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-5 bg-brand-700 border-t border-brand-600/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-white/20 rounded-md flex items-center justify-center">
                  <MessageCircle
                    className="w-8 h-8 text-white"
                    strokeWidth={2}
                  />
                </div>
                <span className="font-alexandria text-2xl font-bold text-white">
                  Explainer
                </span>
              </div>
              <p className="font-poppins text-sm text-white/80 leading-5">
                Your trusted AI legal assistant for analyzing and explaining
                contracts, rights, and legal documents.
              </p>
            </div>

            {/* Contact Us */}
            <div>
              <h4 className="font-alexandria text-sm font-semibold text-white mb-5">
                Contact Us
              </h4>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-white/80" />
                  <span className="font-poppins text-sm text-white/80">
                    hello@explainer.ai
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-white/80" />
                  <span className="font-poppins text-sm text-white/80">
                    +1 (555) EXPLAIN
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-white/80" />
                  <span className="font-poppins text-sm text-white/80">
                    San Francisco, CA 94105
                  </span>
                </div>
              </div>
            </div>

            {/* Legal Resources */}
            <div>
              <h4 className="font-alexandria text-sm font-semibold text-white mb-5">
                Legal Resources
              </h4>
              <div className="space-y-4">
                <a
                  href="#"
                  className="block font-poppins text-sm text-white/80 hover:text-white transition-colors"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="block font-poppins text-sm text-white/80 hover:text-white transition-colors"
                >
                  Terms of Service
                </a>
                <a
                  href="#"
                  className="block font-poppins text-sm text-white/80 hover:text-white transition-colors"
                >
                  Legal Compliance
                </a>
                <a
                  href="#"
                  className="block font-poppins text-sm text-white/80 hover:text-white transition-colors"
                >
                  Help Center
                </a>
              </div>
            </div>

            {/* Connect */}
            <div>
              <h4 className="font-alexandria text-sm font-semibold text-white mb-5">
                Connect With Us
              </h4>
              <a
                href="#"
                className="inline-flex items-center justify-center w-10 h-10 text-white/80 hover:text-white transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
