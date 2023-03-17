(function () {
    const sliders = [...document.querySelectorAll('.slider_body')];
    const arrowAfter = document.querySelector('#after');
    const arrowBefore = document.querySelector('#before');
    let value;

    arrowAfter.addEventListener('click', () => changePosition(1));
    arrowBefore.addEventListener('click', () => changePosition(-1));
    function changePosition(change) {
        let currentElement = Number(document.querySelector('.slider_body--show').dataset.id);
      

        value = currentElement;
        value += change;
        if (value === 0 || value == sliders.length + 1) {
            value = value === 0 ? sliders.length : 1;
        }
        


        sliders[currentElement - 1].classList.toggle('slider_body--show');
        sliders[value - 1].classList.toggle('slider_body--show');
    }
})()