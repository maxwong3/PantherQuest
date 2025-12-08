// add campus buildings data here

export const buildings = [
  // --- Major Academic & Landmarks ---
  {
    id: 'cathedral',
    name: 'Cathedral of Learning',
    position: [40.4443, -79.9533],
    type: 'academic',
    description: 'Iconic 42-story Gothic Revival tower, home to Nationality Rooms and various departments.',
    departments: ['History', 'English', 'Philosophy', 'Religious Studies', 'Honors College'],
    classrooms: ['G8', '113', '324', '332', 'G24'],
    sprite: '🏛️'
  },
  {
    id: 'hillman',
    name: 'Hillman Library',
    position: [40.4424, -79.9537],
    type: 'library',
    description: 'Main research library with extensive collections, study spaces, and the Cup & Chau cafe.',
    departments: ['Library Services', 'IT Help Desk'],
    classrooms: ['G-Ground', '1st Floor Study', '2nd Floor Quiet', '3rd Floor Archives'],
    sprite: '📚'
  },
  {
    id: 'wpu',
    name: 'William Pitt Union',
    position: [40.4437, -79.9545],
    type: 'student_center',
    description: 'The hub of student life, featuring dining, ballrooms, and student organization offices.',
    departments: ['Student Affairs', 'Pitt Program Council', 'Career Center'],
    classrooms: ['Assembly Room', 'Kurtzman Room', 'Ballroom'],
    sprite: '🎓'
  },
  
  // --- Science & Engineering ---
  {
    id: 'benedum',
    name: 'Benedum Hall',
    position: [40.4442, -79.9582],
    type: 'academic',
    description: 'The massive concrete home of the Swanson School of Engineering.',
    departments: ['Mechanical Engineering', 'Civil Engineering', 'Electrical Engineering', 'Bioengineering'],
    classrooms: ['157', '158', 'G26', '1021', '1202'],
    sprite: '⚙️'
  },
  {
    id: 'sennott',
    name: 'Sennott Square',
    position: [40.4416, -79.9564],
    type: 'academic',
    description: 'Modern building housing the School of Computing and Information and the College of Business Administration.',
    departments: ['Computer Science', 'Information Science', 'Business', 'Psychology'],
    classrooms: ['2400', '5129', '5317', '5505', '6105'],
    sprite: '💻'
  },
  {
    id: 'chevron',
    name: 'Chevron Science Center',
    position: [40.4462, -79.9572],
    type: 'academic',
    description: 'Home to the Chemistry department, featuring labs and the Bunsen Brewer cafe.',
    departments: ['Chemistry'],
    classrooms: ['150', '152', '130', 'Lab 201'],
    sprite: '🔬'
  },
  {
    id: 'thackeray',
    name: 'Thackeray Hall',
    position: [40.4442, -79.9575],
    type: 'academic',
    description: 'Houses the Math department and key student services like registration and financial aid.',
    departments: ['Mathematics', 'Statistics', 'Financial Aid', 'Registrar'],
    classrooms: ['100', '401', '704'],
    sprite: '🔢'
  },
  {
    id: 'langley',
    name: 'Langley Hall',
    position: [40.4466, -79.9542],
    type: 'academic',
    description: 'Part of the Clapp/Langley/Crawford complex, dedicated to biological sciences.',
    departments: ['Biological Sciences', 'Neuroscience'],
    classrooms: ['A219', 'A221', '224'],
    sprite: '🔬'
  },
  {
    id: 'clapp',
    name: 'Clapp Hall',
    position: [40.4462, -79.9530],
    type: 'academic',
    description: 'Features a large lecture hall and biology labs.',
    departments: ['Biological Sciences'],
    classrooms: ['L9', 'L10'],
    sprite: '🔬'
  },
  {
    id: 'crawford',
    name: 'Crawford Hall',
    position: [40.4468, -79.9544],
    type: 'academic',
    description: 'Connects Langley and Clapp halls, housing neuroscience research.',
    departments: ['Neuroscience', 'Biological Sciences'],
    classrooms: ['169'],
    sprite: '🔬'
  },
  {
    id: 'old_engineering',
    name: 'Old Engineering Hall',
    position: [40.4451, -79.9579],
    type: 'academic',
    description: 'Historic building now used for various academic purposes.',
    departments: ['Geology', 'Planetary Science'],
    classrooms: ['301', '302'],
    sprite: '⚙️'
  },
  
  // --- Humanities & Social Sciences ---
  {
    id: 'wesw',
    name: 'Wesley W. Posvar Hall',
    position: [40.4415, -79.9546],
    type: 'academic',
    description: 'The largest academic building on campus, formerly built on the site of Forbes Field.',
    departments: ['Economics', 'Political Science', 'Sociology', 'Education', 'GSPIA'],
    classrooms: ['1500', '1700', '2600', '3911', '5604'],
    sprite: '🏢'
  },
  {
    id: 'lawrence',
    name: 'David Lawrence Hall',
    position: [40.4424, -79.9553],
    type: 'academic',
    description: 'Contains large lecture halls often used for introductory courses.',
    departments: ['General Education'],
    classrooms: ['120', '121', '104'],
    sprite: '🗣️'
  },
  {
    id: 'frick',
    name: 'Frick Fine Arts',
    position: [40.4418, -79.9509],
    type: 'academic',
    description: 'Renaissance-style building housing the art gallery, library, and art history department.',
    departments: ['History of Art & Architecture', 'Studio Arts'],
    classrooms: ['125', '202', 'Auditorium'],
    sprite: '🎨'
  },
  {
    id: 'music',
    name: 'Music Building',
    position: [40.4467, -79.9522],
    type: 'academic',
    description: 'Historic stone building, formerly the first TV station (WQED).',
    departments: ['Music'],
    classrooms: ['123', '132'],
    sprite: '🎵'
  },
  {
    id: 'bellefield',
    name: 'Bellefield Hall',
    position: [40.4454, -79.9509],
    type: 'academic',
    description: 'Contains a pool, gym, auditorium, and classrooms.',
    departments: ['Social Work', 'Africana Studies'],
    classrooms: ['314', 'Auditorium'],
    sprite: '🏊'
  },

  // --- Professional Schools ---
  {
    id: 'barco',
    name: 'Barco Law Building',
    position: [40.4423, -79.9555],
    type: 'academic',
    description: 'Home to the School of Law and the Barco Law Library.',
    departments: ['Law'],
    classrooms: ['Teplitz Moot Court', '108'],
    sprite: '⚖️'
  },
  {
    id: 'is_building',
    name: 'Information Sciences Building',
    position: [40.4474, -79.9527],
    type: 'academic',
    description: 'Located on N Bellefield, part of the SCI.',
    departments: ['Information Culture', 'Data Stewardship'],
    classrooms: ['305', '406'],
    sprite: '💻'
  },
  {
    id: 'mervis',
    name: 'Mervis Hall',
    position: [40.4408, -79.9533],
    type: 'academic',
    description: 'Home to the Katz Graduate School of Business.',
    departments: ['Business (Graduate)'],
    classrooms: ['118', 'B60'],
    sprite: '💼'
  },

  // --- Medical & Health ---
  {
    id: 'scaife',
    name: 'Scaife Hall',
    position: [40.4427, -79.9619],
    type: 'medical',
    description: 'Primary facility for the School of Medicine and Falk Library.',
    departments: ['Medicine'],
    classrooms: ['Lecture Room 1', 'Lecture Room 2'],
    sprite: '🩺'
  },
  {
    id: 'victoria',
    name: 'Victoria Building',
    position: [40.4416, -79.9607],
    type: 'medical',
    description: 'Home to the School of Nursing.',
    departments: ['Nursing'],
    classrooms: ['115', '224'],
    sprite: '🏥'
  },
  {
    id: 'salk',
    name: 'Salk Hall',
    position: [40.4427, -79.9628],
    type: 'medical',
    description: 'Where Jonas Salk developed the polio vaccine. Houses Pharmacy and Dental Medicine.',
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
    description: 'Three cylindrical towers (A, B, C) housing thousands of first-year students and The Eatery.',
    departments: ['Housing', 'Dining'],
    classrooms: [],
    sprite: '🏠'
  },
  {
    id: 'nordenberg',
    name: 'Nordenberg Hall',
    position: [40.4427, -79.9566],
    type: 'residential',
    description: 'Modern freshman housing and home to the Student Health Service and Panther Central.',
    departments: ['Housing', 'Student Health', 'Panther Central'],
    classrooms: [],
    sprite: '🏠'
  },
  {
    id: 'sutherland',
    name: 'Sutherland Hall',
    position: [40.4459, -79.9627],
    type: 'residential',
    description: 'Upper campus dormitory near the Pete, housing the Perch dining hall.',
    departments: ['Housing', 'Dining'],
    classrooms: [],
    sprite: '🏠'
  },
  {
    id: 'holland',
    name: 'Holland Hall',
    position: [40.4432, -79.9550],
    type: 'residential',
    description: 'Historic residence hall located in the Schenley Quad.',
    departments: ['Housing'],
    classrooms: [],
    sprite: '🏠'
  },

  // --- Athletics & Recreation ---
  {
    id: 'petersen',
    name: 'Petersen Events Center',
    position: [40.4440, -79.9624],
    type: 'athletics',
    description: 'The "Pete" - home to Pitt Basketball, the Zoo student section, and Baierl Rec Center.',
    departments: ['Athletics', 'Recreation'],
    classrooms: [],
    sprite: '🏀'
  },
  {
    id: 'trees',
    name: 'Trees Hall',
    position: [40.4438, -79.9650],
    type: 'athletics',
    description: 'Houses the Olympic-sized swimming pool, basketball courts, and rock wall.',
    departments: ['Athletics', 'Recreation'],
    classrooms: [],
    sprite: '🧗'
  },
  {
    id: 'fitzgerald',
    name: 'Fitzgerald Field House',
    position: [40.4436, -79.9643],
    type: 'athletics',
    description: 'Historic venue for volleyball, gymnastics, and wrestling.',
    departments: ['Athletics'],
    classrooms: [],
    sprite: '🏐'
  },
  {
    id: 'cost',
    name: 'Cost Sports Center',
    position: [40.4458, -79.9651],
    type: 'athletics',
    description: 'Indoor practice facility for football and other field sports.',
    departments: ['Athletics'],
    classrooms: [],
    sprite: '🏈'
  },

  // --- Administration & Other ---
  {
    id: 'alumni',
    name: 'Alumni Hall',
    position: [40.4454, -79.9540],
    type: 'admin',
    description: 'Formerly the Masonic Temple, now houses Admissions, Alumni Relations, and a large auditorium.',
    departments: ['Admissions', 'Alumni Relations'],
    classrooms: ['Connolly Ballroom', 'Auditorium'],
    sprite: '🤝'
  },
  {
    id: 'ohara',
    name: 'O\'Hara Student Center',
    position: [40.4449, -79.9573],
    type: 'student_center',
    description: 'Meeting space for student organizations and the Writing Center.',
    departments: ['Writing Center', 'Math Assistance Center'],
    classrooms: ['Dining Room', 'Ballroom'],
    sprite: '🖊️'
  }
];

