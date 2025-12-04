import { useEffect } from 'react';
import { Link } from 'react-router';

export default function Terms() {
  useEffect(() => {
    document.title = 'Terms and Conditions - Must Be Cow';
  }, []);

  return (
    <div className="min-h-screen bg-[#1a1614]">
      {/* Hero */}
      <section className="bg-[#2d2420] text-white py-16 border-b border-[#332d28]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="mb-4">Terms and Conditions</h1>
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
              <h2 className="text-white mb-3">Agreement to Terms</h2>
              <p>
                By accessing and using the Must Be Cow website, you accept and agree to be bound by the terms and provision of this agreement.
              </p>
            </div>

            <div>
              <h2 className="text-white mb-3">Use License</h2>
              <p>
                Permission is granted to temporarily access the materials on Must Be Cow's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose</li>
                <li>Attempt to decompile or reverse engineer any software</li>
                <li>Remove any copyright or other proprietary notations</li>
              </ul>
            </div>

            <div>
              <h2 className="text-white mb-3">Dining Terms</h2>
              <p>
                When dining at Must Be Cow:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1 ml-4">
                <li>All-you-can-eat pricing applies per person</li>
                <li>Waste charges may apply for excessive food waste</li>
                <li>Children pricing may vary by age</li>
                <li>Reservations are recommended for large parties</li>
                <li>We reserve the right to refuse service</li>
              </ul>
            </div>

            <div>
              <h2 className="text-white mb-3">Disclaimer</h2>
              <p>
                The materials on Must Be Cow's website are provided on an 'as is' basis. Must Be Cow makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </div>

            <div>
              <h2 className="text-white mb-3">Limitations</h2>
              <p>
                In no event shall Must Be Cow or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Must Be Cow's website.
              </p>
            </div>

            <div>
              <h2 className="text-white mb-3">Contact Information</h2>
              <p>
                For questions regarding these Terms and Conditions, please contact us at:
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

