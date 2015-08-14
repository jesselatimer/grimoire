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
    canon: "Adventure Time by Pendleton Ward",
    author_name: "unknown",
    description: "The Enchiridion (which translates to \"The Handbook\" or \"The Manual\") was an ancient book with codes of conduct, guidelines, and other helpful information for heroes. The book had great power which allowed it to tear open worm holes between dimensions in the multiverse. It was broken into pieces after turning to stone by Finn in \"The Lich\" in order to stop the Lich from gaining access to the multiverse, but, as it turned out, by doing this Finn made the portal to the multiverse.",
    cover_url: "http://i.ytimg.com/vi/0Mry--ppkFM/maxresdefault.jpg"
  },
  {
    title: "Fantastic Beasts and Where to Find Them",
    canon: "Harry Potter by J.K. Rowling",
    description: 'Fantastic Beasts and Where to Find Them contains the history of Magizoology and describes 85 magical species found around the world. Scamander says that he collected most of the information found in the book through observations made over years of travel and across five continents. He notes that the first edition was commissioned in 1918 by Mr Augustus Worme of Obscurus Books. However, it was not published until 1927. It is now in its 52nd edition.',
    cover_url: "http://media.comicbook.com/wp-content/uploads/2013/09/harry-potter-spinoff-movie-fantastic-beasts-and-where-to-find-them.jpg"
  },
  {
    title: "There and Back Again",
    canon: "Lord of the Rings by J.R.R. Tolkien",
    description: 'Set in a time "Between the Dawn of Færie and the Dominion of Men",[1] The Hobbit follows the quest of home-loving hobbit Bilbo Baggins to win a share of the treasure guarded by the dragon, Smaug. Bilbo\'s journey takes him from light-hearted, rural surroundings into more sinister territory.[2] The story is told in the form of an episodic quest, and most chapters introduce a specific creature, or type of creature, of Tolkien\'s Wilderland. By accepting the disreputable, romantic, fey and adventurous sides of his nature and applying his wits and common sense, Bilbo gains a new level of maturity, competence and wisdom.[3] The story reaches its climax in the Battle of the Five Armies, where many of the characters and creatures from earlier chapters re-emerge to engage in conflict.',
    cover_url: "http://www.collecttolkien.com/images/Books/Book%20Journal%20LOTR%20There%20Back%20Again.jpg"
  },
  {
    title: "The Necronomicon",
    canon: "The Cthulhu Mythos by H.P. Lovecraft",
    description: 'The Necronomicon is a fictional grimoire (textbook of magic) appearing in the stories by horror writer H. P. Lovecraft and his followers. It was first mentioned in Lovecraft\'s 1924 short story "The Hound",[1] written in 1922, though its purported author, the "Mad Arab" Abdul Alhazred, had been quoted a year earlier in Lovecraft\'s "The Nameless City".[2] Among other things, the work contains an account of the Old Ones, their history, and the means for summoning them.',
    cover_url: "http://orig04.deviantart.net/fc4c/f/2013/348/e/8/e8f395694618a4221c6823e02a408b29-d6xx05l.jpg"
  },
  {
    title: "De Vermis Mysteriis",
    canon: "The Shambler from the Stars by Robert Bloch",
    description: 'The work of Ludwig Prinn, an "alchemist, necromancer, [and] reputed mage" who "boasted of having attained a miraculous age" before being burned at the stake in Brussels during the height of the witch trials (in the late 15th or early 16th centuries).',
    cover_url: "http://40.media.tumblr.com/tumblr_lcf2srvV2r1qzlngto1_1280.jpg"
  }
])

User.create([
  {
    password: "password",
    username: "boywholived",
    name: "Harry Potter",
    canon: "Harry Potter by J.K. Rowling",
    bio: "I defeated the Dark Lord Voldemort when I was a baby!",
    image_url: "http://inspirationfeed.com/wp-content/uploads/2011/07/size500_harrypotter_jakeparker_harrypotter_detail11.jpg"
  },
  {
    password: "password",
    username: "TheWorshipper",
    name: "Abdul Alhazred",
    canon: "The Cthulhu Mythos by H.P. Lovecraft",
    bio: 'A mad poet of Sanaá, in Yemen, who is said to have flourished during the period of the Ommiade caliphs, circa 700 A.D. He visited the ruins of Babylon and the subterranean secret of Memphis and spent ten years alone in the great southern desert of Arabia—the Roba El Khaliyeh or "Empty Space" of the ancients—and "Dahna" or "Crimson" desert of the modern Arabs, which is held to be inhabited by protective evil spirits and monsters of death. Of this desert many strange and unbelievable marvels are told by those who pretend to have penetrated it. In his last years Alhazred dwelt in Damascus.',
    image_url: "http://orig10.deviantart.net/26bf/f/2013/304/7/3/abdul_from_sanaa_by_noldofinve-d6s1mdm.jpg"
  },
  {
    password: "password",
    username: "iheartprincesses",
    name: "The Ice King",
    canon: "Adventure Time by Pendleton Ward",
    bio: '"What do you think, Finn? Can we pull back the veil of static and reach in to the source of all being? Behind this curtain of patterns, this random pattern generator. So clever. Right here in every home, watching us from a one-sided mirror."',
    image_url: "http://orig05.deviantart.net/c3f6/f/2012/187/9/1/ice_king_by_devastis-d56704p.png"
  },
  {
    password: "password",
    username: "natureguy",
    name: "Radagast the Brown",
    canon: "Middle-earth by J.R.R. Tolkien",
    bio: 'Radagast the Brown is a fictional character in J. R. R. Tolkien\'s Middle-earth legendarium. He is one of the Istari, also known as "Wizards", who were sent by the angelic Valar to aid the Elves and Men of Middle-earth in their struggle against the Dark Lord Sauron. Radagast appears in The Lord of the Rings and Unfinished Tales, and is mentioned in The Hobbit and The Silmarillion.',
    image_url: "http://pre11.deviantart.net/abd8/th/pre/i/2013/004/7/f/radagast_the_brown_by_angelabermudez-d5qes4o.jpg"
  },
  {
    password: "password",
    username: "shrouded_in_mystery"
  }
])
