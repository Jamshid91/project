const rangeInputs = document.querySelectorAll('input[type="range"]'),
                 easys = document.querySelectorAll('.easy'),
                 mediums = document.querySelectorAll('.medium'),
                 noEasys = document.querySelectorAll('.no-easy'),
                 hards = document.querySelectorAll('.hard');
                 
            rangeInputs.forEach(input => {
                input.addEventListener('input', (e)=> {
                    let target = e.target
                    const min = target.min
                    const max = target.max
                    const val = target.value
                    
                    target.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%'

                    if(val == 0) {
                        input.previousElementSibling.innerText = 'Легко'
                    } else if(val == 1) {
                        input.previousElementSibling.innerText = 'Средне'
                    }else if(val == 2) {
                        input.previousElementSibling.innerText = 'Непросто'
                    } else {
                        input.previousElementSibling.innerText = 'Сложно'
                    }
                })
            });

            easys.forEach(easy => {
                easy.addEventListener('click', () => {
                    let inp = easy.parentElement.previousElementSibling.lastElementChild;
                    let inpVal = easy.parentElement.previousElementSibling.firstElementChild;
                    inpVal.innerText = easy.innerText
                    inp.value = 0;
                    if(inp.value == 0) {
                        console.dir(inp)
                        inp.style.backgroundSize = '0%'
                    }
                })
            });

            mediums.forEach(medium => {
                medium.addEventListener('click', () => {
                    let inp = medium.parentElement.previousElementSibling.lastElementChild;
                    let inpVal = medium.parentElement.previousElementSibling.firstElementChild;
                    inpVal.innerText = medium.innerText
                    inp.value = 1;
                    if(inp.value == 1) {
                        console.dir(inp)
                        inp.style.backgroundSize = '33%'
                    }
                })
            });

            noEasys.forEach(noEasy => {
                noEasy.addEventListener('click', () => {
                    let inp = noEasy.parentElement.previousElementSibling.lastElementChild;
                    let inpVal = noEasy.parentElement.previousElementSibling.firstElementChild;
                    inpVal.innerText = noEasy.innerText
                    inp.value = 2;
                    if(inp.value == 2) {
                        console.dir(inp)
                        inp.style.backgroundSize = '66%'
                    }
                })
            });
            
            hards.forEach(hard => {
                hard.addEventListener('click', () => {
                    let inp = hard.parentElement.previousElementSibling.lastElementChild;
                    let inpVal = hard.parentElement.previousElementSibling.firstElementChild;
                    inpVal.innerText = hard.innerText
                    inp.value = 3;
                    if(inp.value = 3) {
                        console.dir(inp)
                        inp.style.backgroundSize = '100%'
                    }
                })
            });