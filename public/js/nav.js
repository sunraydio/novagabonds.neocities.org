document.querySelector(".sidenav").innerHTML = `
    <div class="nav">
    
    <!-- the main list styled in the form of a menu -->
    <ul>
    <!--each of these is an item with its own drop down of sub-items -->
      <!-- except for this one which is just the home button -->
      <li>
        <a href="/" style="line-height: 2.3em">HOME</a>
      </li>
      <!-- item 1 -->
      <li>
        <details>
          <summary>About</summary>
          <div class="submenu">
            <ul>
            <a href="/about"><li>me!</li></a>
            <a href="/site"><li>this website</li></a>
            <a href="/manifesto"><li>manifesto</li></a>
            <a href="/credits"><li>credits</li></a>
            </ul>
          </div>
        </details>
      </li>
      
      <!-- item 2 -->
      <li>
        <details>
          <summary>My work</summary>
          <div class="submenu">
            <ul>
            <a href="/gallery"><li>art gallery</li></a>
            <a href="/codingportfolio"><li>coding projects</li></a>
            <a href="https://novagabonds.itch.io" target="_blank"><li>gamedev</li></a>
            <a href="/commissions"><li>commissions</li></a>
            <a href="/fruiperheroes"><li>fruiperheroes</li></a>
            </ul>
          </div>
        </details>
      </li>
      
      <!-- item 3 -->
      <li>
        <details>
          <summary>Misc</summary>
          <div class="submenu">
            <ul>
            <a href="/resources"><li>resources</li></a>
            <a href="/recs"><li>media recs</li></a>
            <a href="/newsstand"><li>literary recs</li></a>
            </ul>
          </div>
        </details>
      </li>
    </ul>
    </div>
    
    <!-- music player -->
    <div class="navcontainer">
      <div class="player">
        
        <div class="buttons">
          <div class="prev-track" onclick="prevTrack()"><i class="fa fa-step-backward fa"></i></div>
          <div class="playpause-track" onclick="playpauseTrack()"><i class="fa fa-play-circle fa-2x"></i></div>
          <div class="next-track" onclick="nextTrack()"><i class="fa fa-step-forward fa"></i></div>
        </div>
        <div class="details">
          <div class="track-name">Track Name</div>
          <div class="track-artist">Track Artist</div>
        </div>
        <div class="slider_container">
          <div class="current-time">00:00</div>
          <input type="range" min="1" max="100" value="0" class="seek_slider" onchange="seekTo()">
          <div class="total-duration">00:00</div>
        </div>
        
      </div>
    </div>
    
    <!-- guestbook embed -->
    <div class="navcontainer">
      <p2>guestbook!</p2><br>
      <a href="https://novagabonds.atabook.org" target="_blank"><img src="https://file.garden/aTQD7UdeYkPxCZbb/webdev/book.png" style="width: 50%;"></a><br>
    </div>
    
    
    
    <!-- additionally: badge for copy-pasting -->
    <div class="navcontainer">
    <p2>link back!</p2><br>
      <a href="https://novagabonds.neocities.org" target="_blank"><img src="/images/novagabonds-button.gif" alt="Novagabonds"></a>
      <textarea><a href="https://novagabonds.neocities.org" target="_blank"><img src="https://novagabonds.neocities.org/images/novagabonds-button.gif" alt="Novagabonds"></a></textarea>
    </div>

    <!-- AND the site neighbors bit -->
    <div class="navcontainer">
      <p2>site neighbors!</p2>
      <div class="scrollarea">
      <div class="scrollbadges">
        <a href="https://mpekamitzii.neocities.org" target="_blank"><img src="https://file.garden/aTQD7UdeYkPxCZbb/webdev/mpekamitzio.gif" alt="mpekamitzii" title="mpekamitzii"></a>
      </div>
      </div>
    </div>

  </div>
    
`


document.querySelector(".footer").innerHTML = `
<p2>© novagabonds 2024-∞ | <a href="https://neocities.org/site/novagabonds">neocities</a> | <a href="https://novagabonds.tumblr.com" target="_blank">tumblr</a> | <a href="/sitemap">sitemap</a></p2>
`


// this isn't working lmao
document.querySelector(".navopen").innerHTML = `
  let mql = window.matchMedia("(min-width: 768px)");
    if(mql.matches) {
        details.open = true;
    }
`














