// Content for the town / service-area landing pages.
// Each town gets its own page at /commercial-cleaning-<town>-pa.
// Edit wording here — every town page reads from this file.

export const TOWNS = {
  "north-wales": {
    name: "North Wales",
    zip: "19454",
    county: "Montgomery County",
    nearby: ["Upper Gwynedd", "Lansdale", "Montgomeryville", "Gwynedd", "Blue Bell"],
    intro:
      "Spotless Spaces is based in North Wales, so local businesses here get commercial cleaners who are close by and easy to reach. We clean offices, medical and dental practices, gyms, daycares, and storefronts on nightly, weekly, or custom schedules.",
    local:
      "Because we're local to North Wales, walkthroughs are quick to schedule, and your account manager is minutes away if anything needs attention.",
  },
  ambler: {
    name: "Ambler",
    zip: "19002",
    county: "Montgomery County",
    nearby: ["Fort Washington", "Blue Bell", "Lower Gwynedd", "Maple Glen", "Upper Dublin"],
    intro:
      "From downtown storefronts and restaurants to professional offices and medical practices, Ambler businesses count on Spotless Spaces for dependable commercial cleaning. We work after hours, follow a written checklist, and send the same crew whenever possible.",
    local:
      "Ambler is just a few minutes from our North Wales base, so scheduling a free walkthrough is easy.",
  },
  "blue-bell": {
    name: "Blue Bell",
    zip: "19422",
    county: "Montgomery County",
    nearby: ["Whitpain Township", "Plymouth Meeting", "Ambler", "Gwynedd", "Norristown"],
    intro:
      "Blue Bell is home to corporate offices, professional suites, and medical practices, and Spotless Spaces keeps them clean on nightly and weekly schedules. Our commercial cleaners handle workstations, conference rooms, kitchens, and restrooms, with one point of contact for your account.",
    local:
      "We serve office parks and single-suite tenants across Blue Bell and Whitpain Township, and we can name your property manager as additional insured.",
  },
  horsham: {
    name: "Horsham",
    zip: "19044",
    county: "Montgomery County",
    nearby: ["Hatboro", "Willow Grove", "Maple Glen", "Warminster", "Montgomeryville"],
    intro:
      "Horsham's business parks are full of offices, warehouses, and light industrial sites, and Spotless Spaces cleans them around your shifts. We also clean gyms, medical offices, and daycares throughout Horsham Township.",
    local:
      "For warehouses and multi-building campuses in Horsham, we build one checklist and one invoice that covers every area you need cleaned.",
  },
  "fort-washington": {
    name: "Fort Washington",
    zip: "19034",
    county: "Montgomery County",
    nearby: ["Ambler", "Dresher", "Flourtown", "Oreland", "Upper Dublin"],
    intro:
      "Businesses in the Fort Washington Office Park and throughout Upper Dublin and Whitemarsh rely on Spotless Spaces for office and janitorial cleaning. We clean after hours so your team walks into a clean workplace every morning.",
    local:
      "We work with single-suite tenants and whole-building contracts in Fort Washington, with a certificate of insurance ready for your landlord.",
  },
  "plymouth-meeting": {
    name: "Plymouth Meeting",
    zip: "19462",
    county: "Montgomery County",
    nearby: ["Conshohocken", "Lafayette Hill", "Blue Bell", "Norristown", "East Norriton"],
    intro:
      "Plymouth Meeting's offices, retail stores, medical practices, and fitness centers get consistent, checklist-driven cleaning from Spotless Spaces. We schedule around your business hours and keep the same crew on your building whenever possible.",
    local:
      "From corporate offices to retail storefronts near the Plymouth Meeting Mall, we tailor each cleaning plan to how your space is used.",
  },
  gwynedd: {
    name: "Gwynedd",
    zip: "19436",
    county: "Montgomery County",
    nearby: ["Gwynedd Valley", "Lower Gwynedd", "North Wales", "Spring House", "Ambler"],
    intro:
      "Spotless Spaces provides commercial cleaning for offices, medical practices, and small businesses in Gwynedd, Gwynedd Valley, and Lower Gwynedd. We clean on the schedule you choose and follow a written checklist every visit.",
    local:
      "Gwynedd is right next to our North Wales base, so walkthroughs and follow-ups are quick.",
  },
};

export const TOWN_ORDER = ["north-wales", "ambler", "blue-bell", "horsham", "fort-washington", "plymouth-meeting", "gwynedd"];

export const townSlug = (key) => `commercial-cleaning-${key}-pa`;
