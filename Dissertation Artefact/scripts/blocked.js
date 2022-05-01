mainHTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AB Dissertation Project</title>

    <link rel="stylesheet" type="text/css" 
    href="style.css">

    <style>
        table {
            border-collapse: collapse;
        }
        td, th {
            border: 2px solid #dddddd;
            text-align: center;
            padding: 0px;
        }


    </style>
</head>


<body onload="show('main', 'sources')";>
    <div class="wrapper">

        <div class = "main-section">
            <h1>ATTENTION!</h1>
            
            <div class="sub_header">
                <script>
                    function show(shown, hidden) {
                      document.getElementById(shown).style.display='block';
                      document.getElementById(hidden).style.display='none';
                      return false;
                    }
                    window.onload = show('main', 'sources');
                </script>

                <div id="main">
                    <h2>Your data is unsafe!</h2>
                    
                    <div>• By using this site, Facebook will build a personal profile about you. This profile can be used to predict your sexuality, political orientation or even IQ with a 98% accuracy rate.
                    </div>
                    <div>• Facebook keeps track of your location and the people around you at all times - it is doing this in order to more efficiently make money from you.
                    </div>
                    <div>• Third parties, companies that operate on Facebook, can collect your data often without consent from you or Facebook.
                    </div>
                    <div>• Facebook has previously allowed politicians to advertise to specific individuals in order to influence their voting patterns.
                    </div>
                    <div>• Facebook allowed the British consulting firm Cambridge Analytica to harvest the personal information of 87 million users.</div>
                    <div>• Facebook has repeatedly misused your data and abused your personal privacy. Do you still trust them?</div>
                    

                    <a href="#" onclick="return show('sources','main');">Show sources</a>

                    <div class = "final_text">
                        <h3>If you still wish to access the site...</h3>
                        <p>
                            Right click on the extension symbol on the top right of the page, click on 'This can read and change site data', and select 'When you click the extension'.
                        </p>
                    </div>
                </div>

                <div id="sources">
                    <h2>Sources</h2>

                    <div>• Source 1: Kavianpour, S., Tamimi, A. & Shanmugam, B. 2019, "A privacy-preserving model to control social interaction behaviors in social network sites", Journal of Information Security and Applications, vol. 49, pp. 102402.
                    </div>
                    <div>• Source 2: Huo, Y., Chen, B., Tang, J. & Zeng, Y. 2021, "Privacy-preserving point-of-interest recommendation based on geographical and social influence", Information sciences, vol. 543, pp. 202-218.
                    </div>
                    <div>• Source 3: Mansour, R.F. 2016, "Understanding how big data leads to social networking vulnerability", Computers in Human Behavior, vol. 57, pp. 348-351.
                    </div>
                    <div>• Source 4: Reisach, U. 2021, "The responsibility of social media in times of societal and political manipulation", European Journal of Operational Research, vol. 291, no. 3, pp. 906-917.
                    </div>
                    <div>• Source 5: Hinds, J., Williams, E.J. & Joinson, A.N. 2020, "“It wouldn't happen to me”: Privacy concerns and perspectives following the Cambridge Analytica scandal", International journal of human-computer studies, vol. 143, pp. 102498.
                    </div>

                    <a href="#" onclick="return show('main','sources');">Go back</a>
                </div>
            </div>

        </div> <!--main-section-->

    </div> <!--wrapper-->
</body>

</html>`

loadPage(mainHTML)

function loadPage(htmlPage)
{
    document.open()
    document.write(htmlPage)
    document.close()
}

