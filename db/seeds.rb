# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Tome.create([
  {
    title: "The Enchiridion",
    canon: "Adventure Time",
    description: "The Enchiridion (which translates to \"The Handbook\" or \"The Manual\") was an ancient book with codes of conduct, guidelines, and other helpful information for heroes. The book had great power which allowed it to tear open worm holes between dimensions in the multiverse. It was broken into pieces after turning to stone by Finn in \"The Lich\" in order to stop the Lich from gaining access to the multiverse, but, as it turned out, by doing this Finn made the portal to the multiverse.",
    cover_url: "http://i.ytimg.com/vi/0Mry--ppkFM/maxresdefault.jpg"
  },
  {
    title: "Fantastic Beasts and Where to Find Them",
    canon: "Harry Potter",
    description: 'Fantastic Beasts and Where to Find Them contains the history of Magizoology and describes 85 magical species found around the world. Scamander says that he collected most of the information found in the book through observations made over years of travel and across five continents. He notes that the first edition was commissioned in 1918 by Mr Augustus Worme of Obscurus Books. However, it was not published until 1927. It is now in its 52nd edition.',
    cover_url: "http://media.comicbook.com/wp-content/uploads/2013/09/harry-potter-spinoff-movie-fantastic-beasts-and-where-to-find-them.jpg"
  },
  {
    title: "There and Back Again",
    canon: "Lord of the Rings",
    description: 'Set in a time "Between the Dawn of Færie and the Dominion of Men",[1] The Hobbit follows the quest of home-loving hobbit Bilbo Baggins to win a share of the treasure guarded by the dragon, Smaug. Bilbo\'s journey takes him from light-hearted, rural surroundings into more sinister territory.[2] The story is told in the form of an episodic quest, and most chapters introduce a specific creature, or type of creature, of Tolkien\'s Wilderland. By accepting the disreputable, romantic, fey and adventurous sides of his nature and applying his wits and common sense, Bilbo gains a new level of maturity, competence and wisdom.[3] The story reaches its climax in the Battle of the Five Armies, where many of the characters and creatures from earlier chapters re-emerge to engage in conflict.',
    cover_url: "http://www.collecttolkien.com/images/Books/Book%20Journal%20LOTR%20There%20Back%20Again.jpg"
  }
  ])
