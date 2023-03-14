const nameBox = document.querySelector('#namebox');
const descriptionBox = document.querySelector('#descriptionbox');
const content = document.querySelector('#contentbox');

const catsInfo = [
    {
        id: 'walter',
        name: 'Walter',
        age: 4,
        desc: 'When bored: Commits war crimes'
    },
    {
        id: 'beans',
        name: 'Beans',
        age: 5,
        desc: 'When bored: Goes to the gym'
    },
    {
        id: 'walter',
        name: 'Walter',
        age: 2,
        desc: 'When bored: Commits war crimes'
    },
    {
        id: 'walter',
        name: 'Walter',
        age: 4,
        desc: 'When bored: Commits war crimes'
    },
    {
        id: 'walter',
        name: 'Walter',
        age: 4,
        desc: 'When bored: Commits war crimes'
    }
]

const cat = (name) => {
    window.location = './cat.html';
    nameBox.innerHTML = name;
}