<template>
    <div class="loading">
	    	<div class="ball-spin-fade-loader">
		      <div></div>
		      <div></div>
		      <div></div>
		      <div></div>
		      <div></div>
		      <div></div>
		      <div></div>
		      <div></div>
		    </div>
    </div>
</template>
<style lang="scss" scoped>
@import '../assets/scss/var.scss';
	$max:16px;
	$ball: 26px;
	$ball_sqrt: 18.38px;//根号（$ball*$ball/2)

	.loading{
		@extend %fixed-body;
		background-color: #fff;
		display: flex;
	    align-items: center;
	    justify-content: center;
	    z-index: 7;
	}
	@-webkit-keyframes ball-spin-fade-loader {
	50% {
	opacity: 0.3;
	-webkit-transform: scale(0.4);
	        transform: scale(0.4); }

	100% {
	opacity: 1;
	-webkit-transform: scale(1);
	        transform: scale(1); } }

	@keyframes ball-spin-fade-loader {
	50% {
	opacity: 0.3;
	-webkit-transform: scale(0.4);
	        transform: scale(0.4); }

	100% {
	opacity: 1;
	-webkit-transform: scale(1);
	        transform: scale(1); } }

	.ball-spin-fade-loader {
		position: relative;
		width: $ball*2;
		height: $ball*2; 
	}
	.ball-spin-fade-loader > div:nth-child(1) {
	// top: 25px;
	// left: 0;
	top: 0;
	left: $ball;
	-webkit-animation: ball-spin-fade-loader 1s 0s infinite linear;
	        animation: ball-spin-fade-loader 1s 0s infinite linear; }
	.ball-spin-fade-loader > div:nth-child(2) {
	// top: 17.04545px;
	// left: 17.04545px;
	left: $ball + $ball_sqrt;
	top: $ball - $ball_sqrt;;
	-webkit-animation: ball-spin-fade-loader 1s 0.12s infinite linear;
	        animation: ball-spin-fade-loader 1s 0.12s infinite linear; }
	.ball-spin-fade-loader > div:nth-child(3) {
	top: $ball;
	left: $ball * 2;
	-webkit-animation: ball-spin-fade-loader 1s 0.24s infinite linear;
	        animation: ball-spin-fade-loader 1s 0.24s infinite linear; }
	.ball-spin-fade-loader > div:nth-child(4) {
	top: $ball + $ball_sqrt;
	left: $ball + $ball_sqrt;
	-webkit-animation: ball-spin-fade-loader 1s 0.36s infinite linear;
	        animation: ball-spin-fade-loader 1s 0.36s infinite linear; }
	.ball-spin-fade-loader > div:nth-child(5) {
	top: $ball * 2;
	left: $ball;
	-webkit-animation: ball-spin-fade-loader 1s 0.48s infinite linear;
	        animation: ball-spin-fade-loader 1s 0.48s infinite linear; }
	.ball-spin-fade-loader > div:nth-child(6) {
	top: $ball + $ball_sqrt;
	left: $ball - $ball_sqrt;
	-webkit-animation: ball-spin-fade-loader 1s 0.6s infinite linear;
	        animation: ball-spin-fade-loader 1s 0.6s infinite linear; }
	.ball-spin-fade-loader > div:nth-child(7) {
	top: $ball - $ball_sqrt;
	left: $ball - $ball_sqrt;
	-webkit-animation: ball-spin-fade-loader 1s 0.72s infinite linear;
	        animation: ball-spin-fade-loader 1s 0.72s infinite linear; }
	.ball-spin-fade-loader > div:nth-child(8) {
	top: $ball;
	left: 0;
	-webkit-animation: ball-spin-fade-loader 1s 0.84s infinite linear;
	        animation: ball-spin-fade-loader 1s 0.84s infinite linear; }
	.ball-spin-fade-loader > div {
	background: $bkg-theme;
	width: $max;
	height: $max;
	border-radius: 100%;
	margin-left: - $max/2;
	// margin: 2px;
	-webkit-animation-fill-mode: both;
	        animation-fill-mode: both;
	position: absolute; }
</style>