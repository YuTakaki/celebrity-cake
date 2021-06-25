const isVisible = (elements) => {
    elements.forEach(element => {
        const position = element.getBoundingClientRect();
        if(position.top <= window.innerHeight && position.bottom >= 0){
            element.classList.add('animate');
        }
    })
    

}

export default isVisible;