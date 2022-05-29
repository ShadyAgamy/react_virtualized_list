import axios from "axios";

export default axios.create({
    baseURL: "https://restcountries.com/v3.1/"
})



var subjects = ["subject1", "subject2", "subject3", "subject4"];

export var data = Array.from(Array(1000)).map(item => {
    var randomBolean = (Math.random() < 0.5).toString();
    console.log(randomBolean)
    return item = {
        "Subject": subjects[Math.floor(Math.random() * subjects.length)],
        "Priority": randomBolean === "true" ? " urgent" : "not urgent",
        "Status": randomBolean,
        "desc": 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae eligendi veritatis distinctio'
    }
})