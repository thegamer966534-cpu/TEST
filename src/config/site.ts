import {
  ShieldCheck,
  Users,
  Sparkles,
  HeartPulse,
  Phone,
  Camera,
  type LucideIcon,
} from 'lucide-react';

export const siteConfig = {
  business: {
    name: 'Smart Mouth Family Dental',
    shortName: 'Smart Mouth',
    tagline: 'Pain-free, honest dentistry in Wichita Falls, TX',
    phone: '(940) 761-5979',
    phoneRaw: '9407615979',
    email: 'wichitafalls@smartmouthfamilydental.com',
    address: {
      street: '3510 McNiel Ave',
      city: 'Wichita Falls',
      state: 'TX',
      zip: '76308',
    },
    announcement: 'Family-centered dental care in Wichita Falls • New patients welcome',
    rating: 4.8,
    reviewCount: 4,
    mapUrl:
      'https://www.google.com/maps/search/?api=1&query=Smart+Mouth+Family+Dental+3510+McNiel+Ave+Wichita+Falls+TX+76308',
    mapsEmbed:
      'https://www.google.com/maps?q=3510+McNiel+Ave,+Wichita+Falls,+TX+76308&output=embed',
    hours: [
      { day: 'Monday', hours: '8:00 AM – 5:00 PM' },
      { day: 'Tuesday', hours: '8:00 AM – 5:00 PM' },
      { day: 'Wednesday', hours: '8:00 AM – 5:00 PM' },
      { day: 'Thursday', hours: '8:00 AM – 5:00 PM' },
      { day: 'Friday', hours: 'Closed' },
      { day: 'Saturday', hours: 'Closed' },
      { day: 'Sunday', hours: 'Closed' },
    ],
    social: {
      google:
        'https://www.google.com/maps/search/?api=1&query=Smart+Mouth+Family+Dental+3510+McNiel+Ave+Wichita+Falls+TX',
    },
  },
  nav: [
    { label: 'Services', path: '/services' },
    { label: 'About', path: '/about' },
    { label: 'Reviews', path: '/reviews' },
    { label: 'New Patients', path: '/new-patients' },
    { label: 'FAQ', path: '/faq' },
    { label: 'Contact', path: '/contact' },
  ],
  images: {
    // The page layout intentionally remains the supplied ZIP design. These are the
    // existing image slots; content and brand information are sourced from the live site.
    hero: 'https://images.pexels.com/photos/3884101/pexels-photo-3884101.jpeg?auto=compress&cs=tinysrgb&w=1400',
    heroAlt: 'Smart Mouth Family Dental team caring for a patient in Wichita Falls, Texas',
    about: 'https://images.pexels.com/photos/6809664/pexels-photo-6809664.jpeg?auto=compress&cs=tinysrgb&w=1200',
    aboutAlt: 'Welcoming dental care experience at Smart Mouth Family Dental',
    team: 'https://images.pexels.com/photos/3952124/pexels-photo-3952124.jpeg?auto=compress&cs=tinysrgb&w=1200',
    teamAlt: 'Dental team in a modern clinical setting',
    office: 'https://images.pexels.com/photos/6812436/pexels-photo-6812436.jpeg?auto=compress&cs=tinysrgb&w=1200',
    officeAlt: 'Dental office reception area',
    family: 'https://images.pexels.com/photos/160994/family-outdoor-happy-happiness-160994.jpeg?auto=compress&cs=tinysrgb&w=1200',
    familyAlt: 'Family representing family-centered dental care',
    cta: 'https://images.pexels.com/photos/8413334/pexels-photo-8413334.jpeg?auto=compress&cs=tinysrgb&w=1400',
    ctaAlt: 'Dentist helping a patient',
  },
} as const;

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  credentials: string;
  image: string;
  imageAlt: string;
}

