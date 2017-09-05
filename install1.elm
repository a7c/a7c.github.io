import Markdown
import Graphics.Element exposing (..)

port title : String
port title = "Consultant Python Comments for 1110"

main =
    Markdown.toHtml markdown

markdown = """
#Python Install Comments for 1110 Consultants

First of all, thanks in advance for your patient help for students with faulty
Python installs! This is a process that can be very frustrating for you and the
student. Our main goal is for downloading Python to not discourage them right
off the bat from CIS.

###Words of Wisdom
In your lab, determine which TAs have Windows experience and which have Mac. It
will make it easier if you know who to switch with or who to call over for a
particular OS. We anticipate most students have Macs. The best thing to try
first and foremost is for students to do a clean install while you watch and
then reboot their entire systems. According to past wisdom, this solves 25% of
errors.

###Different From Last Semester
We are <b>not</b> having students download the extensions at this point. The
goal of this download is only to get Anaconda Python 2.7 working.

###Things to Check Immediately
On Mac:
  * Does their Terminal header say "Anaconda 4.1.1" next to "Python 2.7.1"?
  * <b>Is there an anaconda folder in Applications?</b> Yes, might be a more complex
  issue. No, look below at "Other Versions of Python."

On Windows:
  * Does their Terminal header say "Anaconda 4.1.1" next to "Python 2.7.1"?
  *  Is there an Anaconda2 folder in the root of the C:\ directory? No, see below.

Most issues we anticipate will happen because of other versions of Python. See below.
Also, if all else fails, just uninstall and try again with the student.

###Other Versions of Python
For most Windows students, this should not be a problem, as Windows 10 does not
come with a default Python install. Therefore, if the student installed Anaconda
correctly, it should be the default Python. However, if the student has an existing Python package, try uninstalling it, then search for all folders named python27 (there are sometimes two, one in the C:\ directory and another in a sub-folder of C:\Users\username\) and delete that, reboot, and then reinstall. Anaconda does not play nice with other python installations on Windows.

For students using MacOS, this is a different story as we are fighting up
against the default Python build. Hints for trying to debug a bad install, in
order of "if this doesn't work, try the next one":
  * Completely close down Terminal (Apple + Q) and open a new window. If the student
  had a Terminal window open when they were installing Anaconda, that window
  defaults to the default Python install.
  * Run <b>echo $PATH</b> and follow the instructions for student debugging
  on the install website
  * Help the student through the Mac Aliasing Appendix on the <a href="http://www.cs.cornell.edu/courses/cs1110/2016sp/materials/python.php#alias-appendix">Spring 2016 Appendix</a>.
    <b>IMPORTANT:</b> my best guess is that instead of /usr/local/bin/python the faulty version will be in ~/anaconda/bin/python, so change the path as needed.
  * Ask another TA for help!
  * Email Molly at mqf3@cornell.edu

<b>If you have to deal with Mac Aliasing:</b> make sure that you also update there Komodo Edit to see the right version of Python. Instructions are in Section 3.2 of the Spring 2016 website.

###Uninstalling ActiveState Python
You may run into this problem and pinging a head consultant rather than Molly
is maybe your best bet.
"""
