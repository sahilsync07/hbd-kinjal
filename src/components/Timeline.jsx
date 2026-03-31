import { useRef, useLayoutEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Heart, Star, Camera, Gift, Coffee, MapPin, TreePine, Moon, Plane, Car, Sun } from 'lucide-react';
import './Timeline.css';

import p1 from '../assets/photos/Kinjal-few-days-after-birth-cute-pic.jpg';
import p2 from '../assets/photos/grandmother-wecallher-amma-holding-kinjal.jpg';
import p3 from '../assets/photos/mummy-holding-kinjal-cute-photo.jpg';
import p4 from '../assets/photos/dad-holding-kinjals-both-hands-with-his-both0hands-they-vibing-and-laughing.jpg';
import p5 from '../assets/photos/kinjal-with-aaya-our-grandfather.jpg';
import p6 from '../assets/photos/kinjal-first-trip-her-southindia-trip.jpg';
import p7 from '../assets/photos/kinjal-sat-for-the-first-time.jpg';
import p8 from '../assets/photos/kinjal-stood-for-first-time-initial-days.jpg';
import p9 from '../assets/photos/kinjal-inside-jacket-of-me-like-kangaroo.jpg';
import p10 from '../assets/photos/me-and-kinjal-i-am-holding-kinjal-from-other-side-of-bridge-cute-photo.jpg';
import p11 from '../assets/photos/cute-kinjal-photo-on-our-red-vespa-sitting-alone.jpg';
import p12 from '../assets/photos/me-and-kinjal-standing-good-photo-going-for-outing.jpg';
import p13 from '../assets/photos/rakshbandhan-first-time-u-tied-me-rakhi.jpg';
import p14 from '../assets/photos/kinjal-joined-second-school-bachpan-school.jpg';
import p15 from '../assets/photos/kinjals-thrid-school-deepti-convent-school-serious-life-starts.jpg';
import p16 from '../assets/photos/kinjal-moved-from-vizag-to-rayagada.jpg';
import p17 from '../assets/photos/me-and-kinjal-cute-photo-in-train.jpg';
import p18 from '../assets/photos/kinjal-first-day-at-delhi-public-school.jpg';
import p19 from '../assets/photos/us-cute-both-in-their-respective-school-uniform.jpg';
import p20 from '../assets/photos/kinjals-first-prize-at-sports-day-in-school.jpg';
import p21 from '../assets/photos/kinjals-grandparents-day-photo-with-aaya-and-amma.jpg';
import p22 from '../assets/photos/kinjals-first-flight-journey.jpg';
import p23 from '../assets/photos/kinjals-tajmahal-vacation.jpg';
import p24 from '../assets/photos/u-and-dad-cool-photo.jpg';
import p25 from '../assets/photos/papa-teaching-you-to-ride-cycle.jpg';
import p26 from '../assets/photos/kinjal-fancy-dress-competition-as-radha.jpg';
import p27 from '../assets/photos/kinjal-in-dance-costume.jpg';
import p28 from '../assets/photos/kinjals-first-science-project.jpg';
import p29 from '../assets/photos/ur-grand-8th-year-birthday.jpg';
import p30 from '../assets/photos/our-family-trip-to-rajasthan.jpg';
import p31 from '../assets/photos/kinjal-in-rajasthani-attire-enjoying-local-food.jpg';
import p32 from '../assets/photos/kinjal-in-rajasthani-attire-full-dress.jpg';
import p33 from '../assets/photos/kinjal-eagarly-waiting-for-playinging-in-snow-with-snow-costume.jpg';
import p34 from '../assets/photos/kinjal-shimla-trip-photo-in-traditional-himanchal-costume.jpg';
import p35 from '../assets/photos/kinjal-mom-dad-in-attedning-a-wdding-fancy-outfit.jpg';
import p36 from '../assets/photos/u-in-beautiful-attire-in-a-family-wedding.jpg';
import p37 from '../assets/photos/ready-for-dubai-trip-pic-at-airport.jpg';
import p38 from '../assets/photos/pic-with-a-limosine.jpg';
import p39 from '../assets/photos/cool-us-four-in-dubai-desert.jpg';
import p40 from '../assets/photos/pic-with-mclaren-sports-car-in-dubai.jpg';
import p41 from '../assets/photos/sad-covid-pandemic-era-in-mask.jpg';
import p42 from '../assets/photos/favourite-part-of-yourlife-eating-kfc-schicken.jpg';
import p43 from '../assets/photos/you-get-to-eat-your-dream-macrons.jpg';
import p44 from '../assets/photos/forcing-kinjal-to-start-vlogging.jpg';
import p45 from '../assets/photos/start-of-your-first vloggin-video-our-cruise-trip.jpg';
import p46 from '../assets/photos/ur-grand-11th-year-birthday-celebration.jpg';
import p47 from '../assets/photos/kinjal-me-vibing-one-earphone-one-earpeicekinjal-and-anotherwithme.jpg';
import p48 from '../assets/photos/u-and-mom-giving-me-farewell-for-my-higher-studies.jpg';
import p49 from '../assets/photos/one-memory-of-rakhi-after-we-grew-big.jpg';
import p50 from '../assets/photos/me-jokingly-jealous-u-becaome-our-parents-fav.jpg';
import p51 from '../assets/photos/our-fun-trip-to-chilika.jpg';
import p52 from '../assets/photos/our-trip-to-kerala.jpg';
import p53 from '../assets/photos/pic-of-us-four-in-kerala-houseboat.jpg';
import p54 from '../assets/photos/u-in-punjabi-attire-for-a-dance.jpg';
import p55 from '../assets/photos/ur-first-vande-bharat-traiin-experience.jpg';
import p56 from '../assets/photos/us-both-in-vizag-tirupati-temple.jpg';
import p57 from '../assets/photos/your-cool-deiwali-celebration.jpg';
import p58 from '../assets/photos/youre-ready-for-annual-day-performance-atshs.jpg';

