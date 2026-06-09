async function shortenUrl() {

    const url = document.getElementById("urlInput").value;

    const result = document.getElementById("result");

    if (!url) {
        result.innerHTML = `
            <div class="error">
                Please enter a URL
            </div>
        `;
        return;
    }

    try {

        result.innerHTML = "Loading...";

        const response = await fetch(
            "http://localhost:3000/shorten",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ url })
            }
        );

        const data = await response.json();

        console.log(data);

        if (response.ok) {

            const generatedUrl =
                `http://localhost:3000/${data.shortUrl}`;

            result.innerHTML = `
                <div class="success">

                    <h3>✅ URL is Safe</h3>

                    <br>

                    <strong>Short URL:</strong>

                    <br><br>

                    <a href="${generatedUrl}" target="_blank">
                        ${generatedUrl}
                    </a>

                    <br><br>

                    <button onclick="copyUrl('${generatedUrl}')">
                        Copy URL
                    </button>

                </div>
            `;

        } else {

            result.innerHTML = `
                <div class="error">
                    ❌ ${data.error}
                </div>
            `;
        }

    } catch (err) {

        console.error(err);

        result.innerHTML = `
            <div class="error">
                Backend not reachable
            </div>
        `;
    }
}

function copyUrl(url) {

    navigator.clipboard.writeText(url);

    alert("Copied!");
}