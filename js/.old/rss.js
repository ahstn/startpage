/**
  * @desc Gets RSS feeds and writes them inside the relevent element
  * @author Adam Houston
  * @required Yahoo YQL API && jQuery
*/

$(document).ready(function() {
    var yql = "http://query.yahooapis.com/v1/public/yql";
    var bbc_feed = "http://feeds.bbci.co.uk/news/england/rss.xml";
    var bbc_tech_feed = "http://feeds.bbci.co.uk/news/technology/rss.xml";
    var sky_sports = "http://skysports.com/rss/0,20514,11661,00.xml";
    var news_feed_num = 4;

    //GetRSS(bbc_feed, '#rssOne');

    function GetRSS(link, id) {
        $.ajax({
            url: yql,
            jsonp: 'callback',
            dataType: 'jsonp',
            data: {
                // YQL Query including the passed RSS URL
                q: "select * from xml " + "where url='" + link + "'",
                // Want JSON back
                format: 'json'
            },
            success: function(response) {
                var channel = response.query.results.rss.channel.item;
                // For each item returned in the JSON
                $.each(channel, function(index, item) {
                    // If it has a valid title and we haven't reached the desired limit
                    if(item.title && index < news_feed_num) {
                        // Append the passed element with a link for the RSS item
                        $(id).append($('<a>').attr('href', item.link).html(item.title));
                    }
                });
            },
            error: function(data) {
                console.log('Error recieving a response from YQL');
            }
        });
    }
});
