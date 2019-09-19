//--PROJECTS--//
const Projects = [
    {
        id:1,
        title: "Республика САХА",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt cupiditate nostrum dicta, nisi omnis rerum. Labore, cupiditate. Eum ut reiciendis quas! Dignissimos fugiat animi deserunt voluptates minima amet numquam deleniti.",
        img: "img/21.png",
    },
    {
        id:2,
        title: "Газпром",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt cupiditate nostrum dicta, nisi omnis rerum. Labore, cupiditate. Eum ut reiciendis quas! Dignissimos fugiat animi deserunt voluptates minima amet numquam deleniti.",
        img: "img/20.png",
    },
    {
        id:3,
        title: "Nokia",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt cupiditate nostrum dicta, nisi omnis rerum. Labore, cupiditate. Eum ut reiciendis quas! Dignissimos fugiat animi deserunt voluptates minima amet numquam deleniti.",
        img: "img/18.png",
    },
    {
        id:4,
        title: "Цвет вашего комфорта4",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt cupiditate nostrum dicta, nisi omnis rerum. Labore, cupiditate. Eum ut reiciendis quas! Dignissimos fugiat animi deserunt voluptates minima amet numquam deleniti.",
        img: "img/21.png",
    },
    {
        id:5,
        title: "Цвет вашего комфорта5",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt cupiditate nostrum dicta, nisi omnis rerum. Labore, cupiditate. Eum ut reiciendis quas! Dignissimos fugiat animi deserunt voluptates minima amet numquam deleniti.",
        img: "img/20.png",
    },
    {
        id:6,
        title: "Цвет вашего комфорта6",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt cupiditate nostrum dicta, nisi omnis rerum. Labore, cupiditate. Eum ut reiciendis quas! Dignissimos fugiat animi deserunt voluptates minima amet numquam deleniti.",
        img: "img/18.png",
    },
  ]
  
for (let i = 0; i < Projects.length ; i++) {
    const project =  document.getElementById("projects");
    const { id, title, text, img ,more} = Projects[i];
    const projectData = `
                <img src= ${img} id="imd-${id}" class="img" alt="${title}" >
                <div class="overlay"></div>
                <p class="visible-text-more">${text.split('.')[0]}</p>
                <p class="visible-text"> ${title} </p>
                <button class="project__button" data-toggle="modal" data-target="#myModal${i}"> подробнее </button>`

    const modal= `
                <div class="modal" id="myModal${i}">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h4 class="modal-title">${title}</h4>
                                <button type="button" class="close" data-dismiss="modal">&times;</button>
                            </div>
                            <div class="modal-body">
                                <img src= ${img} alt="${title}">
                                <p> ${text} </p>
                            </div>
                        </div>
                    </div>
                </div>`
    

    if(i<3){
        project.innerHTML +=`<picture id="${id}" class="project" data-project="project-${i}" onmouseover="showMore(this);" onmouseout="hideMore(this);">
                                ${projectData}
                            </picture>
                            ${modal}`
    } else{
        project.innerHTML +=`<picture id="${id}" class="project project-none" data-project="project-${i}" onmouseover="showMore(this);" onmouseout="hideMore(this);">
                                ${projectData}
                            </picture>
                            ${modal}`

        let btnText = document.getElementById("myBtn");
        let array = document.getElementById("projects");
        let moreText = document.querySelectorAll(".project-none");
        btnText.onclick = () =>{ 
            for (let i = 0; i < array.childNodes.length; i++) {
                    moreText[i].classList.toggle("project-none")
                    if(btnText.textContent === "Загрузить еще"){
                        btnText.textContent = "Скрыть"
                    }else{
                        btnText.textContent = "Загрузить еще"
                    }
                    
            }
        }
    }
    
    showMore = (obj) => {
        for (let i = 0; i < obj.childNodes.length; i++) {
            if (obj.childNodes[i].className == "project__button") {
              obj.childNodes[i].classList.add("project__button-show")
              notes = obj.childNodes[i].className
            }     
            
        }
    }
    hideMore = (obj) =>{
        for (let i = 0; i < obj.childNodes.length; i++) {
            let liElements = document.querySelectorAll(".project__button-show");
                if (liElements.length > 0) {
                    liElements[0].classList.remove("project__button-show");
                }
        }
    }
}

//--Privacy Policy--//
const txt = document.getElementById("txt");
fetch('http://palashchenko.ru/testing/test30/text.txt')
  .then(response => response.text())
  .then((data) => {
    txt.innerHTML=data
})