git add .	Stages all changes
git commit -m "..."	Saves a snapshot
git push	Uploads changes to GitHub

change store site url to jamiehwangblack.store
host finished portfolio site on jamiehwangblack.com


FORMAT FOR ARTWORK PAGE

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, initial-scale=1.0">

    <title>TITLE</title>

    <link rel="stylesheet" href="../../style.css">
</head>

<body>

    <h1>TITLE</h1>
    <br>
    <p>MEDIUM, YEAR</p>

    <div class="artwork-detail">

        <img
            src="LINK TO IMAGE"
            alt="TITLE"
        >

        <div class="artwork-description">

            <p>
            ARTWORK DESCRIPTION
            </p>

        </div>

    </div>

    <a href="../../index.html" class="back-link">
        BACK HOME
    </a>

</body>
</html>


FORMAT FOR INDEX.HTML ARTWORK LINK

            <a href="LINK TO HTML ARTWORK PAGE"
               class="artwork">

                <img
                    src="LINK TO IMAGE"
                    alt="TITLE"
                >

                <span class="artwork-label">
                    TITLE (YEAR)
                </span>

            </a>