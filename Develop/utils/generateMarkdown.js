const licenseArray = [
  {
    name: "MIT",
    badge: "https://img.shields.io/badge/license-MIT-green",
    link: "https://choosealicense.com/licenses/mit/"
  },
  {
    name: "The Unlicense",
    badge: "https://img.shields.io/badge/license-The%20Unlicense-green",
    link: "https://choosealicense.com/licenses/unlicense//"
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


// Merged all 3 starter functions with one that takes the data from the object array, and creates a badge with a link to a description of the lisence. And returns nothing if one isn't chosen. 
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
