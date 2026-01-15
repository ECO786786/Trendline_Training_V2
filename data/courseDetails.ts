export interface CurriculumItem {
  title: string;
  description: string;
}

export interface CourseDetail {
  id: number;
  slug: string;
  title: string;
  subTitle: string;
  level: string;
  duration: string;
  prices: {
    ZM: { amount: number; currency: string };
    US: { amount: number; currency: string };
  };
  overview: string;
  learningOutcomes: string[];
  curriculum: CurriculumItem[];
  prerequisites: string;
  certificate: string;
}

export const courseDetails: CourseDetail[] = [
  {
    id: 1,
    slug: "data-analytics-fundamentals",
    title: "Data Analytics Fundamentals",
    subTitle:
      "Kickstart your career by turning raw numbers into meaningful business stories using the industry's most essential tools.",
    level: "Beginner",
    duration: "1 Month",
    prices: {
      ZM: { amount: 1500, currency: "ZMW" },
      US: { amount: 70, currency: "USD" },
    },
    overview:
      "A comprehensive foundation designed to help you master the core pillars of data analysis: Excel, basic statistics, and SQL.",
    learningOutcomes: [
      "Master Excel functions and Pivot Tables for rapid data processing",
      "Understand the statistical foundations required for accurate business forecasting",
      "Write your first SQL queries to pull data directly from databases",
      "Create professional reports that clearly communicate findings to stakeholders",
    ],
    curriculum: [
      {
        title: "Excel Mastery & Advanced Formulas",
        description:
          "Mastering VLOOKUP, INDEX/MATCH, and logical functions for cleaning and preparing large datasets.",
      },
      {
        title: "Pivot Tables & Dynamic Reporting",
        description:
          "Building automated summaries and interactive reports to track business KPIs in real-time.",
      },
      {
        title: "Descriptive Statistics for Business",
        description:
          "Applying mean, median, standard deviation, and distribution analysis to real-world business problems.",
      },
      {
        title: "Introduction to Relational Databases",
        description:
          "Understanding table structures, primary keys, and the fundamentals of how data is stored globally.",
      },
      {
        title: "Basic SQL Querying (SELECT to WHERE)",
        description:
          "Learning the core syntax to filter, sort, and extract specific information from company databases.",
      },
    ],
    prerequisites: "None",
    certificate: "Yes",
  },
  {
    id: 2,
    slug: "intermediate-data-analytics",
    title: "Intermediate Data Analytics",
    subTitle:
      "Bridge the gap between data collection and strategic execution with advanced SQL mastery and architectural insights.",
    level: "Intermediate",
    duration: "2 Months",
    prices: {
      ZM: { amount: 2500, currency: "ZMW" },
      US: { amount: 110, currency: "USD" },
    },
    overview:
      "Deep dive into complex data structures and advanced querying techniques to handle enterprise-level data challenges.",
    learningOutcomes: [
      "Solve complex business questions using advanced SQL joins and window functions",
      "Understand data warehousing concepts like Star and Snowflake schemas",
      "Optimize slow-running queries to improve organizational efficiency",
      "Perform end-to-end ETL (Extract, Transform, Load) processes",
    ],
    curriculum: [
      {
        title: "Advanced SQL: Window Functions & CTEs",
        description:
          "Using Common Table Expressions and Window functions (RANK, LEAD/LAG) for complex trend analysis.",
      },
      {
        title: "Data Modeling & Star Schemas",
        description:
          "Designing efficient database architectures for faster reporting and better data integrity.",
      },
      {
        title: "Query Optimization & Indexing",
        description:
          "Techniques to speed up data retrieval and manage performance in large-scale environments.",
      },
      {
        title: "ETL Pipeline Fundamentals",
        description:
          "Learning how to move data from raw sources into a clean, structured data warehouse.",
      },
      {
        title: "Advanced Joins & Set Operations",
        description:
          "Mastering complex relationships between multiple data sources to provide a 360-degree business view.",
      },
    ],
    prerequisites: "Basic SQL Knowledge",
    certificate: "Yes",
  },
  {
    id: 3,
    slug: "advanced-data-analytics-ai",
    title: "Advanced Data Analytics & AI",
    subTitle:
      "Future-proof your expertise. Harness the power of Machine Learning and Predictive Analytics to drive enterprise innovation.",
    level: "Advanced",
    duration: "8 Weeks",
    prices: {
      ZM: { amount: 4500, currency: "ZMW" },
      US: { amount: 200, currency: "USD" },
    },
    overview:
      "A high-level program focused on Python for data science, predictive modeling, and deploying AI solutions in a business context.",
    learningOutcomes: [
      "Build predictive models to forecast sales, churn, and market trends",
      "Automate data workflows using Python and machine learning libraries",
      "Implement Neural Networks for complex pattern recognition",
      "Deploy AI models that provide real-time recommendations for your organization",
    ],
    curriculum: [
      {
        title: "Python for Data Science",
        description:
          "Mastering NumPy, Pandas, and Matplotlib for high-performance data manipulation.",
      },
      {
        title: "Supervised Machine Learning",
        description:
          "Implementing Regression, Decision Trees, and Random Forests to predict future outcomes.",
      },
      {
        title: "Unsupervised Learning & Clustering",
        description:
          "Using K-Means and PCA to discover hidden patterns and segment customers automatically.",
      },
      {
        title: "Deep Learning & Neural Networks",
        description:
          "An introduction to Keras and TensorFlow for building advanced AI architectures.",
      },
      {
        title: "AI Ethics & Model Deployment",
        description:
          "How to move models into production while ensuring data privacy and algorithmic fairness.",
      },
    ],
    prerequisites: "Intermediate Data Analytics",
    certificate: "Yes",
  },
  {
    id: 4,
    slug: "power-bi-mastery-program",
    title: "Power BI Mastery Program",
    subTitle:
      "Master the art of visual storytelling. Build executive-ready dashboards that automate reporting and inspire action.",
    level: "Intermediate",
    duration: "5 Days",
    prices: {
      ZM: { amount: 3500, currency: "ZMW" },
      US: { amount: 150, currency: "USD" },
    },
    overview:
      "Transform static data into dynamic stories. This course focuses on Power BI's ecosystem to deliver real-time business intelligence.",
    learningOutcomes: [
      "Connect Power BI to diverse sources like SQL, Excel, and Web APIs",
      "Write complex DAX formulas to calculate month-over-month growth and KPIs",
      "Design user-centric dashboards with advanced drill-through capabilities",
      "Manage workspace security and scheduled data refreshes for the entire team",
    ],
    curriculum: [
      {
        title: "Power Query & Data Transformation",
        description:
          "Advanced data cleaning and M-language basics to shape data before it hits your dashboard.",
      },
      {
        title: "The DAX Language Deep-Dive",
        description:
          "Mastering Measures, Calculated Columns, and Time Intelligence functions (YTD, QTD, MoM).",
      },
      {
        title: "UI/UX for Dashboard Design",
        description:
          "Applying design principles to create intuitive, clutter-free, and high-impact visual reports.",
      },
      {
        title: "Row-Level Security (RLS) & Governance",
        description:
          "Ensuring the right people see the right data through advanced security settings.",
      },
      {
        title: "Power BI Service & Automation",
        description:
          "Publishing, Apps, Workspaces, and setting up automated data gateways.",
      },
    ],
    prerequisites: "Basic Excel and Data Analysis Skills",
    certificate: "Yes",
  },
  {
    id: 5,
    slug: "sql-for-data-analysis",
    title: "SQL for Data Analysis",
    subTitle:
      "The language of data. Unlock the secrets of relational databases to extract, transform, and analyze information with precision.",
    level: "Intermediate",
    duration: "5 Days",
    prices: {
      ZM: { amount: 2500, currency: "ZMW" },
      US: { amount: 110, currency: "USD" },
    },
    overview:
      "This intensive bootcamp focuses exclusively on SQL, the most in-demand skill for any data professional in Zambia and abroad.",
    learningOutcomes: [
      "Independently query complex databases without needing IT assistance",
      "Clean and format messy data directly within SQL",
      "Perform multi-table analysis using advanced JOIN logic",
      "Build views and stored procedures for repeatable reporting",
    ],
    curriculum: [
      {
        title: "SQL Syntax & Filtering",
        description:
          "Mastering SELECT, FROM, WHERE, and the logic of Boolean operators.",
      },
      {
        title: "Aggregations & Grouping",
        description:
          "Using SUM, AVG, and COUNT with GROUP BY to generate high-level business summaries.",
      },
      {
        title: "Multi-Table Relational Analysis",
        description:
          "Deep dive into INNER, LEFT, RIGHT, and FULL OUTER joins to connect disparate datasets.",
      },
      {
        title: "Subqueries & Nested Logic",
        description:
          "Writing queries within queries to solve multi-step data problems.",
      },
      {
        title: "SQL Best Practices for Analytics",
        description:
          "Formatting code for readability and writing efficient queries that don't crash servers.",
      },
    ],
    prerequisites: "Basic understanding of data",
    certificate: "Yes",
  },
  {
    id: 6,
    slug: "data-visualization-essentials",
    title: "Data Visualization Essentials",
    subTitle:
      "Design with purpose. Learn the science behind effective visuals to communicate complex findings with clarity and impact.",
    level: "Intermediate",
    duration: "5 Days",
    prices: {
      ZM: { amount: 2500, currency: "ZMW" },
      US: { amount: 110, currency: "USD" },
    },
    overview:
      "Stop making 'just charts' and start making 'impactful visuals.' This course covers the psychology of how people process data visually.",
    learningOutcomes: [
      "Select the perfect chart type for any data scenario (Comparison, Trend, Distribution)",
      "Reduce cognitive load by removing visual clutter from reports",
      "Use color theory and typography to highlight key business insights",
      "Build interactive features that allow users to explore data themselves",
    ],
    curriculum: [
      {
        title: "Visual Encoding & Perception",
        description:
          "How the human brain perceives data and how to use that to your advantage.",
      },
      {
        title: "Chart Selection Strategy",
        description:
          "When to use a scatter plot vs. a heat map vs. a bar chart for maximum clarity.",
      },
      {
        title: "Color Theory & Accessibility",
        description:
          "Using color to drive attention while ensuring reports are accessible to all users.",
      },
      {
        title: "Exploratory vs. Explanatory Visuals",
        description:
          "Knowing when to let users 'find' insights vs. when to 'tell' them the insight.",
      },
      {
        title: "Dashboard Interactivity",
        description:
          "Implementing slicers, filters, and hover-effects for a premium user experience.",
      },
    ],
    prerequisites: "Basic understanding of data",
    certificate: "Yes",
  },
  {
    id: 7,
    slug: "data-storytelling-mastery",
    title: "Data Storytelling Mastery",
    subTitle:
      "Beyond the charts. Blend psychology, design, and narrative to influence stakeholders and drive organizational change.",
    level: "Intermediate",
    duration: "5 Days",
    prices: {
      ZM: { amount: 2000, currency: "ZMW" },
      US: { amount: 95, currency: "USD" },
    },
    overview:
      "Data alone doesn't change minds—stories do. This course teaches you how to present data in a way that secures buy-in and action.",
    learningOutcomes: [
      "Structure data presentations using classic storytelling arcs",
      "Identify the 'so what?' in every data point to keep executives engaged",
      "Handle tough questions and technical objections during live presentations",
      "Translate complex technical metrics into simple business outcomes",
    ],
    curriculum: [
      {
        title: "The Narrative Arc in Data",
        description:
          "Setting the scene, introducing the conflict (the data problem), and providing the resolution.",
      },
      {
        title: "Audience Persona Mapping",
        description:
          "Tailoring your data message for the CEO vs. the Engineering Manager.",
      },
      {
        title: "The Art of the Data Hook",
        description:
          "How to open a presentation to immediately grab attention using a 'Hero Metric.'",
      },
      {
        title: "Simplifying Complexity",
        description:
          "Techniques for stripping away technical jargon without losing the depth of the analysis.",
      },
      {
        title: "Persuasive Presentation Delivery",
        description:
          "Body language, tone of voice, and slide design for high-stakes meetings.",
      },
    ],
    prerequisites: "Basic data literacy",
    certificate: "Yes",
  },
  {
    id: 8,
    slug: "soft-skills-for-data-professionals",
    title: "Soft Skills for Data Professionals",
    subTitle:
      "Lead with confidence. Master the communication and collaboration skills necessary to bridge the gap between technical data and business strategy.",
    level: "All Levels",
    duration: "5 Days",
    prices: {
      ZM: { amount: 1000, currency: "ZMW" },
      US: { amount: 50, currency: "USD" },
    },
    overview:
      "Technical skills get you the job; soft skills get you promoted. Learn to navigate the corporate landscape as a data expert.",
    learningOutcomes: [
      "Translate 'Data-Speak' into 'Business-Speak' effortlessly",
      "Negotiate project timelines and resource requirements with stakeholders",
      "Facilitate productive data-driven brainstorming sessions",
      "Manage conflict when data contradicts a stakeholder's intuition",
    ],
    curriculum: [
      {
        title: "The Data Translator Role",
        description:
          "Learning how to act as the bridge between IT departments and business leadership.",
      },
      {
        title: "Stakeholder Expectation Management",
        description:
          "Frameworks for saying 'no' to unrealistic data requests while maintaining relationships.",
      },
      {
        title: "Emotional Intelligence in Analytics",
        description:
          "Understanding the biases and fears stakeholders have regarding data-driven changes.",
      },
      {
        title: "Agile Communication",
        description:
          "Leading daily stand-ups and providing clear, concise project updates.",
      },
      {
        title: "Conflict Resolution & Ethics",
        description:
          "Handling situations where data insights are ignored or misused by management.",
      },
    ],
    prerequisites: "None",
    certificate: "Yes",
  },
  {
    id: 9,
    slug: "cyber-security",
    title: "Cyber Security",
    subTitle:
      "Defend the digital frontier. Build a robust security posture to protect organizational assets and ensure data integrity.",
    level: "All Levels",
    duration: "5 Days",
    prices: {
      ZM: { amount: 1200, currency: "ZMW" },
      US: { amount: 60, currency: "USD" },
    },
    overview:
      "In an age of data breaches, security is everyone's responsibility. Learn to identify and mitigate risks before they become disasters.",
    learningOutcomes: [
      "Recognize social engineering and phishing attempts before they penetrate the network",
      "Understand the basics of encryption and secure data storage",
      "Conduct basic vulnerability assessments for your team's tools",
      "Align organizational practices with international data protection laws (GDPR/Zambian Data Protection Act)",
    ],
    curriculum: [
      {
        title: "Threat Landscape Overview",
        description:
          "Analyzing recent global and local data breaches to understand modern attack methods.",
      },
      {
        title: "Identity & Access Management",
        description:
          "Best practices for passwords, Multi-Factor Authentication (MFA), and user permissions.",
      },
      {
        title: "Securing Data at Rest & In Transit",
        description:
          "Understanding how to protect sensitive databases from unauthorized external access.",
      },
      {
        title: "Incident Response Frameworks",
        description:
          "What to do in the first 60 minutes after a security breach is detected.",
      },
      {
        title: "Compliance & Legal Obligations",
        description:
          "Navigating the Zambian Data Protection Act and ensuring corporate liability is minimized.",
      },
    ],
    prerequisites: "None",
    certificate: "Yes",
  },
  {
    id: 10,
    slug: "financial-modelling",
    title: "Financial Modelling",
    subTitle:
      "Predict the future with precision. Build robust financial frameworks to forecast growth, evaluate risk, and steer strategic investments.",
    level: "All Levels",
    duration: "5 Days",
    prices: {
      ZM: { amount: 1500, currency: "ZMW" },
      US: { amount: 75, currency: "USD" },
    },
    overview:
      "Go beyond simple bookkeeping. Learn to build dynamic Excel models that simulate complex business scenarios and investment outcomes.",
    learningOutcomes: [
      "Build integrated 3-statement financial models from scratch",
      "Perform sensitivity analysis to see how small changes impact the bottom line",
      "Calculate WACC, NPV, and IRR for investment appraisal",
      "Create executive dashboards that visualize financial health and runway",
    ],
    curriculum: [
      {
        title: "Financial Model Structure & Integrity",
        description:
          "Designing models that are error-proof, easy to audit, and scalable.",
      },
      {
        title: "Revenue & Expense Forecasting",
        description:
          "Building driver-based models to project future growth based on historical trends.",
      },
      {
        title: "Scenario & 'What-If' Analysis",
        description:
          "Using Excel Data Tables and Goal Seek to prepare for 'Best Case' and 'Worst Case' scenarios.",
      },
      {
        title: "Capital Budgeting & Valuation",
        description:
          "Applying Discounted Cash Flow (DCF) analysis to determine the value of projects or businesses.",
      },
      {
        title: "Model Visualization & Charting",
        description:
          "Using Waterfall charts and Bridge diagrams to explain financial variances to the board.",
      },
    ],
    prerequisites: "Basic knowledge of Excel or spreadsheets recommended",
    certificate: "Yes",
  },
];

export function getCourseBySlug(slug: string): CourseDetail | undefined {
  return courseDetails.find((course) => course.slug === slug);
}

export function getRelatedCourses(
  currentSlug: string,
  limit: number = 3
): CourseDetail[] {
  return courseDetails
    .filter((course) => course.slug !== currentSlug)
    .slice(0, limit);
}
