
const nameComponent = (
<div id ="out">
        <h2 id = "name_comp">Anuj Kawane</h2>
</div>
);

const pictureComponent = (
    <div id = "picture_out">
        <img id = "picture_comp" src = "./image.jpg"/>
    </div>
);

const introComponent = (
    <div id= "intro_out">
        <p id = "intro_comp">
        Hi there,
        I'm Anuj Kawane a MSCS graduate at San Diego State University. 
        </p>
    </div>    
);

const buttonComponent = (
    <div id= "button_out">
        <a href="https://github.com/anujkawane"><button id= "button_comp">VIEW MY GITHUB REPO</button></a>
    </div>

);

ReactDOM.render(nameComponent, document.getElementById('name'));
ReactDOM.render(pictureComponent, document.getElementById('picture'));
ReactDOM.render(introComponent, document.getElementById('introduction'));
ReactDOM.render(buttonComponent, document.getElementById('button'));