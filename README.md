<a href="https://claudiajs.com/tutorials/hello-world-chatbot.html">https://claudiajs.com/tutorials/hello-world-chatbot.html</a>

<h3>how to setup:</h3>

<h4>Prerequisites</h4>

<ul>
<li>Node.js 4.3.2
<li>NPM
<li>An AWS account with the permissions to create Lambda functions, API Gateway end-points and IAM roles.
The IAM role name is created when you install your claudia bot builder - see npm commands below.
Make sure your IAM role include these 3 Managed Policies or else it will NOT WORK. You Have to login to AWS in order to setu this up before deploying the bot to AWS:
<ul>
<li>1. AWSLambdaFullAccess
<li>2. IAMFullAccess
<li>3. AmazonAPIGatewayAdministrator
</ul>
<li>Claudia.js 1.4.0 or later
</ul>

<code>
<ul>
<li>npm init
<li>npm install claudia-bot-builder -S
<li>npm install huh -S  (this is for the huh excuse generator)
</ul>
</code>

<p>create a file called bot.js as listed on the link above</p>

<h3>Deply bot to AWS:</h3>
<code>
claudia create --region us-east-1 --api-module bot
</code>


<h3>Viber bot configuration</h3>

<ul>
<li>Create a Viber public account, get the token at http://www.viber.com/en/public-accounts
<p>Viber public accounts are in beta. You will need to sign up for both a Viber user account and a public account. 
To create the public account, "tap public on the iOS app", then upper corner is a "write icon", tap that
then "join now" on the Create Public Account page. Then Name your Public account and follow the instructions
Make your own Viber user an admin of the public account.</p>
<li>Use claudia update --configure-viber-bot to configure your bot with it’s Viber access token
</ul>