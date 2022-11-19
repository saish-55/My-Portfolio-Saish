import React from 'react'

import DangerousHTML from 'dangerous-html/react'
import PropTypes from 'prop-types'

import './skills-percentage-p-dark.css'

const SkillsPercentagePDark = (props) => {
  return (
    <div
      className={`skills-percentage-p-dark-skills-percentage ${props.rootClassName} `}
    >
      <div className="skills-percentage-p-dark-html">
        <div className="skills-percentage-p-dark-html1">
          <DangerousHTML
            html={`<link href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
<script src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js"></script>
<script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
<!------ Include the above in your HEAD tag ---------->

<div class="container">
    <div class="row">
        <div class="col-md-3 col-sm-6">
            <div class="progress blue">
                <span class="progress-left">
                    <span class="progress-bar"></span>
                </span>
                <span class="progress-right">
                    <span class="progress-bar"></span>
                </span>
                <div class="progress-value">75%</div>
            </div>
        </div>
    
    </div>
</div>

<style>
body{
background-color: #100F0F;
}
.progress{
width: 150px;
height: 150px;
line-height: 150px;
background: none;
margin: 0 auto;
box-shadow: none;
position: relative;
}
.progress:after{
content: "";
width: 100%;
height: 100%;
border-radius: 50%;

border: 12px solid #413F42 ;


position: absolute;
top: 0;
left: 0;
}
.progress > span{
width: 50%;
height: 100%;
overflow: hidden;
position: absolute;
top: 0;
z-index: 1;
}
.progress .progress-left{
left: 0;
}
.progress .progress-bar{
width: 100%;
height: 100%;
background: none;
border-width: 12px;
border-style: solid;
position: absolute;
top: 0;
}
.progress .progress-left .progress-bar{
left: 100%;
border-top-right-radius: 80px;
border-bottom-right-radius: 80px;
border-left: 0;
-webkit-transform-origin: center left;
transform-origin: center left;
}
.progress .progress-right{
right: 0;
}
.progress .progress-right .progress-bar{
left: -100%;
border-top-left-radius: 80px;
border-bottom-left-radius: 80px;
border-right: 0;
-webkit-transform-origin: center right;
transform-origin: center right;
animation: loading-1 1.8s linear forwards;
}
.progress .progress-value{
width: 90%;
height: 90%;
border-radius: 50%;
background: #100F0F;
font-size: 28px;
font-weight: bold;
color: #fff;
line-height: 135px;
text-align: center;
position: absolute;
top: 5%;
left: 5%;
}
.progress.blue .progress-bar{
border-color: #FF5F00;
}
.progress.blue .progress-left .progress-bar{
animation: loading-2 1.5s linear forwards 1.8s;
}





@keyframes loading-1{
0%{
-webkit-transform: rotate(0deg);
transform: rotate(0deg);
}
100%{
-webkit-transform: rotate(180deg);
transform: rotate(180deg);
}
}
@keyframes loading-2{
0%{
-webkit-transform: rotate(0deg);
transform: rotate(0deg);
}
100%{
-webkit-transform: rotate(90deg);
transform: rotate(90deg);
}
}

}
@media only screen and (max-width: 990px){
.progress{ margin-bottom: 20px; }
}
</style>`}
            className=""
          ></DangerousHTML>
        </div>
        <span className="skills-percentage-p-dark-text">{props.text}</span>
      </div>
      <div className="skills-percentage-p-dark-css">
        <div className="skills-percentage-p-dark-css1">
          <DangerousHTML
            html={`<link href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
<script src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js"></script>
<script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
<!------ Include the above in your HEAD tag ---------->

<div class="container">
    <div class="row">
        <div class="col-md-3 col-sm-6">
            <div class="progress blue">
                <span class="progress-left">
                    <span class="progress-bar"></span>
                </span>
                <span class="progress-right">
                    <span class="progress-bar"></span>
                </span>
                <div class="progress-value">80%</div>
            </div>
        </div>
    
    </div>
</div>

<style>
body{
background-color: #100F0F;
}
.progress{
width: 150px;
height: 150px;
line-height: 150px;
background: none;
margin: 0 auto;
box-shadow: none;
position: relative;
}
.progress:after{
content: "";
width: 100%;
height: 100%;
border-radius: 50%;

border: 12px solid #413F42 ;

position: absolute;
top: 0;
left: 0;
}
.progress > span{
width: 50%;
height: 100%;
overflow: hidden;
position: absolute;
top: 0;
z-index: 1;
}
.progress .progress-left{
left: 0;
}
.progress .progress-bar{
width: 100%;
height: 100%;
background: none;
border-width: 12px;
border-style: solid;
position: absolute;
top: 0;
}
.progress .progress-left .progress-bar{
left: 100%;
border-top-right-radius: 80px;
border-bottom-right-radius: 80px;
border-left: 0;
-webkit-transform-origin: center left;
transform-origin: center left;
}
.progress .progress-right{
right: 0;
}
.progress .progress-right .progress-bar{
left: -100%;
border-top-left-radius: 80px;
border-bottom-left-radius: 80px;
border-right: 0;
-webkit-transform-origin: center right;
transform-origin: center right;
animation: loading-1 1.8s linear forwards;
}
.progress .progress-value{
width: 90%;
height: 90%;
border-radius: 50%;
background: #100F0F;
font-size: 28px;
font-weight: bold;
color: #fff;
line-height: 135px;
text-align: center;
position: absolute;
top: 5%;
left: 5%;
}
.progress.blue .progress-bar{
border-color: #FF5F00;
}
.progress.blue .progress-left .progress-bar{
animation: loading-2 1.5s linear forwards 1.8s;
}





@keyframes loading-1{
0%{
-webkit-transform: rotate(0deg);
transform: rotate(0deg);
}
100%{
-webkit-transform: rotate(180deg);
transform: rotate(180deg);
}
}
@keyframes loading-2{
0%{
-webkit-transform: rotate(0deg);
transform: rotate(0deg);
}
100%{
-webkit-transform: rotate(115deg);
transform: rotate(115deg);
}
}

}
@media only screen and (max-width: 990px){
.progress{ margin-bottom: 20px; }
}
</style>`}
            className=""
          ></DangerousHTML>
        </div>
        <span className="skills-percentage-p-dark-text1">{props.text1}</span>
      </div>
      <div className="skills-percentage-p-dark-js">
        <div className="skills-percentage-p-dark-js1">
          <DangerousHTML
            html={`<link href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
<script src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js"></script>
<script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
<!------ Include the above in your HEAD tag ---------->

<div class="container">
    <div class="row">
        <div class="col-md-3 col-sm-6">
            <div class="progress blue">
                <span class="progress-left">
                    <span class="progress-bar"></span>
                </span>
                <span class="progress-right">
                    <span class="progress-bar"></span>
                </span>
                <div class="progress-value">70%</div>
            </div>
        </div>
    
    </div>
</div>

<style>
body{
background-color: #100F0F;
}
.progress{
width: 150px;
height: 150px;
line-height: 150px;
background: none;
margin: 0 auto;
box-shadow: none;
position: relative;
}
.progress:after{
content: "";
width: 100%;
height: 100%;
border-radius: 50%;

border: 12px solid #413F42 ;

position: absolute;
top: 0;
left: 0;
}
.progress > span{
width: 50%;
height: 100%;
overflow: hidden;
position: absolute;
top: 0;
z-index: 1;
}
.progress .progress-left{
left: 0;
}
.progress .progress-bar{
width: 100%;
height: 100%;
background: none;
border-width: 12px;
border-style: solid;
position: absolute;
top: 0;
}
.progress .progress-left .progress-bar{
left: 100%;
border-top-right-radius: 80px;
border-bottom-right-radius: 80px;
border-left: 0;
-webkit-transform-origin: center left;
transform-origin: center left;
}
.progress .progress-right{
right: 0;
}
.progress .progress-right .progress-bar{
left: -100%;
border-top-left-radius: 80px;
border-bottom-left-radius: 80px;
border-right: 0;
-webkit-transform-origin: center right;
transform-origin: center right;
animation: loading-1 1.8s linear forwards;
}
.progress .progress-value{
width: 90%;
height: 90%;
border-radius: 50%;
background: #100F0F;
font-size: 28px;
font-weight: bold;
color: #fff;
line-height: 135px;
text-align: center;
position: absolute;
top: 5%;
left: 5%;
}
.progress.blue .progress-bar{
border-color: #FF5F00;
}
.progress.blue .progress-left .progress-bar{
animation: loading-2 1.5s linear forwards 1.8s;
}





@keyframes loading-1{
0%{
-webkit-transform: rotate(0deg);
transform: rotate(0deg);
}
100%{
-webkit-transform: rotate(180deg);
transform: rotate(180deg);
}
}
@keyframes loading-2{
0%{
-webkit-transform: rotate(0deg);
transform: rotate(0deg);
}
100%{
-webkit-transform: rotate(80deg);
transform: rotate(80deg);
}
}

}
@media only screen and (max-width: 990px){
.progress{ margin-bottom: 20px; }
}
</style>`}
            className=""
          ></DangerousHTML>
        </div>
        <span className="skills-percentage-p-dark-text2">{props.text2}</span>
      </div>
      <div className="skills-percentage-p-dark-react-native">
        <div className="skills-percentage-p-dark-react-native1">
          <DangerousHTML
            html={`<link href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
<script src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js"></script>
<script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
<!------ Include the above in your HEAD tag ---------->

<div class="container">
    <div class="row">
        <div class="col-md-3 col-sm-6">
            <div class="progress blue">
                <span class="progress-left">
                    <span class="progress-bar"></span>
                </span>
                <span class="progress-right">
                    <span class="progress-bar"></span>
                </span>
                <div class="progress-value">66%</div>
            </div>
        </div>
    
    </div>
</div>

<style>
body{
background-color: #100F0F;
}
.progress{
width: 150px;
height: 150px;
line-height: 150px;
background: none;
margin: 0 auto;
box-shadow: none;
position: relative;
}
.progress:after{
content: "";
width: 100%;
height: 100%;
border-radius: 50%;

border: 12px solid #413F42 ;

position: absolute;
top: 0;
left: 0;
}
.progress > span{
width: 50%;
height: 100%;
overflow: hidden;
position: absolute;
top: 0;
z-index: 1;
}
.progress .progress-left{
left: 0;
}
.progress .progress-bar{
width: 100%;
height: 100%;
background: none;
border-width: 12px;
border-style: solid;
position: absolute;
top: 0;
}
.progress .progress-left .progress-bar{
left: 100%;
border-top-right-radius: 80px;
border-bottom-right-radius: 80px;
border-left: 0;
-webkit-transform-origin: center left;
transform-origin: center left;
}
.progress .progress-right{
right: 0;
}
.progress .progress-right .progress-bar{
left: -100%;
border-top-left-radius: 80px;
border-bottom-left-radius: 80px;
border-right: 0;
-webkit-transform-origin: center right;
transform-origin: center right;
animation: loading-1 1.8s linear forwards;
}
.progress .progress-value{
width: 90%;
height: 90%;
border-radius: 50%;
background: #100F0F;
font-size: 28px;
font-weight: bold;
color: #fff;
line-height: 135px;
text-align: center;
position: absolute;
top: 5%;
left: 5%;
}
.progress.blue .progress-bar{
border-color: #FF5F00;
}
.progress.blue .progress-left .progress-bar{
animation: loading-2 1.5s linear forwards 1.8s;
}





@keyframes loading-1{
0%{
-webkit-transform: rotate(0deg);
transform: rotate(0deg);
}
100%{
-webkit-transform: rotate(180deg);
transform: rotate(180deg);
}
}
@keyframes loading-2{
0%{
-webkit-transform: rotate(0deg);
transform: rotate(0deg);
}
100%{
-webkit-transform: rotate(70deg);
transform: rotate(70deg);
}
}

}
@media only screen and (max-width: 990px){
.progress{ margin-bottom: 20px; }
}
</style>`}
            className=""
          ></DangerousHTML>
        </div>
        <span className="skills-percentage-p-dark-text3">{props.text3}</span>
      </div>
      <div className="skills-percentage-p-dark-react">
        <div className="skills-percentage-p-dark-react1">
          <DangerousHTML
            html={`<link href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
<script src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js"></script>
<script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
<!------ Include the above in your HEAD tag ---------->

<div class="container">
    <div class="row">
        <div class="col-md-3 col-sm-6">
            <div class="progress blue">
                <span class="progress-left">
                    <span class="progress-bar"></span>
                </span>
                <span class="progress-right">
                    <span class="progress-bar"></span>
                </span>
                <div class="progress-value">85%</div>
            </div>
        </div>
    
    </div>
</div>

<style>
body{
background-color: #100F0F;
}
.progress{
width: 150px;
height: 150px;
line-height: 150px;
background: none;
margin: 0 auto;
box-shadow: none;
position: relative;
}
.progress:after{
content: "";
width: 100%;
height: 100%;
border-radius: 50%;

border: 12px solid #413F42 ;

position: absolute;
top: 0;
left: 0;
}
.progress > span{
width: 50%;
height: 100%;
overflow: hidden;
position: absolute;
top: 0;
z-index: 1;
}
.progress .progress-left{
left: 0;
}
.progress .progress-bar{
width: 100%;
height: 100%;
background: none;
border-width: 12px;
border-style: solid;
position: absolute;
top: 0;
}
.progress .progress-left .progress-bar{
left: 100%;
border-top-right-radius: 80px;
border-bottom-right-radius: 80px;
border-left: 0;
-webkit-transform-origin: center left;
transform-origin: center left;
}
.progress .progress-right{
right: 0;
}
.progress .progress-right .progress-bar{
left: -100%;
border-top-left-radius: 80px;
border-bottom-left-radius: 80px;
border-right: 0;
-webkit-transform-origin: center right;
transform-origin: center right;
animation: loading-1 1.8s linear forwards;
}
.progress .progress-value{
width: 90%;
height: 90%;
border-radius: 50%;
background: #100F0F;
font-size: 28px;
font-weight: bold;
color: #fff;
line-height: 135px;
text-align: center;
position: absolute;
top: 5%;
left: 5%;
}
.progress.blue .progress-bar{
border-color: #FF5F00;
}
.progress.blue .progress-left .progress-bar{
animation: loading-2 1.5s linear forwards 1.8s;
}





@keyframes loading-1{
0%{
-webkit-transform: rotate(0deg);
transform: rotate(0deg);
}
100%{
-webkit-transform: rotate(180deg);
transform: rotate(180deg);
}
}
@keyframes loading-2{
0%{
-webkit-transform: rotate(0deg);
transform: rotate(0deg);
}
100%{
-webkit-transform: rotate(140deg);
transform: rotate(140deg);
}
}

}
@media only screen and (max-width: 990px){
.progress{ margin-bottom: 20px; }
}
</style>`}
            className=""
          ></DangerousHTML>
        </div>
        <span className="skills-percentage-p-dark-text4">{props.text4}</span>
      </div>
      <div className="skills-percentage-p-dark-node">
        <div className="skills-percentage-p-dark-nodejs">
          <DangerousHTML
            html={`<link href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
<script src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js"></script>
<script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
<!------ Include the above in your HEAD tag ---------->

<div class="container">
    <div class="row">
        <div class="col-md-3 col-sm-6">
            <div class="progress blue">
                <span class="progress-left">
                    <span class="progress-bar"></span>
                </span>
                <span class="progress-right">
                    <span class="progress-bar"></span>
                </span>
                <div class="progress-value">64%</div>
            </div>
        </div>
    
    </div>
</div>

<style>
body{
background-color: #100F0F;
}
.progress{
width: 150px;
height: 150px;
line-height: 150px;
background: none;
margin: 0 auto;
box-shadow: none;
position: relative;
}
.progress:after{
content: "";
width: 100%;
height: 100%;
border-radius: 50%;

border: 12px solid #413F42 ;

position: absolute;
top: 0;
left: 0;
}
.progress > span{
width: 50%;
height: 100%;
overflow: hidden;
position: absolute;
top: 0;
z-index: 1;
}
.progress .progress-left{
left: 0;
}
.progress .progress-bar{
width: 100%;
height: 100%;
background: none;
border-width: 12px;
border-style: solid;
position: absolute;
top: 0;
}
.progress .progress-left .progress-bar{
left: 100%;
border-top-right-radius: 80px;
border-bottom-right-radius: 80px;
border-left: 0;
-webkit-transform-origin: center left;
transform-origin: center left;
}
.progress .progress-right{
right: 0;
}
.progress .progress-right .progress-bar{
left: -100%;
border-top-left-radius: 80px;
border-bottom-left-radius: 80px;
border-right: 0;
-webkit-transform-origin: center right;
transform-origin: center right;
animation: loading-1 1.8s linear forwards;
}
.progress .progress-value{
width: 90%;
height: 90%;
border-radius: 50%;
background: #100F0F;
font-size: 28px;
font-weight: bold;
color: #fff;
line-height: 135px;
text-align: center;
position: absolute;
top: 5%;
left: 5%;
}
.progress.blue .progress-bar{
border-color: #FF5F00;
}
.progress.blue .progress-left .progress-bar{
animation: loading-2 1.5s linear forwards 1.8s;
}





@keyframes loading-1{
0%{
-webkit-transform: rotate(0deg);
transform: rotate(0deg);
}
100%{
-webkit-transform: rotate(180deg);
transform: rotate(180deg);
}
}
@keyframes loading-2{
0%{
-webkit-transform: rotate(0deg);
transform: rotate(0deg);
}
100%{
-webkit-transform: rotate(65deg);
transform: rotate(65deg);
}
}

}
@media only screen and (max-width: 990px){
.progress{ margin-bottom: 20px; }
}
</style>`}
            className=""
          ></DangerousHTML>
        </div>
        <span className="skills-percentage-p-dark-text5">{props.text5}</span>
      </div>
      <div className="skills-percentage-p-dark-m-u-i">
        <div className="skills-percentage-p-dark-m-ui1">
          <DangerousHTML
            html={`<link href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
<script src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js"></script>
<script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
<!------ Include the above in your HEAD tag ---------->

<div class="container">
    <div class="row">
        <div class="col-md-3 col-sm-6">
            <div class="progress blue">
                <span class="progress-left">
                    <span class="progress-bar"></span>
                </span>
                <span class="progress-right">
                    <span class="progress-bar"></span>
                </span>
                <div class="progress-value">85%</div>
            </div>
        </div>
    
    </div>
</div>

<style>
body{
background-color: #100F0F;
}
.progress{
width: 150px;
height: 150px;
line-height: 150px;
background: none;
margin: 0 auto;
box-shadow: none;
position: relative;
}
.progress:after{
content: "";
width: 100%;
height: 100%;
border-radius: 50%;

border: 12px solid #413F42 ;

position: absolute;
top: 0;
left: 0;
}
.progress > span{
width: 50%;
height: 100%;
overflow: hidden;
position: absolute;
top: 0;
z-index: 1;
}
.progress .progress-left{
left: 0;
}
.progress .progress-bar{
width: 100%;
height: 100%;
background: none;
border-width: 12px;
border-style: solid;
position: absolute;
top: 0;
}
.progress .progress-left .progress-bar{
left: 100%;
border-top-right-radius: 80px;
border-bottom-right-radius: 80px;
border-left: 0;
-webkit-transform-origin: center left;
transform-origin: center left;
}
.progress .progress-right{
right: 0;
}
.progress .progress-right .progress-bar{
left: -100%;
border-top-left-radius: 80px;
border-bottom-left-radius: 80px;
border-right: 0;
-webkit-transform-origin: center right;
transform-origin: center right;
animation: loading-1 1.8s linear forwards;
}
.progress .progress-value{
width: 90%;
height: 90%;
border-radius: 50%;
background: #100F0F;
font-size: 28px;
font-weight: bold;
color: #fff;
line-height: 135px;
text-align: center;
position: absolute;
top: 5%;
left: 5%;
}
.progress.blue .progress-bar{
border-color: #FF5F00;
}
.progress.blue .progress-left .progress-bar{
animation: loading-2 1.5s linear forwards 1.8s;
}





@keyframes loading-1{
0%{
-webkit-transform: rotate(0deg);
transform: rotate(0deg);
}
100%{
-webkit-transform: rotate(180deg);
transform: rotate(180deg);
}
}
@keyframes loading-2{
0%{
-webkit-transform: rotate(0deg);
transform: rotate(0deg);
}
100%{
-webkit-transform: rotate(140deg);
transform: rotate(140deg);
}
}

}
@media only screen and (max-width: 990px){
.progress{ margin-bottom: 20px; }
}
</style>`}
            className=""
          ></DangerousHTML>
        </div>
        <span className="skills-percentage-p-dark-text6">{props.text6}</span>
      </div>
      <div className="skills-percentage-p-dark-bootstrap">
        <div className="skills-percentage-p-dark-bootstrap1">
          <DangerousHTML
            html={`<link href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
<script src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/js/bootstrap.min.js"></script>
<script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
<!------ Include the above in your HEAD tag ---------->

<div class="container">
    <div class="row">
        <div class="col-md-3 col-sm-6">
            <div class="progress blue">
                <span class="progress-left">
                    <span class="progress-bar"></span>
                </span>
                <span class="progress-right">
                    <span class="progress-bar"></span>
                </span>
                <div class="progress-value">90%</div>
            </div>
        </div>
    
    </div>
</div>

<style>
body{
background-color: #100F0F;
}
.progress{
width: 150px;
height: 150px;
line-height: 150px;
background: none;
margin: 0 auto;
box-shadow: none;
position: relative;
}
.progress:after{
content: "";
width: 100%;
height: 100%;
border-radius: 50%;

border: 12px solid #413F42 ;

position: absolute;
top: 0;
left: 0;
}
.progress > span{
width: 50%;
height: 100%;
overflow: hidden;
position: absolute;
top: 0;
z-index: 1;
}
.progress .progress-left{
left: 0;
}
.progress .progress-bar{
width: 100%;
height: 100%;
background: none;
border-width: 12px;
border-style: solid;
position: absolute;
top: 0;
}
.progress .progress-left .progress-bar{
left: 100%;
border-top-right-radius: 80px;
border-bottom-right-radius: 80px;
border-left: 0;
-webkit-transform-origin: center left;
transform-origin: center left;
}
.progress .progress-right{
right: 0;
}
.progress .progress-right .progress-bar{
left: -100%;
border-top-left-radius: 80px;
border-bottom-left-radius: 80px;
border-right: 0;
-webkit-transform-origin: center right;
transform-origin: center right;
animation: loading-1 1.8s linear forwards;
}
.progress .progress-value{
width: 90%;
height: 90%;
border-radius: 50%;
background: #100F0F;
font-size: 28px;
font-weight: bold;
color: #fff;
line-height: 135px;
text-align: center;
position: absolute;
top: 5%;
left: 5%;
}
.progress.blue .progress-bar{
border-color: #FF5F00;
}
.progress.blue .progress-left .progress-bar{
animation: loading-2 1.5s linear forwards 1.8s;
}





@keyframes loading-1{
0%{
-webkit-transform: rotate(0deg);
transform: rotate(0deg);
}
100%{
-webkit-transform: rotate(180deg);
transform: rotate(180deg);
}
}
@keyframes loading-2{
0%{
-webkit-transform: rotate(0deg);
transform: rotate(0deg);
}
100%{
-webkit-transform: rotate(153deg);
transform: rotate(153deg);
}
}

}
@media only screen and (max-width: 990px){
.progress{ margin-bottom: 20px; }
}
</style>`}
            className=""
          ></DangerousHTML>
        </div>
        <span className="skills-percentage-p-dark-text7">{props.text7}</span>
      </div>
    </div>
  )
}

SkillsPercentagePDark.defaultProps = {
  text2: 'Javascript',
  rootClassName: '',
  text4: 'react js',
  text7: 'bootstrap',
  text6: 'mui',
  text1: 'CSS',
  text: 'HTML',
  text5: 'Node js',
  text3: 'react native',
}

SkillsPercentagePDark.propTypes = {
  text2: PropTypes.string,
  rootClassName: PropTypes.string,
  text4: PropTypes.string,
  text7: PropTypes.string,
  text6: PropTypes.string,
  text1: PropTypes.string,
  text: PropTypes.string,
  text5: PropTypes.string,
  text3: PropTypes.string,
}

export default SkillsPercentagePDark
