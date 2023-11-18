import { modules, students, mentors, classes } from "./hyf.js";

/**
 * Tjebbe would like help to get a list of possible mentors for a module.
 * Fill in this function that finds all the mentors that can teach the given module.
 *
 * It should return an array of names. So something like:
 *  ['John', 'Mary']
 */
const possibleMentorsForModule = (moduleName) => {
  let mentorList = [];

  mentorList = mentors.filter((mentor) => mentor.canTeach.includes(moduleName));

  const mentorsNames = mentorList.map((mentor) => mentor.name);
  return mentorsNames;
};

// You can uncomment out this line to try your function
console.log(possibleMentorsForModule('using-apis'));

/**
 * Tjebbe wants to make it even easier for himself.
 * Fill in this function that chooses a random mentor to teach the given module.
 *
 * It should return a single name.
 */
const findMentorForModule = (moduleName) => {
  // Filter mentors who can teach the specified module
  const availableMentors = mentors.filter((mentor) => mentor.canTeach.includes(moduleName));

  // Check if there are mentors available for the module
  if (availableMentors.length === 0) {
    return 'No available mentors for this module';
  }

  // Choose a random mentor from the available ones
  const randomMentor = availableMentors[Math.floor(Math.random() * availableMentors.length)];

  // Return the name of the chosen mentor
  return randomMentor.name;
};
// You can uncomment out this line to try your function
console.log(findMentorForModule('javascript'));
