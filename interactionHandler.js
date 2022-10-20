module.exports = perform = async (sixChar) => {
    const { load } = require('cheerio');
    var axios = require('axios');
    var qs = require('qs');

    let code  = `Hack22-${sixChar}`;

    var data = qs.stringify({
        '_method': 'patch',
        'authenticity_token': process.env.authenticity_token,
        'step': 'contact_information',
        'checkout[reduction_code]': code,
        'checkout[client_details][browser_width]': Math.floor(Math.random()*501 + 500),
        'checkout[client_details][browser_height]': Math.floor(Math.random()*401 + 500),
        'checkout[client_details][javascript_enabled]': '1',
        'checkout[client_details][color_depth]': '24',
        'checkout[client_details][java_enabled]': 'false',
        'checkout[client_details][browser_tz]': '-330' 
    });
    var config = {
        method: 'post',
        url: `https://shop.forem.com/16268507/checkouts/${process.env.someTokenIg}`,
        headers: {
            'cookie': process.env.cookie, 
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data : data
    };

    axios(config).then(function (response) {
        const body = response.data;
        const $ = load(body);
        const used = $('p[class="notice__text"]').text();

        if(used == "This discount has reached its usage limit"){
            console.log("USED CODE FOUND: ", code);
        }
    }).catch( (e)=> {console.log(e)} )
}