import Markdown
import Element exposing (..)
--import Html exposing (text)

main =
    Markdown.toHtml [] markdown

markdown = """

# Alan Cheng

<div class="item" style="float: left" align="left" width=200px>
  <img  style=" margin-right: 2em" src="headshot.jpg" width=200px/>
    <span class="caption"><a href="./alan_cheng_resume.pdf">Resume</a></span>
    <span>ayc48 [at] cornell.edu</span>
</div>



<h1 style="margin-left: 250px">Projects</h1>

<a name="squeakswipe"></a>
<div class="item" style="float: left; margin-left:50px; margin-right:30px" align="left" width=200px>
    <img src="./img/s&s_cover_photo.png" width=200px/>
</div>

**Squeak & Swipe** is a mobile puzzle game in which the player guides Squeak the mouse through a
strange tower to collect all the cheese within. The player can swipe the floors of
the tower back and forth in order to create new paths for Squeak and outwit the hungry cats 
roaming the tower. Can you navigate Squeak all the way up the increasingly labyrinthine tower
of cheese?

Squeak & Swipe won the award for Most Innovative (Mobile) Game in the 
[GDIAC Spring 2016 Showcase](http://gdiac.cis.cornell.edu/) and was accepted into the 
[2016 Boston Festival of Indie Games](http://gdiac.cis.cornell.edu/news/index.php?id=21).

[[GDIAC gallery page]](http://gdiac.cis.cornell.edu/gallery/download.php?name=squeakswipe)
[[trailer]](https://www.youtube.com/watch?v=wZeXtrU2ERg)
[[.apk download]](http://gdiac.cis.cornell.edu/gallery/2016/SqueakSwipe/SqueakSwipe.apk)


<a name="dispossessed"></a>
<div class="item" style="float: left; margin-left:250px; margin-right:30px" align="left" width=200px>
    <img src="./img/dispossessed_cover_photo.png" width=200px/>
</div>

**Dispossessed** is a top-down shooter game where the player plays as Eerie, a ghost infiltrating
a nefarious conglomerate that harvests souls of ghosts for energy. While ghosts cannot attack,
Eerie can possess enemy ghost hunters to use their firepower against them and even take control
of vehicles. Use Eerie's powers of possession to jump from enemy to enemy, and bring down the
conglomerate from within!

Dispossessed won 2nd place for Audience Favorite among desktop games in the
[GDIAC Spring 2015 Showcase](http://gdiac.cis.cornell.edu/).

[[game manual]](./dispossessed/game_manual.pdf)
[[trailer]](https://www.youtube.com/watch?v=2qOyDJq9490)
[[.jar download]](./dispossessed/dispossessed.jar)


<a name="butterfly"></a>
<div class="item" style="float: left; margin-left:250px; margin-right:30px" align="left" width=200px>
    <img src="./img/butterfly_effect_icon.png" width=200px/>
</div>

**The Butterfly Effect** is a fast-paced action game taking place in an abstract
world. The player takes control of a butterfly, spreading the seeds of chaos while avoiding the 
swarms of patrolling birds that threaten to bring back order. Do you have the reflexes to
dodge the onslaught of swooping birds?

<br>
For Windows download, extract the zip folder, then run the game from 
`the_butterfly_effect\\bin\\CabbagePink.exe` 
    ([CabbagePink](https://media.giphy.com/media/eIb04W0LMVQEE/giphy.gif) was our group name).

[[mac download]](./butterfly/the_butterfly_effect.app)
[[windows download]](./butterfly/the_butterfly_effect.zip)
[flash/html5 link someday]


<a name="crystallize"></a>
<div class="item" style="float: left; margin-left:250px; margin-right:30px" align="left" width=200px>
    <img src="./img/crystallize_screenshot.png" width=200px/>
</div>

**Crystallize** is an immersive 3D Japanese language learning game where the player can collect
words, use those words to converse with NPCs, and collaborate with other players. Crystallize is
a research project led by [Gabriel Culbertson](http://www.cs.cornell.edu/~grc74/) 
and advised by [Prof. Erik Andersen](http://www.cs.cornell.edu/~eland/).

I developed a virtual reality extension to Crystallize to assess the impact of VR on learning
language and embodied cultural interactions such as bowing. Our findings were 
[published in CHI 2017](http://www.cs.cornell.edu/~eland/papers/chi2017_vr.pdf).

[[main site]](http://crystallize-online.com/)


<a name="commander"></a>
<div class="item" style="float: left; margin-left:250px; margin-right:30px" align="left" width=200px>
    <img src="./img/commander_screenshot.png" width=200px/>
</div>

**Commander** is a tower-defense-like game that teaches object-oriented programming syntax. The player
leads a fleet of ships protecting intergalactic highways and composes commands like 
`wyvern.fire()` mobilize the fleet and fend off approaching enemies.

Commander was the final project for 
[CS 6360 (Educational Technology)](https://canvas.instructure.com/courses/992725), a graduate
course taught by [Prof. Erik Andersen](http://www.cs.cornell.edu/~eland/). We conducted a [pilot
study](./commander/6360-final-project.pdf) to evaluate knowledge transfer of OOP syntax 
through the game.

[[main page]](http://www.cs.cornell.edu/~molly/commander.html)

<br><br>

[[back to home page]](./index.html)

"""