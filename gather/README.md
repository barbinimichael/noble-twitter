# gather

`gather` is run daily in order to gather all the tweets for accounts requested by noble users and post them to the Mongo DB. It is intended to be run by a service such as Amazon Lambda / EventWatch.

### How it Works

- Foreach noble user, we gather all the accounts that they are requesting reports for.
- Then, foreach of these accounts, we get all their tweets from the Twitter API and post these reports to the Mongo DB.
