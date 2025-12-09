// need to add campus buildings data 
export const buildings = [
  // --- Major Academic & Landmarks ---
  {
    id: 'cathedral',
    name: 'Cathedral of Learning',
    position: [40.4443, -79.9533],
    type: 'academic',
    description: 'Iconic 42-story Gothic Revival tower, home to Nationality Rooms and various departments. https://www.tour.pitt.edu/tour/cathedral-learning',
    departments: ['History', 'English', 'Philosophy', 'Religious Studies', 'Honors College'],
    classrooms: ['G1-G24', '113', '324', '332', 'G24'],
    sprite: '🏛️'
  },
  {
    id: 'hillman',
    name: 'Hillman Library',
    position: [40.4424, -79.9537],
    type: 'library',
    description: 'Main research library with extensive collections, study spaces, and the Cup & Chau cafe. https://www.tour.pitt.edu/tour/hillman-library',
    departments: ['Library Services', 'IT Help Desk'],
    classrooms: ['G-Ground', '1st Floor Study', '2nd Floor Quiet', '3rd Floor Archives'],
    sprite: '📚'
  },
  {
    id: 'wpu',
    name: 'William Pitt Union',
    position: [40.4441, -79.9548],
    type: 'student_center',
    description: 'The hub of student life, featuring dining, ballrooms, and student organization offices. https://www.tour.pitt.edu/tour/william-pitt-union',
    departments: ['Student Affairs', 'Pitt Program Council', 'Career Center'],
    classrooms: ['Assembly Room', 'Kurtzman Room', 'Ballroom'],
    sprite: '🎓'
  },
  
  // --- Science & Engineering ---
  {
    id: 'benedum',
    name: 'Benedum Hall',
    position: [40.4435, -79.9579],
    type: 'academic',
    description: 'The massive concrete home of the Swanson School of Engineering. https://www.tour.pitt.edu/tour/benedum-hall',
    departments: ['Mechanical Engineering', 'Civil Engineering', 'Electrical Engineering', 'Bioengineering'],
    classrooms: ['157', '158', 'G26', '1021', '1202'],
    sprite: '⚙️'
  },
  {
    id: 'sennott',
    name: 'Sennott Square',
    position: [40.4416, -79.9542],
    type: 'academic',
    description: 'Modern building housing the School of Computing and Information and the College of Business Administration. https://www.tour.pitt.edu/tour/sennott-square',
    departments: ['Computer Science', 'Information Science', 'Business', 'Psychology'],
    classrooms: ['2400', '5129', '5317', '5505', '6105'],
    sprite: '💻'
  },
  {
    id: 'chevron',
    name: 'Chevron Science Center',
    position: [40.4453, -79.9573],
    type: 'academic',
    description: 'Home to the Chemistry department, featuring labs and the Bunsen Brewer cafe. https://www.tour.pitt.edu/tour/chevron-science-center',
    departments: ['Chemistry'],
    classrooms: ['150', '152', '130', 'Lab 201'],
    sprite: '🧪'
  },
  {
    id: 'thackeray',
    name: 'Thackeray Hall',
    position: [40.4426, -79.9582],
    type: 'academic',
    description: 'Houses the Math department and key student services like registration and financial aid. https://www.tour.pitt.edu/tour/thackeray-hall',
    departments: ['Mathematics', 'Statistics', 'Financial Aid', 'Registrar'],
    classrooms: ['100', '401', '704'],
    sprite: '🔢'
  },
  {
    id: 'langley',
    name: 'Langley Hall',
    position: [40.4451, -79.9555],
    type: 'academic',
    description: 'Part of the Clapp/Langley/Crawford complex, dedicated to biological sciences. https://www.tour.pitt.edu/tour/clapp-langley-and-crawford-halls',
    departments: ['Biological Sciences', 'Neuroscience'],
    classrooms: ['A219', 'A221', '224'],
    sprite: '🧬'
  },
  {
    id: 'clapp',
    name: 'Clapp Hall',
    position: [40.4448, -79.9553],
    type: 'academic',
    description: 'Features a large lecture hall and biology labs. https://www.tour.pitt.edu/tour/clapp-langley-and-crawford-halls',
    departments: ['Biological Sciences'],
    classrooms: ['L9', 'L10'],
    sprite: '🔬'
  },
  {
    id: 'crawford',
    name: 'Crawford Hall',
    position: [40.4449, -79.9560],
    type: 'academic',
    description: 'Connects Langley and Clapp halls, housing neuroscience research. https://www.tour.pitt.edu/tour/clapp-langley-and-crawford-halls',
    departments: ['Neuroscience', 'Biological Sciences'],
    classrooms: ['169'],
    sprite: '🧠'
  },
  {
    id: 'old_engineering',
    name: 'Old Engineering Hall',
    position: [40.4458, -79.9558],
    type: 'academic',
    description: 'Historic building now used for various academic purposes. https://calendar.pitt.edu/old_engineering_hall',
    departments: ['Geology', 'Planetary Science'],
    classrooms: ['301', '302'],
    sprite: '🪨'
  },
  
  // --- Humanities & Social Sciences ---
  {
    id: 'wesw',
    name: 'Wesley W. Posvar Hall',
    position: [40.4407, -79.9538],
    type: 'academic',
    description: 'The largest academic building on campus, formerly built on the site of Forbes Field. https://www.tour.pitt.edu/tour/wesley-w-posvar-hall',
    departments: ['Economics', 'Political Science', 'Sociology', 'Education', 'GSPIA'],
    classrooms: ['1500', '1700', '2600', '3911', '5604'],
    sprite: '🏢'
  },
  {
    id: 'lawrence',
    name: 'David Lawrence Hall',
    position: [40.4437, -79.9560],
    type: 'academic',
    description: 'Contains large lecture halls often used for introductory courses. https://www.tour.pitt.edu/tour/david-lawrence-hall',
    departments: ['General Education'],
    classrooms: ['120', '121', '104'],
    sprite: '🗣️'
  },
  {
    id: 'frick',
    name: 'Frick Fine Arts',
    position: [40.4411, -79.9515],
    type: 'academic',
    description: 'Renaissance-style building housing the art gallery, library, and art history department. https://www.tour.pitt.edu/tour/frick-fine-arts-building',
    departments: ['History of Art & Architecture', 'Studio Arts'],
    classrooms: ['125', '202', 'Auditorium'],
    sprite: '🎨'
  },
  {
    id: 'music',
    name: 'Music Building',
    position: [40.4450, -79.9525],
    type: 'academic',
    description: 'Historic stone building, formerly the first TV station (WQED). https://calendar.pitt.edu/music_building_483',
    departments: ['Music'],
    classrooms: ['123', '132'],
    sprite: '🎵'
  },
  {
    id: 'bellefield',
    name: 'Bellefield Hall',
    position: [40.4448, -79.9519],
    type: 'academic',
    description: 'Contains a pool, gym, auditorium, and classrooms. https://www.tour.pitt.edu/tour/bellefield-hall',
    departments: ['Social Work', 'Africana Studies'],
    classrooms: ['314', 'Auditorium'],
    sprite: '🏊'
  },

  // --- Professional Schools ---
  {
    id: 'barco',
    name: 'Barco Law Building',
    position: [40.4418, -79.9563],
    type: 'academic',
    description: 'Home to the School of Law and the Barco Law Library. https://www.tour.pitt.edu/tour/barco-law-building',
    departments: ['Law'],
    classrooms: ['Teplitz Moot Court', '108'],
    sprite: '⚖️'
  },
  {
    id: 'is_building',
    name: 'Information Sciences Building',
    position: [40.4468, -79.9514],
    type: 'academic',
    description: 'Located on N Bellefield, part of the SCI. https://www.tour.pitt.edu/tour/information-sciences-building',
    departments: ['Information Culture', 'Data Stewardship'],
    classrooms: ['305', '406'],
    sprite: '💾'
  },
  {
    id: 'mervis',
    name: 'Mervis Hall',
    position: [40.4412, -79.9525],
    type: 'academic',
    description: 'Home to the Katz Graduate School of Business. https://www.tour.pitt.edu/tour/mervis-hall',
    departments: ['Business (Graduate)'],
    classrooms: ['118', 'B60'],
    sprite: '💼'
  },

  // --- Medical & Health ---
  {
    id: 'scaife',
    name: 'Scaife Hall',
    position: [40.4431, -79.9613],
    type: 'medical',
    description: 'Primary facility for the School of Medicine and Falk Library. https://www.tour.pitt.edu/tour/alan-magee-scaife-hall',
    departments: ['Medicine'],
    classrooms: ['Lecture Room 1', 'Lecture Room 2'],
    sprite: '🩺'
  },
  {
    id: 'victoria',
    name: 'Victoria Building',
    position: [40.4425, -79.9602],
    type: 'medical',
    description: 'Home to the School of Nursing. https://www.tour.pitt.edu/tour/victoria-hall',
    departments: ['Nursing'],
    classrooms: ['115', '224'],
    sprite: '🏥'
  },
  {
    id: 'salk',
    name: 'Salk Hall',
    position: [40.4436, -79.9608],
    type: 'medical',
    description: 'Where Jonas Salk developed the polio vaccine. Houses Pharmacy and Dental Medicine. https://www.tour.pitt.edu/tour/salk-hall',
    departments: ['Pharmacy', 'Dental Medicine'],
    classrooms: ['402', '502'],
    sprite: '🦷'
  },

  // --- Housing & Residential ---
  {
    id: 'towers',
    name: 'Litchfield Towers',
    position: [40.4423, -79.9566],
    type: 'residential',
    description: 'Three cylindrical towers (A, B, C) housing thousands of first-year students and The Eatery. https://www.tour.pitt.edu/tour/litchfield-towers',
    departments: ['Housing', 'Dining'],
    classrooms: [],
    sprite: '🏙️'
  },
  {
    id: 'nordenberg',
    name: 'Nordenberg Hall',
    position: [40.4432, -79.9563],
    type: 'residential',
    description: 'Modern freshman housing and home to the Student Health Service and Panther Central. https://www.tour.pitt.edu/tour/mark-nordenberg-hall',
    departments: ['Housing', 'Student Health', 'Panther Central'],
    classrooms: [],
    sprite: '🛌'
  },
  {
    id: 'sutherland',
    name: 'Sutherland Hall',
    position: [40.4453, -79.9642],
    type: 'residential',
    description: 'Upper campus dormitory near the Pete, housing the Perch dining hall. https://www.tour.pitt.edu/tour/sutherland-hall',
    departments: ['Housing', 'Dining'],
    classrooms: [],
    sprite: '🏰'
  },
  {
    id: 'holland',
    name: 'Holland Hall',
    position: [40.4430, -79.9550],
    type: 'residential',
    description: 'Historic residence hall located in the Schenley Quad. https://www.pc.pitt.edu/housing/university-owned-housing/holland-hall',
    departments: ['Housing'],
    classrooms: [],
    sprite: '🏠'
  },

  // --- Athletics & Recreation ---
  {
    id: 'petersen',
    name: 'Petersen Events Center',
    position: [40.4461, -79.9612],
    type: 'athletics',
    description: 'The "Pete" - home to Pitt Basketball, the Zoo student section, and Baierl Rec Center. https://www.tour.pitt.edu/tour/petersen-events-center',
    departments: ['Athletics', 'Recreation'],
    classrooms: [],
    sprite: '🏀'
  },
  {
    id: 'trees',
    name: 'Trees Hall',
    position: [40.4438, -79.9631],
    type: 'athletics',
    description: 'Houses the Olympic-sized swimming pool, basketball courts, and rock wall. https://www.tour.pitt.edu/tour/trees-hall-fitness-center',
    departments: ['Athletics', 'Recreation'],
    classrooms: [],
    sprite: '🧗'
  },
  {
    id: 'fitzgerald',
    name: 'Fitzgerald Field House',
    position: [40.4447, -79.9625],
    type: 'athletics',
    description: 'Historic venue for volleyball, gymnastics, and wrestling. https://pittsburghpanthers.com/facilities/fitzgerald-field-house/17',
    departments: ['Athletics'],
    classrooms: [],
    sprite: '🏐'
  },
  {
    id: 'cost',
    name: 'Cost Sports Center',
    position: [40.4442, -79.9645],
    type: 'athletics',
    description: 'Indoor practice facility for football and other field sports. https://www.tour.pitt.edu/tour/cost-sports-center',
    departments: ['Athletics'],
    classrooms: [],
    sprite: '🏈'
  },

  // --- Administration & Other ---
  {
    id: 'alumni',
    name: 'Alumni Hall',
    position: [40.4455, -79.9538],
    type: 'admin',
    description: 'Formerly the Masonic Temple, now houses Admissions, Alumni Relations, and a large auditorium. https://www.tour.pitt.edu/tour/alumni-hall',
    departments: ['Admissions', 'Alumni Relations'],
    classrooms: ['Connolly Ballroom', 'Auditorium'],
    sprite: '🤝'
  },
  {
    id: 'ohara',
    name: 'O\'Hara Student Center',
    position: [40.4456, -79.9567],
    type: 'student_center',
    description: 'Meeting space for student organizations and the Writing Center. https://www.tour.pitt.edu/tour/o-hara-student-center',
    departments: ['Writing Center', 'Math Assistance Center'],
    classrooms: ['Dining Room', 'Ballroom'],
    sprite: '🖊️'
  }
];

