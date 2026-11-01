let jobs = [
  {
    id: 1,
    companyName: "TechNova Solutions",
    position: "Frontend Developer",
    location: "Dhaka, Bangladesh",
    type: "Full-time",
    salary: "৳40,000 - ৳60,000",
    description:
      "We are looking for a passionate Frontend Developer with experience in React, JavaScript, HTML, and CSS to build responsive and user-friendly web applications.",
  },
  {
    id: 2,
    companyName: "Creative Pixel",
    position: "UI/UX Designer",
    location: "Remote",
    type: "Remote",
    salary: "৳35,000 - ৳50,000",
    description:
      "Join our design team to create intuitive user interfaces, wireframes, and prototypes using Figma while improving the overall user experience.",
  },
  {
    id: 3,
    companyName: "CodeCraft Ltd.",
    position: "MERN Stack Developer",
    location: "Chittagong, Bangladesh",
    type: "Full-time",
    salary: "৳50,000 - ৳80,000",
    description:
      "We need a MERN Stack Developer who can develop scalable web applications using MongoDB, Express.js, React, and Node.js.",
  },
  {
    id: 4,
    companyName: "DigitalWave Agency",
    position: "Junior Web Developer",
    location: "Dhaka, Bangladesh",
    type: "Internship",
    salary: "৳15,000 - ৳20,000",
    description:
      "An excellent opportunity for beginners to gain practical experience in web development, collaborate with senior developers, and improve coding skills.",
  },
  {
    id: 5,
    companyName: "CloudBridge Technologies",
    position: "Backend Developer",
    location: "Remote",
    type: "Remote",
    salary: "৳60,000 - ৳90,000",
    description:
      "We are seeking a Backend Developer experienced in Node.js, REST APIs, database management, authentication, and server-side application development.",
  },
  {
    id: 6,
    companyName: "NextGen Software",
    position: "Full Stack Developer",
    location: "Sylhet, Bangladesh",
    type: "Full-time",
    salary: "৳55,000 - ৳85,000",
    description:
      "Build and maintain full-stack web applications, integrate APIs, optimize performance, and work closely with designers and other developers.",
  },
  {
    id: 7,
    companyName: "Bright Future IT",
    position: "JavaScript Developer",
    location: "Dhaka, Bangladesh",
    type: "Part-time",
    salary: "৳25,000 - ৳40,000",
    description:
      "We are looking for a JavaScript Developer who understands ES6+, asynchronous programming, DOM manipulation, and modern frontend development practices.",
  },
  {
    id: 8,
    companyName: "Skyline Innovations",
    position: "React Developer",
    location: "Remote",
    type: "Contract",
    salary: "৳45,000 - ৳70,000",
    description:
      "Develop reusable React components, manage application state, integrate REST APIs, and create responsive interfaces for modern web applications.",
  },
];
let interviewJobsArray = [];
let rejectedJobsArray = [];

// get elements
let totalJobs = document.querySelector("#totalJobs");
let interviewJobs = document.querySelector("#interviewJobs");
let rejectedJobs = document.querySelector("#rejectedJobs");

// set jobs length
totalJobs.innerText = jobs.length;
interviewJobs.innerText = interviewJobsArray.length;
rejectedJobs.innerText = rejectedJobsArray.length;

// display job cards
function displayJobs(jobs) {
  const jobsContainer = document.querySelector("#jobsContainer");
  jobsContainer.innerHTML = ``;

  for (const job of jobs) {
    jobsContainer.innerHTML += `
      <!-- job card -->
          <div id=${job.id} class="bg-slate-600 p-3 space-y-5">
            <!-- job title -->
            <div class="flex justify-between items-center">
              <div>
                <h3 class="text-3xl capitalize font-medium">${job.companyName}</h3>
                <p class="text-base capitalize">${job.position}</p>
              </div>
              <div id="deleteBtn"
                onclick="deleteJobCard(${job.id})"
                class="w-10 h-10 flex justify-center items-center hover:bg-red-500 cursor-pointer bg-slate-500 rounded-full"
              >
                <i class="fa-solid fa-trash"></i>
              </div>
            </div>

            <!-- options -->
            <ul class="flex flex-col">
              <li class="capitalize">location: ${job.location}</li>
              <li class="capitalize">type: ${job.type}</li>
              <li class="capitalize">salary: ${job.salary}</li>
            </ul>

            <!-- applied button -->
            <div class="space-y-1">
              <button class="text-base bg-slate-500 px-4 py-1.5 rounded-md uppercase font-medium">not applied</button>
              <p class="capitalize">${job.description}</p>
            </div>

            <!-- interview btn and rejected btn -->
            <div class="flex gap-4">
              <button
                class="text-base uppercase px-4 py-1.5 border-2 border-green-500 rounded-md font-medium text-green-500 hover:bg-green-500 hover:text-white cursor-pointer"
              >
                interview
              </button>

              <button
                class="text-base uppercase px-4 py-1.5 border-2 border-red-500 rounded-md font-medium text-red-500 hover:bg-red-500 hover:text-white cursor-pointer"
              >
                rejected
              </button>
            </div>
          </div>
    `;
  }
}

// delete job btn
function deleteJobCard(id) {
  const remainingJobs = [];
  for (const job of jobs) {
    if (job.id !== id) {
      remainingJobs.push(job);
    }
  }
  jobs = remainingJobs;
  displayJobs(remainingJobs);
  totalJobs.innerText = jobs.length;
}

displayJobs(jobs);
