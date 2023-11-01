let list = document.querySelector("#list");
let list_events = [];

function createItem(event) {
    let p_event = document.createElement("p");
    p_event.innerText = event.event;

    let p_date = document.createElement("p");
    p_date.innerText = event.date;
    console.log(event.date)

    let div = document.createElement("div");
    div.classList.add('item');
    div.appendChild(p_event);
    div.appendChild(p_date);
    return div;
}

function renderItems(events) {
    for (e of events) {
        let htmlItem = createItem(e);
        list.appendChild(htmlItem);
    }
}

document.querySelector("form").addEventListener("submit", (e)=>{
    e.preventDefault();
    let event = {event: e.target['event'].value, date: new Date( e.target['datetime-local'].value)};
    list_events = [...list_events, event];
    list_events = list_events.sort((ev1,ev2)=> ev1.date - ev2.date);
    list.replaceChildren();
    renderItems(list_events);
})