// Events data（cant find open api for https://calendar.pitt.edu）
export const events = [
  {
    id: 1,
    name: 'Make the Most of Your Winter Break (SCI)',
    building_id: 'sennott',
    location: 'Sennott Square / Online',
    type: 'workshop',
    icon: '❄️',
    description: 'Workshop for SCI students on how to use winter break productively for side projects and skill building.',
    date: '2025-12-12',
    time: '2:00 PM - 2:50 PM',
    isActive: true
  },
  {
    id: 2,
    name: 'Fall Term Ends',
    building_id: 'cathedral',
    location: 'All Campuses',
    type: 'social',
    icon: '🏁',
    description: 'Official end of the Fall 2025 term. Degrees awarded for Fall graduates.',
    date: '2025-12-13',
    time: '11:59 PM - 11:59 PM',
    isActive: true
  },
  {
    id: 3,
    name: 'Winter Commencement 2025',
    building_id: 'petersen',
    location: 'Petersen Events Center',
    type: 'social',
    icon: '🎓',
    description: 'University-wide Winter Commencement ceremony celebrating the Class of 2025. Tickets required for guests.',
    date: '2025-12-14',
    time: '2:00 PM - 5:00 PM',
    isActive: true
  },
  {
    id: 4,
    name: 'MLK Jr. Day (University Closed)',
    building_id: 'wpu',
    location: 'William Pitt Union',
    type: 'support',
    icon: '🕊️',
    description: 'Observance of Dr. Martin Luther King Jr.\'s Birthday. No classes; University offices closed.',
    date: '2026-01-19',
    time: '10:00 AM - 3:00 PM',
    isActive: true
  },
  {
    id: 5,
    name: '2025 Christmas Day at Pitt Gift Drive',
    building_id: 'cathedral',
    location: 'cathedral of Learning - 1723',
    type: 'social',
    icon: '🎁',
    description: 'Join us in spreading holiday cheer! Participate in the Christmas Day at Pitt Gift Drive by donating new, unwrapped gifts for children in need. Drop-off location: Cathedral of Learning, Room 1723.',
    date: '2025-12-11',
    time: '9:00 AM - 5:00 PM',
    isActive: true
  },
  {
    id: 6,
    name: 'Earth & Ether: The Art of Lucille and Virgil Cantini',
    building_id: 'frick',
    location: 'frick fine arts - gallery',
    type: 'art',
    icon: '🎨',
    description: 'Explore the captivating works of Lucille and Virgil Cantini in this special exhibition at the Frick Fine Arts Gallery. Discover how their art reflects themes of nature, humanity, and transformation through various mediums including sculpture, painting, and mixed media.',
    date: '2025-12-12',
    time: '12:00 PM - 4:00 PM',
    isActive: true
  },
  {
    id: 7,
    name: 'Fall 2025 Russian Tutoring in the Global Hub',
    building_id: 'wesw',
    location: 'Wesley W. Posvar Hall - Global Hub',
    type: 'social',
    icon: '🗣️',
    description: 'Looking to improve your Russian language skills? Join our Fall 2025 Russian Tutoring sessions held in the Global Hub. Open to all skill levels, these sessions provide personalized assistance to help you excel in your studies.',
    date: '2025-12-10',
    time: '1:00 PM -3:00 PM',
    isActive: true
  },
  {
    id: 8,
    name: 'School of Nursing: Tour & BSN Info Session',
    building_id: 'victoria',
    location: 'Victoria Building - Room 123',
    type: 'career',
    icon: '🏥',
    description: 'Visit the School of Nursing for an in-person presentation and tour of the Victoria Building. Ask any questions during the Q&A following the tour of the facilities.',
    date: '2025-12-12',
    time: '1:15 PM - 2:15 PM',
    isActive: true
  },
  {
    id: 9,
    name: 'Winter 2025 SCI Graduate & Undergraduate Recognition Ceremony',
    building_id: 'lawrence',
    location: 'david lawrence hall ',
    type: 'academic',
    icon: '🎉',
    description: 'This ceremony celebrates SCIs 2025 Summer and Fall graduates. Graduates may check in starting at 12:30 p.m. A reception with light refreshments will begin at 1:00 p.m. and the ceremony will follow at 2:00 p.m. Guest tickets are not required' ,
    date: '2025-12-13',
    time: '1:00 PM - 3:00 PM',
    isActive: true
  },
  {
    id: 10,
    name: 'Department of Biological Sciences - Fall Seminar Series',
    building_id: 'langley',
    location: 'Langley Hall - Room A221',
    type: 'career',
    icon: '🎓',
    description: 'Join us for the Department of Biological Sciences Fall Seminar Series featuring guest speakers from various research fields. This week\'s seminar will cover recent advancements in genetic research and its applications.',
    date: '2025-12-15',
    time: '11:00 AM - 12:00 PM',
    isActive: true
  },
  {
    id: 11,
    name: 'In-Person Open House: Osher Lifelong Learning Institute at Pitt',
    building_id: 'alumni',
    location: 'Alumni Hall - 500',
    type: 'social',
    icon: '🎓',
    description: 'Discover the Osher Lifelong Learning Institute at Pitt! Join us for an in-person open house at Alumni Hall to learn about our diverse course offerings, meet instructors, and explore membership benefits. Light refreshments will be served.',
    date: '2025-12-14',
    time: '1:30 PM - 2:30 PM',
    isActive: true
  },
  { id: 12,
    name: '2025 Christmas at pitt day',
    building_id: 'towers',
    location: 'Litchfield Towers - Eatery',
    type: 'social',
    icon: '🎄',
    description: 'Celebrate the holiday season at Litchfield Towers! Join us for festive activities, seasonal treats, and a joyful atmosphere at The Eatery. All students are welcome to partake in the holiday cheer!',
    date: '2025-12-25',
    time: '10:30 AM - 2:30 PM',
    isActive: true
  },
  { id: 13,
    name: 'Ecology & Evolution Noon Seminar Series',
    building_id: 'langley',
    location: 'Langley Hall - Room A219B',
    type: 'academic',
    icon: '🌿',
    description: 'Join us for the Ecology & Evolution Noon Seminar Series featuring Dr. Jane Smith from the University of California, Berkeley. Dr. Smith will present her latest research on climate change impacts on biodiversity.',
    date: '2026-1-14',
    time: '12:00 PM - 1:00 PM',
    isActive: true
  },
  {
    id: 14,
    name: 'Spring Recess Begins',
    building_id: 'cathedral',
    location: 'All Campuses',
    type: 'vacation',
    icon: '✈️',
    description: 'No classes for students. University offices remain open. Enjoy your Spring Break!',
    date: '2026-03-08',
    time: 'All Day',
    isActive: true
  },
  {
    id: 15,
    name: 'Spring Term Classes Begin',
    building_id: 'cathedral',
    location: 'All Campuses',
    type: 'academic',
    icon: '📚',
    description: 'Official start of the Spring 2026 semester for all undergraduate schools.',
    date: '2026-01-12',
    time: '8:00 AM - 6:00 PM',
    isActive: true
  },
  {
    id: 16,
    name: 'Residence Halls Close',
    building_id: 'towers',
    location: 'All Residence Halls',
    type: 'support',
    icon: '🏠',
    description: 'All residence halls close for Winter Recess. Students must vacate unless approved for extended stay.',
    date: '2025-12-14',
    time: '12:00 PM - 1:00 PM',
    isActive: true
  }
];

// Helper function to get events by building
export const getEventsByBuilding = (buildingId) => {
  return events.filter(event => event.building_id === buildingId && event.isActive);
};
