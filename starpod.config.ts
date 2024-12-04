import { defineStarpodConfig } from 'src/utils/config';

export default defineStarpodConfig({
  blurb: 'A creative writing prompt, fun facts, and history in a minute (maybe two)',
  description:
    'Lex Wu and Jayden Alip host a weekly podcast featuring a creative writing prompt, fun facts, and history in a minute or two. Aimed for people who want to learn a few fun facts while enjoying their weekend writing, or parents who just want their kids to do something on the weekends.',
  hosts: [
    {
      name: 'Lex Wu',
      bio: 'A musician that does way too much stuff.',
      img: 'robbiethewagner.jpg',
      github: 'https://github.com/lwu877',
      twitter: 'https://twitter.com/lwu877',
      website: 'https://lexwu.com'
    },
    {
      name: 'Jayden Alip',
      bio: 'Third of his name, user of gifs, hater of ESM.',
      img: 'chuckcarpenter.jpg',
      github: 'https://github.com/chuckcarpenter',
      twitter: 'https://twitter.com/CharlesWthe3rd'
    }
  ],
  platforms: {
    apple:
      'https://podcasts.apple.com/us/podcast/whiskey-web-and-whatnot/id1552776603?uo=4?mt=2&ls=1',
    appleIdNumber: '1552776603',
    overcast: 'https://overcast.fm/itunes1552776603',
    pocketCasts: 'https://pca.st/bezzctzj',
    spotify: 'https://open.spotify.com/show/19jiuHAqzeKnkleQUpZxDf',
    youtube: 'https://www.youtube.com/@WhiskeyWebAndWhatnot/'
  },
  rssFeed: 'https://anchor.fm/s/e329dea0/podcast/rss'
});
