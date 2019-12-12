const now = new Date()

class Event {
  constructor(id, title, allDay, start, end, squad, typeSortie, timeSortie) {
      this.id=id;
      this.title=title;
      this.allDay=allDay;
      this.start= start;
      this.end=end;
      this.squad=squad;
      this.typeSortie=typeSortie;
      this.timeSortie=timeSortie;
  }
}

export default [
  {
    id: 0,
    title: 'C',
    allDay: true,
    start: new Date(2019, 11, 2),
    end: new Date(2019, 11, 2),
    squad:'red',
    typeSortie:'C',
    timeSortie:'N',
    notes: "What will be displayed on hover",
  },
  {
    id: 1,
    title: 'C',
    allDay: true,
    start: new Date(2019, 11, 2),
    end: new Date(2019, 11, 2),
    squad:'yellow',
    typeSortie:'C',
    timeSortie:'D',
    notes: "What will be displayed on hover",
  },
  {
    id: 2,
    title: 'CN1',
    allDay: true,
    start: new Date(2019, 11, 2),
    end: new Date(2019, 11, 2),
    squad:'blue',
    typeSortie:'P',
    timeSortie:'N',
    notes: "What will be displayed on hover",
  },

  {
    id: 3,
    title: '416 HSC',
    allDay: true,
    start: new Date(2019, 11, 5),
    end: new Date(2019, 11, 7),
    squad:'orange',
    typeSortie:'C',
    timeSortie:'D',
    notes: "What will be displayed on hover",
  },

  {
    id: 4,
    title: 'C2',
    allDay: true,
    start: new Date(2019, 11, 11),
    end: new Date(2019, 11, 11),
    squad:'yellow',
    typeSortie:'C',
    timeSortie:'D',
    notes: "What will be displayed on hover",
  },

  {
    id: 5,
    title: 'P',
    allDay: true,
    start: new Date(2019, 11, 10),
    end: new Date(2019, 11, 10),
    squad:'green',
    typeSortie:'C',
    timeSortie:'D',
    notes: "What will be displayed on hover",
  },

  {
    id: 6,
    title: 'P',
    allDay: true,
    start: new Date(2019, 11, 18),
    end: new Date(2019, 11, 18),
    squad:'blue',
    typeSortie:'C',
    timeSortie:'D',
    notes: "What will be displayed on hover",
  },

  {
    id: 7,
    title: 'PN',
    allDay: true,
    start: new Date(2019, 11, 18),
    end: new Date(2019, 11, 18),
    squad:'red',
    typeSortie:'C',
    timeSortie:'D',
    notes: "What will be displayed on hover",
  },
  
]