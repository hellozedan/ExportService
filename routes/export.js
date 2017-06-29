var express = require('express');
var router = express.Router();
var Nightmare = require('nightmare');
var nightmare = Nightmare({
 show: false
});

/* GET users listing. */
router.get('/', function(req, res, next) {
	nightmare
		.goto('https://lab.brainster-tech.com/research/226/results/overview/summary')

		.evaluate(function () {
			window.localStorage.setItem('ls.authorizationData', '{"token": "ULVk_r1jS_z2OddZYR66346H9SeoeI5K9d52_cLX4L1qUMcu9JtYK5gjOyPKBOilS7nOP5-_nZsDrSanB1WWuVcWkg9PDpdgVSbIwTz7yRdNkV4dXbvjjNT-oA5OfnLGHd8z6xYdcqt2ysPHvQ67ofY9AdLMxAR15HgmSypeJpAmHj-XkDYp2zwmb_Fg_s7XmNK9XYXuwPlSSopSI7Rair0wLfQlwIQUWtFz6UyFhMhq2iii37KdZMe7M4ZjmTRux1OIlvkOm8LrCR5739K2pHUimmuo-hcolnxIsb87w7zLhk844cibrioR0kPFONG48_tKcq_XqBaZfp_0yjhfssGdKDLm8g7jbkktxigUuoth_VL7", "userName": "shahal@brainster-tech.com", "userRole": "PowerUser", "aspNetUserId": "04c746a5-5a6e-4092-9d9f-36e997885ed6", "refreshToken": "338ef9a36c5540fe8f45e7a6262d2936", "useRefreshTokens": true}');
		})

		.refresh()
		.goto('https://lab.brainster-tech.com/research/226/results/overview/summary')
		// .wait('#sss')

		.run(function () {
			console.log('sss')
			record(0,res)
		});


});

function record(i,res) {
	if(i<1)
	{
		nightmare.screenshot(i+'aaaa.jpg').run(
			function () {
				console.log('sss1')
				record(++i,res)
			}
		)
	}
	else
	{
		res.send('respond with a resource');
	}
}

module.exports = router;
