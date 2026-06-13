const API = "https://url-shortner-g1we.onrender.com";

async function loadAnalytics() {

    try {

        const response = await fetch(`${API}/analytics`);
        const data = await response.json();

        console.log("Analytics:", data);

        const analyticsDiv =
            document.getElementById("analytics");

        const urls = data.fetchurl || data || [];

        if (!urls.length) {

            analyticsDiv.innerHTML = `
                <div class="analytics-card">
                    <span>No analytics available yet</span>
                </div>
            `;

            return;
        }

        analyticsDiv.innerHTML = urls.map(url => `

            <div class="analytics-card">

                <a
                    href="${url.originalUrl}"
                    target="_blank"
                >

                    ${
                        url.originalUrl.length > 55
                        ? url.originalUrl.substring(0,55) + "..."
                        : url.originalUrl
                    }

                </a>

                <span>
                    ${url.clicks} clicks
                </span>

            </div>

        `).join("");

    }

    catch (error) {

        console.error(
            "Analytics Error:",
            error
        );

        document.getElementById(
            "analytics"
        ).innerHTML = `
            <div class="error">
                Failed to load analytics ❌
            </div>
        `;
    }
}

async function shortenUrl() {

    const button =
        document.getElementById(
            "shortenBtn"
        );

    const result =
        document.getElementById(
            "result"
        );

    const qrContainer =
        document.getElementById(
            "qrcode"
        );

    try {

        const url =
            document
            .getElementById("urlInput")
            .value
            .trim();

        if (!url) {

            result.innerHTML = `
                <div class="error">
                    Please enter a URL ❌
                </div>
            `;

            return;
        }

        button.disabled = true;
        button.textContent = "Loading...";

        const response = await fetch(
            `${API}/shorten`,
            {
                method: "POST",

                headers: {
                    "Content-Type":
                    "application/json"
                },

                body: JSON.stringify({
                    url
                })
            }
        );

        const data =
            await response.json();

        console.log(data);

        if (data.safe === false) {

            result.innerHTML = `
                <div class="error">
                    URL is unsafe ❌
                </div>
            `;

            return;
        }

        if (!data.shortUrl) {

            result.innerHTML = `
                <div class="error">
                    ${
                        data.error ||
                        "Failed to shorten URL"
                    }
                </div>
            `;

            return;
        }

        const shortUrl =
            data.shortUrl.startsWith("http")
            ? data.shortUrl
            : `${API}/${data.shortUrl}`;

        result.innerHTML = `

            <div class="success">

                <h3>
                    ✅ URL Shortened Successfully
                </h3>

                <a
                    href="${shortUrl}"
                    target="_blank"
                >
                    ${shortUrl}
                </a>

                <br>

                <button
                    class="copy-btn"
                    onclick="copyLink('${shortUrl}')"
                >
                    📋 Copy Link
                </button>

            </div>

        `;

        qrContainer.innerHTML = "";

        new QRCode(
            qrContainer,
            {
                text: shortUrl,

                width: 200,
                height: 200,

                correctLevel:
                QRCode.CorrectLevel.H
            }
        );

        loadAnalytics();

    }

    catch (error) {

        console.error(error);

        result.innerHTML = `
            <div class="error">
                Failed to shorten URL ❌
            </div>
        `;
    }

    finally {

        button.disabled = false;
        button.textContent = "Shorten";

    }
}

function copyLink(url) {

    navigator.clipboard
        .writeText(url)
        .then(() => {

            alert(
                "Link copied successfully 🚀"
            );

        })
        .catch(err => {

            console.error(err);

        });
}
window.onload=()=>{
    loadAnalytics()
    setInterval(loadAnalytics,5000)
}
window.addEventListener(
    "load",
    loadAnalytics
);