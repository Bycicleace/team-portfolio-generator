const fs = require("fs");
const Engineer = require("./Engineer.js");
const Manager = require("./Manager.js");
const Intern = require("./Intern.js");

class HTML {
    content = "";

    buildPage(array) {
        this.writePreContent()              // Appends the section of HTML prior to the cards to `content`
            .then(this.writeCards(array))   // Iterates through array of people objects, and appends HTML as a card for each to `content`
            .then(this.writePostContent())  // Appends the ending of the HTML document to `content`
            .then(this.writeToFile())       // Writes `content` to index.html in the dist folder
            .then(this.copyStyles())        // Copies the src/style.css file to the dist folder.
    }

    writePreContent = () => {
        return new Promise((resolve, reject) => {
            this.content += `<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <!-- Bootstrap CDN -->
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
                <!-- FontAwesome CDN -->
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css" integrity="sha512-YWzhKL2whUzgiheMoBFwW8CKV4qpHQAEuvilg9FAn5VJUDwKZZxkJNuGM4XkWuk94WCrrwslk8yWNGmY1EduTA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
                <!-- Style Sheet -->
                <link rel="stylesheet" href="./style.css">
                <title>Team Portfolio</title>
            </head>
            <body>
                <!-- Row for the top banner -->
                <div class="row">
                    <div class="col">
                        <div class="jumbotron bg-danger text-white p-5">
                            <div class="text-center">
                                <h1>My Team</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container mt-5">
                    <div class="row row-cols-3">
            `
            if (content == '') {
                reject("Pre Content not loaded");
            } else {
                resolve(true);
            }
        });
    }

    writePostContent = () => {
        return new Promise((resolve, reject) => {
            this.content += `
                    </div>
                </div>
                <!-- JQuery CDN for Bootstrap -->
                <script src="https://code.jquery.com/jquery-3.6.0.slim.min.js" integrity="sha256-u7e5khyithlIdTpu22PHhENmPcRdFiHRjhAuHcs05RI=" crossorigin="anonymous"></script>
                <!-- js file for Bootstrap -->
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
            </body>
            </html>
            `

            if (content == '') {
                reject("Post Content not loaded");
            } else {
                resolve(true);
            }
        });
        
    }

    writeCards = array => {
        return new Promise((resolve, reject) => {
            array.forEach(object => {
                // Write typical data up here, then do specific data below.
                this.content += `
                <div class="col">
                        <div class="card mb-2 add-shadow">
                            <div class="card-header bg-primary text-white">
                                <h5>${object.getName()}</h5>
                                <h6><i class="fas fa-glasses me-2"></i>${object.getRole()}</h6>
                            </div>
                            <div class="card-body bg-secondary bg-opacity-10">
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">ID: ${object.getId()}</li>
                                    <li class="list-group-item">Email: ${object.getEmail()}</li>
                                    <li class="list-group-item">`

                if (object instanceof Engineer) {
                    this.content += `GitHub Username: ${object.getGithub()}`
                } else if (object instanceof Manager) {
                    this.content += `Office Number: ${object.officeNumber}`
                } else if (object instanceof Intern) {
                    this.content += `School: ${object.getSchool()}`
                }

                this.content += `</li>
                            </ul>
                        </div>
                    </div>
                </div>
                `
            });

            if (content == '') {
                reject("Person Cards not loaded");
            } else {
                resolve(true);
            }
        });

    }

    writeToFile = () => {
        return new Promise((resolve, reject) => {
            fs.writeFile("dist/index.html", this.content, err => {
                if (err) {
                    reject(err);
                } else {
                    resolve(true);
                }
            });
        })
    }

    copyStyles = () => {
        return new Promise((resolve, reject) => {
            fs.copyFile("src/style.css", "dist/style.css", err => {
                if (err) {
                    reject(err);
                } else {
                    resolve(true);
                }
            })
        })   
    }
}

module.exports = HTML;