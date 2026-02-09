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
    duration: "3 Days",
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
    duration: "5 Days",
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
    slug: "financial-modelling-and-forecasting",
    title: "Financial Modelling & Forecasting",
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
  {
    id: 11,
    slug: "financial-analysis-power-bi",
    title: "Financial Analysis with Power BI",
    subTitle:
      "Transform financial data into automated, insight-driven reports using Power BI and advanced DAX.",
    level: "Intermediate",
    duration: "5 Days",
    prices: {
      ZM: { amount: 3500, currency: "ZMW" },
      US: { amount: 150, currency: "USD" },
    },
    overview:
      "A hands-on program designed for finance professionals and analysts who want to automate financial reporting, perform advanced ratio analysis, and build interactive dashboards using Power BI. Participants will learn how to model accounting data, write finance-specific DAX, and deliver executive-ready insights.",
    learningOutcomes: [
      "Model and structure financial data for scalable Power BI solutions",
      "Automate Income Statements, Balance Sheets, and Cash Flow Statements",
      "Build dynamic financial ratios across time periods",
      "Perform budget vs actual and variance analysis",
      "Create executive-level financial dashboards and reports",
    ],
    curriculum: [
      {
        title: "Financial Data Foundations",
        description:
          "Understanding financial datasets including Chart of Accounts, General Ledger, and trial balances. Best practices for preparing accounting data for BI and reporting.",
      },
      {
        title: "Power BI Data Modeling for Finance",
        description:
          "Designing star schemas for financial reporting, handling multiple fact tables, and managing date and account dimensions for accurate analysis.",
      },
      {
        title: "Automated Financial Statements",
        description:
          "Building dynamic Income Statements and Balance Sheets using DAX measures, account hierarchies, and calculation groups.",
      },
      {
        title: "Advanced DAX for Financial Analysis",
        description:
          "Writing finance-specific DAX including YTD, MTD, rolling periods, variance analysis, and Actual vs Budget calculations.",
      },
      {
        title: "Financial Ratios & Performance Metrics",
        description:
          "Creating liquidity, solvency, and profitability ratios with dynamic filtering and period comparisons.",
      },
      {
        title: "Cash Flow Analysis & Forecasting",
        description:
          "Analyzing operating, investing, and financing cash flows and building forward-looking cash flow forecasts.",
      },
      {
        title: "Budgeting, Trend & Variance Analysis",
        description:
          "Tracking financial performance over time using trend analysis, scenario comparisons, and interactive visuals.",
      },
      {
        title: "Executive Dashboards & Reporting",
        description:
          "Designing CFO-ready dashboards with KPIs, drill-downs, and storytelling best practices for financial insights.",
      },
    ],
    prerequisites: "Basic accounting knowledge and intermediate Excel skills",
    certificate: "Yes",
  },
  {
    id: 12,
    slug: "excel-power-bi-integrated-reporting",
    title: "Excel & Power BI for Integrated Reporting",
    subTitle:
      "Master the dual-power of Excel's flexibility and Power BI's visualization capabilities.",
    level: "Intermediate",
    duration: "5 Days",
    prices: {
      ZM: { amount: 3500, currency: "ZMW" },
      US: { amount: 150, currency: "USD" },
    },
    overview:
      "Learn how to use Excel and Power BI as a unified ecosystem for corporate reporting.",
    learningOutcomes: [
      "Utilize Power Query consistently across both Excel and Power BI",
      "Publish Excel datasets to the Power BI Service",
      "Analyze Power BI datasets directly within Excel Pivot Tables",
      "Streamline monthly reporting cycles through automation",
    ],
    curriculum: [
      {
        title: "The Excel–Power BI Reporting Ecosystem",
        description:
          "Understanding when to use Excel, when to use Power BI, and how they complement each other in modern reporting environments.",
      },
      {
        title: "Unified Power Query & Data Preparation",
        description:
          "Building shared Power Query transformations using M-code for consistent data ingestion across Excel and Power BI.",
      },
      {
        title: "Centralized Data Models in Power BI",
        description:
          "Designing scalable Power BI datasets (semantic models) to serve multiple Excel and Power BI reports.",
      },
      {
        title: "Advanced Excel Analysis on Power BI Datasets",
        description:
          "Using PivotTables, CUBE functions, and Excel formulas to analyze live Power BI datasets.",
      },
      {
        title: "Automating Reporting Workflows",
        description:
          "Reducing manual effort through refresh automation, shared datasets, and standardized reporting templates.",
      },
      {
        title: "Enterprise Publishing & Collaboration",
        description:
          "Publishing datasets and reports to the Power BI Service, managing permissions, and enabling secure collaboration.",
      },
      {
        title: "Monthly & Management Reporting Use Cases",
        description:
          "Applying integrated reporting techniques to real-world scenarios such as financial, sales, and operational reporting.",
      },
      {
        title: "Best Practices & Governance",
        description:
          "Ensuring data consistency, version control, performance optimization, and governance across Excel and Power BI.",
      },
    ],
    prerequisites: "Intermediate Excel",
    certificate: "Yes",
  },
  {
    id: 13,
    slug: "data-governance-reporting-standards",
    title: "Data Governance & Reporting Standards",
    subTitle:
      "Build trusted, compliant, and consistent reporting across the organization",
    level: "All Levels",
    duration: "3 Days",
    prices: {
      ZM: { amount: 2500, currency: "ZMW" },
      US: { amount: 110, currency: "USD" },
    },
    overview:
      "This course provides a practical introduction to data governance principles and reporting standards required for accurate, compliant, and reliable business intelligence. Participants will learn how to establish data quality frameworks, enforce reporting standards, and create a single source of truth for organizational data.",
    learningOutcomes: [
      "Design and implement data quality frameworks to improve reporting accuracy",
      "Apply governance principles to prevent data inconsistencies and misuse",
      "Align reporting practices with the Zambian Data Protection Act and global standards",
      "Establish a single source of truth for enterprise KPIs and metrics",
      "Document data definitions, ownership, and lineage for audit and transparency",
    ],
    curriculum: [
      {
        title: "Foundations of Data Governance",
        description:
          "Understanding data governance concepts, roles, and responsibilities, including data ownership, stewardship, and accountability.",
      },
      {
        title: "Data Quality Management",
        description:
          "Defining data quality dimensions and implementing validation rules, monitoring, and automated error detection.",
      },
      {
        title: "Reporting Standards & KPI Consistency",
        description:
          "Establishing standardized metrics, report definitions, and naming conventions to ensure consistent reporting across teams.",
      },
      {
        title: "Compliance, Privacy & Security",
        description:
          "Managing data privacy, access control, and compliance with the Zambian Data Protection Act and international best practices.",
      },
      {
        title: "Documentation & Data Lineage",
        description:
          "Creating documentation standards for data sources, transformations, lineage, and audit readiness.",
      },
    ],
    prerequisites: "None",
    certificate: "Yes",
  },
  {
    id: 14,
    slug: "executive-strategic-data-analysis",
    title: "Executive Strategic Data Analysis",
    subTitle:
      "Data-driven leadership for C-Suite and Senior Management decision-making.",
    level: "Advanced",
    duration: "3 Days",
    prices: {
      ZM: { amount: 4500, currency: "ZMW" },
      US: { amount: 200, currency: "USD" },
    },
    overview:
      "Equips decision-makers with the ability to interpret complex analytics without needing to write code.",
    learningOutcomes: [
      "Interpret AI and Machine Learning forecasts to guide company strategy",
      "Identify key 'Hero Metrics' that actually drive business value",
      "Ask the right questions to technical data teams",
      "Evaluate the ROI of data and technology investments",
    ],
    curriculum: [
      {
        title: "Strategic KPI Selection",
        description:
          "Moving from vanity metrics to actionable business drivers.",
      },
      {
        title: "The Executive Dashboard",
        description:
          "Learning to read and interrogate high-level visual summaries.",
      },
    ],
    prerequisites: "Management experience",
    certificate: "Yes",
  },
  {
    id: 15,
    slug: "budgeting-planning-variance-analysis",
    title: "Budgeting, Planning & Variance Analysis",
    subTitle:
      "Build accurate forecasts, control budgets, and analyze performance with confidence",
    level: "Intermediate",
    duration: "3 Days",
    prices: {
      ZM: { amount: 2500, currency: "ZMW" },
      US: { amount: 110, currency: "USD" },
    },
    overview:
      "This course provides a practical, end-to-end approach to budgeting, planning, and variance analysis. Participants will learn how to build flexible budgets, automate performance tracking, and perform root cause analysis to support informed financial decision-making.",
    learningOutcomes: [
      "Design driver-based budgets that respond to business and market changes",
      "Build rolling forecasts to replace static annual budgets",
      "Automate variance analysis across Actual, Budget, and Forecast scenarios",
      "Perform root cause analysis using price, volume, and mix techniques",
      "Forecast year-end results using run-rate and trend-based methods",
    ],
    curriculum: [
      {
        title: "Budgeting & Financial Planning Foundations",
        description:
          "Understanding the budgeting cycle, key financial drivers, and best practices for building flexible, driver-based budgets.",
      },
      {
        title: "Driver-Based Budgeting Models",
        description:
          "Designing budgets based on revenue, cost, and operational drivers that adapt to changing business conditions.",
      },
      {
        title: "Rolling Forecasts & Scenario Planning",
        description:
          "Moving beyond static annual budgets to rolling forecasts, scenario modeling, and sensitivity analysis.",
      },
      {
        title: "Automated Variance Analysis",
        description:
          "Building automated Actual vs Budget vs Forecast reports using Excel and Power BI.",
      },
      {
        title: "Advanced Variance Modeling",
        description:
          "Applying price, volume, and mix (PVM) analysis to understand the root causes of financial performance deviations.",
      },
      {
        title: "Root Cause & Performance Analysis",
        description:
          "Investigating variances through trend analysis, drill-downs, and management-level performance insights.",
      },
      {
        title: "Run-Rate & Year-End Forecasting",
        description:
          "Forecasting full-year results using monthly run-rates, trends, and historical performance patterns.",
      },
      {
        title: "Management Reporting & Decision Support",
        description:
          "Presenting budget and variance insights through clear dashboards and reports to support executive decision-making.",
      },
    ],
    prerequisites: "Basic financial modeling knowledge",
    certificate: "Yes",
  },
  {
    id: 16,
    slug: "year-end-data-ai-trends",
    title: "Year-End Data, AI & Analytics Trends Briefing",
    subTitle:
      "Prepare for 2027 by understanding the emerging technologies shaping the data landscape.",
    level: "All Levels",
    duration: "1 Day",
    prices: {
      ZM: { amount: 1000, currency: "ZMW" },
      US: { amount: 50, currency: "USD" },
    },
    overview:
      "A high-impact briefing on the future of AI, SQL, and Power BI development.",
    learningOutcomes: [
      "Identify the top 5 AI trends impacting Zambian businesses for the coming year",
      "Review major updates to the Microsoft Fabric and Power BI ecosystem",
      "Understand the shift toward automated Machine Learning (AutoML)",
      "Network with other data professionals to share year-end successes",
    ],
    curriculum: [
      {
        title: "2026 Tech Retrospective",
        description: "Analyzing which data tools dominated the year.",
      },
      {
        title: "2027 Strategic Roadmap",
        description: "Planning for upcoming shifts in data engineering and AI.",
      },
    ],
    prerequisites: "None",
    certificate: "Yes",
  },
  {
    id: 17,
    slug: "data-analysis-with-excel",
    title: "Data Analysis with Excel",
    subTitle: "Mastering Professional Reporting & Decision Making",
    level: "Foundations/Intermediate",
    duration: "3 Days",
    prices: {
      ZM: { amount: 1200, currency: "ZMW" },
      US: { amount: 60, currency: "USD" },
    },
    overview:
      "Confidently analyze, summarize, and present data using Excel for informed decision-making. This course takes you from interface basics to building functional analytical dashboards.",
    learningOutcomes: [
      "Clean and prepare raw data efficiently using industry-standard shortcuts",
      "Master Logical, Lookup (VLOOKUP/XLOOKUP), Text, and Date functions",
      "Implement Data Validation and advanced filtering to maintain data integrity",
      "Construct interactive PivotTables and PivotCharts for rapid data summarization",
      "Apply core visualization principles to build simple, effective analytical dashboards",
    ],
    curriculum: [
      {
        title: "Foundations & Data Cleaning",
        description:
          "Mastering the Excel interface, best practices shortcuts, and essential techniques for preparing messy data for analysis.",
      },
      {
        title: "The Analyst's Formula Toolkit",
        description:
          "A deep dive into the 'Big Four' function categories: Logical (IF/IFS), Lookup (XLOOKUP), Text manipulation, and Date calculations.",
      },
      {
        title: "Data Management & Integrity",
        description:
          "Using sorting, multi-level filtering, and data validation rules to ensure your datasets remain accurate and easy to navigate.",
      },
      {
        title: "Summarization with PivotTables",
        description:
          "Building PivotTables and PivotCharts to transform thousands of rows of data into clear, actionable summaries.",
      },
      {
        title: "Visualization & Dashboards",
        description:
          "Applying visualization principles to design and build simple analytical dashboards that communicate insights at a glance.",
      },
    ],
    prerequisites: "Basic computer literacy",
    certificate: "Yes",
  },
  {
    id: 18,
    slug: "advanced-excel-for-data-analysis",
    title: "Advanced Excel for Data Analysis",
    subTitle: "Elevate Your Analytical Skills to the Next Level",
    level: "Advanced",
    duration: "3 Days",
    prices: {
      ZM: { amount: 2000, currency: "ZMW" },
      US: { amount: 95, currency: "USD" },
    },
    overview:
      "Take your Excel skills to new heights with advanced functions, automation techniques, and sophisticated data analysis methods. This course is designed for professionals looking to leverage Excel for complex business challenges.",
    learningOutcomes: [
      "Utilize advanced functions including INDEX-MATCH, array formulas, and dynamic arrays for complex data retrieval",
      "Automate repetitive tasks using Macros and VBA scripting",
      "Perform advanced data analysis with Power Query and Power Pivot",
      "Create dynamic dashboards with interactive elements using slicers and timelines",
      "Implement best practices for data modeling and performance optimization in large datasets",
    ],
    curriculum: [
      {
        title: "Advanced Functionality & Formulas",
        description:
          "Exploring INDEX-MATCH combinations, array formulas, and the power of dynamic arrays for sophisticated data manipulation.",
      },
      {
        title: "Automation with Macros & VBA",
        description:
          "Learning to record and write VBA scripts to automate complex workflows and enhance productivity.",
      },
      {
        title: "Data Analysis with Power Tools",
        description:
          "Leveraging Power Query for advanced data transformation and Power Pivot for building robust data models.",
      },
      {
        title: "Dynamic Dashboards & Interactivity",
        description:
          "Designing dashboards with interactive features such as slicers, timelines, and conditional formatting to enhance user experience.",
      },
      {
        title: "Data Modeling & Performance Optimization",
        description:
          "Implementing best practices for structuring data models and optimizing Excel performance when working with large datasets.",
      },
    ],
    prerequisites: "Intermediate Excel skills",
    certificate: "Yes",
  },
  {
    id: 19,
    slug: "analytics-dax-capstone-dashboard-clinic",
    title: "Analytics, DAX & Capstone Dashboard Clinic",
    subTitle:
      "Apply advanced analytics and DAX to real-world business scenarios",
    level: "Advanced",
    duration: "5 Days",
    prices: {
      ZM: { amount: 3500, currency: "ZMW" },
      US: { amount: 150, currency: "USD" },
    },
    overview:
      "This intensive five-day course focuses on advanced analytics, DAX creation, and dashboard optimization using Power BI. Participants will develop sophisticated analytical models, apply best-practice DAX patterns, and complete a hands-on capstone project, culminating in a dashboard clinic focused on performance, usability, and executive storytelling.",
    learningOutcomes: [
      "Design and implement advanced DAX measures for business analytics",
      "Apply time intelligence and complex calculation logic to real-world datasets",
      "Build analytical models that support deep business insight and decision-making",
      "Develop an end-to-end Power BI solution through a guided capstone project",
      "Optimize dashboards for performance, usability, and executive reporting",
    ],
    curriculum: [
      {
        title: "Advanced Analytics & DAX Foundations",
        description:
          "Exploring advanced DAX patterns, calculation logic, and analytical thinking required for complex business scenarios.",
      },
      {
        title: "Time Intelligence & Business KPIs",
        description:
          "Building robust time-based calculations, KPIs, and variance analysis to support business performance measurement.",
      },
      {
        title: "Analytical Modeling & Performance Optimization",
        description:
          "Designing efficient analytical models, optimizing DAX performance, and applying best practices for scalable reporting.",
      },
      {
        title: "Capstone Project Development",
        description:
          "Developing a complete analytical solution from data modeling to insight-driven dashboards using real-world datasets.",
      },
      {
        title: "Dashboard Clinic & Executive Storytelling",
        description:
          "Reviewing, refining, and optimizing dashboards with a focus on clarity, usability, performance, and executive-level storytelling.",
      },
    ],
    prerequisites: "Intermediate Power BI and basic DAX knowledge",
    certificate: "Yes",
  },
  {
    id: 20,
    slug: "ai-for-data-analysts-excel-and-power-bi",
    title: "AI for Data Analysts: Excel and Power BI",
    subTitle:
      "Harness the power of AI to revolutionize your data analysis workflows in Excel and Power BI.",
    level: "Intermediate",
    duration: "5 Days",
    prices: {
      ZM: { amount: 4000, currency: "ZMW" },
      US: { amount: 175, currency: "USD" },
    },
    overview:
      "This course explores the integration of AI technologies within Excel and Power BI to enhance data analysis capabilities. Participants will learn how to leverage AI-driven features for data cleaning, predictive analytics, and automated insights generation.",
    learningOutcomes: [
      "Utilize AI-powered data cleaning and transformation tools in Excel and Power BI",
      "Implement predictive analytics models using AI algorithms",
      "Automate insights generation with AI-driven visualizations and reports",
      "Integrate AI services such as Azure Cognitive Services into data workflows",
    ],
    curriculum: [
      {
        title: "AI-Powered Data Preparation",
        description:
          "Using AI features in Power Query and Excel for intelligent data cleaning and transformation.",
      },
      {
        title: "Predictive Analytics with AI",
        description:
          "Building and deploying predictive models using AI algorithms within Power BI.",
      },
      {
        title: "Automated Insights & Visualizations",
        description:
          "Leveraging AI to generate automated insights and create dynamic visualizations.",
      },
      {
        title: "Integrating AI Services",
        description:
          "Connecting Azure Cognitive Services and other AI tools to enhance data analysis workflows.",
      },
    ],
    prerequisites: "Basic knowledge of Excel and Power BI",
    certificate: "Yes",
  },
  {
    id: 21,
    slug: "executive-strategic-data-analysis-for-decision-makers",
    title: "Executive Strategic Data Analysis for Decision Makers",
    subTitle:
      "Empower your leadership with data-driven decision-making skills tailored for executives and senior managers.",
    level: "Advanced",
    duration: "3 Days",
    prices: {
      ZM: { amount: 5000, currency: "ZMW" },
      US: { amount: 220, currency: "USD" },
    },
    overview:
      "This course is designed to equip executives and senior managers with the skills to interpret complex data analytics without needing to write code. Learn to identify key metrics, evaluate data-driven strategies, and lead data-centric initiatives within your organization.",
    learningOutcomes: [
      "Interpret advanced data analytics to inform strategic decisions",
      "Identify and focus on 'Hero Metrics' that drive business value",
      "Effectively communicate with technical data teams to align on objectives",
      "Evaluate the ROI of data and technology investments from a leadership perspective",
    ],
    curriculum: [
      {
        title: "Strategic KPI Identification",
        description:
          "Learn to distinguish between vanity metrics and actionable business drivers.",
      },
      {
        title: "Executive Dashboard Literacy",
        description:
          "Develop skills to read, interpret, and question high-level data visualizations effectively.",
      },
      {
        title: "Data-Driven Leadership",
        description:
          "Techniques for leading data-centric initiatives and fostering a data-driven culture within your organization.",
      },
      {
        title: "Investment Evaluation",
        description:
          "Frameworks for assessing the value and impact of data and technology investments on business outcomes.",
      },
    ],
    prerequisites: "Management experience",
    certificate: "Yes",
  },
  {
    id: 22,
    slug: "analytics-with-power-bi",
    title: "Analytics with Power BI",
    subTitle:
      "Unlock the full potential of Power BI for advanced data analytics and business intelligence.",
    level: "Intermediate",
    duration: "5 Days",
    prices: {
      ZM: { amount: 3000, currency: "ZMW" },
      US: { amount: 130, currency: "USD" },
    },
    overview:
      "This course provides a comprehensive guide to using Power BI for advanced analytics. Learn to build complex data models, create insightful visualizations, and deliver actionable business intelligence.",
    learningOutcomes: [
      "Design and implement advanced data models in Power BI",
      "Create dynamic and interactive visualizations for deep data insights",
      "Utilize DAX for complex calculations and data analysis",
      "Develop end-to-end Power BI solutions for business intelligence",
    ],
    curriculum: [
      {
        title: "Advanced Data Modeling",
        description:
          "Building robust data models using relationships, hierarchies, and calculated tables.",
      },
      {
        title: "Dynamic Visualizations",
        description:
          "Creating interactive reports and dashboards with advanced visual elements.",
      },
      {
        title: "Complex DAX Calculations",
        description:
          "Writing sophisticated DAX measures for in-depth data analysis.",
      },
      {
        title: "End-to-End Power BI Solutions",
        description:
          "Developing comprehensive Power BI projects from data ingestion to report delivery.",
      },
    ],
    prerequisites: "Basic Power BI knowledge",
    certificate: "Yes",
  },
  {
    id: 23,
    slug: "power-bi-for-data-analysis",
    title: "Power BI for Data Analysis",
    subTitle:
      "Transform raw data into actionable insights using Power BI's powerful analytics capabilities.",
    level: "Foundations/Intermediate",
    duration: "3 Days",
    prices: {
      ZM: { amount: 1500, currency: "ZMW" },
      US: { amount: 70, currency: "USD" },
    },
    overview:
      "This course introduces the fundamentals of data analysis using Power BI. Learn to connect to data sources, create visualizations, and build reports that drive business decisions.",
    learningOutcomes: [
      "Connect to various data sources and prepare data for analysis",
      "Create compelling visualizations to represent data effectively",
      "Build interactive reports and dashboards in Power BI",
      "Utilize basic DAX functions for data calculations",
    ],
    curriculum: [
      {
        title: "Data Connection & Preparation",
        description:
          "Connecting to different data sources and transforming data for analysis.",
      },
      {
        title: "Visualization Creation",
        description:
          "Designing effective visualizations to communicate data insights.",
      },
      {
        title: "Report & Dashboard Building",
        description:
          "Constructing interactive reports and dashboards in Power BI.",
      },
      {
        title: "Basic DAX for Data Calculations",
        description:
          "Using fundamental DAX functions to perform data calculations and analysis.",
      },
    ],
    prerequisites: "Basic computer literacy",
    certificate: "Yes",
  },
  {
    id: 24,
    slug: "analytics-capstone-and-dashboard-clinic",
    title: "Analytics Capstone and Dashboard Clinic",
    subTitle:
      "Apply your analytics skills in a real-world project and refine your dashboards for maximum impact.",
    level: "Advanced",
    duration: "5 Days",
    prices: {
      ZM: { amount: 4000, currency: "ZMW" },
      US: { amount: 175, currency: "USD" },
    },
    overview:
      "This capstone course allows participants to apply their analytics knowledge in a comprehensive project. Focus on building a complete analytics solution and participate in a dashboard clinic to enhance performance and usability.",
    learningOutcomes: [
      "Develop a complete analytics solution from data modeling to dashboard creation",
      "Apply best practices in DAX and data visualization",
      "Optimize dashboards for performance and user experience",
      "Receive feedback and refine dashboards in a collaborative clinic setting",
    ],
    curriculum: [
      {
        title: "Capstone Project Development",
        description:
          "Guided development of a full analytics solution using real-world datasets.",
      },
      {
        title: "DAX & Visualization Best Practices",
        description:
          "Implementing advanced DAX techniques and visualization principles for effective analytics.",
      },
      {
        title: "Dashboard Optimization",
        description:
          "Techniques for improving dashboard performance and enhancing user experience.",
      },
      {
        title: "Collaborative Dashboard Clinic",
        description:
          "Participating in a clinic to receive feedback and refine dashboards with peer and instructor input.",
      },
    ],
    prerequisites: "Intermediate Power BI and DAX knowledge",
    certificate: "Yes",
  },
  {
  id: 25,
  slug: "analytics-dax-creation-capstone-dashboard-clinic",
  title: "Analytics (DAX Creation, Capstone & Dashboard Clinic)",
  subTitle:
    "Master DAX through hands-on creation, real-world capstone work, and live dashboard optimisation clinics.",
  level: "Advanced",
  duration: "5 Days",
  prices: {
    ZM: { amount: 3000, currency: "ZMW" },
    US: { amount: 130, currency: "USD" },
  },
  overview:
    "This advanced, practice-led course focuses on building strong DAX foundations, applying them in a real-world capstone project, and refining Power BI dashboards through guided clinic sessions. You’ll move beyond theory to confidently design performant measures, optimise models, and deliver production-ready dashboards that answer real business questions.",
  learningOutcomes: [
    "Write clear, efficient, and scalable DAX measures from scratch",
    "Apply DAX patterns to solve real-world analytical problems",
    "Build and complete an end-to-end Power BI capstone dashboard",
    "Debug, optimise, and improve existing dashboards in clinic-style sessions",
  ],
  curriculum: [
    {
      title: "DAX Foundations & Measure Design",
      description:
        "Core DAX concepts, evaluation context, common functions, and best practices for writing maintainable measures.",
    },
    {
      title: "Advanced DAX Patterns",
      description:
        "Time intelligence, complex aggregations, performance considerations, and reusable DAX patterns.",
    },
    {
      title: "Capstone Dashboard Project",
      description:
        "Design and build a complete Power BI dashboard using real-world data, from requirements to final delivery.",
    },
    {
      title: "Dashboard Clinic & Optimisation",
      description:
        "Live review and refinement of dashboards, focusing on usability, performance, and analytical clarity.",
    },
  ],
  prerequisites: "Intermediate Power BI experience and basic familiarity with DAX",
  certificate: "Yes",
}
];

export function getCourseBySlug(slug: string): CourseDetail | undefined {
  return courseDetails.find((course) => course.slug === slug);
}

export function getRelatedCourses(
  currentSlug: string,
  limit: number = 3,
): CourseDetail[] {
  return courseDetails
    .filter((course) => course.slug !== currentSlug)
    .slice(0, limit);
}
