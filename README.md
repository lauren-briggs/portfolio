# Unit 08 Project 1 Homework: Professional Materials

Updated portfolio page.

## Requirements

* Submit an updated portfolio featuring Project 1 and two exemplary homework assignments.

* Submit an updated GitHub profile with pinned repositories featuring Project 1 and two exemplary assignments.

* Submit an updated resume

* Submit an updated LinkedIn profile

## Instructions

1. [Updated Portfolio](#updated-portfolio)
2. [GitHub Profile](#updated-github-profile)
3. [Updated Resume](#updated-resume)
4. [Updated LinkedIn](#updated-linkedin)

## Updated Portfolio

Your updated portfolio should:

1. Display your full name, email, and phone number

2. Have links to your GitHub profile and LinkedIn profile

3. Have a link to a downloadable PDF of your resume

4. Display at least 2 examples of student work from either deployed projects or homeworks. For each project, make sure you have the following:

    * Project title

    * Link to the deployed version

    * Link to the GitHub repository

    * Screenshot of the deployed application

5. Have a polished, mobile-responsive user interface.

### Design

Unfortunately, this is where it gets a little bit subjective. Your site should look
"polished." Here are a few guidelines on what that means:

* Mobile-first design

* Choose a color palette for your site so it doesn't just look like
  the default bootstrap theme or an unstyled HTML site.

* Make sure the font size is large enough to read, and that the colors don't cause eye strain.

## Updated GitHub Profile

Employers (and potential collaborators) _will_ look at your GitHub profile, so put your best face forward. 

Your GitHub profile must contain at least the following items:

1. Professional profile picture

   * A photo or an image other than the default Github identicon. (a semi-professional to professional photo or an avatar photo are preferred)

2. Biography

3. Your current location

4. Email address

5. Link to your deployed portfolio

6. At least 2 pinned repositories:

   * Navigate to [GitHub](https://github.com/) and go to your profile.

   * Click "Customize your pins"

   * Click the checkboxes for your project and 2-3 homework assignments that you would like to share

7. Follow a few of your classmates. They are the beginning of your professional network and being a developer is as much about being a part of the community as it is writing code.

8. README files. Every pinned project should contain a README file with:

   * Title of app
   * Live link to deployed app
   * List of technologies used
   * 1-2 sentences explaining what the app is
   * 2-3 Screenshots / gifs of the app
   * License (usually MIT)
   * Contact information for you and any collaborators

9. Commit history. Every pinned repository should have at least 20 commits.

### 3. Updated Resume

💁 Need help building a resume? Check out the [Career Services milestone resources](https://mycareerspot.org/resume).

Submit a clear, concise, and compelling resume, tailored to the type of job you’re looking for.

Your resume should include:

* a heading with your name, phone number, professional email address, links to LinkedIn, portfolio and GitHub

* a technical skills section, with all programming languages and technologies listed

* 3 of your strongest projects/homework assignments with brief description, languages used, and URL

### 4. Updated LinkedIn

💁 Need help updating your LinkedIn? Check out the [Career Services milestone resources for online presence](https://mycareerspot.org/onlinepresence).

Update your LinkedIn Profile with a strong bio statement, a professional photo, and links to your Github and portfolio.

### ⭐ 5. For Job-Seeking Students (BONUS)

If you are a job-seeking student, then getting yourself marked as employer-ready is an important step to take because you'll get:

* added to our employer referral list, where we'll help match you with employers for interviews

* exclusive access to workshops for employer-ready students

* a statistically higher success rate in your job search

So if you're going to be looking for a job at the end of your boot camp, go ahead and submit these updated items to your Career Materials Advisor (formerly Profile Coach) via BootCampSpot.

---
© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.



# portfolio -- WEEK 02
Portfolio, week two homework

For this website I started by defining the header, h1 and nav tags. The header is inline-flex to allow for the nav list items to be side by side.

I created a section for the background img in html, but actually linked the img in css. I had some issues positioning the subtitle - it is still not perfect and isn't super responsive. I thought it should be relative but it wouldn't work properly unless absolute.

For the grid - I tried doing the whole thing flex but in the end decided to create a grid which I think worked well. 

I then used a flex display with flex wrap for the project boxes, and made the min width for the first box to be 50vw, larger than rest of the boxes so they would be forced onto the next row.

To mimic the hover effect on the project imgs, I set the regular opacity to 0.8, and used the pseudo class :hover and changed the opacity to 1

It was already largely responsive because of the flex grid and because I had used vw - but one of the main changes I made using media query was the alignment and flex-direction of the nav and contact links.

I did have trouble with the positioning of the contact links on a narrower screen - I couldn't figure out why they were getting pushed the the bottom.

Thanks :)
