let meetiing = {
    day: 'monday',
    meetings : 0,
    meetDone : 0
}

let addMeeting = function (todo , meet = 0){
    todo.meetings = todo.meetings + meet
}

let meetDone = function(todo, meet = 0 ){
    todo.meetDone = todo.meetDone + meet
}

let resetDay = function(todo){
    todo.meetings = 0
    todo.meetDone  = 0
}

let endDay = function (todo){
    let meetleft = todo.meetings - todo.meetDone
    return ` You have ${meetleft} meeting today` 

}

addMeeting(meetiing, 4)

addMeeting(meetiing, 2)

meetDone (meetiing, 5)

console.log(endDay(meetiing))
resetDay(meetiing)
console.log(endDay(meetiing))