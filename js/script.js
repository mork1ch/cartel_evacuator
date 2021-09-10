'use strict'
//Для показа в форме, автомобиля, который выбрал пользователь
var type_car;
//Для галереи фотографий
var img = 2;            //Начальное изображение
var galerey_left;
var galerey_right;
var max_img_galer = 7;  //Количество всех изображений

var perelist = 0;   //Для подсчета перелистывания right or left, с помощью булевого значения
                    //Используется в галереи фотографий и комментариев
//для галереи комментариев
var right = 0;      //Для подсчета отступа при нажатии на стрелку


//top form
function open_type_auto(){
    var rotate = document.getElementById('triangle').style.transform;

    if (rotate == "rotate(0deg)"){
        document.getElementById('triangle').style.transform = "rotate(60deg)";
        document.getElementById('menu_auto').style.height = "270px";
        document.getElementById('hidden_menu_auto').style.display = 'block';
        setTimeout(() => {
            document.getElementById('hidden_menu_auto').style.opacity = '100';
        }, 700);
    }else {
        document.getElementById('triangle').style.transform = "rotate(0deg)";
        document.getElementById('hidden_menu_auto').style.display = 'none';
        document.getElementById('hidden_menu_auto').style.opacity = '0';
        document.getElementById('menu_auto').style.height = "36px";
    }
}
function type(){
    document.getElementById('input_type_auto').value = type_car;
    open_type_auto();
}

//bottom form
function open_type_auto_bottom(){
    var rotate = document.getElementById('triangle_bottom').style.transform;

    if (rotate == "rotate(0deg)"){
        document.getElementById('triangle_bottom').style.transform = "rotate(60deg)";
        document.getElementById('menu_auto_bottom').style.height = "270px";
        document.getElementById('hidden_menu_auto_bottom').style.display = 'block';
        setTimeout(() => {
            document.getElementById('hidden_menu_auto_bottom').style.opacity = '100';
        }, 700);
    }else {
        document.getElementById('triangle_bottom').style.transform = "rotate(0deg)";
        document.getElementById('hidden_menu_auto_bottom').style.display = 'none';
        document.getElementById('hidden_menu_auto_bottom').style.opacity = '0';
        document.getElementById('menu_auto_bottom').style.height = "36px";
    }
}
function type_bottom(){
    document.getElementById('input_type_auto_bottom').value = type_car;
    open_type_auto_bottom();
}

// callback input
function Open_Order_a_callback(){
    document.getElementById('Callback').style.display = 'flex';
    setTimeout(() => {
        document.getElementById('Callback').style.opacity = '100';
    }, 0);
}
function Close_Order_a_callback(){
    document.getElementById('Callback').style.opacity = '0';
    setTimeout(() => {
        document.getElementById('Callback').style.display = 'none';
    }, 500);
}

//galerey img

function galerey(){
    galerey_left = img - 1;
    galerey_right = img + 1;

    console.log(perelist)
    console.log("1 -","left",galerey_left,"","img",img,"","right",galerey_right);

    if (img > max_img_galer){
        img = 1;
        galerey_right = 2;
    }else if (img < 1){
        img = max_img_galer;
        galerey_left = max_img_galer - 1;
    }

    if(galerey_right == max_img_galer + 1){
        galerey_right = 1;
    }
    if(galerey_left == 0){
        galerey_left = max_img_galer;
    }

    console.log("2 -","left",galerey_left,"","img",img,"","right",galerey_right);
    console.log("")
    
    if(perelist == 0){
        left_scroll_img(img);
    }
    if(perelist == 1){
        right_scroll_img(img);
    }

    document.getElementById('galerey_left_img_bg').style.backgroundColor = "#fff";
    document.getElementById('galerey_right_img_bg').style.backgroundColor = "#fff";

    setTimeout(() => {
        document.getElementById('galerey_img_center').src = "img/galerey_images/galerey_images_"+img+".png";
    }, 500);
    setTimeout(() => {

        document.getElementById('galerey_left').style.backgroundImage = "url(../img/galerey_images/galerey_images_"+galerey_left+".png)";
        document.getElementById('galerey_right').style.backgroundImage = "url(../img/galerey_images/galerey_images_"+galerey_right+".png)";

        document.getElementById('galerey_left_img_bg').style.backgroundColor = "#ffffff66";
        document.getElementById('galerey_right_img_bg').style.backgroundColor = "#ffffff66"; 
        setTimeout(() => {
            document.getElementById('left_img_zapolnenye').src = "img/galerey_images/galerey_images_"+galerey_left+".png";
            document.getElementById('right_img_zapolnenye').src = "img/galerey_images/galerey_images_"+galerey_right+".png";
        }, 400);
    }, 150);
}

function left_scroll_img(){
    document.getElementById('left_img_zapolnenye').style.opacity = '100';
    document.getElementById('left_img_zapolnenye').style.transition = '0.5s all ease';
    setTimeout(() => {
        document.getElementById('left_img_zapolnenye').style.left = '284px';
        setTimeout(() => {
            document.getElementById('left_img_zapolnenye').style.transition = 'none';
            document.getElementById('left_img_zapolnenye').style.opacity = '0';
            document.getElementById('left_img_zapolnenye').style.left = '-300px';
            document.getElementById('left_img_zapolnenye').src = "img/galerey_images/galerey_images_"+galerey_left+".png";
            console.log(galerey_left,img,galerey_right)
        }, 500);
    }, 0);
}
function right_scroll_img(){
    document.getElementById('right_img_zapolnenye').style.opacity = '100';
    document.getElementById('right_img_zapolnenye').style.transition = '0.5s all ease';    

    setTimeout(() => {
        document.getElementById('right_img_zapolnenye').style.left = '-584px';
        setTimeout(() => {
            document.getElementById('right_img_zapolnenye').style.transition = 'none';
            document.getElementById('right_img_zapolnenye').style.opacity = '0';
            document.getElementById('right_img_zapolnenye').style.left = '0';
            document.getElementById('right_img_zapolnenye').src = "img/galerey_images/galerey_images_"+galerey_right+".png";
            console.log(galerey_left,img,galerey_right)
        }, 500);
    }, 0);
}


// Galerey comments

function scroll_galerey_comments(){
    var max_right = 400;    //Максимальное поворот направо, 3 блока по центру
                            //Каждый блок справа +400 px к max_right
    if (perelist == 1){
        right = right + 400;
        document.getElementById('galerey_comments').scrollTo(right,0);
        document.getElementById('left_arr').style.display = "block";
        setTimeout(() => {
            document.getElementById('left_arr').style.opacity = "100";
        }, 0);
        if (right >= max_right){
            document.getElementById('right_arr').style.opacity = "0";
            setTimeout(() => {
                document.getElementById('right_arr').style.display = "none";
            }, 500);
        }
    }
    
    if (perelist == 0){
        right = right - 400;
        document.getElementById('galerey_comments').scrollTo(right,0);
        
        document.getElementById('right_arr').style.display = "block";
        setTimeout(() => {
            document.getElementById('right_arr').style.opacity = "100";
        }, 0);

        if (right == 0){
            document.getElementById('left_arr').style.opacity = "0";
            setTimeout(() => {
                document.getElementById('left_arr').style.display = "none";
            }, 500);
        }
    }
    
}