const memories = [
    {
        id: 1,
        date: "The Very Beginning",
        title: "Welcome to the World",
        description: "Just a few days after you were born, already looking so cute and stealing all the attention.",
        icon: Star,
        image: p1,
        rotate: -2
    },
    {
        id: 2,
        date: "Grandma's Love",
        title: "In Amma's Arms",
        description: "Grandmother (Amma) holding you carefully. Pure love right there.",
        icon: Heart,
        image: p2,
        rotate: 3
    },
    {
        id: 3,
        date: "Mom's World",
        title: "With Mummy",
        description: "Mummy holding you. Cuteness overloaded!",
        icon: Heart,
        image: p3,
        rotate: -3
    },
    {
        id: 4,
        date: "Daddy's Girl",
        title: "Vibing with Dad",
        description: "Dad holding both your hands, laughing and vibing together. What a joyful moment.",
        icon: Star,
        image: p4,
        rotate: 2
    },
    {
        id: 5,
        date: "Grandpa's Blessing",
        title: "With Aaya",
        description: "A beautiful moment captured with our grandfather (Aaya).",
        icon: Heart,
        image: p5,
        rotate: -3
    },
    {
        id: 6,
        date: "Milestone",
        title: "Sitting Up!",
        description: "The very first time you managed to sit up all by yourself. We were so proud.",
        icon: Camera,
        image: p7,
        rotate: -2
    },
    {
        id: 7,
        date: "Growing Fast",
        title: "First Steps",
        description: "The initial days when you tried standing for the first time. Getting ready to run!",
        icon: Star,
        image: p8,
        rotate: 3
    },
    {
        id: 8,
        date: "Cozy Siblings",
        title: "The Kangaroo Pouch",
        description: "You safely tucked inside my jacket like a little kangaroo. So warm and cozy.",
        icon: Heart,
        image: p9,
        rotate: -4
    },
    {
        id: 9,
        date: "Adventures",
        title: "Bridge Day",
        description: "Me holding you across the bridge. A cute brother-sister adventure.",
        icon: Camera,
        image: p10,
        rotate: -3
    },
    {
        id: 10,
        date: "Travel Bug",
        title: "South India Trip",
        description: "Your very first trip! Exploring incredible South India together.",
        icon: MapPin,
        image: p6,
        rotate: 2
    },
    {
        id: 11,
        date: "School Days",
        title: "Delhi Public School",
        description: "Your very first day at DPS. The start of an amazing educational journey.",
        icon: Camera,
        image: p18,
        rotate: 3
    },
    {
        id: 12,
        date: "Cool Rider",
        title: "Red Vespa",
        description: "Looking adorable sitting alone on our red scooter.",
        icon: Star,
        image: p11,
        rotate: -2
    },
    {
        id: 13,
        date: "Outing",
        title: "Ready for the World",
        description: "Standing tall and ready for an outing. Look at you growing up so fast!",
        icon: Star,
        image: p12,
        rotate: 3
    },
    {
        id: 14,
        date: "Sibling Bond",
        title: "First Rakhi",
        description: "The beautiful moment when you tied Rakhi on my wrist for the very first time.",
        icon: Heart,
        image: p13,
        rotate: 2
    },
    {
        id: 15,
        date: "School Days",
        title: "Bachpan Play School",
        description: "Joining your second school! Making new friends and having a blast.",
        icon: Star,
        image: p14,
        rotate: -2
    },
    {
        id: 16,
        date: "Growing Up",
        title: "Deepthi Convent School",
        description: "Your third school journey begins. Time to get a little more serious!",
        icon: Camera,
        image: p15,
        rotate: 3
    },
    {
        id: 17,
        date: "Moving Cities",
        title: "Vizag to Rayagada",
        description: "Moving to a new city! Exploring new places and setting up our home in Rayagada.",
        icon: MapPin,
        image: p16,
        rotate: -3
    },
    {
        id: 18,
        date: "Spiritual Run",
        title: "Vizag Tirupati Temple",
        description: "A beautiful memory of us both visiting the Tirupati Temple together.",
        icon: Heart,
        image: p56,
        rotate: 2
    },
    {
        id: 19,
        date: "Travels",
        title: "Train Journey",
        description: "Going on a trip in the train. You always made traveling more fun.",
        icon: MapPin,
        image: p17,
        rotate: 3
    },
    {
        id: 20,
        date: "Train Upgrade",
        title: "Vande Bharat Experience",
        description: "Experiencing the amazing Vande Bharat train for the first time!",
        icon: Camera,
        image: p55,
        rotate: -2
    },
    {
        id: 21,
        date: "Together",
        title: "School Uniforms",
        description: "Both of us looking so disciplined and cute in our respective school uniforms.",
        icon: Star,
        image: p19,
        rotate: -3
    },
    {
        id: 22,
        date: "Champion",
        title: "First Prize!",
        description: "Winning your first prize at the school sports day! A proud moment.",
        icon: Camera,
        image: p20,
        rotate: 2
    },
    {
        id: 23,
        date: "Family",
        title: "Grandparents Day",
        description: "Celebrating at school with Aaya and Amma. Precious smiles all around.",
        icon: Heart,
        image: p21,
        rotate: -2
    },
    {
        id: 24,
        date: "First Flight",
        title: "Up in the Clouds",
        description: "Experiencing the magic of your very first flight journey. The sky's the limit!",
        icon: Plane,
        image: p22,
        rotate: 3
    },
    {
        id: 25,
        date: "Vacations",
        title: "Taj Mahal Trip",
        description: "Visiting the iconic Taj Mahal. Our fun family vacation getaway.",
        icon: MapPin,
        image: p23,
        rotate: -3
    },
    {
        id: 26,
        date: "Dad & Daughter",
        title: "Cool Pair",
        description: "Such a cool photo of you and Dad looking effortlessly stylish.",
        icon: Star,
        image: p24,
        rotate: 2
    },
    {
        id: 27,
        date: "Learning",
        title: "First Bicycle",
        description: "Papa teaching you how to ride a cycle fearlessly. Great memories!",
        icon: Camera,
        image: p25,
        rotate: -2
    },
    {
        id: 28,
        date: "Fancy Dress",
        title: "Dressed as Radha",
        description: "Looking absolutely divine as Radha for the school fancy dress competition.",
        icon: Camera,
        image: p26,
        rotate: 3
    },
    {
        id: 29,
        date: "Performing Arts",
        title: "Dance Costume",
        description: "All getting ready in an adorable dance costume for your performance.",
        icon: Star,
        image: p27,
        rotate: -3
    },
    {
        id: 30,
        date: "Culture",
        title: "Punjabi Attire",
        description: "Dressed beautifully in Punjabi attire and ready for an amazing dance!",
        icon: Heart,
        image: p54,
        rotate: 2
    },
    {
        id: 31,
        date: "Performer",
        title: "Annual Day",
        description: "You're all ready for your grand annual day performance at school!",
        icon: Star,
        image: p58,
        rotate: -2
    },
    {
        id: 32,
        date: "Education",
        title: "Science Project",
        description: "Presenting your very first science project! Brains and beauty.",
        icon: Star,
        image: p28,
        rotate: 3
    },
    {
        id: 33,
        date: "Birthday!",
        title: "8th Birthday",
        description: "Your grand 8th birthday celebration! So many gifts and so much cake.",
        icon: Gift,
        image: p29,
        rotate: -2
    },
    {
        id: 34,
        date: "Holidays",
        title: "Diwali Vibes",
        description: "A super cool Diwali celebration filled with lights and smiles.",
        icon: Sun,
        image: p57,
        rotate: 3
    },
    {
        id: 35,
        date: "Fun Getaway",
        title: "Chilika Lake Trip",
        description: "Our incredibly fun trip to Chilika. Surrounded by nature and endless water.",
        icon: MapPin,
        image: p51,
        rotate: -3
    },
    {
        id: 36,
        date: "Family Trip",
        title: "Rajasthan Diaries",
        description: "A wonderful family trip exploring the beautiful palaces of Rajasthan.",
        icon: Camera,
        image: p30,
        rotate: 2
    },
    {
        id: 37,
        date: "Culture",
        title: "Enjoying Food",
        description: "Enjoying the local food in Rajasthan wearing traditional clothes. A real foodie!",
        icon: Coffee,
        image: p31,
        rotate: -2
    },
    {
        id: 38,
        date: "Fashion",
        title: "Traditional Glam",
        description: "Looking gorgeous in full traditional Rajasthani attire.",
        icon: Star,
        image: p32,
        rotate: 3
    },
    {
        id: 39,
        date: "Snow Ready",
        title: "Anticipation",
        description: "All geared up in the snow costume, eagerly waiting to go out and play!",
        icon: Heart,
        image: p33,
        rotate: -3
    },
    {
        id: 40,
        date: "Hill Station",
        title: "Shimla Trip",
        description: "Looking absolutely beautiful in the traditional Himachali costume during our Shimla trip.",
        icon: Star,
        image: p34,
        rotate: 2
    },
    {
        id: 41,
        date: "God's Own Country",
        title: "Trip to Kerala",
        description: "Our amazing trip exploring the beautiful greenery and waters of Kerala.",
        icon: MapPin,
        image: p52,
        rotate: -2
    },
    {
        id: 42,
        date: "Waterways",
        title: "Kerala Houseboat",
        description: "A beautiful picture of us four enjoying the peaceful Kerala houseboat ride.",
        icon: Camera,
        image: p53,
        rotate: 3
    },
    {
        id: 43,
        date: "Celebrations",
        title: "Wedding Season",
        description: "Mom and Dad looking sharp, and we are all dressed up for the wedding!",
        icon: Star,
        image: p35,
        rotate: -3
    },
    {
        id: 44,
        date: "Family Wedding",
        title: "Beautiful Attire",
        description: "Stealing the spotlight in your beautiful dress at the family wedding.",
        icon: Camera,
        image: p36,
        rotate: 2
    },
    {
        id: 45,
        date: "Dubai Bound",
        title: "At the Airport",
        description: "All packed and ready for our grand Dubai trip at the airport!",
        icon: Plane,
        image: p37,
        rotate: -2
    },
    {
        id: 46,
        date: "Dubai",
        title: "Limousine Ride",
        description: "Living the VIP life with a beautiful Limousine picture.",
        icon: Car,
        image: p38,
        rotate: 3
    },
    {
        id: 47,
        date: "Dubai Desert",
        title: "Desert Safari",
        description: "The four of us looking cool and ready to conquer the Dubai Desert.",
        icon: MapPin,
        image: p39,
        rotate: -3
    },
    {
        id: 48,
        date: "Sports Cars",
        title: "McLaren Supercar",
        description: "Posing with an incredible McLaren sports car in Dubai!",
        icon: Car,
        image: p40,
        rotate: 2
    },
    {
        id: 49,
        date: "Pandemic",
        title: "COVID Era",
        description: "Those sad COVID pandemic days... but staying safe in a mask!",
        icon: Heart,
        image: p41,
        rotate: -2
    },
    {
        id: 50,
        date: "Foodie",
        title: "KFC Chicken",
        description: "Your absolute favorite part of life: eating crispy KFC chicken!",
        icon: Coffee,
        image: p42,
        rotate: 3
    },
    {
        id: 51,
        date: "Sweet Tooth",
        title: "Dream Macarons",
        description: "The moment you finally got to eat your delicious dream macarons.",
        icon: Heart,
        image: p43,
        rotate: -3
    },
    {
        id: 52,
        date: "Content Creator",
        title: "Vlogging Time",
        description: "Me forcing you to hold the camera and start vlogging our lives!",
        icon: Camera,
        image: p44,
        rotate: 2
    },
    {
        id: 53,
        date: "First Vlog",
        title: "Cruise Trip",
        description: "The official start of your first vlog video aboard our cruise trip.",
        icon: Star,
        image: p45,
        rotate: -2
    },
    {
        id: 54,
        date: "Birthday!",
        title: "11th Birthday",
        description: "Your grand 11th year birthday celebration! Growing up so fast.",
        icon: Gift,
        image: p46,
        rotate: 3
    },
    {
        id: 55,
        date: "Music Buddy",
        title: "Vibing Together",
        description: "Sharing earphones and listening to our favorite tracks together.",
        icon: Heart,
        image: p47,
        rotate: -3
    },
    {
        id: 56,
        date: "Farewell",
        title: "Higher Studies",
        description: "You and mom giving me a heartfelt farewell when I left for higher studies.",
        icon: Camera,
        image: p48,
        rotate: 2
    },
    {
        id: 57,
        date: "Growing Up",
        title: "Rakhi Memories",
        description: "A beautiful memory of Rakhi after we both grew big.",
        icon: Heart,
        image: p49,
        rotate: -2
    },
    {
        id: 58,
        date: "Favorites",
        title: "A Little Jealous",
        description: "Me jokingly acting jealous because you obviously became our parents' favorite!",
        icon: Star,
        image: p50,
        rotate: 3
    }
];

