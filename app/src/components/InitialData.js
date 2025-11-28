// need to add campus buildings data 
export const buildings = [
  {
    id: 'cathedral',
    name: 'Cathedral of Learning',
    position: [40.4443, -79.9533], // Approximate coordinates
    type: 'academic',
    description: 'Iconic 42-story Gothic Revival tower, home to Nationality Rooms and various departments',
    departments: ['History', 'English', 'Philosophy', 'Religious Studies'],
    classrooms: ['101', '230', '342', '501'],
    sprite: '🏛️'
  },
  {
    id: 'hillman',
    name: 'Hillman Library',
    position: [40.4424, -79.9537],
    type: 'library',
    description: 'Main research library with extensive collections and study spaces',
    departments: ['Library Services'],
    classrooms: [],
    sprite: '📚'
  },
  {
    id: 'benedum',
    name: 'Benedum Hall',
    position: [40.4435, -79.9579],
    type: 'academic',
    description: 'Engineering building housing multiple engineering departments',
    departments: ['Mechanical Engineering', 'Civil Engineering', 'Chemical Engineering'],
    classrooms: ['G26', '226', '321'],
    sprite: '⚙️'
  },
  {
    id: 'wesw',
    name: 'Wesley W. Posvar Hall',
    position: [40.4407, -79.9538],
    type: 'academic',
    description: 'Social sciences building',
    departments: ['Economics', 'Political Science', 'Public Administration'],
    classrooms: ['2600', '3911', '5604'],
    sprite: '🏢'
  },
  {
    id: 'thackeray',
    name: 'Thackeray Hall',
    position: [40.4426, -79.9582],
    type: 'academic',
    description: 'Mathematics and science building',
    departments: ['Mathematics', 'Statistics'],
    classrooms: ['100', '401', '704'],
    sprite: '🔢'
  },
  {
    id: 'sennott',
    name: 'Sennott Square',
    position: [40.4416, -79.9542],
    type: 'academic',
    description: 'Computer Science and Business School building',
    departments: ['Computer Science', 'Business'],
    classrooms: ['5129', '5317', '5505'],
    sprite: '💻'
  },
  {
    id: 'petersen',
    name: 'Petersen Events Center',
    position: [40.4461, -79.9612],
    type: 'athletics',
    description: 'Multi-purpose arena for basketball and events',
    departments: ['Athletics'],
    classrooms: [],
    sprite: '🏀'
  },
  {
    id: 'wpu',
    name: 'William Pitt Union',
    position: [40.4441, -79.9548],
    type: 'student_center',
    description: 'Student union with dining, activities, and meeting spaces',
    departments: ['Student Affairs'],
    classrooms: [],
    sprite: '🎓'
  }
];