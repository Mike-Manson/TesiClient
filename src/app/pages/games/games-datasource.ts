import {
  GamesDto,
  Gameplay,
  Scope,
  Platform,
  ActionGames,
  Audience,
  Pegi,
  PegiDescriptor,
  Adventure,
  Purpose,
  Simulation,
} from './games';

export const games: GamesDto[] = [
  // {
  //   id: 1,
  //   name: `Assassin's Creed`,
  //   description: `Assassin's Creed è un videogioco action-adventure del 2007, sviluppato da Ubisoft Montréal e pubblicato da Ubisoft per Xbox 360, PlayStation 3, Microsoft Windows, Android e Nintendo ds . Si tratta del primo capitolo della fortunata saga di videogiochi Assassin's Creed.

  //   Il gioco è stato presentato all'E3 del 2005, inizialmente come esclusiva PlayStation 3 ma poi annunciato anche per Xbox 360. Nell'aprile del 2008 ne è stata realizzata una versione per Microsoft Windows.

  //   Assassin's Creed è ambientato nel 1191, periodo storico nel quale la Terra Santa è devastata dalla Terza Crociata. La campagna in Terra Santa di Riccardo Cuor di Leone fece in parte dimenticare le sconfitte di alcuni anni prima e attraverso una saggia tregua i pellegrini cristiani ebbero il permesso di visitare Gerusalemme, che restava comunque in territorio musulmano. Questo fu uno degli eventi che più contribuirono a innalzare la fama di Saladino come condottiero leale e onesto. Nascosto nella segretezza dei loro rifugi, un gruppo di guerrieri appartenenti alla confraternita degli Assassini intende riportare la pace in Terra Santa eliminando i capi corrotti delle due fazioni. I giocatori assumono il ruolo di Altaïr Ibn La-Ahad (Colui che vola figlio di nessuno), uno dei priori della confraternita e il più abile a padroneggiare le arti degli assassini, prescelto per diventare un giorno il capo della setta. Egli viene incaricato dal Gran Maestro Al Mualim di far finire la guerra nelle città della Terra Santa per riscattare il suo onore e il suo rango. Inoltre il suo abito bianco lo aiuta a mimetizzarsi meglio tra la folla e, in particolar modo, tra gli eruditi di un tempo, grazie al suo grande cappuccio.

  //   Altair si ritroverà ad affrontare i Crociati, gli Ospitalieri, i Templari, i Teutonici, i Saraceni e ovviamente le guardie cittadine.

  //   È il primo capitolo della "Saga di Desmond Miles".`,
  //   authors: [
  //     {
  //       id: 1,
  //       gameId: 1,
  //       fullName: 'Ubisoft',
  //     },
  //   ],
  //   gameplay: Gameplay.PlayBased,
  //   purpose: [Purpose.DataExchange],
  //   scope: Scope.Education,
  //   platform: [],
  //   category: {
  //     actionGames: [
  //       ActionGames.Fighting,
  //       ActionGames.Stealth,
  //       ActionGames.Fighting,
  //     ],
  //     adventure: [Adventure.RealTime3D],
  //   },
  //   audience: Audience.Band5,
  //   img: 'assets/assassinscreed.jpg',
  //   pegi: Pegi.PEGi16,
  //   pegiDescriptors: [PegiDescriptor.Violence, PegiDescriptor.BadLanguage],
  // },
  {
    id: 2,
    name: `Caesar 3`,
    description: `Caesar III è un videogioco manageriale strategico in tempo reale (RTS) della Sierra On-line. È ambientato all'epoca dell'impero romano, senza tuttavia poterlo considerare "storico" nei fatti che presenta. Il sistema di gioco è simile a quello della saga di SimCity, ovvero molto incentrato sulla creazione di una città e dei servizi connessi.`,
    authors: [
      {
        id: 1,
        gameId: 1,
        fullName: 'Sierra On-line',
      },
    ],
    gameplay: Gameplay.GameBased,
    purpose: [Purpose.DataExchange],
    scope: Scope.MilitaryDefense,
    platform: [],
    category: {
      simulation: [
        Simulation.ConstructionManagementSimulation
      ],
    },
    audience: Audience.Band5,
    img: 'assets/caesar3.jpg',
    pegi: Pegi.PEGi3
  },
  {
    id: 3,
    name: `Adiboud'Chou Jungle et Savane`,
    description: `Adiboud'Chou Jungle et Savane sur PC est un titre ludo-éducatif pour les 2-5 ans qui invite ses joueurs à traverser quelques jeux et activités pour découvrir les formes, les couleurs ou encore les sons. Retrouvez dans chaque titre un contenu riche conçu en collaboration avec des éducateurs en crèches et des instituteurs. De nombreuses activités sont proposées avec différents niveaux de difficulté pour un apprentissage tout en douceur.`,
    gameplay: Gameplay.GameBased,
    scope: Scope.Education,
    platform: [],
    audience: Audience.Band2,
    img: 'assets/jaquette-adiboud-chou-jungle-et-.jpg',
    pegi: Pegi.PEGi3
  },
  {
    id: 4,
    name: `Teletubbies`,
    gameplay: Gameplay.GameBased,
    scope: Scope.Humanitarian,
    platform: [],
    audience: Audience.Band4,
    img: 'assets/teleps0f.jpg',
    pegi: Pegi.PEGi3
  },
  {
    id: 5,
    name: `2 Player Game`,
    scope: Scope.Humanitarian,
    img: 'assets/2-player-head-basketball.jpg',
    audience: Audience.Band1,
  },
  {
    id: 6,
    name: `Cheerios Play Time`,
    scope: Scope.Advertising,
    img: 'assets/Cheerios-Play-Time.png',
    audience: Audience.Band4,
  },
  {
    id: 7,
    name: `Curapy`,
    scope: Scope.Healthcare,
    img: 'assets/curapy.jpg',
    audience: Audience.GeneralPublic,
  },
  {
    id: 8,
    name: `English Taxi`,
    img: 'assets/English-Taxi.jpg',
    audience: Audience.Students,
    description: `A serious game to teach english to Chinese students through cab driving`,
    authors: [
      {
        id: 1,
        gameId: 8,
        fullName: 'DESQ / Aqua Pacific (United Kingdom)',
      },
      {
        id: 2,
        gameId: 8,
        fullName: 'British Council in Beijing (China)',
      }
    ],
    gameplay: Gameplay.GameBased,
    purpose: [Purpose.MessageBroadcasting],
    scope: Scope.Education,
    platform: [],
    category: {
      simulation: [Simulation.LifeSimulation]
    },
    pegi: Pegi.PEGi16
  },
  {
    id: 9,
    name: `GeoSafari: Animals`,
    scope: Scope.Ecology,
    img: 'assets/GeoSafari-Animals.png',
    audience: Audience.Band4,
  },
  {
    id: 10,
    name: `Jirosum`,
    scope: Scope.ScientificResearch,
    img: 'assets/Jirosum.gif',
    audience: Audience.Band3,
  },
  {
    id: 11,
    name: `Le tour du monde en 80 déchets`,
    scope: Scope.Ecology,
    img: 'assets/10293_14630_fra.png',
    audience: Audience.Band3,
  },
  {
    id: 12,
    name: `Physica`,
    scope: Scope.ScientificResearch,
    img: 'assets/Physica.jpg',
    audience: Audience.Band4,
  },
  {
    id: 13,
    name: `Planet Rescue: Ocean Patrol`,
    scope: Scope.Ecology,
    img: 'assets/Planet-Rescue-Ocean-Patrol.jpg',
    audience: Audience.GeneralPublic,
  },
  {
    id: 14,
    name: `Seismic Duck`,
    scope: Scope.ScientificResearch,
    img: 'assets/Seismic-Duck.png',
    audience: Audience.GeneralPublic,
  },
];
