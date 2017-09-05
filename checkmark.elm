import Markdown
import Graphics.Element exposing (..)

port title : String
port title = "CheckMark"

main =  Markdown.toElement """
# CheckMark
CheckMark is a teacher tool to identify student misconceptions in K-12 mathematics.<br>

Here are some examples of CheckMark in action:
<video controls="controls" width="1000" name="Subtraction" src="updatedcox1c.mov"></video>

<b>Subtraction Example</b> (from [this study](http://www.jstor.org/stable/748696) by L.S. Cox)

<br><br>
  <video controls="controls" width="1000" name="Fraction Reduction" src="ef3.mov"></video>

<b>Fraction Reduction Example</b> (from [this book](https://books.google.com/books?id=ndOiOwAACAAJ&dq=error+patterns+in+computation&hl=en&sa=X&ved=0ahUKEwjLi9bc5u7OAhUIJCYKHdi9BOkQ6AEIHjAA) by Robert B. Ashlock)

<br>
### About The Team
CheckMark is developed at Cornell University's Department of Computer Science.<br>
  [Molly Q Feldman](index.html) is the graduate student lead, with help from [Monica Ong](https://www.linkedin.com/in/monicaong14). [Prof. Erik Andersen](http://www.cs.cornell.edu/~eland/) advises the project.



  <div class="footer" style="center">
    <footer align="center" font-size=10px>
      [Back to home page](index.html) | CSS adapted from [minimal](https://github.com/orderedlist/minimal); everything else built using [elm](http://elm-lang.org)
      </footer>
  </div>
"""
