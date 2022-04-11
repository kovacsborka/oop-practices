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

// console.log(poemData.authorData);

const poemDataAuthor = poemData.authorData
const poemDataYear = poemData.yearData

// console.log(poemDataAuthor);
// console.log(poemDataYear);

/*
 const {yearData, authorData} = poemData
*/




function funWithPoemData({yearData, authorData}) {
    console.log(yearData);
    console.log(authorData);
    
}

funWithPoemData(poemData)
