const { getJestProjects } = require('@nrwl/jest');

module.exports = {
  verbose: false,
  projects: getJestProjects(),

  //Font: https://ant.design/docs/react/use-with-create-react-app#Test-with-Jest
  transformIgnorePatterns: [
    `/node_modules/(?!antd|@ant-design|rc-.+?|@babel/runtime).+(js|jsx)$`,
  ],
};
