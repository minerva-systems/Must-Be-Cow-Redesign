import { useEffect } from 'react';
import { Link } from 'react-router';

export default function Privacy() {
  useEffect(() => {
    document.title = 'Privacy Policy - Must Be Cow';
  }, []);

  return (
    <div className="min-h-screen bg-[#1a1614]">
      {/* Hero */}
      <section className="bg-[#2d2420] text-white py-16 border-b border-[#332d28]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="mb-4">Privacy Policy</h1>
          <p className="text-lg text-[#d4a574]">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#2d2420] rounded-xl p-8 border border-[#332d28] text-[#d4a574] space-y-6">
            <div>
              <h2 className="text-white mb-3">Introduction</h2>
              <p>
                Must Be Cow ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
              </p>
            </div>

            <div>
              <h2 className="text-white mb-3">Information We Collect</h2>
              <p>
                We may collect information that you provide directly to us, including but not limited to:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                <li>Name and contact information</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Any other information you choose to provide</li>
              </ul>
            </div>

            <div>
              <h2 className="text-white mb-3">How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                <li>Provide, maintain, and improve our services</li>
                <li>Respond to your inquiries and requests</li>
                <li>Send you updates and promotional communications</li>
                <li>Monitor and analyze usage patterns</li>
              </ul>
            </div>

            <div>
              <h2 className="text-white mb-3">Information Sharing</h2>
              <p>
                We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                <li>With your consent</li>
                <li>To comply with legal obligations</li>
                <li>To protect our rights and safety</li>
              </ul>
            </div>

            <div>
              <h2 className="text-white mb-3">Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <p className="mt-2">
                Must Be Cow<br />
                5511 Sunrise Blvd<br />
                Citrus Heights, CA 95610<br />
                Phone: <a href="tel:+19164364795" className="text-[#c8302e] hover:text-white transition-colors">(916) 436-4795</a>
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-[#c8302e] hover:text-[#a52622] transition-colors"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