// Events data
export const events = [
  {
    id: 1,
    name: 'Engineering Career Fair',
    building_id: 'benedum',
    location: 'Benedum Hall - Room 157',
    type: 'career',
    icon: '💼',
    description: 'Meet with top engineering firms and explore internship opportunities. Companies from tech, manufacturing, and energy sectors will be recruiting.',
    date: '2025-02-15',
    time: '10:00 AM - 4:00 PM',
    isActive: true
  },
  {
    id: 2,
    name: 'Library Research Workshop',
    building_id: 'hillman',
    location: 'Hillman Library - 1st Floor',
    type: 'workshop',
    icon: '📖',
    description: 'Learn advanced research techniques and database navigation. Perfect for students working on major papers or thesis projects.',
    date: '2025-02-16',
    time: '2:00 PM - 3:30 PM',
    isActive: true
  },
  {
    id: 3,
    name: 'Campus Architecture Tour',
    building_id: 'cathedral',
    location: 'Cathedral of Learning - Commons Room',
    type: 'tour',
    icon: '🏛️',
    description: 'Explore the history and architecture of the Cathedral of Learning. Visit the Nationality Rooms and learn about Gothic Revival design.',
    date: '2025-02-17',
    time: '1:00 PM - 2:00 PM',
    isActive: true
  },
  {
    id: 4,
    name: 'Chemistry Lab Safety Training',
    building_id: 'chevron',
    location: 'Chevron Science Center - Lab 201',
    type: 'workshop',
    icon: '🔬',
    description: 'Mandatory safety training for students using chemistry labs. Learn proper handling of chemicals and emergency procedures.',
    date: '2025-02-18',
    time: '9:00 AM - 11:00 AM',
    isActive: true
  },
  {
    id: 5,
    name: 'Student Wellness Fair',
    building_id: 'wpu',
    location: 'William Pitt Union - Ballroom',
    type: 'support',
    icon: '🏥',
    description: 'Learn about campus health and wellness resources. Free health screenings, mental health resources, and wellness tips.',
    date: '2025-02-19',
    time: '11:00 AM - 3:00 PM',
    isActive: true
  },
  {
    id: 6,
    name: 'Tech Startup Pitch Competition',
    building_id: 'sennott',
    location: 'Sennott Square - 5129',
    type: 'career',
    icon: '💡',
    description: 'Watch student entrepreneurs pitch their startup ideas to venture capitalists and industry experts. Network with innovators.',
    date: '2025-02-20',
    time: '6:00 PM - 9:00 PM',
    isActive: true
  },
  {
    id: 7,
    name: 'Basketball Game vs Duke',
    building_id: 'petersen',
    location: 'Petersen Events Center - Arena',
    type: 'social',
    icon: '🏀',
    description: 'Cheer on the Panthers against Duke! Join the Oakland Zoo student section for an unforgettable game day experience.',
    date: '2025-02-22',
    time: '7:00 PM - 10:00 PM',
    isActive: true
  },
  {
    id: 8,
    name: 'Pre-Law Information Session',
    building_id: 'barco',
    location: 'Barco Law Building - Teplitz Moot Court',
    type: 'career',
    icon: '⚖️',
    description: 'Interested in law school? Learn about the application process, LSAT preparation, and career paths in law.',
    date: '2025-02-23',
    time: '3:00 PM - 5:00 PM',
    isActive: true
  },
  {
    id: 9,
    name: 'Art Gallery Opening',
    building_id: 'frick',
    location: 'Frick Fine Arts - Gallery',
    type: 'social',
    icon: '🎨',
    description: 'Opening reception for the new student art exhibition. Meet the artists, view their work, and enjoy refreshments.',
    date: '2025-02-24',
    time: '5:00 PM - 7:00 PM',
    isActive: true
  },
  {
    id: 10,
    name: 'Graduate School Fair',
    building_id: 'wesw',
    location: 'Posvar Hall - Assembly Room',
    type: 'career',
    icon: '🎓',
    description: 'Explore graduate programs from universities across the country. Learn about funding opportunities and application tips.',
    date: '2025-02-25',
    time: '12:00 PM - 4:00 PM',
    isActive: true
  }
];

// Helper function to get events by building
export const getEventsByBuilding = (buildingId) => {
  return events.filter(event => event.building_id === buildingId && event.isActive);
};
