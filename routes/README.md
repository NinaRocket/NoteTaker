# NoteTaker

This web application uses front and back end code that allows users to input notes that are stored in an API with the get and post method. The delete method allows the user to delete notes from the front end and back end. 

When the user visits the home page, they are presented with a button to get started:

![](/public/assets/images/home.png)

When the user clicks the "Get Started" button, they are taken to a note taking page. Saved notes will have their titles presented on the left side. If there are no saved notes, the user will see "No saved Notes" defaulted on the page.

![](/public/assets/images/notetaking.png)

The user has entered a title and text body for the note and saved it. When clicked on, the title and text is displayed on the right.



![](/public/assets/images/inputNOte.png)

The user has entered a second note titled "Study", they will click the floppy disc icon to save it:

![](/public/assets/images/deletednote.png)

Below we see two notes that are saved and neither are "active," meaning the user has not clicked on either one to display the title and text body on the side. Clicking the trash can will delete the note. 

![](/public/assets/images/savednote.png)

The user has deleted the study note. It is not gone from the front end as well as removed from the back end API by the delete method. Beach Day persists on the left column. 

![](/public/assets/images/deleted-study.png)


The following GIF shows the application in action:

![](/public/assets/images/NoteTaker.gif)

Technologies used:
HTML, CSS, Javascript
Node
Node Express framework for web API's
Node UUIDV4 to assign a unique ID to each note for the delete method

[Link to deployed application](https://dry-coast-03943.herokuapp.com/)
[Link to github repo ](https://github.com/NinaRocket/NoteTaker)









