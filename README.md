- Scraping: BeautifulSoup and Requests
- Named Entity Recognition: SpaCy
- Data analysis: Pandas

This [notebook](https://github.com/petebrown/pink-slime-twitter-stories/blob/main/docs/notebook/pink-slime-people-and-articles.ipynb) scrapes the homepages of every site in the Metric Media networks for Arizona, Florida, Georgia, Ohio and West Virginia. On August 7, this produced records for 6,722 articles.

It then uses SpaCy to identify people mentioned in headlines.

It also looks for news articles that have been automatically created from politicians' tweets. On August 7, this produced records for 12,036 articles.