
const Styles = () => (
    <div>
        <style jsx global>{`
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
        //Home
        #service {
            margin-top:30px;
            margin-bottom:30px;
            //padding-top:10px;
            //background: #325c6a;
        }
        //home -> service
            #service-content {
                cursor: pointer;
                -webkit-user-select: none;
            }
            #service-content img {
                padding-bottom: 10px;
            }
            #service-content .box{
                border: 3px solid #ccc;
                background-color: #f1f1f1;
                border-radius: 5px;
                padding:10px;
                margin:10px 0px 10px 0px;
            }
            #service-content p{
                //text-align: center;
                font-size: 18px;
                cursor: pointer;
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
            #question{
                padding-right: 5px;
                
            }
            #question p{
                font-size: 18px;
                cursor: pointer;
                //-webkit-touch-callout: none;
	            -webkit-user-select: none;
	            //-khtml-user-select: none;
	            //-moz-user-select: none;
	            //-ms-user-select: none;
	            //user-select: none;
            }

            #people {
                float: right;
                margin-left: 20px;
                margin-right:0;  
                cursor: pointer;
            }
            #answer p{
                font-size: 18px;
                float: right;
                cursor: pointer;
                -webkit-user-select: none;
            }
            #answer img {
                float: right;
                margin-left: 20px;
                margin-right:0;
                cursor: pointer;
            }
            #answer img:hover{
                opacity: 0.7;
                filter: alpha(opacity=50);
            }
            

            /*#doctor img{
                float: left;
                max-width: 60px;
                width: 100%;
                margin-right: 20px;
                border-radius: 50%;
                content: "";
                clear: both;
                display: table;
            }
            #doctor::after {
                content: "";
                clear: both;
                display: table;
            }*/


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
                width: 40px;
                cursor: pointer;
                display: block;
                margin-left: auto;
                margin-right: auto;
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
