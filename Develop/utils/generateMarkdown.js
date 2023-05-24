//An array of objects for each license, contains a link to a description of said license, and a badge for each one.
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
    name: "Boost Software",
    badge: "https://img.shields.io/badge/license-Boost%20Software-red",
    link: "https://choosealicense.com/licenses/bsl-1.0/"
  },
  {
    name: "GNU AGPLv3",
    badge: "https://img.shields.io/badge/license-GNU%20AGPLv3-yellow",
    link: "https://choosealicense.com/licenses/agpl-3.0/"
  },
  {
    name: "GNU GPLv3",
    badge: "https://img.shields.io/badge/license-GNU%20GPLv3-yellow",
    link: "https://choosealicense.com/licenses/gpl-3.0/"
  },
  {
    name: "GNU LGPLv3",
    badge: "https://img.shields.io/badge/license-GNU%20LGPLv3-yellowgreen",
    link: "https://choosealicense.com/licenses/lgpl-3.0/"
  },
  {
    name: "Mozilla Public 2.0",
    badge: "https://img.shields.io/badge/license-Mozilla%202.0-lightgrey",
    link: "https://choosealicense.com/licenses/mpl-2.0/"
  },
  {
    name: "Apache 2.0",
    badge: "https://img.shields.io/badge/license-Apache%202.0-blue",
    link: "https://choosealicense.com/licenses/apache-2.0/"
  },
]


// Merged all 3 starter functions with one that takes the data from the object array, and creates a badge with a link to a description of the lisence. And returns nothing if one isn't chosen. 
function renderLicenseBadge(license) {
  switch (license) {
    case "MIT":
      return  `[![License MIT](${licenseArray[0].badge})](${licenseArray[0].link})`;
      break;
    case "The Unlicense":
      return `[![The Unlicense](${licenseArray[1].badge})](${licenseArray[1].link})`;
      break;
      case "Boost Software":
      return `[![Boost Software](${licenseArray[2].badge})](${licenseArray[2].link})`;
      break;
      case "GNU AGPLv3":
      return `[![GNU AGPLv3](${licenseArray[3].badge})](${licenseArray[3].link})`;
      break;
      case "GNU GPLv3":
      return `[![GNU GPLv3](${licenseArray[4].badge})](${licenseArray[4].link})`;
      break;
      case "GNU LGPLv3":
      return `[![GNU LPGLv3](${licenseArray[5].badge})](${licenseArray[5].link})`;
      break;
      case "Mozilla Public 2.0":
      return `[![Mozilla Public 2.0](${licenseArray[6].badge})](${licenseArray[6].link})`;
      break;
      case "Apache 2.0":
      return `[![Apache 2.0](${licenseArray[7].badge})](${licenseArray[7].link})`;
      break;
      case "No License":
      return " ";
      break;
    default:
      return " ";
  }
}
//small function to add the syntax for an email link in markdown
function emailLink(email){
  return `[my email](mailto:${email})`
}

//function that generates a readme file
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
