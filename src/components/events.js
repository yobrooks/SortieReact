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
    title: 'CN',
    allDay: true,
    start: now,
    end: now,
    squad:'red',
    typeSortie:'C',
    timeSortie:'N',
    notes: "What will be displayed on hover",
  },
  {
    id: 1,
    title: 'CD',
    allDay: true,
    start: new Date(2019, 11, 5),
    end: new Date(2019, 11, 5),
    squad:'yellow',
    typeSortie:'C',
    timeSortie:'D',
    notes: "What will be displayed on hover",
  },
  {
    id: 2,
    title: 'PN',
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
    title: 'CD2',
    allDay: true,
    start: new Date(2019, 11, 8),
    end: new Date(2019, 11, 8),
    squad:'green',
    typeSortie:'C',
    timeSortie:'D',
    notes: "What will be displayed on hover",
  },
  
]