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
/* Function to get the param id of the URL */
const getUrlParam = () => {
    const params = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams) => searchParams.get("id"),
    });
    let value = params.some_key;
    return value;
}
/* Function to Display the data in the page */
async function renderData() {
    let info = await getData();
    let sortInfo = info.reverse();
    let indice = getUrlParam();
    const index = sortInfo.findIndex(object => {
        return object.uuid === indice;
    });
    let mainProject = sortInfo[index];
    let dataProject = "";
    let cardInfo = `<article class="projectPage">
                    <h1>${mainProject.name}</h1>

                    <div class="projectPage_type">
                        <h3>${mainProject.description}</h3>
                        <div>
                            Completed on
                            <time
                                class="projectDate"
                                datetime="2022-02-02 19:00"
                                >${mainProject.completed_on}</time
                            >
                        </div>
                    </div>

                    <article >
                        <div class="image_wrapper">
                            <img
                                src="${mainProject.image}"
                                alt="${mainProject.name} image"
                                loading="lazy"
                                class="projectPage_img"
                            />
                            <img
                                src="${mainProject.image}"
                                alt="${mainProject.name} image"
                                class="projectPage_imgShadow"
                            />
                        </div>
                        <div class="">
                            <div class="project_textDescription">
                             ${mainProject.content} 
                            </div>
                        </div>
                    </article>
                </article>`;
    dataProject += cardInfo;
    let container = document.querySelector(".projectPageSection");
    container.innerHTML = dataProject;

}
/* Function to Display the data in other project section */
const othersProjects = async () => {
    let info = await getData();
    let sortInfo = info.reverse();
    let indice = getUrlParam();
    const index = sortInfo.findIndex(object => {
        return object.uuid === indice;
    });
    let mainProject = sortInfo[index];
    const otherProjecs = sortInfo.filter(
        element => element.uuid !== mainProject.uuid
    );
    let othersData = "";
    otherProjecs.forEach(element => {
        cardInfo = ` <article class="projectsArticle">
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
                    </article>`
        return othersData += cardInfo;
    });
    let container = document.querySelector(".projectsArticles");
    container.innerHTML = othersData;

}

window.onload = (() => {
    renderData();
    othersProjects();
});