export const team: TeamMember[] = [
  {
    name: 'Dr. Jeff Johnson',
    role: 'Dentist',
    bio: 'Dr. Johnson grew up near Seattle, Washington, as the oldest of six children. He earned a degree in Business Finance from Brigham Young University and graduated with honors from Loma Linda University School of Dentistry. He also completed two years of volunteer missionary service in Las Vegas and learned fluent Spanish.',
    credentials: 'Dentist',
    image: 'https://images.pexels.com/photos/3952124/pexels-photo-3952124.jpeg?auto=compress&cs=tinysrgb&w=900',
    imageAlt: 'Dr. Jeff Johnson at Smart Mouth Family Dental',
  },
  {
    name: 'Hailey',
    role: 'Patient Care Coordinator',
    bio: 'Hailey joined Smart Mouth Family Dental in 2020 and enjoys helping patients feel welcomed while coordinating appointments and treatment timelines.',
    credentials: 'Patient Care Coordinator',
    image: 'https://images.pexels.com/photos/3952124/pexels-photo-3952124.jpeg?auto=compress&cs=tinysrgb&w=900',
    imageAlt: 'Hailey at Smart Mouth Family Dental',
  },
  {
    name: 'Heather',
    role: 'Dental Assistant',
    bio: 'Heather has worked in dentistry since graduating from assisting school in 2009 and joined the Smart Mouth team in 2015.',
    credentials: 'Dental Assistant',
    image: 'https://images.pexels.com/photos/3952124/pexels-photo-3952124.jpeg?auto=compress&cs=tinysrgb&w=900',
    imageAlt: 'Heather at Smart Mouth Family Dental',
  },
  {
    name: 'Jamie',
    role: 'Dental Assistant',
    bio: 'Jamie enjoys working with patients and being part of the Smart Mouth team. Outside the office, she enjoys reading, board games, and time with family.',
    credentials: 'Dental Assistant',
    image: 'https://images.pexels.com/photos/3952124/pexels-photo-3952124.jpeg?auto=compress&cs=tinysrgb&w=900',
    imageAlt: 'Jamie at Smart Mouth Family Dental',
  },
  {
    name: 'Twila',
    role: 'Dental Hygienist',
    bio: 'A lifetime Wichita Falls resident, Twila has been a hygienist for decades and loves caring for Smart Mouth patients.',
    credentials: 'Dental Hygienist',
    image: 'https://images.pexels.com/photos/3952124/pexels-photo-3952124.jpeg?auto=compress&cs=tinysrgb&w=900',
    imageAlt: 'Twila at Smart Mouth Family Dental',
  },
  {
    name: 'Becky',
    role: 'Dental Hygienist',
    bio: 'Becky grew up in Wichita Falls, earned her Dental Hygiene degree from MSU, and has decades of hygiene experience.',
    credentials: 'Dental Hygienist',
    image: 'https://images.pexels.com/photos/3952124/pexels-photo-3952124.jpeg?auto=compress&cs=tinysrgb&w=900',
    imageAlt: 'Becky at Smart Mouth Family Dental',
  },
  {
    name: 'Kristen',
    role: 'Dental Hygienist',
    bio: 'Originally from Utah, Kristen has practiced hygiene in Arizona and Wichita Falls and enjoys helping patients improve their oral health.',
    credentials: 'Dental Hygienist',
    image: 'https://images.pexels.com/photos/3952124/pexels-photo-3952124.jpeg?auto=compress&cs=tinysrgb&w=900',
    imageAlt: 'Kristen at Smart Mouth Family Dental',
  },
  {
    name: 'Staci',
    role: 'Dental Hygienist',
    bio: 'Staci was born and raised in Wichita Falls, graduated from Midwestern State University, and enjoys building long-term relationships with patients.',
    credentials: 'Dental Hygienist',
    image: 'https://images.pexels.com/photos/3952124/pexels-photo-3952124.jpeg?auto=compress&cs=tinysrgb&w=900',
    imageAlt: 'Staci at Smart Mouth Family Dental',
  },
];

export interface ServiceItem {
  slug: string;
  name: string;
  icon: LucideIcon;
  shortDesc: string;
  description: string;
  image: string;
  imageAlt: string;
  features: string[];
}

