# Project-Gallery-P2

Project Gallery Readme

Summary:

1. I started working on my project gallery and created some initial structure in the HTML file.
2. I implemented some coding I had learnt while building my Hobby page, including adding title text, a background image, and a gradient to darken the image.
3. I positioned my background image to fit the entire page and added font styling using the \* tag in CSS for consistency with my Hobby page.
4. I decided to leave my project gallery for a while as there were many elements to fix, add, and learn on my Hobby page.
   Once my Hobby page was mostly finished, I started working on my project gallery again.
5. I created the overall structure by making the basic nav bar and divs for the title, nav bar, and project tiles.
6. I used CSS and flex styling to position the title content and project tiles in the center of the page.
7. I successfully styled and added a background image to each project tile, and made them clickable.
8. I learnt about the differences between two CSS tags for styling the nav bar, and how to target each project tile individually to alter their background images.
9. I implemented a nice animation using CSS when the cursor hovers over each tile of my gallery page.

14th Febuary: Having already made a project, repo and folders for the project gallery back before I started work on Project 1, I now returned to layout a beginning structure for my project gallery.
Here I added some initial strucutre to my html file and created some <div class> tags that will prove useful in styling and organising the page.
15th Febuary: Now I know exactly how I want the gallery to look. I implemented some of the coding I have learnt while building my Hobby page.
The first thing was to add title text, a background image and a gradient to darken the image. I used some CSS code to position my background image to fit the entire page. The idea is that I will have that filling the screen, bold title text in the middle, left hand-side of the page. And Finally on the middle right, my clickable project tiles will be placed. I also added a font styling using the \* tag in CSS so that my page has nice text and is also consistent with my hobby page.
Now that I had made a clean start to this P2 and knew where I would be going, I decided to leave it for now as there many elements to add fix, add and learn on my hobby page.

March 1st: Now that my Hobby page is mostly finished with and only a few tweaks remain, it is time to make headway with my project gallery.
Today is about creating the overall structure by making the basic nav bar, creating divs for the title, nav bar and project tiles. One of the key takeaways I took from making the Hobby page was just how important it is to establish a clear and clean foundation. Without a clear platform from which to build and design off of, it can quickly become messy and confusing. So I wanted to approach this a bit more deliberately.
Creating the title. I wanted the bold, white text to go over the top of the background image. To do this I realized that my <H1> tags of basically _anything_ that I wanted to be included ON TOP of the image, had to be placed and written within the .container div class. Otherwise the content would be placed below the image. This also goes for my project tiles that I have now added. I want the title content and the tiles to be position in the center of the page. In order to do this I used CSS and flex styling. I created a <div class> for each project tile also.
I successfully styled and added a background image to each project tile.
They are also clickable and I shall add the links to each project later.

March 3rd:
Today's goal is to finish the my project gallery so that I can spend the weekend on my 3rd project: Movie Data.
The first big learning of today was realizing the uses and differences of two CSS tags that relate to my Nav bar. This tag is called " nav ul li". This tag allows you to style whatever is in between <nav> tags. However, this tag only relates to positioning etc. When I tried to style the font within this, the changes did not take effect. I saw another user example who had a second tag in CSS called "nav ul a" within which they had added various font properties like colouring etc. I did this and my changes took effect. I will use this for future work when creating Nav bars.
The next task was to : Make each of my project tiles distinct. I liked the aesthetic effect of having a background image for each tile. However, having the SAME one for each one makes them look too similar. As I had already used an overarching div class to style all 5 tags, I would have to find a way to individually target each one in order to alter their background images. I learnt that when using a div class tag in HTMLs, you can actually have more than one tag next to each other. For example, my overarching tag was called "projectcard.". This held all of my styling parameters that I didn't want to lose or have to repeate for each tile. So I went back to my HTML page and edited my Div class= for each tile to include their project number. E.g : " div class="projecttile projecttile 1"; ".
Then I could go over to CSS and simply change the background image as well as other elements using just the second part of the tag: " project1.{ contents }."
The next thing I learnt and implemented using CSS is a nice animation when the cursor hovers over each tile of my gallery page. To do this I went into the div class tag in CSS and wrote: "Transform: TranslateY(-15px);", this causes the tile to shift upwards, hence the (-Y axis number). I then went to the parent div class and added "Transition: Transfform(0.15sc);" to control the speed of the transition. This makes the whole experience smoother and matches the look and feel I want my gallery to have.
