import Markdown
import Graphics.Element exposing (..)

port title : String
port title = "Commander"

main =  Markdown.toElement """
# Commander
  <img  style="center" src="commander.jpg" width=500px />

  ##Play the Game
  Click to start on an [asteroid](Commander_v1_2.swf), [comet](Commander_v2_2.swf), or [satellite](Commander_v3_2.swf).

  ##About the Game
  Commander is a 2D space-adventure game to teach object-oriented programming (OOP).
  You play as a distinguished space general whose goal is to protect the intergalactic highways
  leading to the planet KELT-1b, the home of Queen Andromeda. You command a fleet of loyal
  spaceships who fight for you out in deep space; you remain in battlefield command on KELT-1b
  for your safety. To protect the Queen, you must command your spaceships and defeat the enemies!
  <img  style="center" src="ships.jpg" width=400px/>


  ##About Us
  Commander is developed at Cornell University under the supervision of [Prof. Erik Andersen](http://www.cs.cornell.edu/~eland/).
  It is a pilot project to study the impact of syntax on learning OOP and language design.

  ####The Team

  * [Molly Feldman](index.html) is a second-year PhD student in the Computer Science Department at
  Cornell. She loves programming, but spends a lot of time thinking about how we can teach it better.

  * [Alan Cheng]() is a senior studying Computer Science at Cornell. He is interested in how games can be used to enrich people's lives, currently with a focus in investigating how to make education more engaging and effective through games.

  * [Theodoros Gkountouvas]() is a fourth-year PhD student in the Computer Science Department at Cornell. His main research interests lie in distributed systems and cloud computing.

  * [Karen Zhou]() is an artist who specializes in game art and design. She is reponsible for the art, design, and theme of Commander. You can see her other work here.

  <div class="footer" margin-left=250px>
    <footer  font-size=10px>
      CSS adapted from [minimal](https://github.com/orderedlist/minimal); everything else built using [elm](http://elm-lang.org)
      </footer>
  </div>
"""
