const fs = require("fs");
const Engineer = require("./Engineer.js");
const Manager = require("./Manager.js");
const Intern = require("./Intern.js");

class HTML {
    content = "";

    buildPage(array) {
        this.writePreContent()
            .then(this.writeCards(array))
            .then(this.writePostContent())
            .then(this.writeToFile())
            .then(this.copyStyles())
    }

    writePreContent = () => {
        return new Promise((resolve, reject) => {
            this.content += `<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css" integrity="sha512-YWzhKL2whUzgiheMoBFwW8CKV4qpHQAEuvilg9FAn5VJUDwKZZxkJNuGM4XkWuk94WCrrwslk8yWNGmY1EduTA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
                <link rel="stylesheet" href="./style.css">
                <title>Team Portfolio</title>
            </head>
            <body>
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
            resolve(true)
        });
    }

    writePostContent = () => {
        return new Promise((resolve, reject) => {
            this.content += `
                    </div>
                </div>
                <script src="https://code.jquery.com/jquery-3.6.0.slim.min.js" integrity="sha256-u7e5khyithlIdTpu22PHhENmPcRdFiHRjhAuHcs05RI=" crossorigin="anonymous"></script>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
            </body>
            </html>
            `

            resolve(true);
        });
        
    }

    writeCards = array => {
        return new Promise((resolve, reject) => {
            array.forEach(object => {
                // Write typical data up here, then do specific data below.
                if (object instanceof Engineer) {
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
                                    <li class="list-group-item">GitHub Username: ${object.getGithub()}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    `
                } else if (object instanceof Manager) {
                    this.content += `
                    <div class="col">
                        <div class="card mb-2 add-shadow">
                            <div class="card-header bg-primary text-white">
                                <h5>${object.getName()}</h5>
                                <h6><i class="fas fa-mug-hot me-2"></i>${object.getRole()}</h6>
                            </div>
                            <div class="card-body bg-secondary bg-opacity-10">
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">ID: ${object.getId()}</li>
                                    <li class="list-group-item">Email: ${object.getEmail()}</li>
                                    <li class="list-group-item">Office Number: ${object.officeNumber}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    `
                } else if (object instanceof Intern) {
                    this.content += `
                    <div class="col">
                        <div class="card mb-2 add-shadow">
                            <div class="card-header bg-primary text-white">
                                <h5>${object.getName()}</h5>
                                <h6><i class="fas fa-user-graduate me-2"></i>${object.getRole()}</h6>
                            </div>
                            <div class="card-body bg-secondary bg-opacity-10">
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">ID: ${object.getId()}</li>
                                    <li class="list-group-item">Email: ${object.getEmail()}</li>
                                    <li class="list-group-item">School: ${object.getSchool()}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    `
                }
            });

            resolve(true);
        });

    }

    writeToFile = () => {
        return new Promise((resolve, reject) => {
            fs.writeFile("dist/index.html", this.content, err => {
                if (err) {
                    console.log(err);
                } else {
                    console.log("File created");
                }
            });
        })
    }

    copyStyles = () => {
        return new Promise((resolve, reject) => {
            fs.copyFile("src/style.css", "dist/style.css", err => {
                if (err) {
                    console.log(err);
                } else {
                    console.log("Styles copied");
                }
            })
        })   
    }
}

module.exports = HTML;