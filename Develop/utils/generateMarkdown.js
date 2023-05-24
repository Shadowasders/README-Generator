const licenseArray = [
  {
    name: "MIT",
    badge: "https://img.shields.io/badge/license-MIT-green",
    link: "https://choosealicense.com/licenses/mit/"
  },
  {
    name: "The Unlicense",
    badge: "https://img.shields.io/badge/license-MIT-green",
    link: "https://choosealicense.com/licenses/mit/"
  },
  {
    name: "MIT",
    badge: "https://img.shields.io/badge/license-MIT-green",
    link: "https://choosealicense.com/licenses/mit/"
  },
  {
    name: "MIT",
    badge: "https://img.shields.io/badge/license-MIT-green",
    link: "https://choosealicense.com/licenses/mit/"
  },
  {
    name: "MIT",
    badge: "https://img.shields.io/badge/license-MIT-green",
    link: "https://choosealicense.com/licenses/mit/"
  },
  {
    name: "MIT",
    badge: "https://img.shields.io/badge/license-MIT-green",
    link: "https://choosealicense.com/licenses/mit/"
  },
  {
    name: "MIT",
    badge: "https://img.shields.io/badge/license-MIT-green",
    link: "https://choosealicense.com/licenses/mit/"
  },
  {
    name: "MIT",
    badge: "https://img.shields.io/badge/license-MIT-green",
    link: "https://choosealicense.com/licenses/mit/"
  },
]


// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "MIT":
      return  `[![License MIT](${licenseArray[0].badge})](${licenseArray[0].link})`;
      break;
    case "The Unlicense":
      return `[![The Unlicense](${licenseArray[1].badge})](${licenseArray[1].link})`;
      break;
      case "The Unlicensed":
      return `[![The Unlicense](${licenseArray[1].badge})](${licenseArray[1].link})`;
      break;
      case "The Unlicensed":
      return `[![The Unlicense](${licenseArray[1].badge})](${licenseArray[1].link})`;
      break;
      case "The Unlicensed":
      return `[![The Unlicense](${licenseArray[1].badge})](${licenseArray[1].link})`;
      break;
      case "The Unlicensed":
      return `[![The Unlicense](${licenseArray[1].badge})](${licenseArray[1].link})`;
      break;
      case "The Unlicensed":
      return `[![The Unlicense](${licenseArray[1].badge})](${licenseArray[1].link})`;
      break;
      case "The Unlicensed":
      return `[![The Unlicense](${licenseArray[1].badge})](${licenseArray[1].link})`;
      break;
    default:
      break;
  }
}

function emailLink(email){
  return `[my email](mailto:${email})`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const { license, title, desc, contribute, test, usage, installation, email} = data;
  return `
${renderLicenseBadge(license)}

  # ${title}

  ### Table of Contents 
  - [Description](#project-description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [How to Contribute](#how-to-contribute)
  - [Testing](#testing)
  - [Contact](#contact)


  ## Project Description
  ${desc}

  ## Installation
  ${installation}

  ## Usage
  ${usage}

  ## How to Contribute
  ${contribute}

  ## Testing
  ${test}

  ## Contact
  Please reach out to ${emailLink(email)} with any further questions!
`;
}

module.exports = generateMarkdown;
