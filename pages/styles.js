const Styles = () => (
    <div>
        <style jsx global>{`
            ::-webkit-scrollbar {
                width: 0;
            }
//-header---------------------------------------->
        #logo_img {
            padding-top: 8px;
            padding-bottom: 8px;
            padding-left: 8px;
            width: 120px;
            cursor: pointer;
            -webkit-user-select: none;
        }
        #logo_img:hover {
            opacity: 0.7;
            transition: 200ms linear;  
            //-webkit-filter: drop-shadow(2px 2px 2px black);  
        }
        #barT {
            //background-color: #568af7; //ColorAll
            background-color: transparent;
            padding: 5px 5px 5px 5px; 
            transition: 500ms linear;         
        }
        #barB {
            background: rgba(0,0,0,0.6);
            padding: 5px 5px 5px 5px;
            transition: 700ms linear;    
        }

       .test{
            opacity: 1 ;
            background: red ;
        }
        #linkbar a{
            font-family: 'Prompt', sans-serif;
            font-size: 17px;
            color: white;
            -webkit-user-select: none;
        }
        #linkbar a:hover{
            transition: 200ms linear;  
            opacity: 0.5;
        }
        #toggledrop {
            padding-left: 15px;
            padding-right: 15px;  
        }
        #drop a {
            color: black;
        }

        


//<--------------------------------------header-

//-home---------------------------------------->

        .servicecomponent{
            background: #f0f0f5;
            height:100vh;
        }
        .doctorcomponent{
            background: #fff;
            height:100vh;
        }
        #service {
        }
        #home_img{
            filter: brightness(50%);
            height: 100vh;
            weight: 100vw;
        }
        #content-img{
            height: 80vh;
        }
        #content-img p,h1,button{
            font-family: 'Prompt', sans-serif;  
            cursor: pointer;
            -webkit-user-select: none;
        }
        #content-img h1{
            font-size: 50px;
        }
        #content-img button {
            position:relative;
            height:60px;
            font-size:30px;
            padding:0 2em;
            cursor:pointer;
            transition:800ms ease all;
            outline:none;
        }
        
 //-home->-service------------------------------->
            #service-name p {
                font-family: 'Prompt', sans-serif;
            }
            #service-content {
                cursor: pointer;
                -webkit-user-select: none;
                font-family: 'Prompt', sans-serif;
            }
            #service-content p{
                cursor: pointer;
            }
            #service-content img {
                padding-bottom: 15px;
            }
                   
            #service-content img:hover {
                opacity: 0.7;
                filter: alpha(opacity=50);
                transition: 500ms linear;    
            }
            #service-content .box{
                border: 1px solid #f1f1f1;
                background-color: #ffffff;
                border-radius: 0% 35px 0% 35px / 0% 35px 0% 35px;
                //-webkit-box-shadow: 5px 4px 6px -7px rgba(0,0,0,0.75);
            }
            #service-content .box:hover{
                transition: 200ms linear;  
                -webkit-box-shadow: 0px 0px 3px 2px rgba(0,0,0,0.2);
            }
            #service-content p:hover{
                color:#00b3ff;
                font-family: 'Prompt', sans-serif;
                transition: 200ms linear;  
            }
//<----------------------------home->-service-
//-home->-doctor----------------------------->
            #doctor-name {
                font-family: 'Prompt', sans-serif;
            }
            .team_doctor h4{
                font-weight: bold;
            }
            .team_doctor{
                font-family: 'Raleway', sans-serif;
            }
            .team_doctor img{
                width: 100%;
            }  
            .tm-dr:hover{
                -webkit-box-shadow: 0px 0px 2px 1px rgba(0,0,0,0.1);
            }  
            .team_doctor h4:hover{
                color:#00b3ff;
                transition: 200ms linear; 
            } 
//<-----------------------------home->-doctor-
//<--------------------------------------home-

//-help------------------------------------->
        #help {
            //background-color: #f5f5f5;
            
        }
 //-help->-helpQandA------------------------->
            #doctor {
                border: 2px solid #A1ABB3;
                background-color: #D9D9D9;
                border-radius: 0 0 25px 25px / 0 0 25px 25px;
                padding: 10px;
                margin: 10px 0; 
                cursor: pointer;
            }
            #user-qa {
                border: 2px solid #dedede;
                background-color: #f1f1f1;
                border-radius: 5px;
                padding: 10px;
                margin: 10px 0; 
                cursor: pointer;
            }
            #user-qa:hover{
                background-color: #99E0FF;
                border: 2px solid #4a8bc2;
                color: #fff;
                transition: 200ms linear; 
                //00B2FF
            }
            #doctor p{
                font-family: 'Prompt', sans-serif;
            }
            #user-qa p{
                font-family: 'Prompt', sans-serif;
            }
            #question{
                padding-right: 5px;
                
            }
            #question p{
                font-size: 17px;
                cursor: pointer;
                //-webkit-touch-callout: none;
	            -webkit-user-select: none;
	            //-khtml-user-select: none;
	            //-moz-user-select: none;
	            //-ms-user-select: none;
	            //user-select: none;
            }
            #question img{
                -webkit-user-select: none;
            }
            #question img:hover{
                -webkit-user-select: none;
                //opacity: 0.7;
                //filter: alpha(opacity=50);
            }

            #people {
                float: right;
                margin-left: 20px;
                margin-right:0;  
                cursor: pointer;
            }
            #answer p{
                font-size: 17px;
                float: right;
                cursor: pointer;
                -webkit-user-select: none;
            }
            #answer img {
                float: right;
                margin-left: 20px;
                margin-right:0;
                cursor: pointer;
                -webkit-user-select: none;
            }
            #answer img:hover{
                opacity: 0.7;
                filter: alpha(opacity=50);
            }
//<-----------------------help->-helpQandA-
//<-----------------------------------help-
           
 //-Login--------------------------------->
            .login{
                transition: 200ms linear;  
                font: 18px 'Prompt', sans-serif;
                filter: 'brightness(100%)';
                height:100vh;
                float:right ;
                padding: 150px 50px 50px 50px;
                max-height: 100vh;
                background-color: #fff;
                //background-color: rgb(0,0,0,0.4);
            }
            .login h1{
                transition: 200ms linear;  
                text-align: center ;
            }
            .login h1:hover{
                transition: 300ms linear;  
                text-align: center ;
                color: #4482ff;
            }
            .btLoging{
                text-align:center;
                padding:2px 0 2px 0;
                color:#fff;
                width: 350px;
                background: #4482ff;
                cursor:pointer;
                border: 2px solid #4482ff;
            }
            .btLoging:hover{
                transition: 300ms linear;  
                color:#fff;
                background: #5E94FF;
                border: 2px solid #5E94FF;
            }
            .btFacebook{
                text-align:center;
                padding:2px 0 2px 0;
                color:#fff;
                width: 350px;
                background: #4267b2;
                cursor:pointer;
                border: 2px solid #4267b2;
            }
            .btFacebook:hover{
                transition: 300ms linear;  
                background: #395999;
            }
            .btGoogle{
                text-align:center;
                padding:2px 0 2px 0;
                color:#B3B3B3;
                width: 350px;
                background: #fff;
                cursor:pointer;
                border: 2px solid #f1f1f1;
            }
            .btGoogle:hover{
                transition: 300ms linear;  
                color:#fff;
                background: #dd3c2a;
                border: 2px solid #EB402D;
            }
            
//<-----------------------------------Login-

//-Disease------------------------------------>
        .diseasecomponent{
            font-family: 'Prompt', sans-serif;
            background: #fff;
            cursor: pointer;
            //-webkit-user-select: none;
        }
        #diseaseHeader {
            font-family: 'Prompt', sans-serif;
            border-bottom: 1px solid #CCCCCC;
        }
        #disease-content {
            font-family: 'Prompt', sans-serif;
        }
        #disease-content:hover {
            background: #99e0ff;
            color: #fff;
            transition: 200ms linear;    
            -webkit-box-shadow: 0px 0px 3px 2px rgba(0,0,0,0.1);
        }
        #disease-sub {
            font-family: 'Sarabun', sans-serif;
            font-size: 18px;
        }
//-Disease--Topdisease--------------------------->  
        #disease-img{
            filter: brightness(70%);
            height: 55vh;
        }
        .disease-content-article{
            background: ;
            -webkit-box-shadow: 0px 0px 3px 2px rgba(0,0,0,0.2);
        }
        #disease-content-img{
            height: 80vh;
        }
        #disease-content-img p,h1,button{
            font-family: 'Prompt', sans-serif;  
            cursor: pointer;
            -webkit-user-select: none;
        }
        #disease-content-img h1{
            font-size: 50px;
        }

//<-----------------------------Disease-Topdisease-   
//<------------------------------------Disease-

//-footer---------------------------------->
        #footer {
            padding: 50px 0px 10px 0px;
            //position: absolute;
            right: 0;
            bottom: 0;
            left: 0;
            padding: '1rem';
            background-color: #EEEEEE;
            text-align: center;
        }
        #footer p {
            font-family: 'Roboto', sans-serif;
        }
            @media (max-width: 576px) {
                li a{
                    padding-top: 10px;
                    padding-right: 10px;
                    padding-left: 10px;
                    padding-bottom: 10px;
                }
                #logo_img {
                    padding-top: 5px;
                    padding-bottom: 5px;
                    width: 120px;
                    cursor: pointer;
                    display: block;
                    margin-left: auto;
                    margin-right: auto;
                }
                #login {
                    padding-top: 160px;
                    padding-left:60px;
                    padding-right:60px;
                
            }
        }
//<-----------------------------------footer-

//-History---------------------------------->
        #historybox p {
                border: 2px solid #dedede;
                background-color: #f1f1f1;
                border-radius: 5px;
                padding: 10px;
                margin: 10px 0; 
                cursor: pointer;
                font-size: 20px;
            }
            .timeline p{
                padding-left: 5px;
                color: black;
                font-family: 'Prompt', sans-serif;
            }
            ul.timeline {
                list-style-type: none;
                position: relative;
            }
            ul.timeline:before {
                content: ' ';
                background: #d4d9df;
                display: inline-block;
                position: absolute;
                left: 29px;
                width: 2px;
                height: 100%;
                z-index: 400;
            }
            ul.timeline > li {
                margin: 20px 0;
                //padding-left: 20px;
            }
            ul.timeline > li:before {
                content: ' ';
                background: white;
                display: inline-block;
                position: absolute;
                border-radius: 50%;
                border: 3px solid #22c0e8;
                left: 20px;
                width: 20px;
                height: 20px;
                z-index: 400;
            }     

//<-----------------------------------History- 

//-chatbot----------------------------------->
        #bt-popup {
            font: 18px 'Prompt',sans-serif;
            bottom: 0;
            right:0;
            position: fixed;
            margin-right: 20px;
            width: 290px;
            text-align:center;
            padding-top: 5px;
            padding-bottom: 5px;
            background:#00B2FF;
            color:#fff;
            cursor: pointer;
            -webkit-user-select: none;
            border-radius:10px 10px 0  0 / 10px 10px 0  0;
            //border-radius: 10px 0 0 0  / 10px 0 0 0;
            -webkit-box-shadow: 0px 0px 3px 2px rgba(0,0,0,0.2);
        } 
        #bt-popup:hover{
            background:#00A1E6;
            filter: alpha(opacity=50);
            transition: 200ms linear;    
        }

        #bt-popup .bt-click {
            padding-right:103px;
            padding-left:103px;
        }     
        #chatbox {              
            font: 30px 'Prompt',sans-serif;
            //font: 12px "Open Sans", sans-serif;
            width: 320px;
            background: #fff;
            //border: 2px solid #f0f1f2;
            -webkit-box-shadow: 0 0 3px 1px rgba(0,0,0,0.2);
            border-radius: 10px 10px 0 0  / 10px 10px 0 0 ;
            border-color:#f0f1f2;
            overflow: hidden;
            height: 484px;
            bottom: 0;
            //margin-bottom: 40px;
            //margin-bottom: 38px;
            right:0;
            margin-right: 20px;
            position: fixed;
        }
        #chat-messages {
            //margin-bottom: 20px;
            width: 100%;
            height: 370px;
            overflow-y: scroll;
            overflow-x: hidden;
            scroll-behavior: auto;
            -webkit-overflow-scrolling: auto;
            padding-right: 20px;
            -webkit-transition: all 200ms cubic-bezier(0.000, 0.995, 0.990, 1.000);
            -moz-transition: all 200ms cubic-bezier(0.000, 0.995, 0.990, 1.000);
            -ms-transition: all 200ms cubic-bezier(0.000, 0.995, 0.990, 1.000);
            -o-transition: all 200ms cubic-bezier(0.000, 0.995, 0.990, 1.000);
            transition: all 200ms cubic-bezier(0.000, 0.995, 0.990, 1.000);
        }        
        #chat-messages.animate {
            opacity: 1;
            margin-top: 0;
        }
        #chatbox label {
            //99e0ff
            background:#F2F2F2;
            padding: 6px 0 6px 0;
            color: #000;
            font-weight: 600;
            font-size: 15px;
            text-align: center;
            width: 100%;
            display: block;
            border-bottom: 1px solid #DEDFE0;
            margin-bottom: 0;
        }
        #chatbox label:hover {
            background:#99e0ff;
        }
        #chatbox label:hover {
            color: #fff;
        }

        #chat-messages div.message {
            padding: 0 0 30px 58px;
            clear: both;
        }
        #chat-messages div.message.right {
            padding: 0 58px 0 0; //xx
            margin-right: -19px;
            margin-left: 19px;
        }
        #chat-messages .message img {
            float: left;
            margin-left: -38px;
            border-radius: 50%;
            width: 30px;
        }
        #chat-messages div.message.right img {
            float: right;
            margin-left: 0;
            margin-right: -38px;
        }
        .message .bubble {
            background: #f1f1f1;
            font-size: 13px;
            font-weight: 600;
            padding: 12px 13px;
            border-radius: 0 15px 15px 15px;
            color: #8C8C8C;
            //position: relative;
            float: left;
            display: inline-block;
            max-width: 175px;
            overflow-wrap: break-word;
        }
        .message.right .bubble {
            //margin-left: 40px;
            overflow-wrap: inherit;
            margin-right: 0px !important;
            max-width: 175px;
            overflow-wrap: break-word;
        }
        #chat-messages div.message.right .bubble {
            float: right;
            border-radius: 15px 0 15px 15px ;
        }
        .bubble {
            font-family: 'Prompt',sans-serif;
            overflow-wrap: break-word;
            margin-bottom: 15px;
        }
        .bubble span {
            color: #aab8c2;
            font-size: 11px;
            position: absolute;
            right: 0;
            bottom: -22px;
        }
        #sendmessage {
            font-family: 'Prompt',sans-serif;
            border-top: 1px solid #e7ebee;
            position: absolute;
            bottom: 0;
            right: 0px;
            width: 100%;
            background: #fff;
            padding-bottom: 10px;    
            padding-left: 10px;        
        }
        #sendmessage input{
            overflow-wrap: break-word;
            width: 80%;
        }
        #sendmessage input {
            border
        }
        #sendmessage input {
            background: #fff;
            margin: 8px 0 0 8px;
            border: none;
            padding: 0;
            font-size: 14px;
            font-family: "Open Sans", sans-serif;
            font-weight: 400px;
            color: #aab8c2;
        }
        #sendmessage input:focus {
            outline: 0;
        }
        #sendmessage button {
            background: #fff url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/send.png") 0 -41px no-repeat;
            width: 30px;
            height: 30px;
            position: absolute;
            right: 15px;
            top: 23px;
            border: none;
        }
        #sendmessage button:hover {
            cursor: pointer;
            background-position: 0 0;
        }
        #sendmessage button:focus {
            outline: 0;
        }
        #chatview,
        #sendmessage {
            overflow: hidden;
            border-radius: 6px;
        }
//<-------------------------------chatbot-


//-conclusion-sheet---------------------------->
        .card-body h3{
            text-align: center;
            border-bottom: 2px solid #000;
            padding-bottom: 10px;
        }
      
        #conclusion-sheet{
            font-family: 'Sarabun', sans-serif;
        }
        #data-user{
            line-height: 0.3;
            text-indent: 20px;
            border-bottom: 2px solid #000;
            padding-top: 10px;
            padding-bottom: 10px;
            margin-bottom: 10px;  
        }
        #symptom-user{
            border-bottom: 2px solid #000;
            padding-bottom: 10px;
            margin-bottom: 10px;
        }
        #doctor-advice{
            text-indent: 40px;
        }
        
        
//<----------------------------conclusion-sheet-
//-Loading-Help---------------------------------->
        .loading{
            height: 50vh;
        }
        .lds-dual-ring {
            display: inline-block;
            width: 64px;
            height: 64px;
        }
        .lds-dual-ring:after {
            content: " ";
            display: block;
            width: 100px;
            height: 100px;
            margin: 1px;
            border-radius: 50%;
            border: 5px solid #00A1E6;
            border-color: #00A1E6 transparent #00A1E6 transparent;
            animation: lds-dual-ring 1.2s linear infinite;
        }
        @keyframes lds-dual-ring {
            0% {
                transform: rotate(0deg);
            }   
            100% {
                transform: rotate(360deg);
            }
        }      

//-----Gears--------------------------------------->
            .gears {
            width: 350px;
            margin: 100px auto;
            display: block;
            text-align: center;
            font-weight: bold;
            font-family: Arial;
            color: #fff;
            background:#007bff;
            padding: 80px 80px 80px 80px;
            border-radius: 25px 25px 25px 25px / 25px 25px 25px 25px;
            }

            .gears .big {
            width: 100px;
            height: 100px;
            -webkit-transform-origin: center;
            -moz-transform-origin: center;
            -o-transform-origin: center;
            transform-origin: center;
            -webkit-animation: rotate 5s linear infinite;
            -moz-animation: rotate 5s linear infinite;
            -o-animation: rotate 5s linear infinite;
            animation: rotate 5s linear infinite
            }

            .gears .small {
            width: 70px;
            height: 70px;
            margin-left: -6px;
            -webkit-transform-origin: center;
            -moz-transform-origin: center;
            -o-transform-origin: center;
            transform-origin: center;
            -webkit-animation: reverseRotate 3s linear infinite;
            -moz-animation: reverseRotate 3s linear infinite;
            -o-animation: reverseRotate 3s linear infinite;
            animation: reverseRotate 3s linear infinite;
            }


            @-webkit-keyframes rotate {
            0% {
                -webkit-transform: rotate(0);
                transform: rotate(0);
            }
            100% {
                -webkit-transform: rotate(180deg);
                transform: rotate(180deg);
            }
            }


            @-moz-keyframes rotate {
            0% {
                -moz-transform: rotate(0);
                transform: rotate(0);
            }
            100% {
                -moz-transform: rotate(180deg);
                transform: rotate(180deg);
            }
            }


            @-o-keyframes rotate {
            0% {
                -o-transform: rotate(0);
                transform: rotate(0);
            }
            100% {
                -o-transform: rotate(180deg);
                transform: rotate(180deg);
            }
            }


            @keyframes rotate {
            0% {
                -webkit-transform: rotate(0);
                -moz-transform: rotate(0);
                -o-transform: rotate(0);
                transform: rotate(0);
            }
            100% {
                -webkit-transform: rotate(180deg);
                -moz-transform: rotate(180deg);
                -o-transform: rotate(180deg);
                transform: rotate(180deg);
            }
            }

            @-webkit-keyframes reverseRotate {
            0% {
                -webkit-transform: rotate(180deg);
                transform: rotate(180deg);
            }
            100% {
                -webkit-transform: rotate(0);
                transform: rotate(0);
            }
            }

            @-moz-keyframes reverseRotate {
            0% {
                -moz-transform: rotate(180deg);
                transform: rotate(180deg);
            }
            100% {
                -moz-transform: rotate(0);
                transform: rotate(0);
            }
            }

            @-o-keyframes reverseRotate {
            0% {
                -o-transform: rotate(180deg);
                transform: rotate(180deg);
            }
            100% {
                -o-transform: rotate(0);
                transform: rotate(0);
            }
            }

            @keyframes reverseRotate {
            0% {
                -webkit-transform: rotate(180deg);
                -moz-transform: rotate(180deg);
                -o-transform: rotate(180deg);
                transform: rotate(180deg);
            }
            100% {
                -webkit-transform: rotate(0);
                -moz-transform: rotate(0);
                -o-transform: rotate(0);
                transform: rotate(0);
            }
            }

//<-----------------------------------Loading-Help-

//-Dev----------------------------------------->
        

//<-----------------------------------------Dev-
        @media (max-width: 768px) {
                
                .doctorcomponent{
                    padding: 30px 30px 30px 30px;
                    height:100%;
                }
                #content-img h1{
                    font-size: 30px;
                }
                .servicecomponent{
                    padding-top: 30px;
                    padding-bottom: 30px;
                    background: #f0f0f5;
                    height:100%;
                }                
        }
        @media (max-width: 992px) {}
        @media (max-width: 1200px) {}
        `}</style>
    </div>
)
export default Styles
