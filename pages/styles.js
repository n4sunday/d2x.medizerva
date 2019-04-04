
const Styles = () => (
    <div>
        <style jsx global>{`
        #load {
            background-color: black;
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
            //-webkit-filter: drop-shadow(2px 2px 2px black);  
        }
        #bar {
            background: #568af7; //ColorAll
            padding: 5px 5px 5px 5px;          
        }
        #linkbar a{
            font-family: 'Prompt', sans-serif;
            font-size: 17px;
            color: white;
            -webkit-user-select: none;
        }
        #linkbar a:hover{
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
        .servicecomponent .jumbotron{
            background: #f4f8fb;
        }
        .doctorcomponent .jumbotron{
            background: #fff;
        }
        #service {
            margin-top:30px;
            margin-bottom:30px;
            //padding-top:10px;
            
        }
        #home_img{
            filter: brightness(60%);
        }
        #content-img{
            height: 80vh;
        }
        #content-img p,h1,button{
            font-family: 'Prompt', sans-serif;  
            cursor: pointer;
            -webkit-user-select: none;
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
            #service-name h2 {
                font-family: 'Prompt', sans-serif;
            }
            #service-content {
                cursor: pointer;
                -webkit-user-select: none;
                
            }
            #service-content img {
                padding-bottom: 10px;
            }
            #service-content img:hover {
                opacity: 0.7;
                filter: alpha(opacity=50);
            }
            #service-content .box{
                border: 1px solid #f1f1f1;
                background-color: #ffffff;
                border-radius: 10px;
                padding:10px;
                margin:10px 0px 10px 0px;
                //-webkit-box-shadow: 5px 4px 6px -7px rgba(0,0,0,0.75);

            }
            #service-content p{
                //text-align: center;
                font-size: 17px;
                cursor: pointer;
                font-family: 'Prompt', sans-serif;
	            //-webkit-user-select: none;
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
//<-----------------------------home->-doctor-
//<--------------------------------------home-

//-help------------------------------------->
        #help {
            //background-color: #f5f5f5;
            
        }
 //-help->-helpQandA------------------------->
            #doctor {
                border: 2px solid #dedede;
                background-color: #f1f1f1;
                border-radius: 5px;
                padding: 10px;
                margin: 10px 0; 
                cursor: pointer;
            }
            #doctor p {
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
                opacity: 0.7;
                filter: alpha(opacity=50);
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
        #login {
            padding-top: 160px;
            padding-left:150px;
            padding-right:150px;
            
        }
        #loginContent {
            background-color: #ebebeb;
            border-radius: 5px;
            padding-top: 50px;
            padding-left:50px;
            padding-right:50px;
            padding-bottom: 50px;
        }
        #login #loginContent {
            text-align: center;
            font-family: 'Prompt', sans-serif;
            font-size: 17px;
        }
        #loginContent input{
            margin-top: 10px;
        }
        #loginContent #btlogin{
            //border-radius: 20px;
            margin-top: 10px;
            padding: 8px 25px 8px 25px;
            background-color: #568af7;
            color: #fff;
        }
        #facebooklogin {
            background-color: #4267b2;
        }

        .boxlogin {
            width: 100%;
        }
//<-----------------------------------Login-

//-disease------------------------------------>
        .diseasecomponent .jumbotron{
            background: #fff;
            cursor: pointer;
            -webkit-user-select: none;
        }
        #diseaseHeader {
            font-family: 'Prompt', sans-serif;
            border-bottom: 2px solid #000;
        }
        #disease-content {
            font-family: 'Prompt', sans-serif;
        }
        #disease-content:hover {
            background: #568AF7;
            color: #fff;
        }
        #disease-sub {
            font-family: 'Sarabun', sans-serif;
            font-size: 18px;
        }
        
//<------------------------------------disease-

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
            bottom: 0;
            right:0;
            position: fixed;
            margin-right: 20px;
        } 
        #bt-popup .bt-click {
            padding-right:103px;
            padding-left:103px;
        }     
        #chatbox {
            font: 30px 'Prompt',sans-serif;
            //font: 12px "Open Sans", sans-serif;
            width: 290px;
            background: #fff;
            border: 2px solid #f0f1f2;
            border-radius: 8px;
            border-color:#f0f1f2;
            overflow: hidden;
            height: 484px;
            bottom: 0;
            margin-bottom: 38px;
            right:0;
            margin-right: 20px;
            position: fixed;
        }
        #chat-messages {
            //display: inline-block;
            //justify-content: flex-end;
            margin-top: 20px;
            margin-bottom: 20px;
            width: 290px;
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
            color: #aab8c2;
            font-weight: 600;
            font-size: 12px;
            text-align: center;
            margin: 15px 0;
            width: 290px;
            display: block;
        }
        #chat-messages div.message {
            padding: 0 0 30px 58px;
            clear: both;
            margin-bottom: 45px;
        }
        #chat-messages div.message.right {
            padding: 0 58px 30px 0;
            margin-right: -19px;
            margin-left: 19px;
        }
        #chat-messages .message img {
            float: left;
            margin-left: -38px;
            border-radius: 50%;
            width: 30px;
            margin-top: 12px;
        }
        #chat-messages div.message.right img {
            float: right;
            margin-left: 0;
            margin-right: -38px;
        }
        .message .bubble {
            background: #f0f4f7;
            font-size: 13px;
            font-weight: 600;
            padding: 12px 13px;
            border-radius: 5px 5px 5px 0px;
            color: #8495a3;
            position: relative;
            float: left;
        }
        #chat-messages div.message.right .bubble {
            float: right;
            border-radius: 5px 5px 0px 5px;
        }
        .bubble {
            font-family: 'Prompt',sans-serif;
        }
        .bubble .corner {
            background: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/bubble-corner.png") 0 0 no-repeat;
            position: absolute;
            width: 7px;
            height: 7px;
            left: -5px;
            bottom: 0;  
              
        }
        div.message.right .corner {
            background: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/245657/bubble-cornerR.png") 0 0 no-repeat;
            left: auto;
            right: -5px;
        }
        .bubble span {
            color: #aab8c2;
            font-size: 11px;
            position: absolute;
            right: 0;
            bottom: -22px;
        }
        #sendmessage {
            height: 60px;
            border-top: 1px solid #e7ebee;
            position: absolute;
            bottom: 0;
            right: 0px;
            width: 290px;
            background: #fff;
            padding-bottom: 10px;            
        }
        #sendmessage input{
            overflow-wrap: break-word;
        }
        #sandmessangbox {
            //font-family: 'Prompt',sans-serif;
        }
        #sendmessage input {
            border
        }
        #sendmessage input {
            background: #fff;
            margin: 21px 0 0 21px;
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
//-Dev----------------------------------------->
           

//<-----------------------------------------Dev-
        @media (max-width: 768px) {
                    //Login
                #login {
                    padding-top: 50px;
                    padding-left:15px;
                    padding-right:15px;
                    
                }
                #loginContent {
                    background-color: #ebebeb;
                    border-radius: 5px;
                    padding-top: 50px;
                    padding-left:50px;
                    padding-right:50px;
                    padding-bottom: 50px;
                }
                #login #loginContent {
                    text-align: center;
                    font-family: 'Prompt', sans-serif;
                    font-size: 17px;
                }
        }
        @media (max-width: 992px) {}
        @media (max-width: 1200px) {}
        `}</style>
    </div>
)
export default Styles
