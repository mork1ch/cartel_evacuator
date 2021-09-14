'use strict'

var windowOuterWidth; //Для получения ширины экрана
var windowOuterWidth_static = 0; //Для работы если изменялось разрешение

var type_car;   // Для показа в форме, автомобиля, который выбрал пользователь
var id_p;       // Для того чтобы получить id "+7" в input с номером
var id_input;   // Для того чтобы получить id "+7" в input с номером
var id_color;   // Для того чтобы получить id "+7" в input с номером
var id_left;    // Для того чтобы получить id "+7" в input с номером
var id_avt;     // Для открытия avt
var id_close_avt;     // Для открытия avt

//Для галереи фотографий
var img = 2;            //Начальное изображение
var galerey_left;
var galerey_right;
var max_img_galer = 7;  //Количество всех изображений
var left; //для адаптации см. в коде, меня все заебало

var perelist = 0;   //Для подсчета перелистывания right or left, с помощью булевого значения
                    //Используется в галереи фотографий и комментариев
//для галереи комментариев
var right = 0;          //Для подсчета отступа при нажатии на стрелку
var blocks = 4;         //Количество блоков в коментах
var step;               //Ширига 1 блока
var max_right = blocks - 3;     //Максимальное поворот направо, 3 блока по центру
var max_right_static = max_right//Каждый блок справа +400 px к max_right
                        // max screen = 1250; + 313px

// показывать +7 при нажатии на input && Менять цвет
function show_id(){
    document.getElementById(id_p).style.display = "block";
    document.getElementById(id_p).style.color = id_color;
    document.getElementById(id_input).style.left = id_left;
    document.getElementById(id_input).style.color = id_color;
}

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

// Короче открытие avt
function Open_avt(){
    document.getElementById(id_avt).style.display = 'flex';
    setTimeout(() => {
        document.getElementById(id_avt).style.opacity = '100';
    }, 0);

    setTimeout(() => {
        if(id_avt == 'the_order_has_been_sent'){
            Close_avt(id_avt = 'Callback');
        } 
    }, 0);
}
function Close_avt(){
    document.getElementById(id_avt).style.opacity = '0';
    setTimeout(() => {
        document.getElementById(id_avt).style.display = 'none';
    }, 500);
}

//galerey img
function galerey(){
    galerey_left = img - 1;
    galerey_right = img + 1;

    if(img > max_img_galer){
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
    
    if(perelist == 0){
        windowOuterWidth = window.outerWidth;

        if(windowOuterWidth > 1250){
            left = 284;
        }else if(windowOuterWidth <= 1250){
            left = 242;
            if(windowOuterWidth <= 1050){
                left = 198;
            }
        }

        document.getElementById('left_img_zapolnenye').style.opacity = '100';
        document.getElementById('left_img_zapolnenye').style.transition = '0.5s all ease';

        setTimeout(() => {
            document.getElementById('left_img_zapolnenye').style.left = left+"px";
            setTimeout(() => {
                document.getElementById('left_img_zapolnenye').style.transition = 'none';
                document.getElementById('left_img_zapolnenye').style.opacity = '0';
                document.getElementById('left_img_zapolnenye').style.left = '-300px';
                document.getElementById('left_img_zapolnenye').src = "img/galerey_images/galerey_images_"+galerey_left+".png";
            }, 500);
        }, 0);
    }

    if(perelist == 1){
        windowOuterWidth = window.outerWidth;

        if(windowOuterWidth > 1250){
            left = -450;
        }else if(windowOuterWidth <= 1250){
            left = -584;
            if(windowOuterWidth <= 1050){
                left = -406;
            }
        }
        
        document.getElementById('right_img_zapolnenye').style.opacity = '100';
        document.getElementById('right_img_zapolnenye').style.transition = '0.5s all ease';    

        setTimeout(() => {
            document.getElementById('right_img_zapolnenye').style.left = left+"px";
            setTimeout(() => {
                document.getElementById('right_img_zapolnenye').style.transition = 'none';
                document.getElementById('right_img_zapolnenye').style.opacity = '0';
                document.getElementById('right_img_zapolnenye').style.left = '0';
                document.getElementById('right_img_zapolnenye').src = "img/galerey_images/galerey_images_"+galerey_right+".png";
            }, 500);
        }, 0);
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

// Galerey comments
function scroll_galerey_comments(){
    windowOuterWidth = window.outerWidth;

    // подсчет чему равен 1 блок коментов
    
    if(windowOuterWidth > 1250){
        step = 400;
    }else if(windowOuterWidth <= 1250){
        step = 333;
        if(windowOuterWidth <= 1050){
            step = 422;
        }
    }

    if (windowOuterWidth != windowOuterWidth_static){
        windowOuterWidth_static = windowOuterWidth;
        
        max_right = max_right_static;

        if(windowOuterWidth <= 1050){
            max_right = max_right + 1;
        }
        max_right = max_right * step;
    }


    if (perelist == 1){
        right = right + step;
        document.getElementById('galerey_comments').scrollTo(right,0);
        document.getElementById('left_arr').style.display = "block";
        setTimeout(() => {
            document.getElementById('left_arr').style.opacity = "100";
        }, 0);
        if (right >= max_right-1){
            document.getElementById('right_arr').style.opacity = "0";
            setTimeout(() => {
                document.getElementById('right_arr').style.display = "none";
            }, 500);
            right = max_right;
        }
    }
    
    if (perelist == 0){
        right = right - step;
        document.getElementById('galerey_comments').scrollTo(right,0);
        
        document.getElementById('right_arr').style.display = "block";
        setTimeout(() => {
            document.getElementById('right_arr').style.opacity = "100";
        }, 0);

        if (right <= 0){
            document.getElementById('left_arr').style.opacity = "0";
            setTimeout(() => {
                document.getElementById('left_arr').style.display = "none";
            }, 500);
            right = 0;
        }
    }
}
