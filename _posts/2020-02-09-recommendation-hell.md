# Stranded on a "recommendation-island"
When signing up for a Netflix account I was asked about the ‘shows that interest me’ --I presume to build my recommendation profile. However, since that day I have been stuck on a "recommendation-island" which is rife with the monotonicity based on my interest at the signup time. 

Seasons change, our mood changes, our situations change, our circumstances changes. Human tastes can change/adapt over time. Then why should a recommendation engine get stuck on an island, based on the interests I selected at the start, and not adapt?

Why do these engines and people building them forget that:

   1.  Our interests change over time, 
   2. We often don’t know what actually interests us? 

The Recommendation engine thinks that I like Japanese anime; when in fact I just liked one particular series.

a.) To avoid being stuck on an island, a user should be, maybe, periodically asked to update their interests. 

b.) We could also use an 80-20 rule, 80% allocated to my expressed interest and allocate 20% to random choices. Thereafter, update the profile if a selection is made from the random-set; maybe use something that is elegant (bayesian, multi-arm bandit etc) to update the recommendation profile. 

The idea of these update mechanisms is to identify and capture the implied interests, periodically. The implied interest should tailor the recommendation engine to my current taste somewhat accurately; albeit with a grain of salt. Nevertheless, at the very least this scheme will rescue me from the "recommendation-island".

PS: it is not just Netflix; Amazon Prime has the same problem, the engine assumes I like Bollywood movies and it is fair for me to browse through multiple pages to get to the actual content I want to watch. Just because there is some inferred feature in my profile -- that indicates to the recommendation engine that I like to watch Bollywood movie-- doesn't mean/indicate that I like to watch Bollywood movies.

[Originally on linkedin link](https://www.linkedin.com/pulse/stranded-recommendation-island-dawood-khan/)
#ML, #AI, #Netflix #Amazon #Prime
