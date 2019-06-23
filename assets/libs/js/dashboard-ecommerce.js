$(function() {
    "use strict";
        // ==============================================================
        // Revenue Cards
        // ==============================================================
        $("#sparkline-revenue").sparkline([5, 5, 7, 7, 9, 5, 3, 5, 2, 4, 6, 7], {
            type: 'line',
            width: '99.5%',
            height: '100',
            lineColor: '#5969ff',
            fillColor: '#dbdeff',
            lineWidth: 2,
            spotColor: undefined,
            minSpotColor: undefined,
            maxSpotColor: undefined,
            highlightSpotColor: undefined,
            highlightLineColor: undefined,
            resize: true
        });
});
