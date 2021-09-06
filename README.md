# noble-twitter

Nobull Twitter is a way to get a daily update for the Twitter accounts you care about. You see every tweet just like on Twitter, but without any of the ads, retweets, or likes that get in the way of your experience. All of this in a fast and easy to digest format, delivered straight to your email inbox. 

A web app allows the user to create a Nobull account and choose which Twitter accounts they want to follow. This account information is stored using MongoDB Atlas. In order to send the daily newsletter, an AWS lambda function is run everyday. This function interfaces with the Twitter API to generate reports for Twitter accounts that users have followed and then sends an email to each Nobull user with the reports they requested.

Check it out [here](https://nobulltwitter.com/)!
