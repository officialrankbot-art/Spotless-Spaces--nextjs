// Content for the commercial / industry landing pages.
// Edit wording here — every page reads from this file.

export const SITE_URL = "https://www.spotlessspaces-cleaning.com";
export const PHONE_DISPLAY = "267-662-1878";
export const PHONE_TEL = "+12676621878";
export const EMAIL = "info@spotlessspaces-cleaning.com";

export const AREAS = [
  "North Wales",
  "Ambler",
  "Blue Bell",
  "Fort Washington",
  "Dresher",
  "Gwynedd",
  "Horsham",
  "Plymouth Meeting",
  "The Main Line",
  "Philadelphia",
];

export const INDUSTRIES = {
  commercial: {
    slug: "commercial-cleaning",
    navLabel: "Commercial Cleaning",
    serviceType: "Commercial cleaning",
    metaTitle: "Commercial Cleaning Services in Montgomery County, PA",
    metaDescription:
      "Commercial cleaning and janitorial contracts for offices, medical and dental practices, optometrists, gyms, daycares, car dealerships, and warehouses in North Wales, Ambler, Blue Bell, Fort Washington, and Philadelphia. Licensed and insured crews. Free walkthrough.",
    eyebrow: "Commercial & Janitorial Cleaning",
    h1: "Commercial Cleaning in Montgomery County, PA",
    intro:
      "Nightly, weekly, and custom-schedule cleaning contracts for businesses across Montgomery County and the Philadelphia suburbs. One insured team, one checklist, and one account manager who actually picks up the phone.",
    highlights: [
      { title: "Licensed & insured", text: "Certificate of insurance available on request, and we can name your company as additional insured." },
      { title: "Background checks on request", text: "If your building or policy requires it, we can provide background checks for the team assigned to your site." },
      { title: "The same team every visit", text: "Whenever possible, the same crew services your site, so they learn your building and you know who has your keys." },
      { title: "Checklist-driven", text: "A written scope for every area, so nothing is left to memory and quality stays consistent." },
      { title: "After-hours & weekends", text: "We work around your operating hours so cleaning never disrupts staff or customers." },
      { title: "Multi-location contracts", text: "One agreement, one invoice, and consistent standards across all of your sites." },
    ],
    sectionsTitle: "Industries we clean",
    sections: [
      { title: "Daycares & child care centers", text: "Classroom, nap room, restroom, and kitchen cleaning with child-safe products and high-touch disinfecting.", href: "/daycare-cleaning" },
      { title: "Car dealerships", text: "Showroom floors, glass, customer lounges, restrooms, service waiting areas, and offices.", href: "/car-dealership-cleaning" },
      { title: "Warehouses & light industrial", text: "Office areas, break rooms, restrooms, locker rooms, and floor sweeping for distribution and light industrial sites.", href: "/warehouse-cleaning" },
      { title: "Offices & professional suites", text: "Workstations, conference rooms, lobbies, kitchens, and restrooms on a nightly or weekly schedule." },
      { title: "Retail & showrooms", text: "Sales floors, fitting rooms, entryways, and glass kept customer-ready." },
      { title: "Medical & dental offices", text: "Waiting rooms, exam rooms, operatories, and restrooms cleaned and disinfected on your schedule." },
      { title: "Optometry & eye care practices", text: "Front desks, frame displays, glass, exam rooms, and high-touch surfaces kept spotless." },
      { title: "Gyms & fitness centers", text: "Workout floors, locker rooms, showers, and restrooms cleaned and sanitized around your class schedule." },
    ],
    faqs: [
      { q: "How do you price commercial cleaning?", a: "Pricing is based on square footage, how often you need service, the type of facility, and the scope of work. We start with a free walkthrough (on-site or virtual) and give you a written quote with a clear checklist, so you know exactly what's included." },
      { q: "Do you provide a certificate of insurance?", a: "Yes. We're licensed and insured, and we can send a certificate of insurance before we start. We can also add your company as an additional insured if your property manager or landlord requires it." },
      { q: "Can you clean after hours or on weekends?", a: "Yes. Most of our commercial clients are serviced in the evening or early morning so cleaning never interrupts your staff or customers." },
      { q: "Do you handle multiple locations?", a: "Yes. We can service several sites under one agreement with one point of contact, one invoice, and the same checklist at every location." },
      { q: "Which areas do you serve?", a: "We serve Montgomery County, including North Wales, Ambler, Blue Bell, Fort Washington, Dresher, Gwynedd, Horsham, and Plymouth Meeting, plus the Main Line and Philadelphia." },
    ],
  },

  daycare: {
    slug: "daycare-cleaning",
    navLabel: "Daycare Cleaning",
    serviceType: "Daycare and child care center cleaning",
    metaTitle: "Daycare & Child Care Center Cleaning in Montgomery County, PA",
    metaDescription:
      "Daycare and child care center cleaning in North Wales, Ambler, Blue Bell, Fort Washington, and Philadelphia. Child-safe products, high-touch disinfecting, consistent crews, and multi-location contracts.",
    eyebrow: "Daycare & Child Care Cleaning",
    h1: "Daycare & Child Care Center Cleaning in Montgomery County, PA",
    intro:
      "Little hands touch everything. We keep classrooms, nap rooms, restrooms, and kitchens clean and disinfected after hours, using child-safe products, so your center is ready for families every morning and ready for inspection any day.",
    highlights: [
      { title: "Child-safe products", text: "We use products appropriate for spaces where children eat, sleep, and play, and we follow label contact times for disinfecting." },
      { title: "High-touch disinfecting", text: "Door handles, cubbies, sinks, light switches, tables, and changing areas get attention every visit." },
      { title: "The same team every visit", text: "Whenever possible, the same crew services your center, and background checks are available on request." },
      { title: "After-hours service", text: "We clean after the last pickup, so there's no overlap with children or staff." },
      { title: "Inspection-ready", text: "A written checklist for each room type helps support your licensing and health inspections." },
      { title: "Multi-location centers", text: "One contract, one point of contact, and the same standard at every one of your locations." },
    ],
    sectionsTitle: "What we clean at your center",
    sections: [
      { title: "Classrooms & play areas", text: "Tables, chairs, cubbies, shelving, and hard floors wiped, disinfected, and mopped. Carpets and rugs vacuumed." },
      { title: "Nap rooms", text: "Floors, surfaces, and high-touch points cleaned; cots and mats wiped down on the schedule you set." },
      { title: "Restrooms & changing areas", text: "Toilets, child-height sinks, changing tables, fixtures, and floors cleaned and disinfected, with optional dispenser restocking." },
      { title: "Kitchens & eating areas", text: "Counters, tables, high chairs, and exterior appliance surfaces cleaned; floors swept and mopped." },
      { title: "Entryways & offices", text: "Front doors, glass, sign-in areas, and staff offices kept clean for the first impression parents see." },
      { title: "Periodic deep cleaning", text: "Carpet extraction, floor scrubbing, and top-to-bottom resets scheduled around breaks and holidays." },
    ],
    faqs: [
      { q: "What products do you use in daycares?", a: "We choose products suited to spaces where children eat, sleep, and play, and we follow each product's label directions, including contact time for disinfectants and rinsing surfaces that children's mouths may touch. If your center has a preferred product list, we're happy to use it." },
      { q: "When do you clean?", a: "After your center closes for the day, so our team is never in the building while children are present. We can also schedule weekend deep cleans." },
      { q: "Can you provide background checks for your cleaners?", a: "Yes. If your center requires it, we can provide background checks for the team assigned to your building, and we try to keep the same crew at your center so you always know who is inside." },
      { q: "Can you service multiple daycare locations?", a: "Yes. We can clean all of your locations under one agreement, with one invoice and the same checklist at each site." },
      { q: "How much does daycare cleaning cost?", a: "It depends on square footage, number of rooms, and how many nights per week you need service. We start with a free walkthrough and provide a written quote with a room-by-room checklist." },
    ],
  },

  dealership: {
    slug: "car-dealership-cleaning",
    navLabel: "Car Dealership Cleaning",
    serviceType: "Car dealership cleaning",
    metaTitle: "Car Dealership Cleaning Services in Montgomery County, PA",
    metaDescription:
      "Showroom, customer lounge, service area, and office cleaning for car dealerships in Fort Washington, North Wales, Blue Bell, Horsham, and the Philadelphia area. Insured crews, after-hours service.",
    eyebrow: "Car Dealership Cleaning",
    h1: "Car Dealership Cleaning in Montgomery County, PA",
    intro:
      "Your showroom sells the car before your team does. We keep floors shining, glass streak-free, and customer lounges and restrooms spotless, after hours, so every customer walks into a dealership that looks as good as the inventory.",
    highlights: [
      { title: "Showroom-ready every morning", text: "Floors, glass, and displays cleaned overnight so your team opens to a spotless showroom." },
      { title: "Glass & entryways", text: "Showroom windows and doors kept free of smudges and fingerprints (interior; exterior by arrangement)." },
      { title: "Customer lounges & restrooms", text: "The spaces customers wait in during service visits, kept clean and stocked." },
      { title: "Service drive & waiting areas", text: "High-traffic service write-up areas and waiting rooms cleaned on a set schedule." },
      { title: "Licensed & insured", text: "Certificate of insurance on request, with background checks available if you need them." },
      { title: "Flexible schedules", text: "Nightly, several nights a week, or custom, built around your sales and service hours." },
    ],
    sectionsTitle: "What we clean at your dealership",
    sections: [
      { title: "Showroom floors", text: "Dust mopping, wet mopping, and spot cleaning so tile and polished floors stay bright." },
      { title: "Glass & displays", text: "Interior glass, doors, desks, and display surfaces wiped and polished." },
      { title: "Customer lounge", text: "Seating, tables, coffee stations, and floors cleaned; trash removed." },
      { title: "Restrooms", text: "Full clean and disinfect, with optional paper and soap restocking." },
      { title: "Sales & finance offices", text: "Desks, surfaces, and floors cleaned; trash and recycling emptied." },
      { title: "Employee break rooms", text: "Kitchenettes, tables, microwaves, and floors kept clean." },
    ],
    faqs: [
      { q: "Do you clean dealership showrooms after hours?", a: "Yes. We schedule around your sales and service hours, most often overnight, so your team opens to a clean showroom." },
      { q: "Do you clean the service department?", a: "We clean the customer-facing service areas: service write-up, waiting rooms, and restrooms. We can discuss other areas during your walkthrough." },
      { q: "Are you insured?", a: "Yes. We're licensed and insured and can provide a certificate of insurance before we start." },
      { q: "How is dealership cleaning priced?", a: "Pricing depends on square footage, the areas included, and how many nights per week you need us. We start with a free walkthrough and provide a written quote." },
    ],
  },

  warehouse: {
    slug: "warehouse-cleaning",
    navLabel: "Warehouse Cleaning",
    serviceType: "Warehouse and light industrial cleaning",
    metaTitle: "Warehouse & Light Industrial Cleaning in Montgomery County, PA",
    metaDescription:
      "Warehouse, distribution, and light industrial cleaning in Fort Washington, Horsham, North Wales, Plymouth Meeting, and the Philadelphia area. Offices, break rooms, restrooms, locker rooms, and floor care.",
    eyebrow: "Warehouse & Light Industrial",
    h1: "Warehouse & Light Industrial Cleaning in Montgomery County, PA",
    intro:
      "Clean break rooms, restrooms, and offices keep your team healthy and your site ready for customer visits and audits. We clean around your shifts, on the schedule that fits your operation.",
    highlights: [
      { title: "Works around your shifts", text: "Nights, weekends, or between shifts, whatever keeps your operation moving." },
      { title: "Restrooms & locker rooms", text: "The highest-traffic spaces in your building, cleaned and disinfected, with optional restocking." },
      { title: "Break rooms & kitchens", text: "Tables, counters, microwaves, fridge exteriors, and floors kept clean." },
      { title: "Office & front areas", text: "Reception, offices, and conference rooms kept ready for visitors." },
      { title: "Licensed & insured", text: "Certificate of insurance on request, with background checks available if you need them." },
      { title: "One account manager", text: "One point of contact who responds, and one invoice." },
    ],
    sectionsTitle: "What we clean at your facility",
    sections: [
      { title: "Restrooms & locker rooms", text: "Toilets, urinals, sinks, showers, and floors cleaned and disinfected, with optional supply restocking." },
      { title: "Break rooms", text: "Tables, chairs, counters, appliances, and floors cleaned; trash removed." },
      { title: "Offices & reception", text: "Desks, surfaces, glass, and floors cleaned; trash and recycling emptied." },
      { title: "Floor care", text: "Sweeping and mopping of office, break, and walkway areas; warehouse floor sweeping by arrangement." },
      { title: "Entryways & dock offices", text: "High-traffic entrances and shipping offices kept clean." },
      { title: "Periodic deep cleans", text: "Scheduled top-to-bottom resets for audits, customer visits, or seasonal needs." },
    ],
    faqs: [
      { q: "Can you clean while our warehouse is operating?", a: "Yes. We schedule around your shifts, and we follow your site's safety rules, including PPE requirements and staying clear of equipment and forklift traffic." },
      { q: "Do you clean the warehouse floor itself?", a: "We handle office, break room, restroom, and walkway areas as standard. Warehouse floor sweeping can be added; we'll scope it during your walkthrough." },
      { q: "Are you insured?", a: "Yes. We're licensed and insured and can send a certificate of insurance, including naming your company as additional insured if needed." },
      { q: "How is warehouse cleaning priced?", a: "Pricing depends on the areas included, square footage, and service frequency. We start with a free walkthrough and give you a written quote." },
    ],
  },
};

export const INDUSTRY_ORDER = ["commercial", "daycare", "dealership", "warehouse"];
