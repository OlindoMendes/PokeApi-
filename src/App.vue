<template>
  <router-view/>
</template>

<style lang="scss">
@import url("https://use.fontawesome.com/releases/v5.8.2/css/all.css");
@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@300&display=swap');

body {
  margin: 0;
  padding: 0;
  font-family: 'Roboto Slab';font-size: 22px;
}
#app {
  background-image: url('./assets/background.jpg');
   /* Full height */
   height: 100%;

/* Center and scale the image nicely */
background-position: center;
background-repeat: no-repeat;
background-size: cover;
}

#navbar {
  background-color: rgb(83, 82, 82); /* Black background color */
  position: fixed; /* Make it stick/fixed */
  top: 0; /* Stay on top */
  width: 100%; /* Full width */
  transition: top 0.3s; /* Transition effect when sliding down (and up) */
}

/* Style the navbar links */
#navbar a {
  float: left;
  display: block;
  color: white;
  text-align: center;
  padding: 15px;
  text-decoration: none;
}

#navbar a:hover {
  background-color: #ddd;
  color: black;
}
</style>