export default function Timeline() {
    const containerRef = useRef(null);
    const [pathHeight, setPathHeight] = useState(1000);

    // Calculate path height ensuring it covers all items
    useLayoutEffect(() => {
        if (containerRef.current) {
            setPathHeight(containerRef.current.offsetHeight);
        }
    }, []);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 20%", "end 80%"]
    });

    const pathLength = useSpring(scrollYProgress, {
        stiffness: 400,
        damping: 40,
        restDelta: 0.001
    });

    // Dynamic path generation
    const generatePath = () => {
        const itemSpacing = 550; // Tuned for better alignment
        const startY = 0;
        let d = `M 50 ${startY}`;

        memories.forEach((_, i) => {
            const currentY = i * itemSpacing;
            const midY = currentY + (itemSpacing / 2);
            const targetY = (i + 1) * itemSpacing;
            const side = i % 2 === 0 ? 90 : 10;
            d += ` Q ${side} ${midY} 50 ${targetY}`;
        });
        return d;
    };

    const pathData = generatePath();

    // Sync both path drawing and butterfly to exactly 0-95%
    // This ensures the line doesn't "outrun" the butterfly
    const drawProgress = useTransform(pathLength, [0, 1], [0, 0.95]);
    const butterflyProgress = useTransform(pathLength, [0, 1], ["0%", "95%"]);

    return (
        <section ref={containerRef} className="timeline-section" style={{ position: 'relative' }}>
            <h2 className="timeline-title">A Walk Down Memory Lane</h2>

            <div className="timeline-container">
                {/* SVG Path - Winding curve */}
                <svg
                    className="timeline-svg"
                    viewBox={`0 0 100 ${memories.length * 550}`}
                    preserveAspectRatio="none"
                    style={{ height: `${memories.length * 550}px` }}
                >
                    {/* Background path (faint) */}
                    <path
                        d={pathData}
                        fill="none"
                        stroke="rgba(34, 197, 94, 0.3)"
                        strokeWidth="3"
                    />

                    {/* Animated path filling up */}
                    <motion.path
                        d={pathData}
                        fill="none"
                        stroke="url(#gradient)"
                        strokeWidth="3"
                        style={{ pathLength: drawProgress }}
                    />

                    {/* Flying Butterfly */}
                    <motion.g
                        style={{
                            offsetPath: `path("${pathData}")`,
                            offsetDistance: butterflyProgress,
                            offsetRotate: 'auto'
                        }}
                    >
                        <motion.g
                            // Flapping effect: Scale Y to look like wings opening/closing
                            animate={{ scaleY: [1, 0.4, 1] }}
                            transition={{ duration: 0.2, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <text
                                x="-15"
                                y="10"
                                fontSize="30"
                                style={{
                                    filter: 'drop-shadow(0px 2px 2px rgba(0,0,0,0.2))',
                                    userSelect: 'none',
                                    // Rotate 90deg to face forward along path
                                    transform: 'rotate(90deg)',
                                    display: 'inline-block',
                                    transformBox: 'fill-box',
                                    transformOrigin: 'center'
                                }}
                            >
                                🦋
                            </text>
                        </motion.g>
                    </motion.g>

                    <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#22c55e" />
                            <stop offset="50%" stopColor="#10b981" />
                            <stop offset="100%" stopColor="#86efac" />
                        </linearGradient>
                    </defs>
                </svg>

                <div className="timeline-items">
                    {memories.map((memory, index) => (
                        <TimelineCard
                            key={memory.id}
                            memory={memory}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

function TimelineCard({ memory, index }) {
    const isLeft = index % 2 === 0;

    return (
        <motion.div
            className={`timeline-row ${isLeft ? 'left' : 'right'}`}
            initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25, margin: "0px" }}
        >
            <div className="timeline-date-marker">
                <span className="date-badge">{memory.date}</span>
            </div>

            <div
                className="polaroid-card"
                style={{ transform: `rotate(${memory.rotate}deg)` }}
            >
                <div className="polaroid-inner">
                    <div className="polaroid-img-container">
                        <img
                            src={memory.image}
                            alt={memory.title}
                            onError={(e) => {
                                e.target.style.display = 'none';
                                e.target.parentElement.classList.add('fallback');
                            }}
                        />
                        <div className="shine-overlay"></div>
                    </div>
                    <div className="polaroid-caption">
                        <h3>{memory.title}</h3>
                        <p>{memory.description}</p>
                        <memory.icon className="memory-icon-small" size={16} color="#10b981" />
                    </div>
                </div>
                {/* Pin or Tape */}
                <div className="pin-decoration"></div>
            </div>
        </motion.div>
    );
}
