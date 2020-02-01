var labEvents = [
  { title: 'EPEX Call / Blanka M.', start: '2020-01-30T14:00:00', end: '2020-01-30T15:00:00', resourceId: 'C-MEETROOM' },
  { title: 'ada fellowship info-session / Adela P. & Kristyna G.', start: '2020-02-05T09:30:00', end: '2020-02-05T11:00:00', resourceId: 'B-LONGTABLE' },
  { title: 'MISP Workshop / Josef S.', start: '2020-02-27T10:00:00', end: '2020-02-27T12:00:00', resourceId: 'B-LONGTABLE' },
  { title: 'M7T OPS team setup / Ondrej V.', start: '2020-01-27T09:30:00', end: '2020-01-27T11:30:00', resourceId: 'C-MEETROOM' },
  { title: 'CERT+SOC Workshop / Josef S.', start: '2020-02-11T09:00:00', end: '2020-02-11T18:00:00', resourceId: 'B-LONGTABLE' },
  { title: 'Compliance gathering / Eliska F.', start: '2020-01-28T12:00:00', end: '2020-01-28T14:30:00', resourceId: 'B-LONGTABLE' },
  { title: 'FM Blocker / Ondrej H.', start: '2020-01-21T09:00:00', end: '2020-01-21T12:00:00', resourceId: 'A-ROUNDTABLE' },
  { title: 'FM Blocker / Ondrej H.', start: '2020-01-21T09:00:00', end: '2020-01-21T12:00:00', resourceId: 'B-LONGTABLE' },
  { title: 'FM Blocker / Ondrej H.', start: '2020-01-21T09:00:00', end: '2020-01-21T12:00:00', resourceId: 'C-MEETROOM' },
  { title: 'Global TKAM meeting / Michael J.', start: '2020-01-16T15:00:00', end: '2020-01-16T17:00:00', resourceId: 'C-MEETROOM' },
  { title: 'Service Delivery meeting / Jaroslav N.', start: '2020-01-08T14:00:00', end: '2020-01-08T16:00:00', resourceId: 'C-MEETROOM' },
  { title: 'HR Meeting / Mia M.', start: '2020-01-14T09:00:00', end: '2020-01-14T13:00:00', resourceId: 'B-LONGTABLE' },
  { title: 'Bulls and Bears Public Speaking / David M.', start: '2020-03-19T16:00:00', end: '2020-03-19T17:00:00', resourceId: 'C-MEETROOM' },
  { title: 'Bulls and Bears Public Speaking / David M.', start: '2020-03-05T16:00:00', end: '2020-03-05T17:00:00', resourceId: 'C-MEETROOM' },
  { title: 'Bulls and Bears Public Speaking / David M.', start: '2020-02-20T16:00:00', end: '2020-02-20T17:00:00', resourceId: 'C-MEETROOM' },
  { title: 'Bulls and Bears Public Speaking / David M.', start: '2020-02-06T16:00:00', end: '2020-02-06T17:00:00', resourceId: 'C-MEETROOM' },
  { title: 'Bulls and Bears Public Speaking / David M.', start: '2020-01-23T16:00:00', end: '2020-01-23T17:00:00', resourceId: 'C-MEETROOM' },
  { title: 'Bulls and Bears Public Speaking / David M.', start: '2020-01-09T16:00:00', end: '2020-01-09T17:00:00', resourceId: 'C-MEETROOM' },
  { title: 'Bulls and Bears Public Speaking / David M.', start: '2020-04-02T16:00:00', end: '2020-04-02T17:00:00', resourceId: 'C-MEETROOM' },
  { title: 'Bulls and Bears Public Speaking / David M.', start: '2020-04-16T16:00:00', end: '2020-04-16T17:00:00', resourceId: 'C-MEETROOM' },
  { title: 'Bulls and Bears Public Speaking / David M.', start: '2020-04-30T16:00:00', end: '2020-04-30T17:00:00', resourceId: 'C-MEETROOM' },
  { title: 'Bulls and Bears Public Speaking / David M.', start: '2020-05-14T16:00:00', end: '2020-05-14T17:00:00', resourceId: 'C-MEETROOM' },
  { title: 'Bulls and Bears Public Speaking / David M.', start: '2020-05-28T16:00:00', end: '2020-05-28T17:00:00', resourceId: 'C-MEETROOM' },
  { title: 'Bulls and Bears Public Speaking / David M.', start: '2020-06-11T16:00:00', end: '2020-06-11T17:00:00', resourceId: 'C-MEETROOM' },
  { title: 'Bulls and Bears Public Speaking / David M.', start: '2020-06-25T16:00:00', end: '2020-06-25T17:00:00', resourceId: 'C-MEETROOM' },
  { title: 'Waste Sorting Training / Bara S.', start: '2020-01-22T12:30:00', end: '2020-01-22T17:00:00',resourceId: 'B-LONGTABLE'},
  { title: 'Waste Sorting Training / Bara S.', start: '2020-02-12T12:30:00', end: '2020-02-12T17:00:00',resourceId: 'B-LONGTABLE'},
  { title: 'RRH APA Workshop / Frantisek H.', start: '2020-02-17T13:00:00', end: '2020-02-17T16:00:00',resourceId: 'B-LONGTABLE'},
  { title: 'RRH APA Workshop / Frantisek H.', start: '2020-02-18T09:00:00', end: '2020-02-18T12:00:00',resourceId: 'B-LONGTABLE'},
  { title: 'RRH APA Workshop / Frantisek H.', start: '2020-02-18T14:00:00', end: '2020-02-18T16:00:00',resourceId: 'B-LONGTABLE'},
  { title: 'RRH APA Workshop / Frantisek H.', start: '2020-02-19T09:00:00', end: '2020-02-19T12:00:00',resourceId: 'B-LONGTABLE'},
  { title: 'RRH Workshop / Frantisek H.', start: '2020-01-13T12:45:00', end: '2020-01-13T17:30:00', resourceId: 'C-MEETROOM' },
  { title: 'Welcome Day / Tom W.', start: '2020-02-03T12:00:00', end: '2020-02-03T16:00:00', resourceId: 'B-LONGTABLE'},
  { title: 'Welcome Day / Tom W.', start: '2020-03-02T12:00:00', end: '2020-03-02T16:00:00', resourceId: 'B-LONGTABLE'},
  { title: 'Welcome Day / Tom W.', start: '2020-04-01T12:00:00', end: '2020-04-01T16:00:00', resourceId: 'B-LONGTABLE'},
  { title: 'Welcome Day / Tom W.', start: '2020-05-04T12:00:00', end: '2020-05-04T16:00:00', resourceId: 'B-LONGTABLE'},
  { title: 'Welcome Day / Tom W.', start: '2020-06-01T12:00:00', end: '2020-06-01T16:00:00', resourceId: 'B-LONGTABLE'},
  { title: 'Welcome Day / Tom W.', start: '2020-07-01T12:00:00', end: '2020-07-01T16:00:00', resourceId: 'B-LONGTABLE'},
  { title: 'Welcome Day / Tom W.', start: '2020-08-03T12:00:00', end: '2020-08-03T16:00:00', resourceId: 'B-LONGTABLE'},
  { title: 'Welcome Day / Tom W.', start: '2020-09-01T12:00:00', end: '2020-09-01T16:00:00', resourceId: 'B-LONGTABLE'},
  { title: 'Welcome Day / Tom W.', start: '2020-10-01T12:00:00', end: '2020-10-01T16:00:00', resourceId: 'B-LONGTABLE'},
  { title: 'Welcome Day / Tom W.', start: '2020-11-02T12:00:00', end: '2020-11-02T16:00:00', resourceId: 'B-LONGTABLE'},
  { title: 'Welcome Day / Tom W.', start: '2020-12-01T12:00:00', end: '2020-12-01T16:00:00', resourceId: 'B-LONGTABLE'},
  { title: 'Blood Donation / Adela K.', start: '2020-03-11T07:30:00', end: '2020-03-11T12:00:00', resourceId: 'A-ROUNDTABLE' },    
  { title: 'Blood Donation / Adela K.', start: '2020-03-11T07:30:00', end: '2020-03-11T12:00:00', resourceId: 'B-LONGTABLE' },  
  { title: 'Blood Donation / Adela K.', start: '2020-03-11T07:30:00', end: '2020-03-11T12:00:00', resourceId: 'C-MEETROOM' }, 
  { title: 'Blood Donation / Adela K.', start: '2020-04-07T07:30:00', end: '2020-04-07T12:00:00', resourceId: 'A-ROUNDTABLE' },    
  { title: 'Blood Donation / Adela K.', start: '2020-04-07T07:30:00', end: '2020-04-07T12:00:00', resourceId: 'B-LONGTABLE' },  
  { title: 'Blood Donation / Adela K.', start: '2020-04-07T07:30:00', end: '2020-04-07T12:00:00', resourceId: 'C-MEETROOM' }, 
  { title: 'Blood Donation / Adela K.', start: '2020-09-23T07:30:00', end: '2020-09-23T12:00:00', resourceId: 'A-ROUNDTABLE' },    
  { title: 'Blood Donation / Adela K.', start: '2020-09-23T07:30:00', end: '2020-09-23T12:00:00', resourceId: 'B-LONGTABLE' },  
  { title: 'Blood Donation / Adela K.', start: '2020-09-23T07:30:00', end: '2020-09-23T12:00:00', resourceId: 'C-MEETROOM' }, 
  { title: 'Blood Donation / Adela K.', start: '2020-10-21T07:30:00', end: '2020-10-21T12:00:00', resourceId: 'A-ROUNDTABLE' },    
  { title: 'Blood Donation / Adela K.', start: '2020-10-21T07:30:00', end: '2020-10-21T12:00:00', resourceId: 'B-LONGTABLE' },  
  { title: 'Blood Donation / Adela K.', start: '2020-10-21T07:30:00', end: '2020-10-21T12:00:00', resourceId: 'C-MEETROOM' },
  { title: 'X-MEN Retro / Pavol L.', start: '2020-01-07T10:00:00', end: '2020-01-07T10:45:00', resourceId: 'A-ROUNDTABLE' },
  { title: 'Times Up / Lucie S.', start: '2020-01-07T17:30:00', end: '2020-01-07T21:00:00', resourceId: 'A-ROUNDTABLE' },
  { title: 'Wanderers Refinement / Pavol L.', start: '2020-01-07T14:00:00', end: '2020-01-07T15:00:00', resourceId: 'C-MEETROOM' },
  { title: 'Coffee Corner/allo IT stuff Prague Office / Misa C.', start: '2020-01-16T10:30:00', end: '2020-01-16T13:00:00', resourceId: 'B-LONGTABLE' },
  { title: 'Team Meeting / Mina B.', start: '2020-01-13T14:00:00', end: '2020-01-13T15:00:00', resourceId: 'B-LONGTABLE' },
  { title: 'IT DPT Workshop / Katerina V.', start: '2020-03-04T15:30:00', end: '2020-03-04T17:00:00', resourceId: 'B-LONGTABLE' },
  { title: 'IT DPT Workshop / Katerina V.', start: '2020-03-05T13:00:00', end: '2020-03-05T14:30:00', resourceId: 'B-LONGTABLE' },
  { title: 'Cloud - CCI Meet / Stan.', start: '2020-01-15T13:00:00', end: '2020-01-15T13:30:00', resourceId: 'C-MEETROOM' },
  { title: 'Wanderers Ansible Refinement / Pavol L.', start: '2020-01-15T14:00:00', end: '2020-01-15T15:00:00', resourceId: 'C-MEETROOM' },
  { title: 'OTRS Meeting / Josef S.', start: '2020-01-29T09:00:00', end: '2020-01-29T17:00:00', resourceId: 'C-MEETROOM' },
  { title: 'Risk IT Meeting / Adriana M.', start: '2020-01-24T10:00:00', end: '2020-01-24T11:00:00', resourceId: 'C-MEETROOM' },
  { id: 001, title: 'HR Morning meeting / Tomas W.', start: '08:30:00', end: '10:30:00', dow: [ 4 ], resourceId: 'C-MEETROOM' },
  { title: 'Index Setup Automation Roadmap and Planning / Jan D.', start: '2020-01-30T09:30:00', end: '2020-01-30T11:30:00', resourceId: 'B-LONGTABLE' },
  { title: 'Times Up / Lucie S.', start: '2020-01-30T17:30:00', end: '2020-01-30T21:00:00', resourceId: 'A-ROUNDTABLE' },
  { title: 'Application Operations Workshop D1 / Michal P.', start: '2020-03-09T13:00:00', end: '2020-03-09T17:30:00', resourceId: 'B-LONGTABLE' },
  { title: 'Application Operations Workshop D2 / Michal P.', start: '2020-03-10T09:00:00', end: '2020-03-10T17:30:00', resourceId: 'B-LONGTABLE' },
]
