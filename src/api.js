
export const profH = {
  id: 1,
  name: "Larry Heimann",
  bio: "qapla",
};

// note that this isn't a permanent edit but if it were connected
// to a database you could easily make it one!
export const setBio = (newBio) => {
  profH.bio = newBio;
}
