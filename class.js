class Poem {
    constructor(author, title, year, body) {
        this.author = author;
        this.title = title;
        this.year = year;
        this.body = body;
        
    }

    makePage(){
        console.log(`
            Title: ${this.title}

            ${this.body}

            Author: ${this.author}
            ${this.year}

        `);
    }

}

const weoresPoem = new Poem("Weöres Sándor", "Énhasadás", 1962, `
Utcasarkon
várok rám,
félórája
is van tán.

Ám értelmem
fölragyog
Nem jövök, mert
itt vagyok.`)


// console.log(weoresPoem.title);

//weoresPoem.makePage()

class ForeignPoem extends Poem{
    constructor(author, title, year, body, translator){
        super(author, title, year, body)
        this.translator = translator
        
    }
    makePage(){
        console.log(`
            Title: ${this.title}

            ${this.body}

            Author: ${this.author}
            Translator: ${this.translator}
            ${this.year}

        `);
    }
}

const weoresPoem2 = new ForeignPoem("Weöres Sándor", "Énhasadás", 1962, `
Utcasarkon
várok rám,
félórája
is van tán.

Ám értelmem
fölragyog
Nem jövök, mert
itt vagyok.`, "Alan Dickson")

weoresPoem2.makePage()