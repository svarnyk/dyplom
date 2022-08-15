import inquirer from 'inquirer';
import fs from 'fs';

import {dirname} from 'path';
const appDir = dirname(process.argv[1])

const componentQuestions = [
  {
    choices: ['primitives', 'partials'],
    message: 'в яку папку покладемо компонент src/components/?',
    default: 'primitives',
    name: 'type',
    type: 'list',
  },
  {
    message: ' \n!!!!!!!!!!!!!!! \n!!!! УВАГА !!!! \n!!!!!!!!!!!!!!! \nНе використовуйте спецсимволи, тільки літери, вводити в форматі camelCase (myBlock, previewItem)\nВведіть назву компоненту компоненту: ',
    name: 'component',
    type: 'input',
  },
];

new Promise(res => {
  res(inquirer.prompt(componentQuestions));
}).then(({ component, type }) => {
  const componentPath = `${appDir}/src/components/${type}/${component}`;

  if (fs.existsSync(componentPath)) {
    console.log(`комконент ${componentPath} вже існує`);
    return false;
  }
  if (!component){
    console.log('Потрібно ввести ім`я.');
    return false;
  }
  if (component){
    fs.mkdirSync(componentPath, { recursive: true });
    fs.writeFileSync(`${componentPath}/index.jsx`,
`// імпортуємо реакт якщо використовуємо реакт компонент
import React from 'react';

//імпортуємо стилі
import './style.css';

function ${component[0].toUpperCase()}${component.substr(1)}(){
  return <div className="${component[0].toLowerCase()}${component.substr(1)}">тут буде верстка компоненту ${component}</div>
}

export default ${component[0].toUpperCase()}${component.substr(1)};
`
)

    // створюємо файл стилів
    fs.writeFileSync(`${componentPath}/style.css`,
      `.${component[0].toLowerCase()}${component.substr(1)}{
  border: 1px solid red;
}`
    )

    // створюємо сторібук
    fs.writeFileSync(`${componentPath}/${component[0].toLowerCase()}${component.substr(1)}.stories.jsx`,
`import React from "react";

import ${component[0].toUpperCase()}${component.substr(1)} from './index'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "${type}/${component[0].toUpperCase()}${component.substr(1)}",
  component: ${component[0].toUpperCase()}${component.substr(1)},
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
function Template (args) {
  return <${component[0].toUpperCase()}${component.substr(1)} {...args} />
}

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {}
`);
    console.log(`Компонент успішно створено в папці ${appDir}/src/components/${type}/${component}`)
  }
})
