function Poem({authorData, titleData, yearData, bodyData}){
    this.author = authorData;
    this.title = titleData;
    this.year = yearData;
    this.body = bodyData;
    this.makePage = function (){
        console.log(`
            Title: ${this.title}

            ${this.body}

            Author: ${this.author}
            ${this.year}

        `);
    }

}




const poemData = {
    authorData: "Weöres Sándor",
    titleData: "Énhasadás",
    yearData: 2015,
    bodyData: `
                Utcasarkon
                várok rám,
                félórája
                is van tán.

                Ám értelmem
                fölragyog
                Nem jövök, mert
                itt vagyok.`
}
Poem.prototype.lang = "hungarian"
const weoresPoem = new Poem(poemData)

/* 
weöresPoem.favBy = "András Ránki"


console.log(weöresPoem.favBy);

console.log(Poem);
 */
/* 
console.log(weoresPoem.__proto__);
console.log(Poem.prototype);
 */

weoresPoem.makePage()