const serviceImage = (url: string, alt: string) => ({ image: url, imageAlt: alt });
const dentalImage = 'https://images.pexels.com/photos/5355834/pexels-photo-5355834.jpeg?auto=compress&cs=tinysrgb&w=1000';

export const services: ServiceItem[] = [
  {
    slug: 'preventive-care', name: 'Cleaning & Prevention', icon: ShieldCheck,
    shortDesc: 'Preventive dentistry that helps maintain excellent oral health.',
    description: 'A focus on preventive dentistry helps you maintain the highest standard of oral health while limiting avoidable dental expenditures.',
    ...serviceImage(dentalImage, 'Preventive dental care'),
    features: ['Oral cancer screening', 'Teeth cleaning', 'Home care guidance', 'Periodontal therapy'],
  },
  {
    slug: 'family-dentistry', name: 'Family Dentistry', icon: Users,
    shortDesc: 'Comfortable dental care for the entire family.',
    description: 'Smart Mouth Family Dental provides family-centered care for patients at different stages of life, including teen and adult dentistry.',
    ...serviceImage('https://images.pexels.com/photos/14458273/pexels-photo-14458273.jpeg?auto=compress&cs=tinysrgb&w=1000', 'Family dental care'),
    features: ["Teen's dentistry", "Adult's dentistry", "Children's dentistry", 'Family-centered care'],
  },
  {
    slug: 'cosmetic-dentistry', name: 'Cosmetic Dentistry', icon: Sparkles,
    shortDesc: 'Smile-focused treatments tailored to your goals.',
    description: 'Cosmetic dentistry can improve the appearance of your smile while keeping your individual goals and oral health in focus.',
    ...serviceImage('https://images.pexels.com/photos/6627574/pexels-photo-6627574.jpeg?auto=compress&cs=tinysrgb&w=1000', 'Cosmetic dentistry'),
    features: ['Porcelain veneers', 'Porcelain crowns', 'Composite fillings', 'Teeth whitening'],
  },
  {
    slug: 'tooth-replacement', name: 'Tooth Replacement', icon: HeartPulse,
    shortDesc: 'Restorative solutions for missing teeth.',
    description: "Dr. Jeff Johnson's restorative dentistry background supports treatment planning for a wide range of tooth-replacement needs.",
    ...serviceImage('https://images.pexels.com/photos/6528850/pexels-photo-6528850.jpeg?auto=compress&cs=tinysrgb&w=1000', 'Tooth replacement and restorative dentistry'),
    features: ['Dental implants', 'All-on-4® implants', 'Porcelain bridges', 'Full or partial dentures'],
  },
  {
    slug: 'extractions-preservation', name: 'Extractions & Preservation', icon: Phone,
    shortDesc: 'Thoughtful treatment when teeth need to be removed or preserved.',
    description: 'Wisdom teeth, extra teeth, severe crowding, or damaged teeth can require removal or preservation. The team can review your options and next steps.',
    ...serviceImage('https://images.pexels.com/photos/6627325/pexels-photo-6627325.jpeg?auto=compress&cs=tinysrgb&w=1000', 'Dental consultation'),
    features: ['Extractions', 'Root canals', 'Oral surgery', 'Bone grafting', 'Wisdom teeth extractions'],
  },
  {
    slug: 'sedation-dentistry', name: 'Sedation Dentistry', icon: HeartPulse,
    shortDesc: 'A comfortable, customized approach to dental treatment.',
    description: 'Sedation dentistry can provide a more comfortable experience using methods selected around the patient and treatment needs.',
    ...serviceImage('https://images.pexels.com/photos/5355834/pexels-photo-5355834.jpeg?auto=compress&cs=tinysrgb&w=1000', 'Comfort-focused dental care'),
    features: ['Laughing gas', 'Comfort-focused visits', 'Customized approach', 'Patient education'],
  },
  {
    slug: 'technology', name: 'Technology', icon: Camera,
    shortDesc: 'Modern dental technology selected to improve the patient experience.',
    description: 'Dr. Jeff Johnson carefully selects technologies designed to support accurate diagnosis and a comfortable, efficient patient experience.',
    ...serviceImage('https://images.pexels.com/photos/5622256/pexels-photo-5622256.jpeg?auto=compress&cs=tinysrgb&w=1000', 'Modern dental technology'),
    features: ['Intra-oral camera', 'Digital X-ray', '3D imaging', 'Modern diagnostic tools'],
  },
];

