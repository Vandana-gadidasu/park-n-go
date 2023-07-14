# Google-analytics

Google Analytics is a web analytics service offered by Google that tracks and reports website traffic, currently as a platform inside the Google Marketing Platform brand.

## Pre-requisites

1. Google Analytics account
2. Google Tag Manager account

## Steps to add Google Tag Manager to your project

1.  Go to [Google Tag Manager](https://tagmanager.google.com/).
2.  Click on the `All accounts` tab.
3.  Click on the `Create account` button.
4.  Enter your `Accont Name`
5.  Select your `Country`
6.  Add `Container Name`
7.  Select your `Target Platform` i.e. `Web`
8.  Click on `Create Button`
9.  Accept the `Terms of Service`.

_After creating the account a pop-up will appear.Copy the code and paste in the head and body tag of your html file of your project._

### Publishing Container

First publishing the empty container

1. Go to `Workspace` of google tag manager click on `submit` button.
2. Add `version name` and `publish` the container.
3. Click on `preview` button.
4. Enter your website url in the `URL` field.
5. Click on `start` button.
6. Once you start the preview mode, your can see the website is connected.

## Steps to add Google Analytics to your project

1.  Go to [Google Analytics](https://analytics.google.com/analytics/web/).
2.  Click on the `Admin` tab.
3.  Click on the `Create account` button.
4.  Enter your `Account Name`.
5.  Click on `Next` button.
6.  Enter `Property Name`.
7.  Select your `Country`.
8.  Select your `Currency`.
9.  Create Account.
10. Accept the `Terms of Service`.
11. After creating property select the `Plotform` i.e. `web`.
12. Enter the website url and stream name.
13. Create the Stream.
14. Copy `Measurement Id`.
15. Go to `Google Tag Manager`.
16. Click on `Tags`.
17. Click on `New` button.
18. Enter the `Tag` name (e.g. GA-config-<`Measurement ID`>)
19. Edit `Tag configuration` and select the `google analytics: GA4 analytics`.
20. Paste the `Measurement Id` in the `Measurement ID` field.
21. Edit `Triggering` and select `All Pages`.
22. Click on `Preview` button and enter your website url and start the preview mode.

## Adding Google Tag on Button link Click

1. Click on `triggers`
2. Create a new trigger and click on edit button.
3. Select `Just Links` options resent in clicks.
4. Click on `Preview` button and enter your website url and start the preview mode.
5. In website, if you click on any link or button link it should reflect changes in preview mode.

### Enable variables on link click

1.  Click on `variables`.
2.  Click on `configure`.
3.  Enable all click variables.
4.  If you click on `preview` button and go into preview mode again you should able to variable in `link click`.

## Adding Google Tag on Button Click

1.  Click on `triggers`
2.  Create a new trigger and click on edit button.
3.  Select `All Elements` options resent in clicks.
4.  Click on `Preview` button and enter your website url and start the preview mode.
5.  In website, if you click on any link or button link it should reflect changes in preview mode.
