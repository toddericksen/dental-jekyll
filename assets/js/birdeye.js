var getJSON = function(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open("post", url, true);
    xhr.responseType = "json";
    // xhr.setRequestHeader("Referer", "https://birdeye.com/ericksen-dental-153702976392324?page=1");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onload = function() {
        var status = xhr.status;
        if (status == 200) {
            callback(null, xhr.response);
        } else {
            callback(status);
        }
    };
    xhr.send('{"sort":"Newest"}');
};



getJSON("https://publicapi.birdeye.com/resources/v1/review/v2/businessid/153702976392324/status/2?op=3&sindex=18&count=20&hide_google=1",

    function(err, data) {
        if (err != null) {
            alert("Something went wrong: " + err);
        } else {
            html = ""; 
            // console.log(data)
            // html = '<div class="ratings-header">';

            // html += '<h2>Customer Reviews</h2>'+
            // '<h4><span class="rating"><i></i><i></i><i></i><i></i><i></i></span>Average of ' + data['totalCount']['avgRating'] + ' Stars ('+ data['totalCount']['reviewCount']+' Ratings)</h4>'+
            // '';

            // html += '</div>';



            reviews = data['reviews']['reviewMessages'];

            html += '<section class="reviews-grid">';


            for (var i = 0; i < reviews.length; i++) {
                // data[i].id
                var reviewerName = '';
                var rating = '';

                if (reviews[i]['reviewer']['reviewerName']) {
                    reviewerName += ['reviewer']['reviewerName'];
                };



                if (reviews[i]['overallRating']) {
                    rating += '<span class="rating">';

                    if (reviews[i]['overallRating'] >= 1) {
                        rating += '<i></i>'
                    } else {
                        rating += '<i class="off"></i>'
                    };
                    if (reviews[i]['overallRating'] >= 2) {
                        rating += '<i></i>'
                    } else {
                        rating += '<i class="off"></i>'
                    };
                    if (reviews[i]['overallRating'] >= 3) {
                        rating += '<i></i>'
                    } else {
                        rating += '<i class="off"></i>'
                    };
                    if (reviews[i]['overallRating'] >= 4) {
                        rating += '<i></i>'
                    } else {
                        rating += '<i class="off"></i>'
                    };
                    if (reviews[i]['overallRating'] >= 5) {
                        rating += '<i></i>'
                    } else {
                        rating += '<i class="off"></i>'
                    };

                    rating += '</span>';


                } 

// <div class="review">
//         <div class="meta">
//           <span class="name">Leslie Knox</span>
//           <span class="time">a week ago</span>
//           <span class="stars">★★★★★</span>
//         </div>
//         <div class="text">

                html += '<div class="review"><div class="meta">';
               

               html += '<span class="name">';
                if (reviews[i]['reviewer']['reviewerName']) {
                    html += reviews[i]['reviewer']['reviewerName'];
                }
                html += '</span>';


                if (reviews[i]['reviewDate']) {
                    html += '<span class="time">' + reviews[i]['reviewDate']  + '</span>'
                };
                // if(reviews[i].title) {html += '<h3>'+ reviews[i].title +'</h3>'};
    
                

                if (reviews[i]['overallRating']) {
                    html += '<span class="stars">' + rating + '</span>';
                };
                html += '</div>';

                if (reviews[i]['comments']) {
                    html += '<div class="text">' + reviews[i]['comments'] + '</div>'
                };

                html += '</div>';

            }

            html += '</section>';

            reviewContent = document.getElementById('grid-gallery');

            reviewContent.innerHTML = html;

            var msnry = new Masonry( '.reviews-grid', {
                itemSelector: '.review'
            });
        }


    });




