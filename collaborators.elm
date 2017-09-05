import Markdown
import Graphics.Element exposing (..)

port title : String
port title = "Collaborators"

main =  Markdown.toElement """
## **Collaborators **
I have the pleasure of working with a great group of people both at Cornell and farther afield. 

###Current 

* [Ian Arawjo](http://ianarawjo.therottingcartridge.com/about/), PhD Student, Cornell University
* [William Byrd](http://webyrd.net), Research Assistant Professor, U Combinator Group, University of Utah
* [Ji Yong Cho](https://www.linkedin.com/in/ji-yong-cho-46a73611b/), Masters Student, University of Pennsylvania
* [Yuntian Lan](https://www.linkedin.com/in/yuntian-lan-7b62a5127/), Undergraduate, Cornell University
* [Yiting Wang](https://www.linkedin.com/in/yiting-wang-5486a787/), Undergraduate, Cornell University 


###Past
* [Monica Ong](https://www.linkedin.com/in/monicaong14/), Undergraduate, Cornell University

<div class="footer" margin-left=250px>
  <footer  font-size=10px>
    [Back to home page](index.html) |
    CSS adapted from [minimal](https://github.com/orderedlist/minimal); everything else built using [elm](http://elm-lang.org)
    </footer>
</div>
"""
