import Markdown
import Graphics.Element exposing (..)

port title : String
port title = "CheckMark"

main =  Markdown.toElement """
# CheckMark
CheckMark is an automated feedback tool for K-12 mathematics. <br>

Here are some examples of CheckMark in action:
<video class="center" controls="controls" width="1000" name="Subtraction" src="aw3.mov"></video>

<b>Addition Example Example</b> (from [this book](https://books.google.com/books?id=ndOiOwAACAAJ&dq=error+patterns+in+computation&hl=en&sa=X&ved=0ahUKEwjLi9bc5u7OAhUIJCYKHdi9BOkQ6AEIHjAA) by Robert B. Ashlock)

<br><br>
  <video class="center" controls="controls" width="1000" name="Fraction Reduction" src="ef3.mov"></video>

<b>Fraction Reduction Example</b> (from [this book](https://books.google.com/books?id=ndOiOwAACAAJ&dq=error+patterns+in+computation&hl=en&sa=X&ved=0ahUKEwjLi9bc5u7OAhUIJCYKHdi9BOkQ6AEIHjAA) by Robert B. Ashlock)
<br>

<br><br>
    <video class="center" controls="controls" width="1000" name="Fraction Reduction" src="portal.mp4"></video>

<b>The CheckMark Grading Portal</b>
<br><br>

Interested in learning more about our approach to reconstructing student thought processes? Watch this video.
<br><br>
    <video class="center" controls="controls" width="1000" name="Fraction Reduction" src="checkmark.mp4"></video>
<br>

<div class="footer" style="center">
    <footer align="center" font-size=10px>
      CSS adapted from [minimal](https://github.com/orderedlist/minimal); everything else built using [elm](http://elm-lang.org)
      </footer>
  </div>
"""
