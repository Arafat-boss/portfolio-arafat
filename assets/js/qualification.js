const qualifications = [
    {
        title: "MERN Stack Web Development",
        year: 2024,
        description: "Complete web development course which included HTML to JavaScript, React, Node/Expressjs, MongoDB etc.",
        institute: {
            name: "Programming Hero",
            shortName: "PHero",
            duration: "Jun 2024 - December 2024"
        }
    },
    {
        title: "Diploma. in Computer Science & Engineering (CSE)",
        year: 2023,
        description: "I have achieved a four-year Diploma in Computer Science & Engineering from Bogra Polytechnic Institute. It was truly a great experience in life.",
        institute: {
            name: "Bogra Polytechnic Institute",
            shortName: "BPI",
            duration: "Nav 2019 - Nav 2022"
        }
    },
    {
        title: "Learning & Earning Development Project (LEDP)",
        year: 2020,
        description: "I have achieved a 6 month long Professional Outsourcing Training hold in 2020 on web design and development -WDD. It was truly a great experience in life.",
        institute: {
            name: "Learning & Earning Development Project",
            shortName: "LEDP",
            duration: "6 month"
        }
    },
    {
        title: "Secondary School Certificate (SSC)",
        year: 2018,
        description: "Achieved a one year Secondary School Certificate in Science from a Gobindagonj high school.",
        institute: {
            name: "Gobindagonj high school",
            shortName: "GHS",
            duration: "Feb 2018 - Feb 2019"
        }
    },
];

const parent = document.getElementById('qualification');

const html = qualifications.map(quali =>
    `<li class="mb-10 ml-4">
        <div class="absolute w-3 h-3 bg-gray-400 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700">
        </div>
        <div class="flex items-center">
            <time class="mb-1 mr-3 px-3 py-2 rounded-md leading-none text-gray-100 bg-blue-500 dark:bg-gray-600">${quali.year}</time>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-200">${quali.title}
                <a href="https://web.programming-hero.com/" target="_blank" class="ml-3">
                    <i class="fa-solid fa-arrow-up-right-from-square fa-2xs"></i>
                </a>
            </h3>
        </div>
        <p class="mb-3 text-base font-normal text-gray-800 dark:text-gray-400">${quali.description}</p>
        <p class="text-base font-light text-gray-800 dark:text-gray-400">
        <span title=${quali.institute.name}>${quali.institute.shortName}</span> &bull; ${quali.institute.duration}
        </p>
    </li>`);

parent.innerHTML = html.join(" ");