export interface ReviewItem { name: string; rating: number; text: string; date: string; source: string; }
export const reviews: ReviewItem[] = [
  { name: 'Karie F.', rating: 5, text: 'This practice is wonderful. It feels as if you are at a friend\'s house for dental because the staff are so kind. I look forward to returning!', date: 'Google review', source: 'Google' },
  { name: 'Christina Y.', rating: 5, text: "I love the staff and Dr. Johnson. After terrible teeth and bad life experiences, they listen and don’t judge! They work with you to reach your goals affordably and minimize pain while working on you!", date: 'Google review', source: 'Google' },
  { name: 'Brittany C.', rating: 5, text: 'I am terrified of needles. Dr. Johnson and his staff are AMAZING!! My fillings were pain free and stress free. I highly recommend this office.', date: 'Google review', source: 'Google' },
  { name: 'Angela C.', rating: 5, text: 'Great Doctor and staff. Great customer service from beginning to end. Definitely family oriented dental office. Will definitely be transferring my family to them for all of our dental services.', date: 'Google review', source: 'Google' },
];

export interface FAQItem { question: string; answer: string; }
export const faqs: FAQItem[] = [
  { question: 'Do you accept new patients?', answer: 'Smart Mouth Family Dental welcomes families from Wichita Falls and surrounding communities. Contact the office to confirm current appointment availability.' },
  { question: 'What services does Smart Mouth Family Dental offer?', answer: 'The practice lists preventive care, family dentistry, cosmetic dentistry, tooth replacement, extractions and preservation, sedation dentistry, and dental technology.' },
  { question: 'Where is the office located?', answer: 'Smart Mouth Family Dental is located at 3510 McNiel Ave, Wichita Falls, TX 76308.' },
  { question: 'How do I request an appointment?', answer: 'Call (940) 761-5979 or use the appointment request form on this website. The office will contact you to confirm availability.' },
  { question: 'Do you offer emergency dental visits?', answer: 'The live practice website says the team offers same-day emergency visits to help patients get out of pain quickly. Call the office for current availability and instructions.' },
  { question: 'What are the office hours?', answer: 'The current live site lists Monday through Thursday, 8:00 AM to 5:00 PM.' },
  { question: 'Do you accept insurance or financing?', answer: 'The practice states that it accepts major PPO insurance and CareCredit® and also offers an in-house membership plan for patients without insurance.' },
];

export const serviceHighlights = [
  { title: 'Preventive Care', text: 'Periodic cleanings and preventive visits help keep your dental health on track.' },
  { title: 'Dental Implants', text: 'Implants provide a long-term solution for missing teeth with treatment guided by Dr. Jeff Johnson.' },
  { title: 'Emergency Care', text: 'When a dental emergency strikes, call the office to discuss same-day availability.' },
];

export const whyChoose = [
  { title: 'Family-centered care', description: 'Care for patients of all ages with a welcoming, non-judgmental approach.' , icon: Users },
  { title: 'Pain-free focus', description: 'The practice emphasizes comfortable care and clear communication before treatment.' , icon: HeartPulse },
  { title: 'Comprehensive services', description: 'From preventive care to implants, root canals, cosmetic care, and children’s dentistry.' , icon: ShieldCheck },
  { title: 'Flexible payment options', description: 'The practice accepts major PPO insurance and CareCredit® and offers an in-house membership plan.' , icon: Sparkles },
];

export const processSteps = [
  { step: '01', number: '01', title: 'Tell us what you need', description: 'Call the office or send an appointment request with the reason for your visit.' },
  { step: '02', number: '02', title: 'Meet the team', description: 'We listen, answer questions, and explain what to expect from your visit.' },
  { step: '03', number: '03', title: 'Choose your next step', description: 'Dr. Johnson and the team help you understand your options and move forward with confidence.' },
];
