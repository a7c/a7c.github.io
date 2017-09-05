import Markdown
import Graphics.Element exposing (..)

port title : String
port title = "PLED"

main =  Markdown.toElement """
# **PLED: Programming Languages, Education, and Everything In Between**

This website provides a set of resources related to programming languages and education. Currently, it is sorted loosely under subject
heading. It will include links to papers, learning languages, talks, tutorials, games etc. It also serves as a starting point for
fostering discussion between researchers whose work branches into these two topics; see the [Join PLED!](#Join-PLED!) section below.

* * *

##Educational Languages and Tools

###Functional Languages
* [Racket Beginning Student Language](https://docs.racket-lang.org/htdp-langs/beginner.html)
* [Project Lamdu](http://www.lamdu.org)
* [Pyret](http://www.pyret.org)

###Logical PLs
* [miniKanren](http://minikanren.org)

### Visual Languages
* [Hopscotch](https://www.gethopscotch.com/)
* [Scratch](https://scratch.mit.edu)
* [RoboMind](http://www.robomind.net/en/)

### Game Development / 3D Languages
* [StarLogo TNG](http://education.mit.edu/portfolio_page/starlogo-tng/)

### Tangible Programming
* [Google Project Bloks](https://projectblocks.withgoogle.com)
* [Primo](http://www.primotoys.com)
* [BBC micro:bit](https://www.microbit.co.uk/)

### Miscellaneous
* [Hour of Code](http://www.code.org/learn/)

## Educational Programming Games
### Online Games
* [Cargo-Bot](http://twolivesleft.com/CargoBot/)
* [CodeHunt](https://www.codehunt.com), based on [Pex for Fun](http://www.pexforfun.com)
* [Codemancer](http://codemancergame.com)
* [CodeSpells](http://codespells.org)
* [The Codex of Alchemical Engineering](http://www.zachtronics.com/the-codex-of-alchemical-engineering/)
* [Commander](commander.html) (in development)
* [Human Resource Machine](https://tomorrowcorporation.com/humanresourcemachine)
* [Kodable](https://www.kodable.com/)
* [LightBot](https://lightbot.com/hour-of-code-2015-flash.html)
* [Minecraft: Education Edition](https://education.minecraft.net/)
* [Reduct](http://therottingcartridge.com/games/programming/) (in development)

### Table Top Games
* [Welcome to Code Monkey Island](http://codemonkeyplanet.com)
* [Robot Turtles](http://www.robotturtles.com)

## Programming Curricula
* [Bootstrap](http://www.boostrapworld.org)

We're always adding more sections!

* * *

##PLED Members
* [Ian Arawjo](http://ianarawjo.therottingcartridge.com/about/), PhD Student in Information Science at Cornell University
* [William Byrd](http://webyrd.net), Research Associate at U Combinator Group, University of Utah
* [Molly Feldman](index.html), PhD Student in Computer Scence at Cornell University
* [Joe Gibbs Politz](http://jpolitz.github.io), Assistant Teaching Professor at University of California San Diego
* [Ben Greenman](http://www.ccs.neu.edu/home/types/), PhD Student in PL at Northeastern University
* [Joe Osborn](https://users.soe.ucsc.edu/~jcosborn/), PhD Candidate at UCSC Expressive Intelligence Studio

##Join PLED!
  *  Join the PLED Slack Team at [http://pl-ed.slack.com](http://pl-ed.slack.com). Unfortunately, you can't add yourself. Email [Molly](index.html) to be added.
  *  PLED is currently curated by [Molly Feldman](index.html); email her with questions, contributions etc.

<div class="footer" margin-left=250px>
  <footer  font-size=10px>
    CSS adapted from [minimal](https://github.com/orderedlist/minimal); everything else built using [elm](http://elm-lang.org)
    </footer>
</div>
"""
