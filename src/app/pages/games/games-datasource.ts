import { GamesDto, Gameplay, Scope, Platform, ActionGames, ActionAdventure, Audience, Pegi, PegiDescriptor, Adventure } from './games';

export const games: GamesDto[] = [
  {
    id: 1,
    name: `Assassin's Creed`,
    description: `Assassin's Creed è un videogioco action-adventure del 2007, sviluppato da Ubisoft Montréal e pubblicato da Ubisoft per Xbox 360, PlayStation 3, Microsoft Windows, Android e Nintendo ds . Si tratta del primo capitolo della fortunata saga di videogiochi Assassin's Creed.

    Il gioco è stato presentato all'E3 del 2005, inizialmente come esclusiva PlayStation 3 ma poi annunciato anche per Xbox 360. Nell'aprile del 2008 ne è stata realizzata una versione per Microsoft Windows.

    Assassin's Creed è ambientato nel 1191, periodo storico nel quale la Terra Santa è devastata dalla Terza Crociata. La campagna in Terra Santa di Riccardo Cuor di Leone fece in parte dimenticare le sconfitte di alcuni anni prima e attraverso una saggia tregua i pellegrini cristiani ebbero il permesso di visitare Gerusalemme, che restava comunque in territorio musulmano. Questo fu uno degli eventi che più contribuirono a innalzare la fama di Saladino come condottiero leale e onesto. Nascosto nella segretezza dei loro rifugi, un gruppo di guerrieri appartenenti alla confraternita degli Assassini intende riportare la pace in Terra Santa eliminando i capi corrotti delle due fazioni. I giocatori assumono il ruolo di Altaïr Ibn La-Ahad (Colui che vola figlio di nessuno), uno dei priori della confraternita e il più abile a padroneggiare le arti degli assassini, prescelto per diventare un giorno il capo della setta. Egli viene incaricato dal Gran Maestro Al Mualim di far finire la guerra nelle città della Terra Santa per riscattare il suo onore e il suo rango. Inoltre il suo abito bianco lo aiuta a mimetizzarsi meglio tra la folla e, in particolar modo, tra gli eruditi di un tempo, grazie al suo grande cappuccio.

    Altair si ritroverà ad affrontare i Crociati, gli Ospitalieri, i Templari, i Teutonici, i Saraceni e ovviamente le guardie cittadine.

    È il primo capitolo della "Saga di Desmond Miles".`,
    authors: [
      {
        id: 1,
        gameId: 1,
        fullName: 'Ubisoft'
      }
    ],
    gameplay: Gameplay.PlayBased,
    purpose: {
      dataExchange: 'Data Exchange',
      training: 'Training',
      messageBroadcasting: 'Message Broadcasting'
    },
    scope: Scope.Education,
    platform: Platform.Virtual,
    category: {
      actionGames: [
        ActionGames.Fighting,
        ActionGames.Stealth,
        ActionGames.Fighting
      ],
      adventure: [
        Adventure.RealTime3D
      ]
    },
    audience: Audience.Band5,
    img: 'assets/assassinscreed.jpg',
    pegi: Pegi.PEGi16,
    pegiDescriptors: [
      PegiDescriptor.Violence,
      PegiDescriptor.BadLanguage
    ]
  },
  {
    id: 2,
    name: 'Gioco 2',
    description: 'description',
    authors: [
      {
        id: 1,
        gameId: 2,
        fullName: 'Ciccio Cappuccio'
      }
    ],
    gameplay: Gameplay.PlayBased,
    purpose: {
      dataExchange: 'DataExchange',
      training: 'Training',
      messageBroadcasting: 'MessageBroadcasting'
    },
    scope: Scope.MilitaryDefense,
    platform: Platform.Virtual,
    category: {
      actionGames: [ActionGames.Shooter, ActionGames.Stealth, ActionGames.Survival],
      actionAdventure: [ActionAdventure.SurvivalHorror]
    },
    audience: Audience.Band5,
    img: 'assets/assassinscreed.jpg',
    pegi: Pegi.PEGi18,
    pegiDescriptors: [
      PegiDescriptor.Online,
      PegiDescriptor.Drugs,
      PegiDescriptor.Gambling,
      PegiDescriptor.Discrimination,
      PegiDescriptor.Fear,
      PegiDescriptor.Sex,
      PegiDescriptor.Violence
    ]
  }

]
