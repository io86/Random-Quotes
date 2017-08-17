$(document).ready(function () {
    
    var quotes = [['"The question isn’t who is going to let me; it’s who is going to stop me."', "Ayn Rand"],
                  ['"You take your life in your own hands, and what happens? A terrible thing, no one to blame."', "Erica Jong"],
                  ['"Happiness is not something readymade.  It comes from your own actions."', "Dalai Lama"],
                  ['"I would rather die of passion than of boredom."', "Vincent van Gogh"],
                  ['"Do what you can, where you are, with what you have."', "Teddy Roosevelt"],
                  ['"A person who never made a mistake never tried anything new."', "Albert Einstein"],
                  ['"All great achievements require time"', "Maya Angelou"],
                  ['"Patience is a virtue but you will never ever accomplish anything if you dont exercise action over patience"', "Byron Pulsifer"],['"You are the only person on earth who can use your ability."', "Zig Ziglar"], 
                  ['"Logic will get you from A to B. Imagination will take you everywhere."', "Albert Einstein"],
                  ['"Be what you are. This is the first step toward becoming better than you are."', "Julius Charles Hare"]
                  ['"Fine words and an insinuating appearance are seldom associated with true virtue"', "Confucius"],
                  ['"Our greatest glory is not in never falling, but in rising every time we fall."', "Confucius"],
                  ['"When you learn, teach. When you get, give."', "Maya Angelou"]['"Joy is what happens to us when we allow ourselves to recognize how good things really are."', "Marianne Williamson"],
                  ['"Let the beauty of what you love be what you do."', "Rumi"], ['"The price of greatness is responsibility."', "Winston Churchill"],
                  ['"Rather than wishing for change, you first must be prepared to change."', "Catherine Pulsifer"],
                  ['"The truth which has made us free will in the end make us glad also."', "Felix Adler"],
                  ['"The mind is everything. What you think you become."', "Buddha"],
                  ['"Nothing in life is to be feared. It is only to be understood."', "Marie Curie"],
                  ['"Miracles come in moments. Be ready and willing."', "Wayne Dyer"],
                  ['"Mind is everything: muscle, pieces of rubber. All that I am, I am because of my mind."', "Paavo Nurmi"],
                  ['"If only wed stop trying to be happy wed have a pretty good time."', "Edith Wharton"],
                  ['"Do you want to know who you are? Dont ask. Act! Action will delineate and define you."', "Thomas Jefferson"],
                  ['"Believe deep down in your heart that you are destined to do great things."', "Joe Paterno"],
                  ['"Real magic in relationships means an absence of judgement of others."', "Wayne Dyer"],
                  ['"I have no special talent. I am only passionately curious."', "Albert Einstein"],
                  ['"Your mind will answer most questions if you learn to relax and wait for the answer."', "William Burroughs"],
                  ['"Ideas are the beginning points of all fortunes."', "Napoleon Hill"]];
    
    $('.box-quotes').fadeIn(3000);
    $('.buttons').fadeIn(3000);
    
    
    //Function new quote
    function newQuote(sel,quo) {

        $(sel).html(quo);
        
    }
    
    //Click on button for the next quote
    $('.next-quote-btn').click(function() {
        var numQuote = Math.floor(Math.random() * quotes.length);

        //Call functions
        newQuote('.quote',quotes[numQuote][0]);
        newQuote('.author',quotes[numQuote][1]);
        
    });
    
    //Click on button to share the quote on twitter
    $('.tweet-btn').click(function() {
        
        var phrase = '"' + $('.quote').html() + '"  ',
            author = $('.author').html(),
            tweetUrl = 'https://twitter.com/share?text=' + encodeURIComponent(phrase + author);
        
        window.open(tweetUrl);
    
    });
	
	
});