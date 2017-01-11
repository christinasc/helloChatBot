<a href="https://claudiajs.com/tutorials/hello-world-chatbot.html">https://claudiajs.com/tutorials/hello-world-chatbot.html</a>

<h3>how to setup:</h3>

<code>
npm init
npm install claudia-bot-builder -S
npm install huh -S  (this is for the huh excuse generator)

</code>

<p>create a file called bot.js as listed on the link above</p>

<h3>Deply bot to AWS:</h3>
<code>
claudia create --region us-east-1 --api-module bot
</code>


<h3>Viber bot configuration</h3>

<ul>
<li>Create a Viber public account, get the token at http://www.viber.com/en/public-accounts
Viber public accounts are in beta. You will need to sign up for both a Viber user account and a public account. 
To create the public account, "tap public on the iOS app", then upper corner is a "write icon", tap that
then "join now" on the Create Public Account page. Then Name your Public account and follow the instructions
Make your own Viber user an admin of the public account.
<li>Use claudia update --configure-viber-bot to configure your bot with it’s Viber access token
</ul>