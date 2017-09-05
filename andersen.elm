import Markdown
import Graphics.Element exposing (..)

port title : String
port title = "Cornell EdTech"

main =
    Markdown.toHtml markdown

markdown = """

#Educational Technology @ Cornell

Page coming soon!

<div class="footer" margin-left=250px>
  <footer  font-size=10px>
    CSS adapted from [minimal](https://github.com/orderedlist/minimal); everything else built using [elm](http://elm-lang.org)
    </footer>
</div>

"""
