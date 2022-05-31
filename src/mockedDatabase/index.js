var subjects = ["subject1", "subject2", "subject3", "subject4"];

export var data = Array.from(Array(1000)).map(item => {
    var randomBolean = (Math.random() < 0.5);
    return item = {
        "subject": subjects[Math.floor(Math.random() * subjects.length)],
        "priority": randomBolean ? "Urgent" : "Not urgent",
        "status": randomBolean ? "Open" : "Closed",
        "description": 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae eligendi veritatis distinctio'
    }
})

export let ticketLength = data.length;

export const getSingleTicket = id => {
    return data[id]
}

export const addNewTicket = ticket => {
    data.push(ticket);
    ticketLength = data.length;
}

export const updateTicket = (index, newValues) => {
    data[index] = newValues
}