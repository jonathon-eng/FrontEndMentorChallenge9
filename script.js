const button = document.querySelector('button');
const adviceNumber = document.querySelector('#number');
const adviceInfo = document.querySelector('#advice');
const url = 
   { ref   : 'https://api.adviceslip.com/advice'
   , count : 0
   };

window.onload = () => {
    getData();
};

button.addEventListener('click', () => {
    getData();
});


function getData() {
    fetch(`${url.ref}?c=${++url.count}`) 
        .then(response => { 
            return response.json();
        }).then((data) => {
            const moreData = data.slip;
            console.log(moreData);
            let number = moreData.id;
            adviceNumber.innerHTML = number;
            let advice = moreData.advice;
            console.log(advice);
            adviceInfo.innerHTML = advice;
        }).catch(error => {
            console.log('error');
        });
    };

    // const button = document.querySelector('button');
    // const adviceNumber = document.querySelector('#number');
    // const adviceInfo = document.querySelector('#advice');
    // const url = 
    //    { ref   : 'https://api.adviceslip.com/advice'
    //    , count : 0
    //    };
    
    // window.onload = () => {
    //     getData();
    // };
    
    // button.addEventListener('click', () => {
    //     getData();
    // });
    
    
    // function getData() {
    //     fetch('https://api.adviceslip.com/advice') 
    //         .then(response => { 
    //             return response.json();
    //         }).then((data) => {
    //             const moreData = data.slip;
    //             console.log(moreData);
    //             let number = moreData.id;
    //             adviceNumber.innerHTML = number;
    //             let advice = moreData.advice;
    //             console.log(advice);
    //             adviceInfo.innerHTML = advice;
    //         }).catch(error => {
    //             console.log('error');
    //         });
    //     };
    
    