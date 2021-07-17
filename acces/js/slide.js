
        let video = document.getElementsByTagName('video');
        
        let bannerText = document.getElementsByClassName('banner-item');

        var index = 0;

        autoSlide();

        function autoSlide()
        {

            controlSlide('next');

            setTimeout(autoSlide,10000);

        }

        function controlSlide(action)
        {

            video[index].pause();

            bannerText[index].classList.toggle('active');

            video[index].classList.toggle('active');

            if(action == 'pre')
            {
                index = (index - 1 + video.length) % video.length;
            }else{
                index = (index + 1) % video.length;
            }
            
            video[index].play();

            bannerText[index].classList.toggle('active');
            
            video[index].classList.toggle('active');
                    
            
        }

       