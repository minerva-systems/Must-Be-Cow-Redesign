import { MapPin, Phone, Clock, Navigation } from 'lucide-react';

export default function ContactContent() {
  return (
    <div className="min-h-screen bg-[#1a1614]">
      {/* Hero */}
      <section className="bg-[#2d2420] text-white py-16 border-b border-[#332d28]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="mb-4">Visit Us</h1>
          <p className="text-lg text-[#d4a574] max-w-2xl mx-auto">
            Find us in Citrus Heights - we look forward to serving you
          </p>
        </div>
      </section>

      {/* Contact Info & Map */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-white mb-8">Contact Information</h2>
              
              <div className="space-y-6">
                {/* Address */}
                <div className="bg-[#2d2420] rounded-xl p-6 shadow-lg border border-[#332d28]">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#c8302e]/20 rounded-full flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-[#c8302e]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white mb-2">Address</h3>
                      <address className="not-italic text-[#d4a574]">
                        5511 Sunrise Blvd<br />
                        Citrus Heights, CA 95610
                      </address>
                      <a
                        href="https://www.google.com/maps/dir/?api=1&destination=5511+Sunrise+Blvd+Citrus+Heights+CA+95610"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-[#c8302e] hover:text-[#a52622] mt-3"
                      >
                        <Navigation className="h-4 w-4" />
                        Get Directions
                      </a>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="bg-[#2d2420] rounded-xl p-6 shadow-lg border border-[#332d28]">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#c8302e]/20 rounded-full flex items-center justify-center">
                      <Phone className="h-6 w-6 text-[#c8302e]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white mb-2">Phone</h3>
                      <a
                        href="tel:+19164364795"
                        className="text-[#d4a574] hover:text-[#c8302e] transition-colors"
                      >
                        (916) 436-4795
                      </a>
                      <p className="text-sm text-[#d4a574]/70 mt-2">
                        Call us with any questions
                      </p>
                    </div>
                  </div>
                </div>

                {/* Hours */}
                <div className="bg-[#2d2420] rounded-xl p-6 shadow-lg border border-[#332d28]">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-[#c8302e]/20 rounded-full flex items-center justify-center">
                      <Clock className="h-6 w-6 text-[#c8302e]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white mb-3">Hours of Operation</h3>
                      <div className="space-y-2 text-[#d4a574]">
                        <div className="flex justify-between">
                          <span>Monday - Thursday</span>
                          <span>11:00 AM - 9:00 PM</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Friday</span>
                          <span>11:00 AM - 10:00 PM</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Saturday</span>
                          <span>11:00 AM - 10:00 PM</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Sunday</span>
                          <span>11:00 AM - 9:00 PM</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Parking */}
                <div className="bg-[#332d28] rounded-xl p-6 border border-[#4a3d35]">
                  <h3 className="text-white mb-2">Parking Information</h3>
                  <p className="text-[#d4a574]">
                    Free parking is available in our parking lot. Additional street parking is also available nearby.
                  </p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div>
              <h2 className="text-white mb-8">Location Map</h2>
              <div className="bg-[#2d2420] rounded-xl shadow-lg overflow-hidden h-[600px] border border-[#332d28]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3115.7286849844753!2d-121.28544892340743!3d38.67964337177298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809adf0f5f5f5f5f%3A0x5f5f5f5f5f5f5f5f!2s5511%20Sunrise%20Blvd%2C%20Citrus%20Heights%2C%20CA%2095610!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Must Be Cow Location"
                ></iframe>
              </div>
              <div className="mt-6 bg-[#332d28] rounded-xl p-6 border border-[#4a3d35]">
                <h3 className="text-white mb-3">Nearby Landmarks</h3>
                <ul className="space-y-2 text-[#d4a574]">
                  <li className="flex items-center gap-2">
                    <span className="text-[#c8302e]">•</span>
                    Located near Sunrise Mall
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#c8302e]">•</span>
                    Easy access from I-80 and Sunrise Boulevard
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#c8302e]">•</span>
                    Convenient location in Citrus Heights
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-[#2d2420] border-t border-[#332d28]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-4">Have Questions?</h2>
          <p className="text-lg text-[#d4a574] mb-8">
            Our team is here to help make your dining experience perfect
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+19164364795"
              className="inline-flex items-center justify-center gap-2 bg-[#c8302e] text-white px-8 py-3 rounded-lg hover:bg-[#a52622] transition-colors"
            >
              <Phone className="h-5 w-5" />
              Call Us Now
            </a>
            <a
              href="https://www.yelp.com/biz/must-be-cow-citrus-heights"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#332d28] text-white border-2 border-[#4a3d35] px-8 py-3 rounded-lg hover:bg-[#4a3d35] transition-colors"
            >
              View on Yelp
            </a>
          </div>
          
          <div className="mt-12 pt-8 border-t border-[#4a3d35]">
            <p className="text-[#d4a574] mb-4">Large parties and special events welcome!</p>
            <p className="text-sm text-[#d4a574]/70">
              Walk-ins welcome. Please call ahead for groups of 8 or more to ensure we can accommodate your party.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

