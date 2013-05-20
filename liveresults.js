//Tireurs = new Meteor.Collection('tireurs');
Tours = new Meteor.Collection('tours');
//Tours = new Meteor.Collection('tourFem');

if (Meteor.isClient) {
  Template.resultats.competition = function () {
    return "Internationaux 2013 - Saint-Martin-le-Beau";
  };
  Template.resultats.maj = function () {
    return "19/05/2013 - 16h25";
  };


  Template.resultats.tour =  function(){
    if(Session.get('categorie')==='undefined')
    {
      Session.set('categorie','M');
    }
    return Tours.find({categorie: Session.get('categorie')}).fetch();
  };
  Template.resultats.render();

  Template.resultats.events({
    'click #masc' : function(){
      Session.set('categorie','M'); 
    }
  });

  Template.resultats.events({
    'click #fem' : function(){
       Session.set('categorie', 'F');
    }
  });
 
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    Tours.remove({}); //truncate tables

    /////////////// data /////////////////////////

    //////////// masculins ///////////////////////
    //1/8
    Tours.insert(
          { categorie: 'M',
            serie: '1',
            name: "1/8 de finale",
            className :"huitieme",
            tireurs : [
              {name: 'V. Cornuault'}, 
              {name: 'A. Chesnay'},
              {name: 'A. Fraysse'}, 
              {name: 'Q. Bena'},
              {name: 'F. Van De Geuchte'}, 
              {name: 'V. Chaigneau'},
              {name: 'L. Bayle'}, 
              {name: 'M. Mazeau'},
              {name: 'B. Latt'}, 
              {name: 'M. Marty'},
              {name: 'P.-L. Bayle'}, 
              {name: 'T. Dardour'},
              {name: 'K. Colin'}, 
              {name: 'D. Colin'},
              {name: 'J. Leray'}, 
              {name: 'J. Uberti'}
            ]
          }
        );

    //1/4
    Tours.insert(
          { name: "1/4 de finale",
            categorie: 'M',
            serie: '1',
            className :"quarts",
            tireurs : [
              {name: 'V. Cornuault'}, 
              {name: 'Q. Bena'},
              {name: 'F. Van De Geuchte'},
              {name: 'M. Mazeau'},
              {name: 'B. Latt'}, 
              {name: 'T. Dardour'},
              {name: 'K. Colin'},
              {name: 'J. Leray'}
            ]
          });
    //1/2
    Tours.insert(
          { name: "1/2 de finale",
            categorie: 'M',
            serie: '1',
            className :"demi",
            tireurs : [
              {name: 'V. Cornuault'},
              {name: 'F. Van De Geuchte'},
              {name: 'B. Latt'},
              {name: 'J. Leray'}
            ]
          });
    //finale
    Tours.insert(
          { name: "finale",
            categorie: 'M',
            serie: '1',
            className: "finale",
            tireurs : [
              {name: 'V. Cornuault'},
              {name: 'B. Latt'}
            ]
          });  
    //finale
    Tours.insert(
          { name: "vainqueur",
            categorie: 'M',
            serie: '1',
            className: "finale",
            tireurs : [
              {name: 'B. Latt'}
            ]
          });  

////////////////// féminines /////////////////////:

    //1/8
    Tours.insert(
          { name: "1/8 de finale",
            categorie: 'F',
            serie: '1',
            className :"huitieme",
            tireurs : [
              {name: ''},
              {name: ''},
              {name: ''}, 
              {name: ''},
              {name: ''}, 
              {name: ''},
              {name: ''}, 
              {name: ''},
              {name: ''}, 
              {name: ''},
              {name: ''},
              {name: ''},
              {name: ''},
              {name: ''},
              {name: ''}
            ]
          }
        );

    //1/4
    Tours.insert(
          { name: "1/4 de finale",
            className :"quarts",
            categorie: 'F',
            serie: '1',
            tireurs : [
              {name: 'J. Primc'}, 
              {name: '[forfait]'},
              {name: 'M. Fournier'},
              {name: 'M. Lauhlé'}, 
              {name: 'S. Leray'},
              {name: 'L. Mallard'}, 
              {name: 'L. Dana'},
              {name: 'C. Paul'}
            ]
          });
    //1/2
    Tours.insert(
          { name: "1/2 de finale",
            className :"demi",
            categorie: 'F',
            serie: '1',
            tireurs : [
              {name: 'J. Primc'},
              {name: 'M. Lauhlé'}, 
              {name: 'S. Leray'},
              {name: 'C. Paul'}
            ]
          });

    //finale
   Tours.insert(
          { name: "finale",
            className: "finale",
            categorie: 'F',
            serie: '1',
            tireurs : [
              {name: 'J. Primc'}, 
              {name: 'S. Leray'}
            ]
          });  
   Tours.insert(
          { name: "vainqueur",
            categorie: 'F',
            serie: '1',
            className: "finale",
            tireurs : [
              {name: 'J. Primc'}
            ]
          });  
   ///////////////////end data ///////////////
  });//meteor startup
 
}
