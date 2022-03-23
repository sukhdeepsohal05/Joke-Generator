const joke = document.getElementById('joke'),
jokeBtn = document.getElementById('btn');

const generateJoke = async () =>{
    try{
        const res = await fetch('https://v2.jokeapi.dev/joke/Any?blacklistFlags=racist,sexist,explicit&type=single');
        const data = await res.json();
        setTimeout(() => {
            joke.innerHTML = data.joke;
        }, 200);
        joke.innerHTML = 'Awesome Joke Is Loading...'
    }catch(err){
        console.log(`Error is ${err}`);
    }

}
jokeBtn.addEventListener('click',generateJoke);
generateJoke();