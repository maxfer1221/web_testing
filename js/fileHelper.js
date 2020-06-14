var global_article_list = getData('csv/blacklivesmatter_05-25_06-12_topTweets_urlSummary_test_file.csv')

console.log(global_article_list)
console.log(global_article_list)

console.log(global_article_list)

console.log(global_article_list)
console.log(global_article_list)
console.log(global_article_list)
console.log(global_article_list)
console.log(global_article_list)
console.log(global_article_list)
console.log(global_article_list)


async function getData(url){
    const response = await fetch(url);
    const data = await response.text();
    console.log(data);
    return data;
}
