// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)<br />

  ## Description

  📖 ${data.description}

  ## 📂 List of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [License](#license)
  * [Questions](#questions)
  

  ## Installation

  💾 ${data.installation}

  ## Usage

  💽 ${data.usage}

  ## How to Contribute

  🤝 ${data.contribute}

  ## Tests

  🛠️ ${data.test}

  ## License

  📝 ![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)
  <br />
  This application is covered by the ${data.license} license.

  ## Questions

  ✉️ If you have any questions, please contact me:
  GitHub: [@${data.name}] (https://github.com/${data.name})<br />
  E-mail: ${data.email}





`;
}

module.exports = generateMarkdown;

