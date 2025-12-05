export default function MenuContent() {
  const silverItems = {
    kbbq: [
      'Pork Belly',
      'Beef Bulgogi',
      'Spicy Pork Belly',
      'Finger Short Rib',
      'Pork Jowl',
      'Chicken Teriyaki',
      'Chicken Bulgogi'
    ],
    sushi: [
      'California Roll',
      'Salmon',
      'Tuna',
      'Spicy Tuna',
      'Albacore',
      'Shrimp Tempura'
    ],
    appetizers: [
      'Potstickers',
      'Seaweed Salad',
      'Edamame',
      'Fried Dumplings',
      'Steamed Egg'
    ],
    vegetables: [
      'Lettuce',
      'Oyster Mushroom',
      'Onion'
    ]
  };

  const goldItems = {
    kbbq: [
      'All Silver items, plus:',
      'Prime Rib',
      'Beef Tongue',
      'Beef Short Rib',
      'Garlic Shrimp',
      'Spicy Baby Octopus'
    ],
    sushi: [
      'All Silver items, plus:',
      'Salmon Carpaccio',
      'Tuna Tataki',
      'Hamachi Jalapeno',
      'Take Su',
      'Ahi Tuna',
      'Pepper Tuna Tataki',
      'Spicy Salmon Chips'
    ],
    appetizers: [
      'All Silver items, plus:',
      'Rainbow Pancake',
      'Fried Chicken Wings',
      'Cheese Corn'
    ],
    sashimi: [
      'Sweet Shrimp',
      'Hamachi',
      'Salmon',
      'Tuna',
      'White Tuna',
      'Unagi',
      'Tako',
      'Ikura',
      'Crab meat'
    ]
  };

  return (
    <div className="min-h-screen bg-[#1a1614]">
      {/* Hero */}
      <section className="bg-[#2d2420] text-white py-16 border-b border-[#332d28]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="mb-4">Our Menu</h1>
          <p className="text-lg text-[#d4a574] max-w-2xl mx-auto">
            Choose your all-you-can-eat experience with our Silver or Gold tiers
          </p>
        </div>
      </section>

      {/* Tier Selection */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Silver Tier */}
            <div className="bg-[#2d2420] rounded-2xl shadow-xl overflow-hidden border-4 border-[#d4a574]">
              <div className="bg-gradient-to-r from-[#d4a574] to-[#c9b89a] text-white p-6">
                <h2>Silver Tier</h2>
                <div className="text-4xl mt-2">$28.99</div>
                <div className="text-sm mt-1">per person</div>
              </div>
              <div className="p-8">
                <h3 className="text-white mb-4" id="silver-kbbq">Korean BBQ</h3>
                <ul className="space-y-2 mb-6">
                  {silverItems.kbbq.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-[#d4a574]">
                      <span className="text-[#d4a574]">•</span>
                      {item}
                    </li>
                  ))}
                </ul>

                <h3 className="text-white mb-4" id="silver-sushi">Sushi Hand Roll</h3>
                <ul className="space-y-2 mb-6">
                  {silverItems.sushi.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-[#d4a574]">
                      <span className="text-[#d4a574]">•</span>
                      {item}
                    </li>
                  ))}
                </ul>

                <h3 className="text-white mb-4" id="silver-appetizers">Appetizers</h3>
                <ul className="space-y-2 mb-6">
                  {silverItems.appetizers.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-[#d4a574]">
                      <span className="text-[#d4a574]">•</span>
                      {item}
                    </li>
                  ))}
                </ul>

                <h3 className="text-white mb-4">BBQ Vegetables</h3>
                <ul className="space-y-2">
                  {silverItems.vegetables.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-[#d4a574]">
                      <span className="text-[#d4a574]">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Gold Tier */}
            <div className="bg-[#2d2420] rounded-2xl shadow-xl overflow-hidden border-4 border-[#c8302e]">
              <div className="bg-gradient-to-r from-[#c8302e] to-[#d4624f] text-white p-6">
                <div className="flex items-center gap-2 mb-2">
                  <h2>Gold Tier</h2>
                  <span className="bg-white text-[#c8302e] px-3 py-1 rounded-full text-sm">Popular</span>
                </div>
                <div className="text-4xl mt-2">$39.99</div>
                <div className="text-sm mt-1">per person</div>
              </div>
              <div className="p-8">
                <h3 className="text-white mb-4" id="gold-kbbq">Korean BBQ</h3>
                <ul className="space-y-2 mb-6">
                  {goldItems.kbbq.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-[#d4a574]">
                      <span className="text-[#c8302e]">•</span>
                      {item}
                    </li>
                  ))}
                </ul>

                <h3 className="text-white mb-4" id="gold-sushi">Sushi Appetizers</h3>
                <ul className="space-y-2 mb-6">
                  {goldItems.sushi.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-[#d4a574]">
                      <span className="text-[#c8302e]">•</span>
                      {item}
                    </li>
                  ))}
                </ul>

                <h3 className="text-white mb-4" id="gold-appetizers">Appetizers</h3>
                <ul className="space-y-2 mb-6">
                  {goldItems.appetizers.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-[#d4a574]">
                      <span className="text-[#c8302e]">•</span>
                      {item}
                    </li>
                  ))}
                </ul>

                <h3 className="text-white mb-4" id="gold-sashimi">Sashimi</h3>
                <ul className="space-y-2">
                  {goldItems.sashimi.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-[#d4a574]">
                      <span className="text-[#c8302e]">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="bg-[#2d2420] text-white rounded-2xl p-8 text-center border border-[#332d28]">
            <h3 className="mb-4">Additional Information</h3>
            <div className="grid md:grid-cols-3 gap-6 text-[#d4a574]">
              <div>
                <div className="mb-2 text-white">Drinks</div>
                <p className="text-sm">$3.50 Free Refills</p>
                <p className="text-xs text-[#d4a574]/70">Coke, Diet Coke, Sprite, Lemonade, Iced Tea</p>
              </div>
              <div>
                <div className="mb-2 text-white">Side Dishes</div>
                <p className="text-sm">Included with meal</p>
                <p className="text-xs text-[#d4a574]/70">Kimchi, Bean Sprouts, Fish Cake, Daikon, Cucumber, Japchae, Steamed Purple Rice</p>
              </div>
              <div>
                <div className="mb-2 text-white">Dessert</div>
                <p className="text-sm">Available</p>
                <p className="text-xs text-[#d4a574]/70">Lava Brown Sugar Rice Cake, Pumpkin Cake, Sesame Ball</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

