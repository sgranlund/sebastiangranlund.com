import bground from "../images/bground.jpeg";
import { ReactComponent as Logo } from "../images/homebutton.svg";
import Footer from "../COMPONENTS/footer";
import CV from "react-cv";
export const WorkPageView = ({ handleOnClick }) => {
  return (
    <div>
      <div className="landingPage">
        <h2 className="title">Sebastian Granlund</h2>
        <Logo id="homeButton" onClick={handleOnClick} />

        <CV
          personalData={{
            name: "John Doe",
            title: "Senior Software Developer",
            image: "https://bulma.io/images/placeholders/128x128.png",
            contacts: [
              { type: "email", value: "john@example.com" },
              { type: "phone", value: "+00 (123) 456 78 90" },
              { type: "location", value: "New York" },
              { type: "website", value: "example.com" },
              { type: "linkedin", value: "linkedin.com/in/notexists" },
              { type: "twitter", value: "twitter.com/404" },
              { type: "github", value: "github.com/404" },
            ],
          }}
          sections={[
            {
              type: "text",
              title: "Career Profile",
              content: "When I was child, I always want to be a developer.",
              icon: "usertie",
            },
            {
              type: "common-list",
              title: "Education",
              icon: "graduation",
              items: [
                {
                  title: "Computer Engineering (BS)",
                  authority: "University",
                  authorityWebSite: "https://sample.edu",
                  rightSide: "2013 - 2017",
                },
                {
                  title: "Some Department (PHD)",
                  authority: "Another University",
                  authorityWebSite: "https://sample.edu",
                  rightSide: "2017 - Present",
                },
              ],
            },
            {
              type: "experiences-list",
              title: "Experiences",
              description: "Optional",
              icon: "archive",
              items: [
                {
                  title: "Lead Software Developer",
                  company: "Some Company Example INC",
                  description: "I'm working as a lead developer yeeeey!",
                  companyWebSite: "http://somecompanyexample.com",
                  companyMeta: "",
                  datesBetween: "2017.10 - Present",
                  descriptionTags: ["Javascript", "React"],
                },
                {
                  title: "Software Developer",
                  company: "Some Company Example INC",
                  description:
                    "I'm using ReactJS and working as a front-end developer",
                  companyWebSite: "http://somecompanyexample.com",
                  companyMeta: "Little info about company",
                  datesBetween: "2016.8 - 2017.10",
                },
                {
                  title: "Intern",
                  company: "Some Software Example INC",
                  description: "I was warming up.",
                  companyWebSite: "http://someexamplecompany.com",
                  companyMeta: "SF USA",
                  datesBetween: "2012.06 - 2012.10",
                },
              ],
            },
            {
              type: "projects-list",
              title: "Projects",
              description: "Optional",
              icon: "tasks",
              groups: [
                {
                  sectionHeader: "Company Name",
                  description: "Optional",
                  items: [
                    {
                      title: "Project",
                      projectUrl: "optional",
                      description: "Optional",
                    },
                    {
                      title: "Project",
                      projectUrl: "optional",
                      description: "Optional",
                    },
                    {
                      title: "Project",
                      projectUrl: "optional",
                      description: "Optional",
                    },
                  ],
                },
              ],
            },
            {
              type: "common-list",
              title: "Conferences & Certificates",
              description: "",
              icon: "comments",
              items: [
                {
                  title: "Some Conferences / 2019",
                  authority: "SomeConf",
                  authorityWebSite: "https://www.someconf.somesome",
                },
                {
                  title: "Some Conferences / 2019",
                  authority: "SomeConf",
                  authorityMeta: "Speaker",
                  authorityWebSite: "https://www.someconf.somesome",
                  rightSide: "test",
                },
                {
                  title: "Some Conferences / 2012",
                  authorityMeta: "Speaker",
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
                  authority: "Spanish",
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
                "SQL",
                "SomeTech",
                "CoolTech",
              ],
            },
            {
              type: "tag-list",
              title: "Hobbies & Interests",
              icon: "cubes",
              items: ["Photography", "Poetry"],
            },
          ]}
          branding={false} // or false to hide it.
        />

        <Footer />
      </div>
    </div>
  );
};
