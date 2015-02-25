cODE-ROTe
=========
Version 1.1.1

> This is a project completed for General Assembly's Web Development Immersive Program. It is not actively maintained.

cODE-ROTe. For details and documentation, please
visit [https://github.com/code-rote/code-rote](https://github.com/code-rote/code-rote)

DESCRIPTION: Remember the sing-a-long songs that a certain purple dinosaur would use to make routine activities like [cleaning up](http://youtu.be/PJhXVg2QisM?t=7s) and [brusing your teeth](https://www.youtube.com/watch?v=F5lu0BlBGno) fun-fun for every-one? Before you knew what hit you, the room was clean and you were well on your way to a lifetime of healthy, happy living, right? Now it's time to pay it forward and sprinkle a little bit of that Dino's Magical Purple Stuff onto your coding experience... POOF! cODE-ROTe just materialized out of thin air, Lucky you! [Who loves you???](https://www.youtube.com/watch?v=Uq734_nZ7Eo) 

DESCRIPTION: The goal is to build a 'read-a-long' && 'type-a-long' adventure game that makes leveling-up your developer skills fun instead of a chore. It is targeted at people with 6 mo to 1 yr of coding experience. Each course is structured and sequenced to build an app, one snippet at a time (the 'type-a-long'), in addition we integrate high-quality notes into the gaming process (the 'read-a-long'). Combined this allows a player to gain the benefits of ROTE learning for both the physical, mental, and procedural processes. Helping to build a more natural mind-body connection for aspiring devs.

DESCRIPTION: cODE-ROTe is NOT just a physical exercise. At it's core it promises both mental exercise and learning by rote.

DESCRIPTION: Helping coders learn faster by gamifying learning by Rote 

cODE-ROTe. For details and documentation, please
visit [https://github.com/code-rote/code-rote](https://github.com/code-rote/code-rote)
cODE-ROTe. For details and documentation, please
visit [https://github.com/code-rote/code-rote](https://github.com/code-rote/code-rote)
cODE-ROTe. For details and documentation, please
visit [https://github.com/code-rote/code-rote](https://github.com/code-rote/code-rote)

Copyright 2015 Angelo Cisneros



# OK, now that the silliness is over, here are the project details...
  > __NOTE: Our project was ambitious for only a 5 day endeavor. As such, we many of the items listed below can be considered wish-list items.__

### PROJECT LINKS ###
  >* [GitHub](https://github.com/code-rote/code-rote)
  >* [Heroku](https://code-rote.herokuapp.com/)

### CONTRIBUTORS ###
  >* [Angelo Cisneros](https://github.com/el-besto)
  >* [Emannuel Navarez](https://github.com/emmyisawizard)
  >* [Laurie Alaoui](https://github.com/lalaouil)


## HOW TO START ##
### Pre requisites
1. Ruby > 2.0
2. Rails 4
3. PostgreSQL
4. Git

### Starting Project
1. Clone GitHub repo
2. Pull down dependencies with Bundler and Bower `bundle install` && `bower install`
3. Make sure Postgres in running
4. Create and migrate db, by running `rake db:create` followed by `rake db:migrate`
5. Start server with `rails s`
6. Go to `localhost:3000` to view project

### APIS USED ###
  >* Prism.js

### Front-end Dependencies
  >* jQuery
  >* Bootstrap 3
  >* Bootstrap Material Design
  >* Bower


# Key Take-Aways from Project
  >* Do not include a 'framework' of any size unless you read AT LEAST the first section of documentation, and really, AT LEAST the first page... __README's aren't just a "convention"__. Respect the effort that was put into the library and save yourself HOURS of debugging down the road. _(SEE: Bootstrap's container vs container-fluid for a good example.)_
  >* __Gold-plating is the devil__, especially when you dont even have silver plates yet. Meaning, finish the core before you move on to anything more.
  >* Libraries can rewrite what you do (i.e. break something that you "fixed", or "break" something new). This happened when trying to use Keypress.js in conjunction with my home-grown String-A-Long jQuery function. 



### Elevator Pitch
  >* The goal is to build a 'read-a-long' or 'type-a-long' adventure game that makes leveling-up your developer skills fun instead of a chore. 
  >* To be clear, we are initially targeting people with 6 mo to 1 yr of coding experience. Our differentiator in the marketplace is that we integrate high-quality notes into our gaming process. Which allows a player to gain the benefits of ROTE learning for both the physical and mental processes.

### Assumptions
  > __Riskiest Assumption__: There are enough 'standardized' processes and patterns in code to have a robust series of "levels" to keep the users coming back.

  > People will accept that there is value to typing along, instead of free-form problem solving. 
  <small>(Note: we are NOT advocating that problem solving is less important than muscle memory and procedural recollection. However, the marketplace is filled with "teach yourself to code" platforms. Yet, in my research the only peer competitor is Typing.io who have a different market segment and focus.)</small>

### Features (non-technical)
  >* Time tracking and a way to track progress over time
  >* A way to easily "see" my improvement (not necessarily just a visual element)
  >* Notes (high-quality, tested 'read-a-long' lessons)
  >* Ability to capture Code input from a users device
  >* Relevant 'Supplemental Resources' to aide in learning (It's hard to know where to start with SO many blogs and "best ways" to do things.)
  >* Ability to "save" the work I've "completed" while on the 'type-a-long' adventure. (will help to ensure the user doesnt feel they are wasting their time.)
  >* Ability to challenge my friends (competitively and/or collaboratively)

### Features (technical)
  >* character matching based on keyboard input
  >* time tracking metrics (timers, calculated fields, user_scores, etc.)
  >* Syntax highlighting (real-time)

### Competitive Analysis
>__WPM games__ (e.g. [typing.io](https://typing.io), [Mavis Beacon Typing Training](http://www.broderbund.com/c-33-mavis-beacon.aspx), [Mario Teaches Typing](https://www.youtube.com/watch?v=vVtw-ctzA7Q))
  * positives
   - timed
   - practice muscle memory
  * negatives
   - not sequenced
   - mostly a physical exercise (not mental)

>__Music games__ ([Rocksmith 2014](http://rocksmith.ubi.com/rocksmith/en-US/home/index.aspx), esp. the [Guitarcade feature](https://www.youtube.com/watch?v=QGjfrbyHB58))
  * positives
   - awesome use of gamification.
   - hooks onto a skill best learned by rote
   - make learning (muscle memory and ear training) fun!!!
  * negatives
   - not sequenced
   - requires non-standard peripherals
   - limited by licensing
   - not customizable


### PROJECT DOCS ###
#### Wireframes
  > ![Wireframes - gameboard](https://github.com/code-rote/project_resources/blob/dev/wireframes/code-rote-mockup-gameboard-v1.png)
  > ![Wireframes - profile](https://github.com/code-rote/project_resources/blob/dev/wireframes/code-rote-mockup-user_profile-v1.png)

#### ERD
  >![ERD](https://github.com/code-rote/project_resources/blob/dev/database/ERD.png)
  >* [User Stories](https://docs.google.com/spreadsheets/d/1Bv6bIiO8oW7QGTOXsY0G7ghfAOOCWqzF0Leie396Y9A/pubhtml?gid=284255804&single=true)


### WISHLIST ###
  >* real-time syntax highlighting
  >* scoring.
  >* scoring w/combo chaining => power-ups
  >* open modal on start or fade the non critical portion out of view
  >* mario kart AI that races along with you as you type
  >* multi-player
  >* user-created 'levels' or snippet sequences they want to learn
  >* ability to favorite a snippet
  >* flash-card style custom 'levels'
  >* model on [GitHub Flow on Trello](https://trello.com/b/Mm1rEv91/git), using the potential UX model for code-rote learning.


# Additional Resources from Project
## Software Development Life Cycle (SDLC) Resources

### Agile Resources
> User Stories and a Product Backlog
  * [User Stories: An Agile Introduction](http://www.agilemodeling.com/artifacts/userStory.htm): 
  * [A Sample Format for a Spreadsheet-Based Product Backlog](http://www.mountaingoatsoftware.com/blog/a-sample-format-for-a-spreadsheet-based-product-backlog)
> Agile Software Development Process Examples
  * [Agile software development, steps to work with Requirements, Estimation and Planning](http://www.codeproject.com/Articles/674450/Agile-software-development-steps-to-work-with-Requ)

### Testing
  As a group we did not feel very comfortable with testing from the outset. However, there were some group members that were comfortable with the idea of User Stories and the power that comes from orienting the project deliverables from the view-point of the end-user instead of the developer. Moreover, we felt that the TDD material discussed in class was a bit too granular and would not be able to provide the correct testing structure to have us describe our functionality without digging deep into the weeds. Therefore, we decided to try to use RSpec's 'Feature Spec' functionality and make method_names longer and more descriptive in (as suggested by Chris Zetter in [How we write readable feature tests with RSpec](https://about.futurelearn.com/blog/how-we-write-readable-feature-tests-with-rspec/)). To make it work we had to use the Capybara gem and FactoryGirl.

> Getting Started with RSpec
  * [RSpec Quickstart Guide](/tutorials/Rails_Tutorials_RSpec_Quickstart_Guide.pdf)
  rspec-rails (https://github.com/rspec/rspec-rails) – installs RSpec gems with support for Rails
* [factory_girl_rails](https://github.com/thoughtbot/factory_girl_rails) – creates test data 
* [capybara] (https://github.com/jnicklas/capybara) – tests web pages
* [database_cleaner] (https://github.com/bmabey/database_cleaner) – a clean slate for databases
* [launchy] (https://github.com/copiousfreetime/launchy) – view errors in your web browser 
* [selenium-webdriver] (http://docs.seleniumhq.org/projects/webdriver/) – for tests that require JavaScript

> [Capybara Docs](http://rubydoc.info/github/jnicklas/capybara/master)
> RSpec's Feature Spec
  * [How we write readable feature tests with RSpec](https://about.futurelearn.com/blog/how-we-write-readable-feature-tests-with-rspec/)
  * [Feature Spec](https://relishapp.com/rspec/rspec-rails/v/3-0/docs/feature-specs/feature-spec)
  * [Capybara](http://www.rubydoc.info/github/jnicklas/capybara/master)

> Additional BDD and RSpec Articles
  * [BDD with Rspec and Steak](http://timelessrepo.com/bdd-with-rspec-and-steak)
  * [Setting up the BDD stack on a new Rails 4 app](https://semaphoreapp.com/blog/2013/08/14/setting-up-bdd-stack-on-a-new-rails-4-application.html)


## Front-end
### Front-end Design Decision-Making Resources & Tools
>* [Responsive CSS Framework Comparison](http://responsive.vermilion.com/compare.php)
>* [MaterialPalette](http://www.materialpalette.com/)
>* [Google Material Design](http://www.google.com/design/spec/material-design/introduction.html)
 >* [Color](http://www.google.com/design/spec/style/color.html)
 >* [Typography](http://www.google.com/design/spec/style/typography.html)
 >* [Components](http://www.google.com/design/spec/components/bottom-sheets.html)
 >* [Resources - Roboto & Noto fonts](http://www.google.com/design/spec/resources/roboto-noto-fonts.html)

## Front-end Targeted Platforms
>* MacBook Pro (Retina, 13-inch, Late 2012 and later) displays have a 2560-by-1600 native resolution at 227 pixels per inch with support for millions of colors.


### Front-end Framework
  Requirements for front-end framework

  >1. responsive capabilities built-in
  >2. compatible with modern browsers

  We did not want to use the same bootstrap framework as the rest of the class. So we looked for similar front-end frameworks that would help us to stand out. We settled first chose Foundation 5 because of prior experience and the general appeal of it's default styles and capabilities compared to bootstrap. However, after stumbling with the Material Foundation theme (below) we went with Bootstrap and Bootstrap Material DesignIf possible, we may try to take the built-in styles of Foundation for Apps and make them conform more to the Material Design philosophy promoted by Google.

>* [Bootstrap Material Design](http://fezvrasta.github.io/bootstrap-material-design/)

>* [Foundation 5](http://foundation.zurb.com/)
  * [The Kitchen Sink - Everything](http://foundation.zurb.com/docs/components/kitchen_sink.html)
>* [Foundation for Apps](http://foundation.zurb.com/apps/index.html)
  * [Templates](http://foundation.zurb.com/apps/resources.html)
>* [Material Foundation](https://github.com/eucalyptuss/material-foundation)

### Syntax Highlighting
  Requirements for syntax highlighter functionality:
  
  >1. Highlight appropriate syntax based on (a) file extension, or (b) an in-line html attribute. 
  >2. Compatibility with other third-party javascript libraries and frameworks.
  >3. Ability to highlight a single line
  >4. Ability to see the line number
  >5. Built in themes that are easy to change (will provide feature for user to customize their gameboard)

  We found two JS libraries that provide syntax highlighting based on regex matching and customized css and will meet the most important requirements listed above. _Prism.js_ seems to be a bit more robust with its library of plug-ins and our instructor had previously used the API so we chose Prism.

#####[PrismJS](http://prismjs.com/): Customize the download [here](http://prismjs.com/download.html)
  
  >[__1. Plugin Library__](http://prismjs.com/#plugins)
  >* [line highlight](http://prismjs.com/plugins/line-highlight/): Highlights specific lines and/or line ranges.
  >* [line numbers](http://prismjs.com/plugins/line-numbers/): Line number at the beginning of code lines.
  >* [highlight keywords](http://prismjs.com/plugins/highlight-keywords/): fine-grained control over css of keywords. Plug-in appends a css class to each keyword, e.g. 'if' will get '.keyword-if'. Could be useful for emphasizing the different keywords in a given step.
  >* [file highlight](http://prismjs.com/plugins/file-highlight/): Fetch external files and highlight them with Prism. Used on the Prism website itself. Would allow us to store the exercises as individual files instead of inline.
  >* [Autolinker](http://prismjs.com/plugins/autolinker/): Converts URLs and emails in code to clickable links. Parses Markdown links in comments.

  >__2. Limitations__
  >* [Limitation of Prism](http://prismjs.com/index.html#limitations)

  >[__3. Tutorials__](http://prismjs.com/#tutorials)
  >* [How To Re-Run Prism.js On AJAX Content](http://schier.co/blog/2013/01/07/how-to-re-run-prismjs-on-ajax-content.html)
  >* [Syntax highlighting with prism.js](http://www.kevinlorenz.com/home/prism_js)
  >* [Prism JS Code Highlighter](http://davidpeach.co.uk/prism-js-code-highlighter/)
  >* [Highlight your code with Prism](http://www.semisedlak.com/article/highlight-your-code-syntax-with-prismjs/)

#####[highlightJS](https://highlightjs.org/)
  >* [Getting Started Doc](https://highlightjs.org/usage/)
  >* [Full Documentation](http://highlightjs.readthedocs.org/en/latest/)
   * **[Library API - Core functions](http://highlightjs.readthedocs.org/en/latest/api.html)**: Primary reference point for implementing the library into our project.
   * [CSS class reference](http://highlightjs.readthedocs.org/en/latest/css-classes-reference.html)
   * [Style Guide](http://highlightjs.readthedocs.org/en/latest/style-guide.html)
  * [Dev's take on Lack of linenumber support](http://highlightjs.readthedocs.org/en/latest/line-numbers.html): in short - purpose of this library is simplicity, not robustness.

### Cloud-based IDE
> Initially the product idea included a real-time code submission element. This would naturally lead us towards implementing a cloud-based IDE. However, we pivoted after determining that our primary focus would be learning by rote (repetition, repetition, repetition) instead of free-form as many other services already offer free-form and hint-based learning products. After the pivot, we stopped pursuing additional cloud editors. However, it is helpful to retain the resource links below for future reference.

> [Cloud9](https://c9.io/): Cloud service that provides both (a) an online code editor, and (b) a 'full' Ubuntu workspace in the cloud.
  * [Documentation](https://docs.c9.io/)
  * [Built on top of Ace editor](https://github.com/ajaxorg/ace)

>[Orion by Eclipse](http://eclipse.org/orion/)
  * [Getting started with Orion](http://wiki.eclipse.org/Orion/Getting_Started_with_Orion)