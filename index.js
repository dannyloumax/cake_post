const container = document.getElementsByClassName('container')[0];
const colors = ['red', 'blue', 'green'];

function clickHandler() {
    container.style.backgroundColor = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
}

