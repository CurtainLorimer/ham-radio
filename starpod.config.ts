import { defineStarpodConfig } from 'src/utils/config';

export default defineStarpodConfig({
  blurb: 'A creative writing prompt, fun facts, and history in a minute (maybe two)',
  description:
    'Lex Wu and Vian Vera host a weekly podcast featuring a creative writing prompt, fun facts, and history in a minute or two. Aimed for people who want to learn a few fun facts while enjoying their weekend writing, or parents who just want their kids to do something on the weekends.',
  hosts: [
    {
      name: 'Lex Wu',
      bio: 'A musician that does way too much stuff.',
      img: 'lexwu.png',
      github: 'https://github.com/lwu877',
      twitter: 'https://twitter.com/lwu877',
      website: 'https://lexwu.com'
    },
    {
      name: 'Vian Vera',
      bio: 'An artist and writer that similarly does too much.',
      img: 'vianvera.png',
    }
  ],
  platforms: {
    apple:
      'https://podcasts.apple.com/us/podcast/heres-a-minute/id1785493881',
    appleIdNumber: '1785493881',
    overcast: 'https://overcast.fm/itunes1785493881',
    pocketCasts: 'https://pca.st/htmr8etd',
    spotify: 'https://open.spotify.com/show/1Xmaek9r2UmdnwTZZRCFVG?si=339286518efc4173',
    youtube: 'https://www.youtube.com/playlist?list=PLc9AhlksfpMq4qPg54pNHjr0Y3KyaW3xX'
  },
  rssFeed: 'https://anchor.fm/s/e6b46a04/podcast/rss'
});
