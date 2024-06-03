import images from './images';

const wines = [
  {
    title: 'Healing Draught',
    price: '20 gold coins',
    tags: 'Mandrake root, unicorn tears, powdered dragon scale',
    buff: 'Heals wounds and restores vitality'
  },
  {
    title: 'Invisibility Potion',
    price: '50 gold coins',
    tags: 'Shadow essence, ghost orchid petals, moonlight dew',
    buff: 'Grants invisibility for up to one hour'
  },
  {
    title: 'Love Potion',
    price: '30 gold coins',
    tags: 'Rose petals, mermaid scales, enchanted stardust',
    buff: 'Inspires affection and attraction'
  },
  {
    title: 'Strength Tonic',
    price: '25 gold coins',
    tags: "Ogre's blood, titan's muscle fiber, phoenix feather",
    buff: 'Temporarily boosts physical strength'
  },
  {
    title: 'Truth Serum',
    price: '40 gold coins',
    tags: 'Silver tongue herb, essence of honesty, dragonfly wings',
    buff: 'Compels the drinker to speak the truth'
  },
];

const cocktails = [
  {
    title: 'Elixir of Eternal Youth',
    price: '100 gold coins',
    tags: 'Fountain of youth water, elven fruit, golden apple essence',
    buff: 'Slows aging and restores youthful appearance'
  },
  {
    title: 'Elixir of Wisdom',
    price: '70 gold coins',
    tags: "Sage leaf, owl feather, philosopher's stone dust",
    buff: 'Enhances wisdom and mental clarity'
  },
  {
    title: 'Elixir of Night Vision',
    price: '35 gold coins',
    tags: "Bat's eye, cat's whiskers, nocturnal essence",
    buff: 'Grants the ability to see in the dark'
  },
  {
    title: 'Elixir of Fire Resistance',
    price: '45 gold coins',
    tags: "Salamander scale, fire blossom, lava crystal",
    buff: 'Protects against fire and heat'
  },
  {
    title: 'Elixir of Flight',
    price: '60 gold coins',
    tags: 'Griffin feather, air essence, cloudberry',
    buff: 'Grants the ability to fly for a short period'
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: "Alchemist's Excellence Award",
    subtitle: 'Recognized for our unparalleled mastery in potion crafting and commitment to preserving ancient magical traditions.',
  },
  {
    imgUrl: images.award01,
    title: "Enchanter’s Choice",
    subtitle: 'Honored by the Wizardry Guild for our innovative and potent elixirs that have become essential in the magical community.',
  },
  {
    imgUrl: images.award05,
    title: 'Arcane Arts Distinction',
    subtitle: 'Awarded for our exceptional contribution to the field of alchemy, blending science and sorcery in perfect harmony.',
  },
  {
    imgUrl: images.award03,
    title: 'Master Potion Brewer',
    subtitle: 'Celebrated for our meticulous attention to detail and the creation of potions that surpass all standards of magical excellence.',
  },
];

export default { wines, cocktails, awards };
