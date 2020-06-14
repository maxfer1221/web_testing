var global_article_list = getData()

console.log(global_article_list)

async function getData(){
    const response = await fetch('csv/blacklivesmatter_05-25_06-12_topTweets_urlSummary_test_file.csv');
    return await response.text();
}
