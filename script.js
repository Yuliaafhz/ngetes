document.getElementById("humanizeBtn").addEventListener("click", async () => {
    const input = document.getElementById("inputText").value;
    const outputDiv = document.getElementById("outputText");
    
    if (!input) {
        outputDiv.innerText = "Tolong masukkan teks!";
        return;
    }

    outputDiv.innerText = "Memproses...";

    try {
        const response = await fetch("https://api.openai.com/v1/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer YOUR_OPENAI_API_KEY" // ganti dengan API Key-mu
            },
            body: JSON.stringify({
                model: "text-davinci-003",
                prompt: `Ubah teks berikut agar terdengar lebih natural dan manusiawi:\n\n${input}`,
                max_tokens: 200
            })
        });
        const data = await response.json();
        outputDiv.innerText = data.choices[0].text.trim();
    } catch (error) {
        outputDiv.innerText = "Terjadi kesalahan: " + error;
    }
});
