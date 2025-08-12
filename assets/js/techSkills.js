const techSkills = [
  {
    title: "Languages",
    skills: [
      {
        icon: `<i class="fa-brands fa-square-js text-yellow-300"></i>`,
        name: "JavaScript",
        label: "Expert",
      },
      {
        icon: `
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#3178C6" style="display:inline;vertical-align:middle;margin-right:4px">
      <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm12.29 9.75h8.602v2.25h-3.202v9.75h-2.25v-9.75H13.414zm-6.205 0h6.205v2.25H9.64v7.5h4.166v2.25H7.085z"/>
    </svg>
  `,
        name: "TypeScript",
        label: "Intermediate",
      },
      {
        icon: `<i class="fa-brands fa-html5 fa-lg text-red-600"></i>`,
        name: "HTML5",
        label: "Expert",
      },
      {
        icon: `<i class="fa-brands fa-css3-alt fa-lg text-blue-600"></i>`,
        name: "CSS3",
        label: "Expert",
      },
    ],
  },
  {
    title: "Front-end",
    skills: [
      {
        icon: `<i class="fa-brands fa-react text-blue-500"></i>`,
        name: "React",
        label: "Expert",
      },
      {
        icon: `<i class="fa-solid fa-fire text-yellow-300"></i>`,
        name: "Firebase",
        label: "Expert",
      },
      {
        icon: `<i class="fa-brands fa-bootstrap text-purple-500"></i>`,
        name: "Bootstrap",
        label: "Expert",
      },
      {
        icon: `<i class="fa-solid fa-code fa-xs text-blue-400"></i>`,
        name: "Tailwind",
        label: "Expert",
      },
    ],
  },
  {
    title: "Back-end",
    skills: [
      {
        icon: `<i class="fa-brands fa-node fa-sm text-green-600"></i>`,
        name: "Node.js",
        label: "Expert",
      },
      {
        icon: `<i class="fa-brands fa-node-js text-green-600"></i>`,
        name: "Express.js",
        label: "Expert",
      },
    ],
  },
  {
    title: "Database",
    skills: [
      {
        icon: `<i class="fa-solid fa-server fa-xs text-green-700"></i>`,
        name: "MongoDB",
        label: "Expert",
      },
      {
        icon: `<i class="fa-solid fa-server fa-xs text-green-700"></i>`,
        name: "Mongoose",
        label: "Expert",
      },
      {
        icon: `<i class="fa-solid fa-server fa-xs text-green-700"></i>`,
        name: "PostgreSQL",
        label: "Intermediate",
      },
    ],
  },
  {
    title: "Dev Tools",
    skills: [
      {
        icon: `<i class="fa-brands fa-git text-yellow-500"></i>`,
        name: "Git",
        label: "Expert",
      },
      {
        icon: `<i class="fa-brands fa-github"></i>`,
        name: "GitHub",
        label: "Expert",
      },
      {
        icon: `<i class="fa-sharp fa-solid fa-laptop-code fa-xs text-blue-500"></i>`,
        name: "VS",
        label: "Expert",
      },
    ],
  },
  {
    title: "Design Tools",
    skills: [
      {
        icon: `<i class="fa-solid fa-bezier-curve fa-xs text-yellow-400"></i>`,
        name: "Canva",
        label: "Intermediate",
      },
      {
        icon: `<i class="fa-solid fa-bezier-curve fa-xs text-orange-600"></i>`,
        name: "Adobe Illustrator",
        label: "Junior",
      },
      {
        icon: `<i class="fa-brands fa-figma  text-orange-400"></i>`,
        name: "Figma",
        label: "Junior",
      },
      {
        icon: `<i class="fa-solid fa-file-powerpoint  text-blue-400"></i>`,
        name: "MS PowerPoint",
        label: "Expert",
      },
    ],
  },
];
const parent = document.getElementById("tech-skills");

const getSkill = (skills) => {
  const skillHtml = skills.map(
    (skill) =>
      `<p class="text-md text-gray-700 dark:text-gray-200">
            ${skill.icon}
            ${skill.name}
            <code class="text-sm text-gray-500 dark:text-gray-300">${skill.label}</code>
        </p>`
  );

  return skillHtml.join(" ");
};

const html = techSkills.map(
  (tech) =>
    `<div>
        <h2 class="text-xl font-medium text-gray-800 dark:text-gray-100 mb-2">${
          tech.title
        }</h2>
        ${getSkill(tech.skills)}
    </div>`
);

parent.innerHTML = html.join(" ");
