const person = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
  age: 250,
  country: 'Finland',
  job: 'Instructor and Developer',
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB',
    'Python',
    'D3.js',
  ],
  languages: ['Amharic', 'English', 'Suomi(Finnish)'],
}

/*
Asabeneh Yetayeh lives in Finland. He is  250 years old. He is an Instructor and Developer. He teaches HTML, CSS, JavaScript, React, Redux, Node, MongoDB, Python and D3.js. He speaks Amharic, English and a little bit of Suomi(Finnish)
*/

const getPersonInfo = (person) => {
  console.log(`${person.firstName} ${person.lastName} lives in ${person.country}. He is ${person.age} years old. He is an ${person.job}. He teaches ${person.skills}. He speaks ${person.languages}.`)
  
  let {firstName, lastName, country, age, job, skills, languages} = person;
  let [skill1, skill2, skill3, skill4, skill5, skill6, skill7, skill8, skill9] = skills;
  let [language1, language2, language3] = languages;

  console.log(`${firstName} ${lastName} lives in ${country}. He is ${age} years old. He is an ${job}. He teaches ${skill1}, ${skill2}, ${skill3}, ${skill4}, ${skill5}, ${skill6}, ${skill7}, ${skill8} and ${skill9}. He speaks ${language1}, ${language2} and a little bit of ${language3}.`)
}

getPersonInfo(person)