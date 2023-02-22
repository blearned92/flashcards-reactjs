- **Project Title:** Flash Cards ReactJS
- **Description:** I built this project with the purpose of practicing core concepts of Redux Toolkit, with the aim of gaining a deeping understanding of controlling state using stores, actions, and reducers, but also with the intent of implementing Thunks. Redux was not a tool that instantly clicked with me, but this project forced me to excercies those concepts.
The project itself solves the problem of organizing study topics in the form of flashcards, allowing the creating of more study topics, and ability to view the study topics to practice concepts. 
From this project, I learned: 

- **Features:** 
    - feature 1
    - feature 2
- **How to use:** Here, you should write step-by-step instructions on how to install and use your project. Any software or package requirements should also be listed here.
- **Technologies:** List all the technologies and/or frameworks you used and what purpose they serve in your project.
- **Collaborators:** If others have contributed to your project in any way, it is important to give them credit for their work. Write your team members’ or collaborators’ names here along with a link to their GitHub profile.
- **License:** It’s also important to list a license on your README so other developers can understand what they can and cannot do with your project. You can use [this guide](https://choosealicense.com/) to help you choose a license.


# To Run

Run `npm start` in the project root and the app will be available on port 3000.

# State

The app's state is totally normalized, with slices for topics, quizzes, and cards.

# Routes

- `/new-topic` – form to create a new topic
- `/topics` – index of all topics
- `/topics/:topicId` – page for an individual topic
- `/new-quiz` – form to create a new quiz
- `/quizzes` – index of all quizzes
- `/quizzes/:quizId` – page for an individual quiz

# To Test

1. Create topics
2. Create quizzes
3. Visit the page for an individual quiz and flip the cards over

# Questions

Is this appropriately scoped? Does it have too many features? Too few?
