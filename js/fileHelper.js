var global_article_list = getData()

console.log(global_article_list)

async function getData(url){
    const response = await fetch(url);
    const data = await response.text();
    return data;
}
