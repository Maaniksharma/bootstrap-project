const select = document.querySelector(".card__container");
var newCard=(card) =>{return `<div class="col-sm-12 col-md-6 col-lg-4" id=${
    card.id
}> 
<div class="card mt-4" style="height:420px">
    <h5 class="card-header d-flex justify-content-end gap-2">
        <button type="button" class="btn btn-outline-success">
            <i class="fa-solid fa-pencil"></i>
        </button>
        <button type="button" class="btn btn-outline-danger">
            <i class="fa-solid fa-trash"></i>
        </button>
    </h5>
    <div class="card-body">
        <img src=${
    card.imageUrl
} class="card-img-top" alt="task image">
        <h5 class="card-title mt-2 fw-bold text-primary">${
    card.taskTitle
}</h5>
        <p class="card-text">${
    card.taskDescription
}
        </p>
        <a href="#" class="btn btn-primary">${
    card.taskType
}</a>
    </div>
</div>
</div>`;}
const cardarray = [];
const initialdata=()=> {
    const getdata = localStorage.getItem("cards");
    console.log(getdata);
    var datas = (JSON.parse(getdata)).tasks;
    // datas=datas.tasks;
    datas.map(card=>{select.insertAdjacentHTML("beforeend",newCard(card));
    cardarray.push(card);});}
const makeCard = () => {
    const card = {
        id: `${
            Date.now()
        }`,
        imageUrl: document.getElementById("Image Url").value,
        taskTitle: document.getElementById("Task Title").value,
        taskType: document.getElementById("Task Type").value,
        taskDescription: document.getElementById("Task description").value
    }
    console.log(card);
    select.insertAdjacentHTML("beforeend", newCard(card));
    cardarray.push(card);
    localStorage.setItem("cards", JSON.stringify({tasks: cardarray}))
};
