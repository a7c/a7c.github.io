import Markdown
import Graphics.Element exposing (..)

port title : String
port title = "Molly Q Feldman"

main =
    Markdown.toHtml markdown

markdown = """

# Molly Q Feldman

<div class="item" style="float: left" align="left" width=200px>
  <img  style=" margin-right: 2em" src="headshot.jpg" width=200px/>
    <span class="caption"><a href="http://www.cs.cornell.edu/~molly/mollyfeldman_cv.pdf">CV</a></span>
</div>

I'm a second year PhD student in the Department of
[Computer Science](http://www.cs.cornell.edu) at Cornell University where I have the privilege to work with [Erik Andersen](http://www.cs.cornell.edu/~eland/). I received my
B.A. in Mathematics and Computer Science from [Swarthmore College](http://www.swarthmore.edu/)
in May 2015.

##Research
I research _educational technology_, focusing on how to provide better automated feedback
for procedural disciplines, such as K-12 math and intro programming. As part of this work, we've built [CheckMark](checkmark.html) to automatically diagnose student misconceptions in K-12 math. We are currently exploring ways to bridge the automated vs. human feedback gap by using _human computation_ techniques
in conjunction with CheckMark. I am also passionate about understanding how to better teach programming through _better language and tool design_.  I am grateful to work with [great collaborators](collaborators.html) on these projects!

##News & Talks
* I will be working with a Bronx AP CS class in 2017-2018 as a [Microsoft TEALS](https://www.tealsk12.org/) volunteer [June 17]
* I was awarded an Outstanding Teaching Assistant Award for my work with Cornell's [intro CS course](http://www.cs.cornell.edu/courses/cs1110/2017sp/) [May 17]
* I gave a talk entitled [Building Better Automated Feedback Solutions](http://cs.brown.edu/events/talks/feldman/) at Brown University [November 16]
* I gave a 5-minute talk entitled [PL-Based Educational Technology](http://www.cs.cornell.edu/~jnfoster/tmp/wg28-lakeplacid/slides/molly.pdf) at Lake Placid [July 16]

##Teaching
* Head TA for [Introduction to Computing Using Python](http://www.cs.cornell.edu/courses/cs1110/), Cornell University, Profs. Lillian Lee and Erik Andersen [Spring 2017]
* Head TA for [Foundations of Artificial Intelligence](http://www.cs.cornell.edu/courses/cs4700/2015fa/), Cornell University, Professor Bart Selman [Fall 2015]
* Numerous classes at Swarthmore College: Introduction to Computer Science,
Data Structures and Algorithms, Linear Algebra, Honors Multivariable Calculus

##Outreach
* I work with math Professor [Bob Strichartz](http://www.math.cornell.edu/m/People/bynetid/rss24) teaching 2nd - 6th grade math students in the Ithaca area
* I taught programming as a [GRASSHOPR](https://sites.google.com/site/grasshopratcornell/home/) fellow with [Geoff Pleiss](http://geoffpleiss.com/) at Trumansburg Middle School 
* I volunteered with the American Association of University Women for their [TECH Savvy](http://cortland-ny.aauw.net/tech-savvy/) workshop 
* For the past two years, I have taught [Scratch](http://www.scratch.mit.edu) to 7th and 8th grade girls at Cornell's [Expanding your Horizons](https://www.eyh.cornell.edu/) conference 


##Departmental Service
* I co-coordinate Cornell's [Programming Languages Discussion Group](http://www.cs.cornell.edu/Courses/cs7190)
* I help our visiting speakers make sure their [colloquium](https://www.cs.cornell.edu/events/colloquium) talks have minimal technical failure
* I coordinated [Cornell CS PhD Visit Day](http://www.cs.cornell.edu/projects/phdvisit/) in 2016

##Contact
You can reach me at molly near cs.cornell.edu or [@feldmanmolly](https://twitter.com/feldmanmolly).

<div class="footer" margin-left=250px>
  <footer  font-size=10px>
    CSS adapted from [minimal](https://github.com/orderedlist/minimal); everything else built using [elm](http://elm-lang.org)
    </footer>
</div>

"""
