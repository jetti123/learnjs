import fetch from 'node-fetch';
import * as cheerio from 'cheerio';

async function scrapeNedroid() {
    const baseUrl = 'https://nedroid.com/';
    const comicUrls = [
        '?724', '?723', '?707', '?706', '?705', '?704',
        '?703', '?702', '?701', '?700'
    ];

    let comics = [];

    try {
        for (let i = 0; i < comicUrls.length; i++) {
            const comicUrl = new URL(comicUrls[i], baseUrl).href;

            // Fetch the current comic page
            let response = await fetch(comicUrl);
            let body = await response.text();

            // Load the HTML into cheerio
            const $ = cheerio.load(body);

            // Select the comic image
            let img = $('.comic img');

            if (img.length === 0) {
                console.log(`Comic image not found on page ${i + 1}!`);
                continue;
            }

            // Get attributes
            const src = img.attr('src').trim();
            const alt = img.attr('alt');
            const title = img.attr('title');

            // Handling relative URL for src
            const absoluteSrc = new URL(src, baseUrl).href;

            // Store comic data
            comics.push({ src: absoluteSrc, alt: alt, title: title });
        }

        // Display collected comics
        comics.forEach((comic, index) => {
            console.log(`Comic ${index + 1}:`);
            console.log('src:', comic.src);
            console.log('alt:', comic.alt);
            console.log('title:', comic.title);
            console.log('----------------------');
        });

    } catch (error) {
        console.error('Error occurred:', error);
    }
}

scrapeNedroid();


