
const Styles = () => (
    <div>
        <style jsx global>{`
        #load {
            background-color: black;
        }
        //header
        #logo_img {
            padding-top: 10px;
            padding-bottom: 10px;
            width: 120px;
            cursor: pointer;
        }
        #logo_img:hover {
            -webkit-filter: drop-shadow(2px 2px 2px black);  
        }
        ul {
            list-style-type: none;
            color: white;
            cursor: pointer; 
        }
        li a{
            padding-top: 15px;
            padding-right: 15px;
            padding-left: 15px;
            padding-bottom: 15px;
            float: left;
        }
        li a:hover ,li b:hover {
            background-color: rgba(12, 184, 182, 0.21);
          }
        #bar {
            background: #325c6a;
        }
        #topbar li {
            font-family: 'Prompt', sans-serif;
            font-size: 17px;
        }
        //Home
        #service {
            margin-top:30px;
            margin-bottom:30px;
            //padding-top:10px;
            //background: #325c6a;
        }
        //home -> service
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
                background-color: #f1f1f1;
                border-radius: 7px;
                padding:10px;
                margin:10px 0px 10px 0px;
                -webkit-box-shadow: 5px 4px 6px -7px rgba(0,0,0,0.75);

            }
            #service-content p{
                //text-align: center;
                font-size: 18px;
                cursor: pointer;
                font-family: 'Prompt', sans-serif;
	            //-webkit-user-select: none;
            }


        //help
        #help {
            //background-color: #f5f5f5;
            
        }
        //help -> helpQandA
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
            

        //Login
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
            background-color: #325c6a;
            color: #fff;
        }
        #facebooklogin {
            background-color: #4267b2;
        }

        .boxlogin {
            width: 100%;
        }
    


        //footer
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
        @media (max-width: 768px) {
        }
        }
        @media (max-width: 992px) {}
        @media (max-width: 1200px) {}
        `}</style>
    </div>
)
export default Styles
