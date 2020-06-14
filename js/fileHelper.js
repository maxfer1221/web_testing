getData();

async function getData(){
    const response = await fetch('csv/blacklivesmatter_05-25_06-12_topTweets_urlSummary_test_file.csv');
    const data = await response.json();
    console.log(data);
}
