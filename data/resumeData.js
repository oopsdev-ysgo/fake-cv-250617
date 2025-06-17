export const resumeData = {
  name: "홍길동",
  profileImage: "https://via.placeholder.com/150", // 임시 프로필 이미지
  tagline: {
    kor: "성장을 추구하는 소프트웨어 엔지니어",
    eng: "A Software Engineer Pursuing Growth",
  },
  contact: {
    email: "gildong.hong@email.com",
    phone: "010-1234-5678",
    location: {
      kor: "대한민국 서울",
      eng: "Seoul, South Korea",
    },
  },
  links: {
    github: "https://github.com/example",
    linkedin: "https://linkedin.com/in/example",
    blog: "https://example.blog",
  },
  keywords: ["Backend", "Java", "Spring Boot", "MSA", "Database", "Cloud"],
  qualificationSummary: {
    kor: "정보처리기사 (2023)",
    eng: "Engineer Information Processing (2023)",
  },
  introduction: {
    intro: {
      kor: "안녕하세요. 7년간의 경험을 통해 안정적이고 확장 가능한 백엔드 시스템을 설계하고 개발해온 소프트웨어 엔지니어 홍길동입니다. 대용량 트래픽 처리와 MSA(Microservice Architecture) 환경에 대한 깊은 이해를 바탕으로 비즈니스 요구사항을 기술적 해결책으로 전환하는 데 강점이 있습니다. 새로운 기술을 학습하고 동료와 지식을 공유하며 함께 성장하는 것을 즐깁니다.",
      eng: "Hello, I am Gildong Hong, a software engineer with 7 years of experience in designing and developing stable and scalable backend systems. With a deep understanding of high-traffic processing and Microservice Architecture (MSA), I excel at translating business requirements into technical solutions. I enjoy learning new technologies and growing together with my colleagues by sharing knowledge.",
    },
    goal: {
      kor: "저의 장기적인 목표는 복잡한 도메인의 문제를 해결하는 기술 리더로 성장하는 것입니다. 단순히 코드를 작성하는 것을 넘어, 비즈니스의 성공에 기여하는 아키텍처를 설계하고, 개발 문화 개선에 기여하고 싶습니다. 특히 클라우드 네이티브 기술과 데이터 엔지니어링 분야의 전문성을 심화하여 데이터 기반의 의사결정을 지원하는 시스템을 구축하는 데 기여하고 싶습니다.",
      eng: "My long-term goal is to grow into a technical leader who solves problems in complex domains. Beyond simply writing code, I want to design architectures that contribute to business success and improve the development culture. I am particularly interested in deepening my expertise in cloud-native technologies and data engineering to contribute to building systems that support data-driven decision-making.",
    },
  },
  education: [
    {
      degree: { kor: "소프트웨어공학 석사", eng: "Master's in Software Engineering" },
      institution: { kor: "대한대학교 컴퓨터공학과", eng: "Daehan University, Dept. of Computer Science" },
      period: "2017.03 - 2019.02",
      description: { kor: "논문: 대규모 분산 시스템에서의 효율적인 데이터 처리 기법 연구", eng: "Thesis: A Study on Efficient Data Processing in Large-Scale Distributed Systems" },
    },
    {
      degree: { kor: "컴퓨터공학 학사", eng: "Bachelor's in Computer Science" },
      institution: { kor: "대한대학교 컴퓨터공학과", eng: "Daehan University, Dept. of Computer Science" },
      period: "2013.03 - 2017.02",
      description: { kor: "GPA: 4.1/4.5", eng: "GPA: 4.1/4.5" },
    },
  ],
  experience: [
    {
      position: { kor: "시니어 소프트웨어 엔지니어", eng: "Senior Software Engineer" },
      company: "빅테크 플랫폼",
      period: "2021.03 - 현재",
      tasks: [
        { kor: "주요 서비스 백엔드 API 서버 개발 및 운영 (Java, Spring Boot)", eng: "Developed and operated main service backend API server (Java, Spring Boot)" },
        { kor: "MSA 전환 프로젝트 리딩 및 공통 모듈 개발", eng: "Led MSA transition project and developed common modules" },
        { kor: "실시간 데이터 처리 파이프라인 구축 (Kafka, Flink)", eng: "Built real-time data processing pipeline (Kafka, Flink)" },
      ],
    },
    {
        position: { kor: "소프트웨어 엔지니어", eng: "Software Engineer" },
        company: "넥스트 커머스",
        period: "2019.03 - 2021.02",
        tasks: [
            { kor: "이커머스 플랫폼 주문/결제 시스템 개발", eng: "Developed e-commerce platform order/payment system" },
            { kor: "AWS 기반 인프라 구축 및 CI/CD 파이프라인 자동화", eng: "Built AWS-based infrastructure and automated CI/CD pipeline" },
            { kor: "RDBMS 성능 튜닝 및 쿼리 최적화", eng: "Tuned RDBMS performance and optimized queries" },
        ],
    },
    {
        position: { kor: "주니어 소프트웨어 엔지니어", eng: "Junior Software Engineer" },
        company: "스타트업 솔루션즈",
        period: "2017.01 - 2019.02",
        tasks: [
            { kor: "SaaS 솔루션 초기 모델 개발 참여", eng: "Participated in the initial model development of a SaaS solution" },
            { kor: "고객사 기술 지원 및 요구사항 분석", eng: "Provided technical support and analyzed requirements for client companies" },
        ],
    }
  ],
  projects: Array.from({ length: 8 }).map((_, i) => ({
    id: i + 1,
    title: { kor: `프로젝트 ${i + 1}`, eng: `Project ${i + 1}` },
    description: { kor: `이것은 ${i + 1}번째 프로젝트에 대한 상세 설명입니다. 이 프로젝트는...`, eng: `This is a detailed description for Project ${i+1}. This project involves...` },
    skills: ["Java", "Spring", `Skill ${i}`],
    period: "2023.01 - 2023.03",
    image: `https://via.placeholder.com/400x250?text=Project+${i + 1}`,
    link: `https://github.com/example/project-${i+1}`,
  })),
  skills: [
    {
      category: { kor: "언어", eng: "Languages" },
      list: [
        { name: "Java", level: 95 },
        { name: "Kotlin", level: 80 },
        { name: "Python", level: 75 },
        { name: "JavaScript", level: 70 },
      ],
    },
    {
      category: { kor: "백엔드", eng: "Backend" },
      list: [
        { name: "Spring Boot / WebFlux", level: 95 },
        { name: "JPA / Hibernate", level: 90 },
        { name: "Node.js", level: 60 },
      ],
    },
     {
      category: { kor: "데이터베이스 & 캐시", eng: "Database & Cache" },
      list: [
        { name: "MySQL / PostgreSQL", level: 90 },
        { name: "Redis", level: 85 },
        { name: "MongoDB", level: 70 },
      ],
    },
    {
      category: { kor: "클라우드 & DevOps", eng: "Cloud & DevOps" },
      list: [
        { name: "AWS (EC2, S3, RDS)", level: 85 },
        { name: "Docker / Kubernetes", level: 80 },
        { name: "Jenkins / Github Actions", level: 75 },
      ],
    },
  ],
  research: [
    {
      title: { kor: "대규모 분산 시스템에서의 효율적인 데이터 처리 기법 연구", eng: "A Study on Efficient Data Processing in Large-Scale Distributed Systems" },
      venue: { kor: "대한컴퓨터학회 학술대회", eng: "KCC (Korea Computer Congress)" },
      date: "2019.02",
      link: "http://sol-link.com/sample-paper-1",
    },
  ],
  awards: [
    {
      name: { kor: "정보처리기사", eng: "Engineer Information Processing" },
      issuer: { kor: "한국산업인력공단", eng: "HRD Korea" },
      date: "2023.05",
    },
    {
      name: { kor: "AWS Certified Solutions Architect – Associate", eng: "AWS Certified Solutions Architect – Associate" },
      issuer: "Amazon Web Services",
      date: "2022.08",
    },
  ],
  footerText: {
    kor: `ⓒ ${new Date().getFullYear()} 홍길동. All Rights Reserved.`,
    eng: `ⓒ ${new Date().getFullYear()} Gildong Hong. All Rights Reserved.`,
  }
};
