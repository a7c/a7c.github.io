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

Hi! My name is Alan. I'm a senior at [Cornell University](http://www.cornell.edu) majoring in 
[Computer Science](http://www.cs.cornell.edu), graduating in December 2017. I'm interested in software, game design,
educational technology, language learning, and programming languages.

This page is still under construction, so please forgive any weirdness that may occur! 

## Projects

Check out [my projects page](./projects.html) for more info on these projects!

<div style="margin-left:250px">
  <div class="item" style="margin-right:50px; margin-bottom: 30px" align="left" width=200px>
    <img src="./img/s&s_cover_photo.png" height=200px/>
    <span><b>Squeak & Swipe</b></span>
  </div>

  <div class="item" style="margin-right:50px; margin-bottom: 30px" align="left" width=200px>
    <img src="./img/dispossessed_cover_photo.png" height=200px/>
    <span><b>Dispossessed</b></span>
  </div>

  <div class="item" style="margin-right:50px; margin-bottom: 30px" align="left" width=200px>
    <img src="./img/butterfly_effect_icon.png" height=200px/>
    <span><b>The Butterfly Effect</b></span>
  </div>

  <div class="item" style="margin-right:50px; margin-bottom: 30px" align="left" width=200px>
    <img src="./img/crystallize_screenshot.png" height=200px/>
    <span><b>Crystallize</b></span>
  </div>

  <div class="item" style="margin-right:50px; margin-bottom: 30px" align="left" width=200px>
    <img src="./img/commander_screenshot.png" height=200px/>
    <span><b>Commander</b></span>
  </div>
</div>

---

## Teaching

As of Fall 2017, I'm serving as a teaching assistant for [CS 3110 (Functional Programming and Data
Structures)](http://www.cs.cornell.edu/courses/cs3110/2017fa/).

In the past, I've been a TA for the following courses:
* CS 3152 (Introduction to Computer Game Architecture) 
[[sp16]](http://www.cs.cornell.edu/courses/cs3152/2016sp/)
* CS 3110 (Functional Programming and Data Structures) 
[[fa15]](http://www.cs.cornell.edu/courses/cs3110/2015fa/)
[[sp15]](http://www.cs.cornell.edu/courses/cs3110/2015sp/)
[[fa14]](http://www.cs.cornell.edu/courses/cs3110/2014fa/)
* CS 2110 (Object-Oriented Programming and Data Structures)
[[sp14]](http://www.cs.cornell.edu/courses/cs2110/2014sp/)

Throughout my time as a TA for CS 3110, I worked with 
[Prof. Michael Clarkson](http://www.cs.cornell.edu/~clarkson/) to develop two new assignments
for the course: a text-adventure game and a Pokemon simulator and bot. I also coded sample
solutions for these assignments, with assistance from other TAs. 

<div style="margin-left:250px">
  <div class="item" style="margin-right:50px; margin-bottom: 30px" align="left" width=200px>
    <img src="./img/gates_adventure_screenshot.png" height=200px/>
    <span><b>Adventure<br>(fa17, fa16, fa15)</b><br>
      [[writeup]](http://www.cs.cornell.edu/courses/cs3110/2016fa/a2/a2.html)<br>
      [[gates hall adventure]](http://www.cs.cornell.edu/courses/cs3110/2016fa/a2/gates.json)</span>
  </div>

  <div class="item" style="margin-right:50px; margin-bottom: 30px" align="left" width=200px>
    <img src="./img/ps6_screenshot.jpg" height=200px/>
    <span><b>PokeJouki Emerald<br>(fa14)</b><br>
      [[writeup]](http://www.cs.cornell.edu/courses/cs3110/2014fa/hw/6/ps6.pdf)</span>
  </div>
</div>

---

## Japanese

During the 2016-17 academic year, I studied abroad at the 
[Kyoto Consortium for Japanese Studies](http://www.kcjs.jp/index.html). While in Japan, I
spent my mornings in intensive Japanese language courses; my afternoons learning about heritage,
artisans, and manga; my evenings with a wonderful host family; and the rest of my free time 
studying or exploring Kyoto and its outskirts.

In May 2017, I was given the opportunity to do a one-month translation internship at 
[Sojitz Corporation](https://www.sojitz.com/en/), a general trading company located 
in Tokyo, Japan.

Shortly before leaving Japan, I passed the 
[Kanji Kentei Level Pre-2](https://en.wikipedia.org/wiki/Kanji_kentei#Level_Pre-2).

Nowadays, I continue to study Japanese in my free time. Occasionally I attempt to do some
writing in Japanese, despite having no talent for creative writing whatsoever (a big thank you to 
[Nishimata-sensei](http://www.kcjs.jp/about/faculty_staff.html#language_instructors) for
editing these):
* [&#20845;&#26085;&#12398;&#33750;&#33970; (Muika no Ayame)](./japanese/&#20845;&#26085;&#12398;&#33750;&#33970;.pdf):
the story of a woman who's always late
* [&#20116;&#26376;&#38632;&#12398;&#30165; (Samidare no Ato)](./japanese/&#20116;&#26376;&#38632;&#12398;&#30165;.pdf):
a short tale of love, rain, and reflection

---

## Miscellaneous

I like singing! This year, I am humbled to be singing as a Tenor 1 with the talented men of the 
[Cornell Glee Club](http://www.gleeclub.com/). In previous semesters (starting Fall 2013), 
I sang in the [Cornell Chorale](https://www.cornellchorale.com/). I'm also down to sing karaoke
whenever.

I also enjoy playing video games (if you hadn't guessed by this point). Lately, I have been
playing [Persona 5](http://atlus.com/persona5/), 
[Fire Emblem Heroes](https://fire-emblem-heroes.com/en/), 
[Super Smash Bros. for Wii U](http://www.smashbros.com/us/) and 
[League of Legends](https://play.na.leagueoflegends.com/en_US).

<div class="footer" margin-left=250px>
  <footer  font-size=10px>
    Original layout borrowed (with permission!) from [molly](http://www.cs.cornell.edu/~molly/);
    CSS adapted from [minimal](https://github.com/orderedlist/minimal); everything else built using [elm](http://elm-lang.org)
    </footer>
</div>

"""
