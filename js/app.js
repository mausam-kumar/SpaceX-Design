(function () {

    let socials = document.querySelectorAll('.social div')

    socials.forEach(function(social,index){
        social.style.animation = `moveIn 0.6s cubic-bezier(.51,.92,.24,1.15) forwards ${index/5+0.2}s`;
    })

    let rocketPices = document.querySelectorAll('.rocket-body span')
    let rocket = document.querySelector('.rocket')

    let triggerStart = window.innerHeight / 5;

    let rocketOffsetTop = rocket.offsetTop;

    let thirdOffsetTop = rocketPices[2].offsetTop;

    document.addEventListener('scroll', (e) =>{
        if (window.scrollY > (rocketOffsetTop - triggerStart)){
            rocketPices[0].classList.add('active');
            rocketPices[1].classList.add('active');
            
        }
        else{
            rocketPices[0].classList.remove('active');
            rocketPices[1].classList.remove('active');
            
        }

        if (window.scrollY > (thirdOffsetTop-triggerStart)){
            rocketPices[2].classList.add('active');
        }
        else{
            rocketPices[2].classList.remove('active');
        }
    })

}())