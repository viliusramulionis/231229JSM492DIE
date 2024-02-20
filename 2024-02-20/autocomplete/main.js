// Sukurkite automatinių pasiūlymų generavimą. 
// Jums prireiks masyvo kuriame patalpinta dešimt 
// labiausiai ieškomų frazių google. Sąrašą rasite čia:
// https://explodingtopics.com/blog/top-google-questions

// Į laukelį vartotojas įvedinėja tekstą. Kiekvieno 
// mygtuko paspaudimo metu atlikite paiešką ar vedamas 
// tekstas atitinką kažkurį(iuos) klausimus. Jeigu taip 
// išveskite pasiūlymų sąrašą, kuriame būtų ne daugiau 
// nei 5 pasirinkimai su automatiškai siūloma fraze. 
// Paspaudus ant frazės paieškos laukelyje užpildykite 
// pasirinktą sakinį.

const phrases = [
                    'What is my IP', 
                    'How many weeks in a year', 
                    'How many ounces in a cup', 
                    'How to screenshot on Mac', 
                    'When is the Super Bowl', 
                    'When is Easter', 
                    'When is Father\'s Day', 
                    'What is Juneteenth', 
                    'How do I register to vote', 
                    'When is Thanksgiving'
                ];

document.querySelector('input').addEventListener('keydown', (e) => {
    // console.log(e.target.value)
    const text = e.target.value.toLowerCase();

    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
    const filteredPhrases = phrases
                            .filter(sentence => sentence.toLowerCase().includes(text))
                            .slice(0, 5);
    
    const html = filteredPhrases.map(value => `<li>${value}</li>`).join('');
    
    document.querySelector('.autocomplete').innerHTML = html;

    document.querySelectorAll('li').forEach(el => {
        el.addEventListener('click', (e) => {
            // console.log(e.target.textContent);
            // Naujos reikšmės laukelyje priskyrimas
            document.querySelector('input').value = e.target.textContent;
            // Pasiūlymų išvalymas
            document.querySelector('.autocomplete').innerHTML = '';
        });
    });
});






