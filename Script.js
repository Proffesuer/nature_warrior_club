var i=0;

var images =[];
var time1 =3000;

 //image list 

 images[0]='naturepic/IMG_2505.jpg';
 images[1]='naturepic/IMG_2435.jpg';
 images[2]='naturepic/IMG_2436.jpg';
 images[3]='naturepic/IMG_2493.jpg';
 images[4]='naturepic/IMG_2477.jpg';
 images[5]='naturepic/IMG_2451.jpg';
 images[6]='naturepic/IMG_2557.jpg';
 images[7]='naturepic/IMG_2528.jpg';
 images[8]='naturepic/IMG_2511.jpg';



 

 //change image

 function changeImg1(){

    document.slide1.src=images[i];
    if(i<images.length -1){


        i++;

    }
    else{
        i=0;

    }
    setTimeout("changeImg1()",time1);

 }
 window.onload =changeImg1;










 





 