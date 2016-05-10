
    var tag = document.createElement('script');

    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    var player;
	var player2;
      
	function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
          height: '390',
          width: '640',
          videoId: 'M7lc1UVf-VE',
		
		});
	  
		player2 = new YT.Player('player2', {
          height: '390',
          width: '640',
          videoId: 'M7lc1UVf-VE',
        
        });
    }
	
 
      function onPlayerReady(event) {
        event.target.playVideo();
      }
	  

	  
	function DNA(){
		player.loadVideoById({'videoId': 'zwibgNGe4aY',
								'startSeconds' : 0,
								'suggestedQuality': 'large'});
		player2.loadVideoById({'videoId': 'BgJk7HvcxFk',
								'startSeconds' : 0,
								'suggestedQuality': 'large'});
	}
	
	function Radioactiviteit(){
		player.loadVideoById({'videoId': 'dY10s71rv80',
								'startSeconds' : 0,
								'suggestedQuality': 'large'});
		player2.loadVideoById({'videoId': '8z-5NRD8D6c',
								'startSeconds' : 0,
								'suggestedQuality': 'large'});
	}
	
		function Hybride(){
		player.loadVideoById({'videoId': 'Ff6AEwMsotE',
								'startSeconds' : 0,
								'suggestedQuality': 'large'});
		player2.loadVideoById({'videoId': 'gekfNaZE1h0',
								'startSeconds' : 0,
								'suggestedQuality': 'large'});
	}

	document.getElementById("DNA").addEventListener("click", DNA );
    document.getElementById("Radioactiviteit").addEventListener("click", Radioactiviteit );
	 document.getElementById("Hybride").addEventListener("click", Hybride);
	
	function handleAPILoaded() {
		$('#search-button').attr('disabled', false);
	}

	function search() {
		var q = $('#query').val();
		var request = gapi.client.youtube.search.list({
		q: q,
		part: 'snippet'
	});

		request.execute(function(response) {
		var str = JSON.stringify(response.result);
		$('#search-container').html('<pre>' + str + '</pre>');
	});
  
	}
	
	 var playButton = document.getElementById("play-button");
  playButton.addEventListener("click", function() {
    player.playVideo(), player2.playVideo();
  });
  
  var pauseButton = document.getElementById("pause-button");
  pauseButton.addEventListener("click", function() {
    player.pauseVideo(), player2.pauseVideo();
  });
  

   var volumeUp = document.getElementById("volume-up");
  volumeUp.addEventListener("click", function() {
	var currentVolume = player.getVolume();
   player.setVolume(currentVolume + 10), player2.setVolume(currentVolume + 10);
  });
  
  
    var volumeDown = document.getElementById("volume-down");
  volumeDown.addEventListener("click", function() {
	var currentVolume = player.getVolume();
   player.setVolume(currentVolume - 10), player2.setVolume(currentVolume - 10);
  });