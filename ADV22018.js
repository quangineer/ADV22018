document.getElementById('inputfile').addEventListener('change', function () {
    let fr = new FileReader();
    fr.onload = function () {
        // document.getElementById('output').innerHTML = fr.result;
        solution(fr.result);
    }

    fr.readAsText(this.files[0]);
})

function solution (text) {
    splittext = text.split("\n");
    newtext = splittext.filter(element =>{
        return element !=="";
    })
    let arrayedtext = [];
    for (h=0;h<newtext.length;h++){
        arrayedtext.push(newtext[h].split(""));
    }
    
    let hastwo = 0;
    let hasthree = 0; 

    for (j=0;j<arrayedtext.length;j++){
        eachmap = occurence (arrayedtext[j]);
        
        for (let value of eachmap.values()){
            if (value == 2) {
                hastwo ++;
                break;
            }
        }
        for (let value of eachmap.values()){
            if (value == 3) {
                hasthree ++;
                break;
            }
        }


    }    
    console.log (hastwo*hasthree);



}

function occurence (array) {
    let map = new Map();
    
    for (i=0;i<array.length;i++){
        if (map.has(array[i])){
            map.set(array[i], map.get(array[i]) + 1);
        }
        else {map.set(array[i], 1)};
    }
    console.log(map);
    return map;

}