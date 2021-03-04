# portfolio
Portfolio, week two homework

For this website I started by defining the header, h1 and nav tags. The header is inline-flex to allow for the nav list items to be side by side.

I created a section for the background img in html, but actually linked the img in css. I had some issues positioning the subtitle - it is still not perfect and isn't super responsive. I thought it should be relative but it wouldn't work properly unless absolute.

For the grid - I tried doing the whole thing flex but in the end decided to create a grid which I think worked well. 

I then used a flex display with flex wrap for the project boxes, and made the min width for the first box to be 50vw, larger than rest of the boxes so they would be forced onto the next row.

To mimic the hover effect on the project imgs, I set the regular opacity to 0.8, and used the pseudo class :hover and changed the opacity to 1

It was already largely responsive because of the flex grid and because I had used vw - but one of the main changes I made using media query was the alignment and flex-direction of the nav and contact links.

I did have trouble with the positioning of the contact links on a narrower screen - I couldn't figure out why they were getting pushed the the bottom.

Thanks :)
