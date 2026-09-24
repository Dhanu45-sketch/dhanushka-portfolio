export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
  badge?: string;
  role?: string;
  images?: string[];
  codeSnippet?: {
    filename: string;
    language: string;
    code: string;
  };
  customerFeatures?: string[];
  handymanFeatures?: string[];
  architectureDiagram?: string[];
}

export interface SkillGroup {
  category: string;
  skills: {
    name: string;
    description?: string;
  }[];
}

export interface Achievement {
  title: string;
  organization: string;
  date?: string;
  description: string;
  badge?: string;
}

export interface Education {
  degree: string;
  institution: string;
  affiliation: string;
  location: string;
  level: string;
  period: string;
  description: string;
}

export const PORTFOLIO_DATA = {
  profile: {
    name: "Dhanushka Sachintha",
    shortName: "DS",
    role: "Software & Mobile Developer",
    status: "Computer Science Undergraduate (Level 5 / 2nd Year)",
    university: "University of Staffordshire",
    partnerInstitute: "APIIT Sri Lanka, Kandy",
    location: "Kandy, Sri Lanka",
    heroText: "Computer Science undergraduate focused on building practical software applications with Flutter, Android and modern development technologies.",
    aboutText: "I am a Computer Science undergraduate studying at the University of Staffordshire through APIIT Sri Lanka. My focus is on practical software engineering—translating real-world problems into clean, testable applications. I specialize in mobile application development using Flutter and Android SDK, complemented by backend integration with Firebase, SQL databases, and cloud fundamentals.",
    cvPath: "/General_CV_Dhanushka_Sachintha.pdf",
    githubUrl: "https://github.com/Dhanu45-sketch",
    avatarUrl: "/images/avatar.jpg",
    linkedinUrl: "https://www.linkedin.com/in/dhanushka-vasanthathilaka-404281321/",
    email: "dhanuska.sachintha.dev@gmail.com",
    currentlyLearning: [
      "Advanced Flutter State Management (Bloc / Riverpod)",
      "Clean Architecture & Design Patterns",
      "Jetpack Compose for Modern Android",
      "AWS Infrastructure as Code (CloudFormation)"
    ]
  },

  interests: [
    "Mobile Application Development",
    "Flutter & Cross-Platform",
    "Native Android Development",
    "Software Architecture",
    "Full-Stack Web Development",
    "Cloud & Backend Engineering"
  ],

  skillGroups: [
    {
      category: "Mobile Development",
      skills: [
        { name: "Flutter", description: "Cross-platform mobile frameworks" },
        { name: "Dart", description: "Primary Flutter language" },
        { name: "Kotlin", description: "Modern Android development" },
        { name: "Android SDK", description: "Native Android APIs & Jetpack UI" }
      ]
    },
    {
      category: "Programming Languages",
      skills: [
        { name: "Java", description: "Object-oriented core" },
        { name: "Python", description: "Scripting & algorithms" },
        { name: "C#", description: ".NET fundamentals" },
        { name: "JavaScript", description: "Web logic & DOM" },
        { name: "SQL", description: "Relational database queries" }
      ]
    },
    {
      category: "Backend & Cloud",
      skills: [
        { name: "Firebase", description: "BaaS ecosystem" },
        { name: "Cloud Firestore", description: "NoSQL document database" },
        { name: "Firebase Auth", description: "Secure user authentication" },
        { name: "Firebase Realtime DB", description: "Live synchronization" },
        { name: "AWS", description: "Cloud infrastructure" },
        { name: "CloudFormation", description: "Infrastructure as Code" }
      ]
    },
    {
      category: "Engineering & Practices",
      skills: [
        { name: "Git & GitHub", description: "Version control & collaboration" },
        { name: "Object-Oriented Programming", description: "SOLID principles & OOP" },
        { name: "Data Structures", description: "Algorithms & complexity" },
        { name: "Agile Development", description: "Scrum sprint workflow" },
        { name: "Software Testing", description: "Unit & UI testing" },
        { name: "Basic CI/CD", description: "Automation pipelines" }
      ]
    }
  ] as SkillGroup[],

  fixigoProject: {
    id: "fixigo",
    title: "Fixigo — Handyman Marketplace",
    tagline: "Connecting Sri Lankan households & small businesses with verified handymen.",
    description: "Fixigo is a Sri Lankan handyman marketplace application designed to connect customers with reliable handymen for household and small-business services in Kandy and surrounding areas.",
    version: "0.4.0 (Alpha)",
    technologies: ["Flutter", "Dart", "Firebase", "Cloud Firestore", "Google Maps SDK"],
    githubUrl: "https://github.com/Dhanu45-sketch/fixit-app",
    featured: true,
    badge: "Flagship Mobile App",
    role: "Flutter Developer & Database / UI Contributor (Team Project)",
    images: [
      "/images/Screenshot 2026-01-31 020546.png",
      "/images/Screenshot 2025-12-22 150213.png",
      "/images/Screenshot 2025-12-22 150540.png",
      "/images/Screenshot 2026-01-12 150759.png",
      "/images/Screenshot 2025-12-27 125059.png",
      "/images/Screenshot 2025-12-09 100611.png"
    ],
    codeSnippet: {
      filename: "lib/services/booking_service.dart",
      language: "dart",
      code: `// Fixigo Booking Service & Realtime Listener
class BookingService {
  final FirebaseFirestore _firestore = FirebaseFirestore.instance;

  // Stream active job requests assigned to a handyman
  Stream<List<Booking>> watchIncomingJobRequests(String handymanId) {
    return _firestore
        .collection('bookings')
        .where('status', isEqualTo: 'pending')
        .where('handymanId', isEqualTo: handymanId)
        .orderBy('timestamp', descending: true)
        .snapshots()
        .map((snapshot) => snapshot.docs
            .map((doc) => Booking.fromFirestore(doc.data(), doc.id))
            .toList());
  }

  // Update booking state with role verification
  Future<void> updateBookingStatus(String bookingId, String status) async {
    await _firestore.collection('bookings').doc(bookingId).update({
      'status': status,
      'updatedAt': FieldValue.serverTimestamp(),
    });
  }
}`
    },
    customerFeatures: [
      "Account creation and secure login workflow",
      "Service browsing across 8+ categories (Plumbing, Electrical, Carpentry, etc.)",
      "Real-time search functionality for handymen & services",
      "Detailed handyman profiles with community ratings & reviews",
      "Interactive booking interface with date/time selection",
      "Emergency service toggle for urgent assistance requests",
      "Customer profile & booking history management"
    ],
    handymanFeatures: [
      "Dedicated provider dashboard with job requests & earnings overview",
      "Online/offline availability toggle status",
      "Real-time job request feed with incoming customer requests",
      "Accept/decline incoming job offers with detailed job sheets",
      "Provider profile management & service specialization settings",
      "Qualifications document submission & verification workflow",
      "Emergency service participation mode"
    ],
    caseStudy: {
      overview: "In Sri Lanka, finding a trustworthy handyman for home or small business repairs heavily relies on word-of-mouth recommendations. This results in inconsistent quality, pricing opacity, and scheduling delays. Fixigo provides a structured digital marketplace bridging customers with verified local service providers through a seamless dual-sided mobile interface.",
      
      problem: [
        "Difficulty discovering verified, reliable handymen nearby.",
        "Lack of pricing transparency and service quality guarantee.",
        "Delays and miscommunication during booking and appointment scheduling.",
        "Limited visibility for handymen to market their skills digitally."
      ],
      
      solution: "Fixigo delivers a mobile-first dual platform (Customer + Handyman) built on Flutter and Firebase. Customers can browse localized service categories, request emergency repairs, and book handymen directly. Handymen receive instant job dispatch feeds, manage their availability, and maintain professional profiles with verified documentation.",

      myContribution: "As a primary team contributor to the mobile app development, I worked closely on the Flutter UI implementation, customer and handyman dashboard flows, Firestore data modeling, and authentication handling. I also participated in system testing, bug fixing, and team Git workflow management.",

      technicalArchitecture: [
        "Flutter Mobile Application (Client Layer)",
        "├── Firebase Authentication (JWT & Session Management)",
        "├── Cloud Firestore (NoSQL Document Store & Realtime Listeners)",
        "├── Firebase Storage (Profile Images & Documents)",
        "├── Google Maps SDK (Location & Service Area Geocoding)",
        "└── Supporting Services (Local Notification & State Management)"
      ],

      engineeringConsiderations: [
        "Role-Based Behavior: Strict separation of user roles (Customer vs Handyman) with dynamic dashboard routing.",
        "Firestore Data Modeling: Normalized schemas for Users, JobRequests, Bookings, and Reviews for fast querying.",
        "State & Access Control: Security rules ensuring handymen and customers only access permitted document fields.",
        "Location & Privacy: Geolocation handling designed to calculate proximity without exposing exact private addresses prior to booking approval.",
        "Separation of Concerns: Modular Flutter architecture isolating UI widgets, data models, and Firebase service layers."
      ],

      learnings: [
        "Building a multi-user mobile application with distinct operational workflows.",
        "Managing dynamic state and asynchronous data synchronization in Flutter.",
        "Designing scalable Firestore document structures and handling security rules.",
        "Collaborating in a team software project using Git branching and pull request reviews.",
        "Translating real-world Sri Lankan service industry needs into practical software features."
      ]
    }
  },

  otherProjects: [
    {
      id: "aws-cloud",
      title: "AWS Cloud Infrastructure & Automation",
      tagline: "Automated cloud architecture deployment using Infrastructure as Code (IaC).",
      description: "Production-ready AWS cloud infrastructure project utilizing CloudFormation templates to provision secure VPC networking, subnet isolation, EC2 instances, S3 storage, and IAM access controls.",
      technologies: ["AWS", "CloudFormation", "VPC", "EC2", "S3", "IAM", "Infrastructure as Code"],
      githubUrl: "https://github.com/Dhanu45-sketch",
      featured: true,
      badge: "Cloud Infrastructure",
      images: [
        "/images/Screenshot 2026-01-26 190956.png",
        "/images/Screenshot 2026-01-26 144950.png",
        "/images/Screenshot 2026-01-26 192132.png",
        "/images/Screenshot 2026-01-25 204401.png"
      ],
      codeSnippet: {
        filename: "infrastructure/cloudformation_vpc_stack.yaml",
        language: "yaml",
        code: `AWSTemplateFormatVersion: '2010-09-09'
Description: Production Cloud Architecture — Custom VPC, Multi-Subnet & Security Group Stack

Parameters:
  EnvironmentName:
    Type: String
    Default: Production

Resources:
  VPC:
    Type: AWS::EC2::VPC
    Properties:
      CidrBlock: 10.0.0.0/16
      EnableDnsSupport: true
      EnableDnsHostnames: true
      Tags:
        - Key: Name
          Value: !Sub \${EnvironmentName}-VPC

  PublicSubnet:
    Type: AWS::EC2::Subnet
    Properties:
      VpcId: !Ref VPC
      CidrBlock: 10.0.1.0/24
      MapPublicIpOnLaunch: true

  WebServerSecurityGroup:
    Type: AWS::EC2::SecurityGroup
    Properties:
      GroupDescription: Enable HTTP and SSH access
      VpcId: !Ref VPC
      SecurityGroupIngress:
        - IpProtocol: tcp
          FromPort: 80
          ToPort: 80
          CidrIp: 0.0.0.0/0
        - IpProtocol: tcp
          FromPort: 22
          ToPort: 22
          CidrIp: 0.0.0.0/0`
      }
    },
    {
      id: "aura",
      title: "Aura Music Player",
      tagline: "Sleek mobile music player application with cloud media streaming.",
      description: "A mobile music application built with Flutter showcasing custom UI playback controls, secure user authentication, and cloud-based media file handling.",
      technologies: ["Flutter", "Dart", "Firebase Auth", "Firebase Storage"],
      githubUrl: "https://github.com/Dhanu45-sketch/aura3",
      featured: false,
      badge: "Mobile App",
      images: [
        "/images/Screenshot 2025-12-26 210732.png",
        "/images/Screenshot 2026-01-03 181450.png",
        "/images/Screenshot 2026-01-03 181502.png"
      ],
      codeSnippet: {
        filename: "lib/controllers/audio_player_controller.dart",
        language: "dart",
        code: `// Aura Flutter Audio Player Stream Handler
class AudioPlayerController extends GetxController {
  final AudioPlayer _audioPlayer = AudioPlayer();
  final RxBool isPlaying = false.obs;
  final Rx<Duration> duration = Duration.zero.obs;

  Future<void> loadCloudTrack(String streamUrl) async {
    try {
      await _audioPlayer.setUrl(streamUrl);
      _audioPlayer.playerStateStream.listen((state) {
        isPlaying.value = state.playing;
      });
      _audioPlayer.durationStream.listen((newDuration) {
        duration.value = newDuration ?? Duration.zero;
      });
    } catch (e) {
      log('Audio playback error: $e');
    }
  }
}`
      }
    },
    {
      id: "elemental-asmr",
      title: "ElementalASMR",
      tagline: "Native Android relaxation and ambient sound UI application.",
      description: "An Android native user interface application built with Kotlin, demonstrating clean Jetpack UI components and modern Android UI architecture.",
      technologies: ["Kotlin", "Android SDK", "Jetpack UI"],
      githubUrl: "https://github.com/Dhanu45-sketch/ElementalASMR",
      featured: false,
      badge: "Android Native"
    },
    {
      id: "resq",
      title: "ResQ — Disaster Management",
      tagline: "Hackathon PWA project for offline-capable emergency response.",
      description: "A disaster management web application created during an inter-university hackathon, featuring offline-capable workflows and structured database reporting for emergency scenarios.",
      technologies: ["Web / PWA", "JavaScript", "SQL Database", "Offline Storage"],
      githubUrl: "https://github.com/Dhanu45-sketch/ResQ-DisasterManagement_App",
      featured: false,
      badge: "Hackathon Project"
    },
    {
      id: "assignment-wdos",
      title: "WDOS Web Development Project",
      tagline: "First-year web development & UI/UX showcase.",
      description: "A foundational web project developed during first-year studies, highlighting core HTML, CSS, JavaScript, and responsive UI design principles.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Responsive UI"],
      githubUrl: "https://github.com/Dhanu45-sketch/Assignment_WDOS.github.io",
      featured: false,
      badge: "Academic Project"
    },
    {
      id: "airguard",
      title: "AirGuard — Localized Air Quality System",
      tagline: "IoT air quality recording and prediction system with machine learning.",
      description: "A localized air quality monitoring and prediction system. Built the hardware component using ESP32, particle sensors, and humidity sensors. The system records environmental data and feeds it into a machine learning model for localized air quality predictions.",
      technologies: ["ESP32", "IoT", "Particle Sensor", "Humidity Sensor", "Machine Learning", "ThingSpeak"],
      githubUrl: "https://github.com/Dhanu45-sketch",
      featured: false,
      badge: "IoT / Hardware",
      images: [
        "/images/airguard_device.jpg",
        "/images/airguard_internal.png",
        "/images/airguard_thingspeak.jpg",
        "/images/airguard_readings.jpg"
      ]
    },
    {
      id: "ac-controller",
      title: "Smart AC Controller",
      tagline: "Solo IoT project for intelligent air conditioning control.",
      description: "A solo IoT project that enables smart control of air conditioning units using microcontroller hardware. Designed and built the complete hardware and control logic independently.",
      technologies: ["IoT", "ESP32", "Hardware", "Embedded Systems"],
      githubUrl: "https://github.com/Dhanu45-sketch",
      featured: false,
      badge: "IoT / Solo Project",
      images: [
        "/images/ac_controller_photo.jpg",
        "/images/ac_controller_project.jpg"
      ]
    },
    {
      id: "neptune-recyclers",
      title: "Neptune Recyclers — Perahara Garbage Tracker",
      tagline: "Mobile app for tracking garbage bag collection during the Kandy Perahara.",
      description: "Built a draft mobile UI for Neptune Recyclers in partnership with the Kandy Municipality Council. The app tracked garbage bags collected during the Perahara festival, where the team collecting the most bags won a prize. Contributed the initial UI design to pitch the product concept.",
      technologies: ["Flutter", "Dart", "Mobile UI"],
      githubUrl: "https://github.com/Dhanu45-sketch",
      featured: false,
      badge: "Community Project",
      role: "UI Developer (Draft / Pitch Phase)",
      images: [
        "/images/neptune_app.jpg",
        "/images/neptune_garbage.jpg",
        "/images/neptune_participation.jpg"
      ]
    }
  ] as Project[],

  achievements: [
    {
      title: "3rd Place Winner",
      organization: "Codeverse '25",
      description: "Awarded 3rd place in the Codeverse '25 inter-university team hackathon competition for software solution design and execution.",
      badge: "Hackathon Award"
    },
    {
      title: "Top 15 Finalist Teams",
      organization: "Hult Prize Nationals",
      description: "Recognized among the Top 15 teams at Hult Prize Nationals for pitching Fixigo as a social entrepreneurship and technology innovation project.",
      badge: "National Recognition"
    },
    {
      title: "Hackathon Competitor",
      organization: "24-Hour Inter-University Hackathon at APIIT Colombo",
      description: "Participated in an intensive 24-hour hackathon challenge building real-time software solutions under time constraints.",
      badge: "Inter-University"
    },
    {
      title: "Active Member & Contributor",
      organization: "APIIT Computer Society",
      description: "Engaged active member of the student computer society, participating in peer workshops, tech sessions, and student coding events.",
      badge: "Community"
    }
  ] as Achievement[],

  education: {
    degree: "BSc (Hons) Computer Science",
    institution: "University of Staffordshire",
    affiliation: "Studying through APIIT Sri Lanka, Kandy Campus",
    location: "Kandy, Sri Lanka",
    level: "Level 5 / Second Year Undergraduate",
    period: "2023 – Present",
    description: "Rigorous curriculum focused on software engineering principles, object-oriented programming, data structures & algorithms, web systems, database design, and mobile development techniques."
  } as Education
};
