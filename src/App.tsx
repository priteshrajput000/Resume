import React from 'react';
import { Terminal, Cloud, Server, Github as Git, Database, Monitor } from 'lucide-react';
import Background from './components/Background';

function App() {
  return (
    <>
      <Background />
      <div className="min-h-screen bg-gradient-to-br from-gray-900/90 to-gray-800/90 text-gray-100">
        {/* Hero Section */}
        <header className="container mx-auto px-6 py-16">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div>
              <h1 className="text-5xl font-bold mb-4">Preetesh Rajput</h1>
              <h2 className="text-2xl text-blue-400 mb-4">AWS CERTIFIED SOLUTION ARCHITECT</h2>
              <p className="text-gray-400 max-w-xl mb-8">+91-9584112952</p>
              <p className="text-gray-400 max-w-xl mb-8">
                A value-driven cloud engineer proficient in DevOps Cloud-native tools for architecting, orchestrating, provisioning, monitoring, automating, and building resilient systems.
              </p>
              <div className="flex gap-4">
                <a href="mailto:preetesh1994@gmail.com" className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg transition-colors">
                  Contact Me
                </a>
                <a href="https://linkedin.com/in/preetesh-rajput-105a0a244" className="border border-blue-600 px-6 py-2 rounded-lg hover:bg-blue-600/10 transition-colors">
                  LinkedIn
                </a>
              </div>
            </div>
            <div className="mt-8 md:mt-0">
              <Cloud className="w-48 h-48 text-blue-400" />
            </div>
          </div>
        </header>

        {/* Skills Section */}
        <section className="container mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold mb-8">Key Competencies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <SkillCard 
              icon={<Cloud />}
              title="Cloud Services"
              skills={[
                "AWS- (VPC, EC2, IAM, EFS, Lambda, CloudFront, SNS, SES, SQS, RDS, Eventbridge, Cloudwatch, storage gateway, ElastiCache, API gateway, Cognito, Route53, WAF & Shield, S3, Billing & Cost explorer)",
                "Azure- Active Directory, Azure DevOps",
                "DigitalOcean- droplets, databases, Backups & Snapshots, Networking"
              ]}
            />
            <SkillCard 
              icon={<Terminal />}
              title="DevOps Tools"
              skills={[
                "Docker, Kubernetes",
                "Jenkins, AWS Codepipeline, Github Action",
                "Terraform, Ansible",
                "Bash/Shell Scripting"
              ]}
            />
            <SkillCard 
              icon={<Database />}
              title="Databases"
              skills={[
                "MongoDB",
                "MySQL",
                "Redis",
                "PostgreSQL"
              ]}
            />
            <SkillCard 
              icon={<Monitor />}
              title="Monitoring"
              skills={[
                "NewRelic, Datadog",
                "Prometheus, Grafana",
                "PagerDuty"
              ]}
            />
            <SkillCard 
              icon={<Server />}
              title="Infrastructure"
              skills={[
                "Nginx, Apache, lighttpd",
                "Linux Administration (RHEL, Ubuntu)",
                "Windows Server"
              ]}
            />
            <SkillCard 
              icon={<Git />}
              title="Version Control & Tools"
              skills={[
                "Git, GitHub, BitBucket",
                "Jira, Confluence"
              ]}
            />
          </div>
        </section>

        {/* Experience Section */}
        <section className="container mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold mb-8">Professional Experience</h2>
          <div className="space-y-12">
            <ExperienceCard 
              title="DevOps Engineer"
              company="Infosec Ventures"
              period="Sept 2024 - Present"
              location="Gurgaon, IN"
              projects={["HumanFirewall", "CitizenFirewall", "Email remediator"]}
              achievements={[
                "Implemented log rotation for Node based processes with logs stored in S3 bucket",
                "Set up Prometheus and Grafana to ensure application uptime and performance",
                "Configured custom alerting rules in Prometheus to address infrastructure and application issues",
                "Integrated Node Exporter for detailed server performance metrics, enhancing visibility into CPU, memory, disk, and network usage.",
                "Configured security settings, implemented backup strategies, and performed regular system audits to maintain server integrity",
                "Managed and optimised servers, including AWS EC2 instances with an average CPU utilisation of 60%.",
                "Implemented PagerDuty alerting system to notify teams of incidents, reducing mean time to recovery",
                "Implemented cloud cost governance using AWS Cost Anomaly Detection and AWS Budgets"
              ]}
            />
            
            <ExperienceCard 
              title="DevOps Engineer"
              company="BillSakshi Solutions"
              period="June 2024 - Aug 2024"
              location="Jaipur, IN"
              projects={["BillSakshi web application"]}
              achievements={[
                "Established AWS EC2 instances via AWS CodePipeline in staging and developer environments.",
                "Implemented Jenkins pipelines for efficient staging server deployments, automating and optimising the release process for enhanced development workflows.",
                "Deployed SSL certificates on Nginx to secure backend server sub-domains, fortifying network security and ensuring encrypted communication.",
                "Configured MySQL and phpMyAdmin with Nginx on Ubuntu, establishing a robust database management system for web applications.",
                "Collaborated on stages of SDLC from requirement gathering to production releases.",
                "Implemented CDN for S3 bucket with CORS policy management, optimising content delivery and ensuring secure data distribution.",
                "Setup python backend using Django framework, leveraging Boto3 for interactions with AWS services.",
                "Developed and Implemented cloud infrastructure automation scripts, reducing deployment by 40% and increasing efficiency by 25%.",
                "Collaborated with other teams to ensure cloud infrastructure met their needs, resulting in a 30% improvement in cross-functional team satisfaction scores.",
                "Improved cross-functional team satisfaction scores by 30%."
              ]}
            />

            <ExperienceCard 
              title="DevOps Service Provider"
              company="Dresma"
              period="Oct 2022 - Apr 2024"
              location="Gurgaon, IN"
              projects={["DoMyShoot app & Web application"]}
              achievements={[
                "Implemented and managed Pimcore, an open-source PIM system using Docker, for efficient data and content management in a production environment.",
                "Orchestrated the deployment of Blender within the production environment, optimising visual contentcreation workflows and enhancing rendering capabilities.",
                "Integrated PagerDuty for streamlined incident response for production environment, to ensure timely response to critical alerts.",
                "Integrated Keycloak for secure authentication and authorisation, ensuring robust security protocols.",
                "Implemented Grafana for visualising metrics, improving system performance tracking and issue diagnosis.",
                "Monitored automated build and continuous software integration process to drive build/release failure resolution.",
                "Successfully deployed Strapi, a headless CMS, optimising content management and ensuring system scalability.",
                "Utilised Jira, and Confluence for project management and collaboration, enhancing team communication and productivity.",
                "Designed and orchestrated the ETL pipeline using AWS Glue to ensure efficient and automated data transformation.",
                "Configured AWS Lambda functions to trigger the ETL process upon the arrival of new files in the S3 bucket.",
                "Automated file clean-up process to dispose of original files post-transformation to optimise storage usage.",
                "Set up and maintained CI/CD pipelines using Jenkins, ensuring streamlined build and deployment processes.",
                "Automated and implemented system backup and recovery procedures.",
                "Managed development, QA, and production environments.",
                "Tuned systems to boost performance."
              ]}
            />

            <ExperienceCard 
              title="DevOps Intern"
              company="Data Template"
              period="Nov 2021 - Sept 2022"
              location="Bangalore, IN"
              projects={["USSD", "Gorrila Games"]}
              achievements={[
                "Contributed to writing Dockerfiles for containerisation and was involved in writing docker-compose files.",
                "Optimised connection testing using ping, telnet, and by checking received packets.",
                "Automated the Continuous Integration and deployment using Jenkins and Docker.",
                "Created Elastic IPs and allocate them to Production Instances.",
                "Launched AWS EC2 instances in multiple availability zones.",
                "Used the S3 Buckets to store the static data (Images & Video).",               
                "Installed and configured the PostgreSQL on the Instance.",
                "Worked on infrastructure using Docker containerisation.",
                "Configured the Nginx server to deploy a react Application.",
                "Created Docker container for the java-based environment."
              ]}
            />
          </div>
        </section>

        {/* Education Section */}
        <section className="container mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold mb-8">Education</h2>
          <div className="space-y-8">
            <div className="bg-gray-800/50 p-6 rounded-xl">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold">Bachelor's of Engineering - CSE</h3>
                  <p className="text-blue-400">Rajiv Gandhi Proudyogiki Vishwavidyalaya</p>
                </div>
                <div className="text-right text-gray-400">
                  <p>2012-2017</p>
                  <p>Bhopal, IN</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 p-6 rounded-xl">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold">Higher Secondary</h3>
                  <p className="text-blue-400">Board of Secondary Education, Bhopal</p>
                </div>
                <div className="text-right text-gray-400">
                  <p>2011-2012</p>
                  <p>Bhopal, IN</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Certification Section */}
        <section className="container mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold mb-8">Certification</h2>
          <div className="bg-gray-800/50 p-6 rounded-xl">
            <h3 className="text-xl font-bold text-blue-400">SAA-CA03 AWS Certified Solutions Architect - Associate</h3>
            <a href="https://drive.google.com/file/d/1E_pv18l9YrfV6qtGi2VK67_xU7U3GIPu/view" className="text-gray-400 hover:text-blue-400 transition-colors">
              View Certificate →
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="container mx-auto px-6 py-8 border-t border-gray-800">
          <div className="text-center text-gray-500">
            © {new Date().getFullYear()} Preetesh Rajput. All rights reserved.
          </div>
        </footer>
      </div>
    </>
  );
}

function SkillCard({ icon, title, skills }) {
  return (
    <div className="bg-gray-800/50 p-6 rounded-xl hover:bg-gray-800 transition-colors">
      <div className="text-blue-400 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <ul className="space-y-2 text-gray-400">
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

function ExperienceCard({ title, company, period, location, projects, achievements }) {
  return (
    <div className="bg-gray-800/50 p-6 rounded-xl hover:bg-gray-800 transition-colors">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="text-blue-400">{company}</p>
        </div>
        <div className="text-right text-gray-400">
          <p>{period}</p>
          <p>{location}</p>
        </div>
      </div>
      <div className="mb-4">
        <h4 className="font-bold text-gray-300 mb-2">Projects:</h4>
        <p className="text-gray-400">{projects.join(", ")}</p>
      </div>
      <div>
        <h4 className="font-bold text-gray-300 mb-2">Key Achievements:</h4>
        <ul className="list-disc list-inside text-gray-400 space-y-1">
          {achievements.map((achievement, index) => (
            <li key={index}>{achievement}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
