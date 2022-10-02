text1 = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, odit. Nostrum ipsa alias cum voluptatem. Nihil possimus voluptatibus numquam ut labore corporis, similique tempora non enim ducimus iste modi vitae!'
text2 = "I don't know"

const newText = text => {
    if (text.length <= 20){
       return text
    }else{
       return `${text.slice(0, 20)}...`
    }
    
}

console.log(newText(text1))
console.log(newText(text2))