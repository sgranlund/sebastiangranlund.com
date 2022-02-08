import sebastian from "../images/Sebastian128x128.jpg";
import Footer from "../COMPONENTS/Footer/footer";
import CV from "react-cv";
import LogoCorner from "../COMPONENTS/logoCorners/logoCorner";

export const WorkPageView = ({ handleOnClick }) => {
  return (
    <div>
      <div className="landingPage">

        <LogoCorner text="SG" onClick= {handleOnClick} />
        <h1 className="title">CV</h1>
        <CV
          personalData={{
            name: "Sebastian Granlund",
            title: "Mechatronics Engineering Student",
            image: sebastian,
            contacts: [
              { type: "email", value: "sgran@kth.se" },
              { type: "phone", value: "+46 732 68 88 83" },
              { type: "location", value: "Stockholm" },
              { type: "website", value: "sebastiangranlund.com" },
              {
                type: "linkedin",
                value: "linkedin.com/in/sebastian-granlund-6a7a8ab1/",
              },
              { type: "github", value: "github.com/sgranlund" },
            ],
          }}
          sections={[
            {
              type: "text",
              title: "Career Profile",
              content:
                "Analytical problem solver who have lost to much sleep trying to solve problems. \nFormer alpine skier who never misses an opportunity to go to the mountains. Creative soul who likes to do things “my way”",
              icon: "usertie",
            },
            {
              type: "common-list",
              title: "Education",
              icon: "graduation",
              items: [
                {
                  title: "Design Engineer 300hp, KTH",
                  authority:
                    "Design and Product realization, Msc in Mechatronics",
                  authorityWebSite:
                    "https://www.kth.se/utbildning/civilingenjor/design-produktframtagning/design-och-produktframtagning-civilingenjor-300-hp-1.4118",
                  rightSide: "2017 - 2022",
                },
                {
                  title: "Summer courses 15hp",
                  authority: "In C++ and beverage knowledge",
                  authorityWebSite: "",
                  rightSide: "2020",
                },
                {
                  title: "Term Abroad University of Bristol",
                  authority: "One term abroad,researching solar panels",
                  authorityWebSite: "https://www.bristol.ac.uk/",
                  rightSide: "2020",
                },
                {
                  title: "Economics, Katedralskolan",
                  authority: "High School, average grade B",
                  authorityWebSite: "https://www.linkoping.se/forskola-och-utbildning/gymnasieskola/kommunala-gymnasieskolor/katedralskolan/",
                  rightSide: "2013-2016",
                },
              ],
            },
            {
              type: "experiences-list",
              title: "Experiences",
              description: "",
              icon: "archive",
              items: [
                {
                  title: "Master Thesis Student",
                  company: "Ocado Technology",
                  description: "Summer internship as Mechatronics Test Engineer. Building and testing prototypes for Ocado Technology.",
                  companyWebSite: "Currently doing a Master Thesis Project at Ocado Technology.",
                  companyMeta: "",
                  datesBetween: "2022.01 - 2022.06",
                  descriptionTags: ["Python", "OnShape","ANSYS"],
                },
                {
                  title: "Test Engineer",
                  company: "Ocado Technology",
                  description: "Summer internship as Mechatronics Test Engineer. Building and testing prototypes for Ocado Technology.",
                  companyWebSite: "https://www.ocadogroup.com/technology/technology-pioneers",
                  companyMeta: "",
                  datesBetween: "2021.05 - 2021.08",
                  descriptionTags: ["Python", "OnShape","Soldering"],
                },
                {
                  title: "Acoustic Engineer",
                  company: "Scania Group",
                  description: "Summer intern at Scania' acoustic department",
                  companyWebSite: "https://www.scania.com/",
                  companyMeta: "",
                  datesBetween: "2019.06 - 2019.09",
                  descriptionTags: ["ArtemiS Suite"],
                },
                {
                  title: "Customer host, Cashier, Storeman",
                  company: "Systembolaget",
                  description: "Advicing customers",
                  companyWebSite: "https://www.citygross.se/",
                  companyMeta: "",
                  datesBetween: "2018.05 - 2019.06",
                },
                {
                  title: "Cashier, Storeman",
                  company: "City Gross",
                  description: "",
                  companyWebSite: "http://someexamplecompany.com",
                  companyMeta: "",
                  datesBetween: "2015.05 - 2017.10",
                },
                {
                  title: "Founder",
                  company: "Twizzly UF",
                  description: "Offered marketing on pizza boxes.",
                  companyWebSite: "",
                  companyMeta: "",
                  datesBetween: "2015.08 - 2016.05",
                },
              ],
            },
            // {
            //   type: "projects-list",
            //   title: "Projects",
            //   description: "Optional",
            //   icon: "tasks",
            //   groups: [
            //     {
            //       sectionHeader: "Company Name",
            //       description: "Optional",
            //       items: [
            //         {
            //           title: "Project",
            //           projectUrl: "optional",
            //           description: "Optional",
            //         },
            //         {
            //           title: "Project",
            //           projectUrl: "optional",
            //           description: "Optional",
            //         },
            //         {
            //           title: "Project",
            //           projectUrl: "optional",
            //           description: "Optional",
            //         },
            //       ],
            //     },
            //   ],
            // },
            {
              type: "experiences-list",
              title: "Projects",
              description: "",
              icon: "tasks",
              items: [
                {
                  title: "",
                  company: "Click here to see all the projects",
                  description: "",
                  companyWebSite: "www.sebastiangranlund.com/#/project",
                  companyMeta: "",
                },
              ],
            },

            {
              type: "experiences-list",
              title: "Comissions of Trust",
              description: "",
              icon: "archive",
              items: [
                {
                  title: "Engineers without borders",
                  company: "",
                  description:
                    "Head of Inspire - responsible for inspiring youth to become engineers",
                  companyWebSite: "",
                  companyMeta: "",
                  datesBetween: "2018.01 - 2018.05",
                  descriptionTags: ["Python"],
                },
                {
                  title: "Kommunikationsnämnden",
                  company: "",
                  description:
                    "Webmaster – responsible web management of Maskinsektionens website.",
                  companyWebSite: "",
                  companyMeta: "",
                  datesBetween: "2020.08 - Present",
                  descriptionTags: ["Raspberry Pi"],
                },
              ],
            },
            {
              type: "common-list",
              title: "Languages",
              icon: "language",
              items: [
                {
                  authority: "English",
                  authorityMeta: "Professional",
                },
                {
                  authority: "Swedish",
                  authorityMeta: "Mother Tongue",
                },
                {
                  authority: "French",
                  authorityMeta: "Beginner",
                },
              ],
            },
            {
              type: "tag-list",
              title: "Skills Proficiency",
              icon: "rocket",
              items: [
                "React",
                "Javascript",
                "CSS",
                "C",
                "C++",
                "Python",
                "Firebase",
                "MatLab",
                "μVision",
                "COMSOL",
                "Ansys",
                "Simulink",
                "ArtemiS Suite",
                "CAD-Solid Edge",
                "Microsoft Office",
                "EduPack",
                "Eagle PCB",
                "Adobe-family",
                "OnShape",
                
              ],
            },
            {
              type: "tag-list",
              title: "Other Merits",
              icon: "cubes",
              items: [
                "B- Drivers license",
                "Svensson Svenfeldts scholarship",
                "First prize Ung Företagsamhet SM 2016",
              ],
            },
          ]}
          branding={false} // or false to hide it.
        />

        <Footer />
      </div>
    </div>
  );
};
