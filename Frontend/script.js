async function shortenUrl() {
    try {

        const url = document.getElementById("urlInput").value;

        if (!url) {
            alert("Please enter a URL");
            return;
        }

        const response = await fetch("url-shortner-production-b706.up.railway.app", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ url })
        });

        const data = await response.json();

        console.log(data);

        if (data.safe === false) {
            document.getElementById("result").innerHTML = `
                <div class="error">
                    URL is unsafe ❌
                </div>
            `;
            return;
        }

        const shortUrl = data.shortUrl.startsWith("http")
            ? data.shortUrl
            : `url-shortner-production-b706.up.railway.app/${data.shortUrl}`;

        document.getElementById("result").innerHTML = `
            <div class="success">
                <h3>✅ URL is Safe</h3>
                <h3>Short URL Generated 🎉</h3>
                <a href="${shortUrl}" target="_blank">
                    ${shortUrl}
                </a>
            </div>
        `;

        const qrContainer = document.getElementById("qrcode");

        qrContainer.innerHTML = "";

        new QRCode(qrContainer, {
            text: shortUrl,
            width: 200,
            height: 200,
            correctLevel: QRCode.CorrectLevel.H
        });

    } catch (error) {

        console.error(error);

        document.getElementById("result").innerHTML = `
            <div class="error">
                Failed to shorten URL ❌
            </div>
        `;
    }
}