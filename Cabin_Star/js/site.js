window.onload = function () {

    for (var i = 1; i <= 3; i++) {
        const mainChild = document.createElement('div');
        mainChild.className = 'gallery-grid';
        mainChild.id = `gallery${i}`;
        document.getElementById(`gallery`).appendChild(mainChild);
    }

   

    for (var row = 1; row <= 3; row++) {
        for (var col = 1; col <= 5; col++) {

            const child = document.createElement('div');

            child.className = 'gallery-img slideanim';

            child.innerHTML = `
    <figure class="effect-jazz">
		<a href="#portfolioModal${row}${col}"  data-toggle="modal">		
			<img src="images/g${row}${col}.jpg" alt="img25" class="img-responsive"/>										
		</a>													
   </figure>
  `;

            document.getElementById(`gallery${row}`).appendChild(child);

        }
    }

    for (var j = 1; j <= 3; j++) {
        for (var k = 1; k <= 5; k++) {

        const mainChild2 = document.createElement('div');
            mainChild2.className = 'portfolio-modal modal fade slideanim';
            mainChild2.tabIndex = -1;
            mainChild2.id = `portfolioModal${j}${k}`;
            mainChild2.innerHTML = `<div class="modal-content">
        <div class="close-modal" data-dismiss="modal">
            <div class="lr">
                <div class="rl"></div>
            </div>
        </div>
        <div class="container">
		
                <div class="col-lg-8 col-lg-offset-2">
					<div class="modal-body">
						<h3>کابین استار </h3>
						<img src="images/g${j}${k}.jpg" class="img-responsive" alt="">
						<p>نمونه کار اجرا شده </p>

					</div>
                </div>
           
        </div>
    </div>`;
        document.getElementById(`mainPortofiloModal`).appendChild(mainChild2);
        }
    }
    
    }




