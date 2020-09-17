# react-press
<h2>react-press-bootstrap</h2>
<p>Added Packages<p>
<ul><br/>
  <li><a href="https://reactjs.org/">react</a></li>
  <li><a href="https://www.npmjs.com/package/react-router-dom">react-router-dom</a></li>
  <li><a href="https://react-bootstrap.github.io/">react-bootstrap</a></li>
  <li><a href="https://getbootstrap.com/docs/4.4/getting-started/theming/"> bootstrap-custom-theme</a></li>
  <li><a href="https://github.com/sass/node-sass">node-sass</a></li>
  <li><a href="https://www.npmjs.com/package/react-helmet">react-helmet</a></li>
   <li><a href="https://www.npmjs.com/package/axios">axios</a></li>
   <li><a href="https://www.npmjs.com/package/dotenv">dotenv</a></li>

 </ul>
 <br/>
 NOTE: <a href="https://reactjs.org/blog/2019/08/08/react-v16.9.0.html#renaming-unsafe-lifecycle-methods">react-codemod for Lifecycle Methods</a>
 
# Sass Structure
<ul><br/>
  <li>src/assets/sass</li>
    <ul>
      <li>base</li>
      <li>components</li>
      <li>layouts</li>
      <li>main.scss</li>
    </ul>
 </ul>

<h3>Base Styles</h3>
this directory is where the bootstrap overides are, the style variables, mixins, and global styles for the site
<br/>
<h3>Components</h3>
this directory is where the individual component styles are located
<br/>
<h3>Layouts</h3>
this directory is where the different page layout styles are located
<br/>
<h3>main.scss</h3>
the main stylesheet that is loaded into the index.js file right after the bootstrap stylesheet
<h3>Mixins</h3>
the mixins are located in src/assets/sass/globals/. Currently there a 4 main break point mixins. You can change where the breakpoints occur in the src/assets/sass/globals/variables.scss file.
<br/><br/>
@include xsmall-screen { min-width: 640px }
<br/>
@include small-screen { min-width: 768px }
<br/>
@include medium-screen { min-width: 992px;}
<br/>
@include large-screen { min-width: 1200px }


