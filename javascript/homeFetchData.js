/* Function to fetch the data from the API */
async function getData() {
    let url = 'https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}
/* Function to Display the data in the page */
async function renderData() {
    let info = await getData();
    let sortInfo = info.reverse().slice(0, 3)
    let dataCard = "";
    sortInfo.forEach(element => {
        cardInfo = `<article class="projectsArticle">
                        <img
                            src="${element.image}"
                            alt="Image about ${element.name}" 
                            loading="lazy"
                            class="projectImg"
                           
                        />
                        <div class="project_text">
                            <h3 class="dataTitle">${element.name}</h3>
                            <div class="text dataBody">
                                ${element.content}
                            </div>
                            <a href="../html/projects.html?id=${element.uuid}" class="learnMore">learn more</a>
                        </div>
                    </article>`;
        return dataCard += cardInfo;

    });
    let container = document.querySelector(".projectsArticles");
    container.innerHTML = dataCard;
}

const randomProject = async () => {
    let info = await getData();
    var randomItem = info[Math.floor(Math.random() * info.length)];
    let hrefLink = ` <a href="./html/projects.html?id=${randomItem.uuid}">Projects</a>`;
    let linkContainer = document.querySelector(".navMenu_project")
    linkContainer.innerHTML = hrefLink;
}

window.onload = (() => {
    renderData();
    randomProject();
});




