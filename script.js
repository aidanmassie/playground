const app = {

    data: detailedBasketballObject, //this comes from my data.js files
  
    initialize: function () {
      $('.box').click(function () {
        $(this).toggleClass('transform')      
      });
  
      $('.circle').dblclick(function () {
        $(this).toggleClass('moveMe')      
      });
  
      $('.listMVP').click(function () {
        app.listMVP();
      })
  
      $('.compareTotals').click(function () {
        app.compareTotals();
      })

      $('.comparemoreTotals').click(function () {
        app.comparemoreTotals();
      })
    },
  
    listMVP: function () {
      // can also this this.data, it means the same thing. app.data is safer
      app.data.basketball.mvp.forEach(mvp => {
        $('.basketballMVP').append(`<li>${mvp.name}, ${mvp.team}, ${mvp.year}`);
      });
    },

    compareTotals: function () {
        const most = app.data.most;
        $('.mvpComparison').text(`${app.data.basketball.most} has the most MVP's within the past 20 years, with 4 total.`);
        
      },

      comparemoreTotals: function () {
      const secondmost = app.data.secondmost;
      $('.secondmvpComparison').text(`${app.data.basketball.secondmost} are tied with the second most MVP's within the past 20 years, with 2 each.`);
      }
}