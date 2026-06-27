/**
 * NutriLife — Shared content data
 * Age groups, deficiencies reference, and food library
 */
const NUTRILIFE_DATA = {
  ageGroups: {
    children: {
      id: "children",
      icon: "👶",
      title: "Children",
      ageRange: "6–12 Years",
      tagline: "Building skeletal density and cognitive foundations.",
      description: "School-age children experience steady physical growth and critical cognitive development. Proper nutrition prevents stunting, supports learning and concentration, and establishes lifelong healthy eating habits during these formative years.",
      requirements: [
        { label: "Energy Demand", value: "1,400 – 2,000 kcal/day", percentage: 65 },
        { label: "Protein Needs", value: "20 – 36 g/day", percentage: 48 },
        { label: "Calcium Needs", value: "800 – 1,000 mg/day", percentage: 76 },
        { label: "Iron Needs", value: "10 – 15 mg/day", percentage: 70 }
      ],
      keyNutrients: [
        { name: "Calcium", purpose: "Skeletal modeling & teeth formation" },
        { name: "Protein", purpose: "Tissue repair & muscular development" },
        { name: "Iron", purpose: "Oxygen transport & brain development" },
        { name: "Vitamin A", purpose: "Vision & immune function" }
      ],
      commonDeficiencies: [
        { name: "Vitamin A Deficiency", details: "Associated with night blindness and increased childhood infections." },
        { name: "Protein-Energy Malnutrition", details: "Leads to stunting, low weight milestones, and lethargy." },
        { name: "Iron Deficiency Anemia", details: "Decreases cognitive attention spans and learning capabilities." }
      ],
      recommendedFoods: [
        { name: "Whole Milk / Paneer", role: "High-density calcium & proteins" },
        { name: "Eggs & Legumes", role: "Complete amino acids & choline" },
        { name: "Spinach", role: "Iron, Vitamin A & folate" },
        { name: "Sweet Potato", role: "Beta-carotene & complex carbohydrates" }
      ]
    },
    adolescents: {
      id: "adolescents",
      icon: "👩‍🎓",
      title: "Adolescents",
      ageRange: "13–19 Years",
      tagline: "Peak growth velocity and high caloric demands.",
      description: "Adolescence features the second most rapid growth spurt in life. Peak bone mass is achieved during these years, making adequate calcium and iron intake critical — especially for adolescent girls.",
      requirements: [
        { label: "Energy Demand", value: "2,200 – 3,000 kcal/day", percentage: 100 },
        { label: "Protein Needs", value: "45 – 60 g/day", percentage: 80 },
        { label: "Calcium Needs", value: "1,300 mg/day", percentage: 100 },
        { label: "Iron Needs", value: "15 – 20 mg/day", percentage: 100 }
      ],
      keyNutrients: [
        { name: "Calcium & Vitamin D", purpose: "Achieving peak bone mineral density" },
        { name: "Iron", purpose: "Red blood cell expansion (especially in girls)" },
        { name: "Zinc", purpose: "Sexual maturation & protein synthesis" },
        { name: "B-Complex", purpose: "High metabolic energy extraction" }
      ],
      commonDeficiencies: [
        { name: "Iron Deficiency Anemia", details: "Highly prevalent in teen girls; causes fatigue and poor academic performance." },
        { name: "Calcium Insufficiency", details: "Limits height potential and weakens future bone health." },
        { name: "Zinc Deficiency", details: "Can lead to skin conditions, delayed growth, and poor wound healing." }
      ],
      recommendedFoods: [
        { name: "Lentils & Soybeans", role: "Plant proteins, iron & zinc" },
        { name: "Greek Yogurt / Kefir", role: "Bioavailable calcium & probiotics" },
        { name: "Chia Seeds & Oats", role: "Fiber, B-vitamins & minerals" },
        { name: "Poultry & Seeds", role: "Lean amino acids, zinc & healthy fats" }
      ]
    },
    adults: {
      id: "adults",
      icon: "👨‍💼",
      title: "Adults",
      ageRange: "20–59 Years",
      tagline: "Metabolic balance, disease prevention, and cell repair.",
      description: "Adulthood focuses on maintaining muscle mass, sustaining energy, and preventing chronic lifestyle conditions such as obesity, type 2 diabetes, hypertension, and cardiovascular disease through balanced nutrition.",
      requirements: [
        { label: "Energy Demand", value: "1,800 – 2,400 kcal/day", percentage: 80 },
        { label: "Protein Needs", value: "50 – 65 g/day", percentage: 86 },
        { label: "Calcium Needs", value: "1,000 mg/day", percentage: 76 },
        { label: "Iron Needs", value: "8 – 18 mg/day", percentage: 80 }
      ],
      keyNutrients: [
        { name: "Omega-3 Fatty Acids", purpose: "Cardiovascular protection" },
        { name: "Dietary Fiber", purpose: "Bowel health & insulin sensitivity" },
        { name: "Magnesium", purpose: "Muscle relaxation & sleep quality" },
        { name: "Vitamins C & E", purpose: "Cellular antioxidant shielding" }
      ],
      commonDeficiencies: [
        { name: "Vitamin D Deficiency", details: "Prevalent due to indoor lifestyles; impacts immunity and bone health." },
        { name: "Vitamin B12 Deficiency", details: "Common in vegetarian diets; causes nerve tingling and fatigue." },
        { name: "Magnesium Shortage", details: "Results in muscle twitches, stress, and poor sleep quality." }
      ],
      recommendedFoods: [
        { name: "Avocados & Olive Oil", role: "Healthy monounsaturated fats" },
        { name: "Broccoli & Cauliflower", role: "Cruciferous fiber & antioxidants" },
        { name: "Quinoa & Millets", role: "Complete amino profile & low glycemic load" },
        { name: "Walnuts & Almonds", role: "Omega-3, magnesium & Vitamin E" }
      ]
    },
    olderAdults: {
      id: "olderAdults",
      icon: "👵",
      title: "Older Adults",
      ageRange: "60+ Years",
      tagline: "Preventing sarcopenia and maintaining bone mass.",
      description: "The aging body shows decreased nutrient absorption efficiency, particularly for calcium and vitamin B12. Muscle wasting (sarcopenia) accelerates, demanding higher relative protein density in every meal.",
      requirements: [
        { label: "Energy Demand", value: "1,600 – 2,000 kcal/day", percentage: 60 },
        { label: "Protein Needs", value: "60 – 75 g/day", percentage: 100 },
        { label: "Calcium Needs", value: "1,200 mg/day", percentage: 92 },
        { label: "Vitamin B12", value: "2.4 μg/day", percentage: 85 }
      ],
      keyNutrients: [
        { name: "Calcium & Vitamin D", purpose: "Preventing skeletal demineralization" },
        { name: "Vitamin B12", purpose: "Bypasses reduced stomach acid secretion" },
        { name: "Potassium", purpose: "Heart rhythm & blood pressure regulation" },
        { name: "Fiber & Water", purpose: "Sustaining gastrointestinal motility" }
      ],
      commonDeficiencies: [
        { name: "Osteoporosis", details: "Severe skeletal weakening with high fracture risk." },
        { name: "B12 Malabsorption", details: "Triggers cognitive fog, fatigue, and neuropathy." },
        { name: "Sarcopenia", details: "Severe loss of skeletal muscle strength and balance." }
      ],
      recommendedFoods: [
        { name: "Greek Yogurt / Kefir", role: "Digestible protein, calcium & probiotics" },
        { name: "Beans & Lentils", role: "High-fiber soft protein & potassium" },
        { name: "Berries", role: "Brain-protecting antioxidants & Vitamin C" },
        { name: "Fortified Grains", role: "Easy-to-chew B-vitamins & iron" }
      ]
    }
  },

  foodLibrary: [
    { id: "spinach", name: "Spinach", icon: "🥬", category: "vegetables", nutrients: ["Iron", "Vitamin A", "Folate", "Vitamin C"], benefits: "Boosts blood health, supports vision, and strengthens immunity.", bestFor: ["Children", "Adolescents", "Adults"], serving: "1 cup cooked or 2 cups raw daily" },
    { id: "carrot", name: "Carrots", icon: "🥕", category: "vegetables", nutrients: ["Beta-carotene", "Fiber", "Vitamin K"], benefits: "Promotes healthy eyesight and digestive regularity.", bestFor: ["Infants", "Children", "Elderly"], serving: "1 medium carrot or ½ cup chopped" },
    { id: "broccoli", name: "Broccoli", icon: "🥦", category: "vegetables", nutrients: ["Vitamin C", "Calcium", "Fiber", "Sulforaphane"], benefits: "Supports bone health and provides powerful antioxidants.", bestFor: ["Adults", "Elderly"], serving: "1 cup steamed florets" },
    { id: "sweet-potato", name: "Sweet Potato", icon: "🍠", category: "vegetables", nutrients: ["Beta-carotene", "Potassium", "Complex Carbs"], benefits: "Sustained energy release and immune support for growing children.", bestFor: ["Infants", "Children", "Adolescents"], serving: "1 medium baked potato" },
    { id: "banana", name: "Banana", icon: "🍌", category: "fruits", nutrients: ["Potassium", "Vitamin B6", "Fiber"], benefits: "Supports heart rhythm, energy metabolism, and gut health.", bestFor: ["Children", "Adults", "Elderly"], serving: "1 medium banana daily" },
    { id: "papaya", name: "Papaya", icon: "🍈", category: "fruits", nutrients: ["Vitamin C", "Vitamin A", "Papain"], benefits: "Aids digestion and provides immune-boosting antioxidants.", bestFor: ["Children", "Adults"], serving: "1 cup cubed fruit" },
    { id: "orange", name: "Orange", icon: "🍊", category: "fruits", nutrients: ["Vitamin C", "Folate", "Fiber"], benefits: "Enhances iron absorption when paired with plant-based meals.", bestFor: ["Adolescents", "Adults", "Elderly"], serving: "1 medium orange or ¾ cup juice" },
    { id: "mango", name: "Mango", icon: "🥭", category: "fruits", nutrients: ["Vitamin A", "Vitamin C", "Natural Sugars"], benefits: "Supports skin health and provides quick energy for active teens.", bestFor: ["Children", "Adolescents"], serving: "1 cup sliced mango" },
    { id: "brown-rice", name: "Brown Rice", icon: "🍚", category: "grains", nutrients: ["Complex Carbs", "B-Vitamins", "Magnesium"], benefits: "Provides steady energy and supports nervous system function.", bestFor: ["Adults", "Elderly"], serving: "1 cup cooked rice per meal" },
    { id: "oats", name: "Oats", icon: "🌾", category: "grains", nutrients: ["Soluble Fiber", "Iron", "Beta-glucan"], benefits: "Lowers cholesterol and keeps you full longer.", bestFor: ["Adolescents", "Adults", "Elderly"], serving: "½ cup dry oats for breakfast" },
    { id: "ragi", name: "Ragi (Finger Millet)", icon: "🫘", category: "grains", nutrients: ["Calcium", "Iron", "Protein"], benefits: "Excellent calcium source for lactose-intolerant individuals.", bestFor: ["Children", "Elderly"], serving: "1 roti or 1 cup porridge daily" },
    { id: "quinoa", name: "Quinoa", icon: "🥣", category: "grains", nutrients: ["Complete Protein", "Fiber", "Magnesium"], benefits: "Plant-based complete amino acid profile for muscle maintenance.", bestFor: ["Adults", "Elderly"], serving: "1 cup cooked quinoa" },
    { id: "egg", name: "Eggs", icon: "🥚", category: "proteins", nutrients: ["Protein", "Choline", "Vitamin D", "B12"], benefits: "Complete protein for growth, brain development, and muscle repair.", bestFor: ["Children", "Adolescents", "Adults"], serving: "1–2 eggs per day" },
    { id: "chicken", name: "Lean Chicken", icon: "🍗", category: "proteins", nutrients: ["Protein", "B-Vitamins", "Selenium"], benefits: "Low-fat protein source for tissue repair and immunity.", bestFor: ["Adolescents", "Adults", "Elderly"], serving: "100–120 g cooked portion" },
    { id: "fish", name: "Fatty Fish", icon: "🐟", category: "proteins", nutrients: ["Omega-3", "Vitamin D", "Protein"], benefits: "Protects heart health and supports brain function.", bestFor: ["Adults", "Elderly"], serving: "2 servings (150 g each) per week" },
    { id: "tofu", name: "Tofu", icon: "🧈", category: "proteins", nutrients: ["Calcium", "Protein", "Iron"], benefits: "Plant-based protein ideal for vegetarian and vegan diets.", bestFor: ["Adults", "Elderly"], serving: "100 g firm tofu per meal" },
    { id: "milk", name: "Milk", icon: "🥛", category: "dairy", nutrients: ["Calcium", "Protein", "Vitamin D", "B12"], benefits: "Essential for bone density and childhood growth.", bestFor: ["Infants", "Children", "Adolescents"], serving: "2–3 cups daily for children" },
    { id: "yogurt", name: "Yogurt", icon: "🫙", category: "dairy", nutrients: ["Probiotics", "Calcium", "Protein"], benefits: "Supports gut health and is easy to digest for elderly.", bestFor: ["Children", "Adults", "Elderly"], serving: "1 cup plain yogurt daily" },
    { id: "paneer", name: "Paneer", icon: "🧀", category: "dairy", nutrients: ["Calcium", "Protein", "Phosphorus"], benefits: "High-quality protein for vegetarian families.", bestFor: ["Children", "Adolescents", "Adults"], serving: "50–80 g per meal" },
    { id: "lentils", name: "Lentils (Dal)", icon: "🫘", category: "legumes", nutrients: ["Iron", "Protein", "Fiber", "Folate"], benefits: "Affordable plant protein; pair with rice for complete amino acids.", bestFor: ["All Age Groups"], serving: "1 cup cooked dal daily" },
    { id: "chickpeas", name: "Chickpeas", icon: "🫛", category: "legumes", nutrients: ["Protein", "Fiber", "Zinc", "Folate"], benefits: "Supports blood sugar control and sustained energy.", bestFor: ["Adolescents", "Adults"], serving: "1 cup cooked chickpeas" },
    { id: "soybeans", name: "Soybeans", icon: "🫘", category: "legumes", nutrients: ["Protein", "Iron", "Calcium", "Isoflavones"], benefits: "Complete plant protein for adolescent growth spurts.", bestFor: ["Adolescents", "Adults"], serving: "1 cup cooked soybeans" },
    { id: "almonds", name: "Almonds", icon: "🌰", category: "nuts", nutrients: ["Vitamin E", "Magnesium", "Healthy Fats"], benefits: "Supports brain health and provides lasting satiety.", bestFor: ["Adults", "Elderly"], serving: "8–10 almonds as a snack" },
    { id: "walnuts", name: "Walnuts", icon: "🥜", category: "nuts", nutrients: ["Omega-3 ALA", "Antioxidants", "Protein"], benefits: "Protects cognitive function and cardiovascular health.", bestFor: ["Adults", "Elderly"], serving: "4–6 walnut halves daily" },
    { id: "sesame", name: "Sesame Seeds", icon: "🫘", category: "nuts", nutrients: ["Calcium", "Iron", "Healthy Fats"], benefits: "Dense calcium source for bone health without dairy.", bestFor: ["Elderly", "Adults"], serving: "1 tbsp seeds or tahini daily" }
  ],

  foodCategories: [
    { id: "all", label: "All Foods", icon: "🍽️" },
    { id: "vegetables", label: "Vegetables", icon: "🥬" },
    { id: "fruits", label: "Fruits", icon: "🍎" },
    { id: "grains", label: "Grains", icon: "🌾" },
    { id: "proteins", label: "Proteins", icon: "🍗" },
    { id: "dairy", label: "Dairy", icon: "🥛" },
    { id: "legumes", label: "Legumes", icon: "🫘" },
    { id: "nuts", label: "Nuts & Seeds", icon: "🌰" }
  ]
};
