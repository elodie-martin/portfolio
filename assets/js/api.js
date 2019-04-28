getDataProjets();
getDataExperiences();
getDataFormations();

function getDataProjets() {
    fetch("/api/projets")
        .then((response) => response.json()
            .then((response) => {
                // console.log(response);
                for (let i = 0; i < response.length; i++) {
                    let title = response[i]['title'];
                    let content = response[i]['content'];
                    let link = response[i]['link'];
                    let picture = response[i]['picture'];

                    // var para = document.createElement("p");
                    // var node = document.createTextNode(title);
                    // para.appendChild(node);
                    // var element = document.getElementById("div1");
                    // element.appendChild(para);

                    // console.log(title);
                    for (let j = 0; j < response[i]['technologies'].length; j++) {
                        let technologies = response[i]['technologies'][j]['name'];
                        // console.log(technologies);
                    }
                }
            })
        );
}

function getDataExperiences() {
    fetch("/api/experiences")
        .then((response) => response.json()
            .then((response) => {
                // console.log(response);
                for (let i = 0; i < response.length; i++) {
                    let title = response[i]['title'];
                    let nameCompany = response[i]['nameCompany'];
                    let postCode = response[i]['postCode'];
                    let place = response[i]['place'];
                    let duration = response[i]['duration'];
                    let year = response[i]['year'];
                    let content = response[i]['content'];

                    const circle = document.createElement("div");
                    circle.classList.add("circle", "pb-3");
                    const number = document.createElement("div");
                    number.classList.add("position-relative", "number");
                    const spanNumber = document.createElement("span");
                    spanNumber.classList.add("d-flex", "justify-content-center", "align-items-center", "h-100", "text-center", "font-weight-bold", "mt-1");
                    const regYearDate=/(\d{4}).(\d{2}).(\d{2})/;
                    const matchYearDate=year.match(regYearDate);
                    const dateYear=matchYearDate[1];
                    const textYear = document.createTextNode(dateYear);
                    const circles = document.querySelector('.circles-course');
                    circles.appendChild(circle);
                    circle.appendChild(number);
                    number.appendChild(spanNumber);
                    spanNumber.appendChild(textYear);
                    
                    // console.log(nameCompany);
                    const allNumber = document.querySelectorAll('.number');
                    allNumber[i].addEventListener('click', function () {
                        const partInfosCourse = document.querySelector('.part-infos-course');
                        partInfosCourse.textContent = "";
                        const titleCourse = document.createElement("h4");
                        titleCourse.classList.add("mb-0", "pt-5");
                        const infoCourse = document.createElement("h5");
                        const textCourse = document.createElement("p");
                        textCourse.classList.add("mt-3");
                        const textTitleCourse = document.createTextNode(title);
                        const textInfoCourse = document.createTextNode(duration + ', ' + nameCompany + ', ' + postCode + ' ' + place);
                        const textContentCourse = document.createTextNode(content);
                        partInfosCourse.appendChild(titleCourse);
                        titleCourse.appendChild(textTitleCourse);
                        partInfosCourse.appendChild(infoCourse);
                        infoCourse.appendChild(textInfoCourse);
                        partInfosCourse.appendChild(textCourse);
                        textCourse.appendChild(textContentCourse);        
                    })
                }
                
            })
        );

}



function getDataFormations() {
    fetch("/api/formations")
        .then((response) => response.json()
            .then((response) => {
                // console.log(response);
                for (let i = 0; i < response.length; i++) {
                    let nameEducation = response[i]['nameEducation'];
                    let nameSchool = response[i]['nameSchool'];
                    let postCode = response[i]['postCode'];
                    let place = response[i]['place'];
                    let specialty = response[i]['specialty'];
                    let year = response[i]['year'];
                    let content = response[i]['content'];

                    // console.log(year);

                    const circle = document.createElement("div");
                    circle.classList.add("circle", "pb-3");
                    const number = document.createElement("div");
                    number.classList.add("position-relative", "number");
                    const spanNumber = document.createElement("span");
                    spanNumber.classList.add("d-flex", "justify-content-center", "align-items-center", "h-100", "text-center", "font-weight-bold", "mt-1");
                    const regYearDate=/(\d{4}).(\d{2}).(\d{2})/;
                    const matchYearDate=year.match(regYearDate);
                    const dateYear=matchYearDate[1];
                    const textYear = document.createTextNode(dateYear);
                    const circles = document.querySelector('.circles-course');
                    circles.appendChild(circle);
                    circle.appendChild(number);
                    number.appendChild(spanNumber);
                    spanNumber.appendChild(textYear);
                    
                    // console.log(nameCompany);
                    const allNumber = document.querySelectorAll('.number');
                    allNumber[i].addEventListener('click', function () {
                        const partInfosCourse = document.querySelector('.part-infos-course');
                        // partInfosCourse.textContent = "";
                        const titleCourse = document.createElement("h4");
                        titleCourse.classList.add("mb-0", "pt-5");
                        const infoCourse = document.createElement("h5");
                        const textCourse = document.createElement("p");
                        textCourse.classList.add("mt-3");
                        const textTitleCourse = document.createTextNode(nameEducation);
                        const textInfoCourse = document.createTextNode(nameSchool + ', ' + specialty + ', ' + postCode + ' ' + place);
                        const textContentCourse = document.createTextNode(content);
                        partInfosCourse.appendChild(titleCourse);
                        titleCourse.appendChild(textTitleCourse);
                        partInfosCourse.appendChild(infoCourse);
                        infoCourse.appendChild(textInfoCourse);
                        partInfosCourse.appendChild(textCourse);
                        textCourse.appendChild(textContentCourse);        
                    })
                }
            })
        );
}