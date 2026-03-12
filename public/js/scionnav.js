document.querySelector(".scionnav").innerHTML = `
<h2 align="center" aria-hidden="true">Menu</h2>
    
    <div class="nav">
    <!-- the main list styled in the form of a menu -->
    <ul>
    <!--each of these is an item with its own drop down of sub-items -->
      <!-- item 1 -->
      <li>
        <details>
          <summary>Navigation</summary>
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
            <a href="/commissions"><li>commissions</li></a>
            <a href="/fruiperheroes"><li>fruiperheroes</li></a>
            <a href="/scion"><li>scion</li></a>
            <a href="/christmasguide"><li>a christmas guide</li></a>
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
            <a href="/recs"><li>media recs</li></a>
            </ul>
          </div>
        </details>
      </li>
    </ul>
    </div>
    
    </div>
`













